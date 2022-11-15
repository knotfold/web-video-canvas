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
   * @param options - possible keys include:
   *   * divID - the ID of the HTML div to place the canvas in
   *   * width - the width of the canvas
   *   * height - the height of the canvas
   *   * host - the hostname of the MJPEG server
   *   * port (optional) - the port to connect to
   *   * quality (optional) - the quality of the stream (from 1-100)
   *   * topic - the topic to stream, like '/wide_stereo/left/image_color'
   *   * overlay (optional) - a canvas to overlay after the image is drawn
   *   * refreshRate (optional) - a refresh rate in Hz
   *   * interval (optional) - an interval time in milliseconds
   *   * type (optional) - the encoding method for the stream, default set to mjpeg
   */
  constructor(options) {
    super();
    const divID = options.divID;
    this.width = options.width;
    this.height = options.height;
    this.host = options.host;
    this.port = options.port || 8080;
    this.quality = options.quality;
    this.refreshRate = options.refreshRate || 10;
    this.interval = options.interval || 30;
    this.invert = options.invert || false;
    this.topic = options.topic;
    this.overlay = options.overlay;
    this.type = options.type;

    // create no image initially
    this.image = new Image();

    // create the canvas to render to
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.background = '#aaaaaa';
    document.getElementById(divID).appendChild(this.canvas);

    const drawInterval = Math.max((1 / this.refreshRate) * 1000, this.interval);

    // grab the initial stream
    this.changeStream(this.topic);

    // call draw with the given interval or rate
    setInterval(this.draw.bind(this), drawInterval);
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

  changeStream(topic) {
    this.image = new Image();
    // create the image to hold the stream
    let src =
      'http://' + this.host + ':' + this.port + '/stream?topic=' + topic;
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
    this.image.src = src;
    // emit an event for the change
    this.emit('change', topic);
  }
}

export default Viewer;
