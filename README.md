# web-video-canvas [![Build Status](https://img.shields.io/github/actions/workflow/status/techming/web-video-canvas/main.yml?branch=master)](https://github.com/Techming/web-video-canvas/actions) [![NPM Version](https://img.shields.io/npm/v/@techming/web-video-canvas)](https://www.npmjs.com/package/@techming/web-video-canvas) ![License](https://img.shields.io/npm/l/@techming/web-video-canvas)

**Display a Video Stream from the ROS web_video_server Inside of a HTML5 Canvas**

This repo is a fork from and developed based on [mjpegcanvas](https://github.com/rctoris/mjpegcanvasjs) by [Russell Toris](https://github.com/rctoris) (russell.toris@gmail.com). Thanks for all the previous effort.

For full documentation, see [the ROS wiki](https://wiki.ros.org/web_video_canvas). JSDoc can be found [here](https://techming.github.io/web-video-canvas/).

## Usage

### npm

It is recommended that you import this package via npm or yarn. Simply run

```bash
npm install @techming/web-video-canvas // or
yarn add @techming/web-video-canvas
```

Once you installed the package, you can import the `View` or `MultiStreamViewer` in your file:

```javascript
import { View } from '@techming/web-video-canvas';

const viewer = new Viewer({
  divID: 'mjpeg',
  host: 'localhost',
  port: '8080', // web_video_server default port
  width: 640,
  height: 480,
  topic: '/usb_cam_node/image_raw',
  type: 'png', // you can change to mjpeg, png, or ros_compressed
});
```

- To close HTTP connection and clear any timer used internally before unmount the viewer object, you can call `viewer.unmount()` method.
- `canvas` parameter in the construtor can be used to pass a canvas element to draw the video feed on.
- For other parameters usage, please refer to the [JSDoc](https://techming.github.io/web-video-canvas/).

### Static Import

Pre-built files can be found in [webvideocanvas.js](build/webvideocanvas.js) and [webvideocanvas.min.js](build/webvideocanvas.min.js)

## Build

Checkout [CONTRIBUTING.md](CONTRIBUTING.md) for details on building.

## License

web-video-canvas is released with a BSD license. For full terms and conditions, see the [LICENSE](LICENSE) file.

## Authors

See the [AUTHORS.md](AUTHORS.md) file for a full list of contributors.
