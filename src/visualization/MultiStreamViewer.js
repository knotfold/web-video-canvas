/**
 * @author Russell Toris - russell.toris@gmail.com
 */
import EventEmitter2 from 'eventemitter2';
import Button from './models/Button';
import Viewer from './Viewer';

/**
 * A MultiStreamViewer can be used to stream multiple MJPEG topics into a canvas.
 *
 * Emits the following events:
 *   * 'warning' - emitted if the given topic is unavailable
 *   * 'change' - emitted with the topic name that the canvas was changed to
 *
 */
class MultiStreamViewer extends EventEmitter2 {
  /**
   *
   * @param {Object} options - possible keys include:
   * @param {string} options.divID - the ID of the HTML div to place the canvas in
   * @param {number} options.width - the width of the canvas
   * @param {number} options.height - the height of the canvas
   * @param {string} options.host - the hostname of the MJPEG server
   * @param {number} [options.port] (optional) - the port to connect to
   * @param {number} [options.quality] (optional) - the quality of the stream (from 1-100)
   * @param {Array<string>} options.topics - an array of topics to stream
   * @param {Array<string>} [options.labels] (optional) - an array of labels associated with each topic
   * @param {number} [options.defaultStream] (optional) - the index of the default stream to use
   */
  constructor(options) {
    super();
    options = options || {};
    this.divID = options.divID;
    this.width = options.width;
    this.height = options.height;
    this.host = options.host;
    this.port = options.port || 8080;
    this.quality = options.quality;
    this.topics = options.topics;
    this.labels = options.labels;
    this.defaultStream = options.defaultStream || 0;
    this.currentTopic = this.topics[this.defaultStream];

    // create an overlay canvas for the button
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.canvas = canvas;

    // menu div
    const menu = document.createElement('div');
    menu.style.display = 'none';
    document.getElementsByTagName('body')[0].appendChild(menu);
    this.menu = menu;

    // button for the error
    const buttonHeight = this.height / 8;
    const buttonPadding = 10;
    const button = new Button({
      text: 'Edit',
      height: buttonHeight,
    });
    const buttonWidth = button.width;

    // use a regular viewer internally
    const viewer = new Viewer({
      divID: this.divID,
      width: this.width,
      height: this.height,
      host: this.host,
      port: this.port,
      quality: this.quality,
      topic: this.currentTopic,
      overlay: this.canvas,
    });

    // catch the events
    viewer.on('warning', (warning) => {
      this.emit('warning', warning);
    });
    viewer.on('change', (topic) => {
      this.currentTopic = topic;
      this.emit('change', topic);
    });

    // add the event listener
    this.buttonTimer = null;
    this.menuOpen = false;
    this.hasButton = false;
    viewer.canvas.addEventListener(
      'mousemove',
      (e) => {
        this.clearButton();

        if (!this.menuOpen) {
          this.hasButton = true;
          // add the button
          button.redraw();
          const context = this.canvas.getContext('2d');
          context.drawImage(
            button.canvas,
            buttonPadding,
            this.height - (buttonHeight + buttonPadding)
          );

          // display the button for 3 seconds
          this.buttonTimer = setInterval(() => {
            // clear the overlay canvas
            this.clearButton();
          }, 3000);
        } else {
          this.fadeImage();
        }
      },
      false
    );

    // add the click listener
    viewer.canvas.addEventListener(
      'click',
      function (e) {
        // check if the button is there
        if (this.hasButton) {
          // determine the click position
          var offsetLeft = 0;
          var offsetTop = 0;
          var element = viewer.canvas;
          while (
            element &&
            !isNaN(element.offsetLeft) &&
            !isNaN(element.offsetTop)
          ) {
            offsetLeft += element.offsetLeft - element.scrollLeft;
            offsetTop += element.offsetTop - element.scrollTop;
            element = element.offsetParent;
          }

          var x = e.pageX - offsetLeft;
          var y = e.pageY - offsetTop;

          // check if we are in the 'edit' button
          if (
            x < buttonWidth + buttonPadding &&
            x > buttonPadding &&
            y > this.height - (buttonHeight + buttonPadding) &&
            y < this.height - buttonPadding
          ) {
            this.menuOpen = true;
            this.clearButton();

            // create the menu
            var heading = document.createElement('span');
            heading.innerHTML = '<h2>Camera Streams</h2><hr /><br />';
            menu.appendChild(heading);
            var form = document.createElement('form');
            var streamLabel = document.createElement('label');
            streamLabel.setAttribute('for', 'stream');
            streamLabel.innerHTML = 'Stream: ';
            form.appendChild(streamLabel);
            var streamMenu = document.createElement('select');
            streamMenu.setAttribute('name', 'stream');
            // add each option
            for (var i = 0; i < this.topics.length; i++) {
              var option = document.createElement('option');
              // check if this is the selected option
              if (this.topics[i] === this.currentTopic) {
                option.setAttribute('selected', 'selected');
              }
              option.setAttribute('value', this.topics[i]);
              // check for a label
              if (this.labels) {
                option.innerHTML = this.labels[i];
              } else {
                option.innerHTML += this.topics[i];
              }
              streamMenu.appendChild(option);
            }
            form.appendChild(streamMenu);
            menu.appendChild(form);
            menu.appendChild(document.createElement('br'));
            var close = document.createElement('button');
            close.innerHTML = 'Close';
            menu.appendChild(close);

            // display the menu
            menu.style.position = 'absolute';
            menu.style.top = offsetTop + 'px';
            menu.style.left = offsetLeft + 'px';
            menu.style.width = this.width + 'px';
            menu.style.display = 'block';

            streamMenu.addEventListener(
              'click',
              function () {
                var topic = streamMenu.options[streamMenu.selectedIndex].value;
                // make sure it is a new stream
                if (topic !== this.currentTopic) {
                  viewer.changeStream(topic);
                }
              },
              false
            );

            // handle the interactions
            close.addEventListener(
              'click',
              function (e) {
                // close the menu
                menu.innerHTML = '';
                menu.style.display = 'none';
                this.menuOpen = false;
                const context = this.canvas.getContext('2d');
                context.clearRect(0, 0, this.canvas.width, this.canvas.height);
              },
              false
            );
          }
        }
      },
      false
    );
  }

  /**
   * Clear the button from the overlay canvas.
   */
  clearButton() {
    if (this.buttonTimer) {
      window.clearInterval(this.buttonTimer);
      // clear the button
      const context = this.canvas.getContext('2d');
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.hasButton = false;
    }
  }

  /**
   * Fades the stream by putting an overlay on it.
   */
  fadeImage() {
    const context = this.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // create the white box
    context.globalAlpha = 0.44;
    context.beginPath();
    context.rect(0, 0, this.width, this.height);
    context.fillStyle = '#fefefe';
    context.fill();
    context.globalAlpha = 1;
  }
}

export default MultiStreamViewer;
