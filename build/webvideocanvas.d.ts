import EventEmitter2 from 'eventemitter2';

export as namespace WebVideoCanvas;
export class Viewer extends EventEmitter2 {
  constructor(options: WebVideoCanvas.ViewOptions);
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
