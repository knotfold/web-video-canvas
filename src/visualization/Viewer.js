/**
 * @author Russell Toris - russell.toris@gmail.com
 */
import EventEmitter2 from 'eventemitter2';
import ErrorIcon from './models/ErrorIcon';

const SUPPORTED_ENCODING = ['mjpeg', 'png', 'ros_compressed'];

/**
 * A Viewer can be used to stream a single MJPEG topic into a canvas.
 *
 * Emits the following events:
 *   * 'warning' - emitted if the given topic is unavailable
 *   * 'change' - emitted with the topic name that the canvas was changed to
 *
 */
class Viewer extends EventEmitter2 {
  /**
   * @param {Object} options - possible keys include:
   * @param {string} options.divID - the ID of the HTML div to place the canvas in
   * @param {HTMLCanvasElement} [options.canvas] - (optional) the canvas to render the images to. Will override divID
   * @param {number} options.width - the width of the canvas
   * @param {number} options.height - the height of the canvas
   * @param {string} options.host - the hostname of the MJPEG server
   * @param {number} [options.port] (optional) - the port to connect to
   * @param {number} [options.quality] (optional) - the quality of the stream (from 1-100)
   * @param {string} options.topic - the topic to stream, like '/wide_stereo/left/image_color'
   * @param {HTMLCanvasElement} [options.overlay] (optional) - a canvas to overlay after the image is drawn
   * @param {number} [options.refreshRate] (optional) - a refresh rate in Hz, will be converted into milliseconds and take max value between refreshRate and interval
   * @param {number} [options.interval] (optional) - an interval time in milliseconds, will take max value between refreshRate and interval
   * @param {boolean} [options.invert] (optional) - if the images are mirrored
   * @param {string} [options.type] (optional) - the encoding method for the stream, default set to mjpeg
   * @param {string} [options.src] (optional) - the source URL for the images, passing values will override other params (host, port, quality, etc)
   */
  constructor(options) {
    super();
    this.divID = options.divID;
    this.canvas = options.canvas;
    this.width = options.width;
    this.height = options.height;
    this.host = options.host;
    this.port = options.port;
    this.quality = options.quality;
    this.refreshRate = options.refreshRate || 10;
    this.interval = options.interval || 30;
    this.invert = options.invert || false;
    this.topic = options.topic;
    this.overlay = options.overlay;
    this.type = options.type;
    this.src = options.src;
    this.ssl = options.ssl || false;
    // create no image initially
    this.image = new Image();

    // create the canvas to render to
    if (this.canvas === undefined) {
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.style.background = '#000000';
      document.getElementById(this.divID).appendChild(this.canvas);
    } else {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.style.background = '#000000';
    }

    const drawInterval = Math.max((1 / this.refreshRate) * 1000, this.interval);

    // grab the initial stream
    this.changeStream(this.topic);

    // call draw with the given interval or rate
    this.timer = setInterval(this.draw.bind(this), drawInterval);
  }

  /**
   * A function to draw the image onto the canvas.
   */
  draw() {
    const context = this.canvas.getContext('2d');
    // clear the canvas
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // check if we have a valid image
    if (this.image.width * this.image.height > 0) {
      context.drawImage(this.image, 0, 0, this.width, this.height);
    } else {
      // center the error icon
      // used if there was an error loading the stream
      const errorIcon = new ErrorIcon();
      context.drawImage(
        errorIcon,
        (this.width - this.width / 2) / 2,
        (this.height - this.height / 2) / 2,
        this.width / 2,
        this.height / 2
      );
      this.emit('warning', 'Invalid stream.');
    }

    // check for an overlay
    if (this.overlay) {
      context.drawImage(this.overlay, 0, 0);
    }

    // silly firefox...
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      const aux = this.image.src.split('?killcache=');
      this.image.src = aux[0] + '?killcache=' + Math.random(42);
    }
  }

  /**
   * Change the stream's topic
   * @param {string} topic - the topic to change the stream to
   */
  changeStream(topic) {
    this.image = new Image();
    // create the image to hold the stream
    if (this.src === undefined) {
      let src;
      src = (this.ssl ? 'https://' : 'http://') + this.host + (this.port ? ':' + this.port : '') + '/stream?topic=' + topic;
      // add various options
      src += '&width=' + this.width;
      src += '&height=' + this.height;
      if (this.type && SUPPORTED_ENCODING.includes(this.type)) {
        src += '&type=' + this.type;
      }
      if (this.quality > 0 && (this.type === 'mjpeg' || !this.type)) {
        src += '&quality=' + this.quality;
      }
      if (this.invert) {
        src += '&invert=' + this.invert;
      }
      this.src = src;
    }

    this.image.src = this.src;

    // emit an event for the change
    this.emit('change', topic);
  }

  /**
   * Remove interval and image src to close HTTP connection.
   */
  unmount() {
    clearInterval(this.timer);
    this.image.src = '';
  }
}

export default Viewer;
