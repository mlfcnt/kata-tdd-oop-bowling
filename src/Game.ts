import { Frame } from "./Frame";
import { IGame } from "./Interfaces/IGame";

export class Game implements IGame {
  public score = 0;
  private currentFrame = 0;
  static readonly totalFramesAmount = 10;

  constructor() {
    this.start();
  }

  private start() {
    for (let i = 0; i < Game.totalFramesAmount; i++) {
      const frame = new Frame();
      this.currentFrame += 1;
      this.score += frame.score;
    }
  }
}
