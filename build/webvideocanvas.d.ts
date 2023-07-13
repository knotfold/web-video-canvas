import EventEmitter2 from 'eventemitter2';

export as namespace WebVideoCanvas;
export class Viewer extends EventEmitter2 {
  constructor(options: WebVideoCanvas.ViewOptions);
  divID: string;
  width: number;
  height: number;
  host: string;
  port: number;
  quality?: number;
  topic: string;
  overlay?: HTMLCanvasElement;
  canvas: HTMLCanvasElement;
  refreshRate: number;
  interval: number;
  type?: string;
  src: string;
  ssl?: boolean;
  image: typeof Image;

  draw(): void;
  changeStream(topic: string): void;
}

export class MultiStreamViewer extends EventEmitter2 {
  constructor(options: WebVideoCanvas.MultiStreamViewerOptions);
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

export interface ViewOptions {
  divID: string;
  canvas?: HTMLCanvasElement;
  width: number;
  height: number;
  host: string;
  port?: number;
  quality?: number;
  topic: string;
  overlay?: HTMLCanvasElement;
  refreshRate?: number;
  interval?: number;
  invert?: boolean;
  type?: string;
  src?: string;
  ssl?:boolean;
}

export interface MultiStreamViewerOptions {
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
