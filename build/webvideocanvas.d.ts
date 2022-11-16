import EventEmitter2 from 'eventemitter2';

declare module '@techming/web-video-canvas' {
  interface ViewOptions {
    divID: string;
    width: number;
    height: number;
    host: string;
    port?: number;
    quality?: number;
    topic: string;
    overlay?: HTMLCanvasElement;
    refreshRate?: number;
    interval?: number;
    type?: string;
  }

  interface MultiStreamViewerOptions {
    divID: string;
    width: number;
    height: number;
    host: string;
    port?: number;
    quality?: number;
    topics: [string];
    labels?: [string];
    defaultStream?: number;
  }

  class View extends EventEmitter2 {
    constructor(options: ViewOptions);
    width: number;
    height: number;
    host: string;
    port?: number;
    quality?: number;
    topic: string;
    overlay?: HTMLCanvasElement;
    refreshRate?: number;
    interval?: number;
    type?: string;
    canvas?: HTMLCanvasElement;
    image: typeof Image;

    draw(): void;
    changeStream(topic: string): void;
  }

  class MultiStreamViewer extends EventEmitter2 {
    constructor(options: MultiStreamViewerOptions);
    divID: string;
    width: number;
    height: number;
    host: string;
    port?: number;
    quality?: number;
    topics: [string];
    labels?: [string];
    defaultStream?: number;

    clearButton(): void;
    fadeImage(): void;
  }

  export { View, MultiStreamViewer };
}
