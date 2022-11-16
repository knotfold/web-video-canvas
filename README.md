# web-video-canvas [![Build Status](https://app.travis-ci.com/Techming/web-video-canvas.svg?branch=develop)](https://app.travis-ci.com/github/Techming/web-video-canvas) [![NPM Version](https://img.shields.io/npm/v/@techming/web-video-canvas)](https://www.npmjs.com/package/@techming/web-video-canvas) ![License](https://img.shields.io/npm/l/@techming/web-video-canvas)

**Display a Video Stream from the ROS web_video_server Inside of a HTML5 Canvas**

This repo is a fork from and developed based on [mjpegcanvas](https://github.com/rctoris/mjpegcanvasjs) by [Russell Toris](https://github.com/rctoris) (russell.toris@gmail.com). Thanks for all the previous effort.

**Still WIP to publish this package to ROS distro as well as ROS wiki [2022-11-15]**

~~For full documentation, see [the ROS wiki](http://ros.org/wiki/mjpegcanvasjs) or check out some [working demos](http://robotwebtools.org/).~~

This project is released as part of the [Robot Web Tools](http://robotwebtools.org/) effort.

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

### Static Import

Pre-built files can be found in [webvideocanvas.js](build/webvideocanvas.js)

## Build

Checkout [CONTRIBUTING.md](CONTRIBUTING.md) for details on building.

## License

web-video-canvas is released with a BSD license. For full terms and conditions, see the [LICENSE](LICENSE) file.

## Authors

See the [AUTHORS.md](AUTHORS.md) file for a full list of contributors.
