import { Frame } from "./Frame";
import { IGame } from "./Interfaces/IGame";
import { Player } from "./Player";

export class Game implements IGame {
  currentFrame = 0;
  static readonly totalFramesAmount = 10;
  readonly player: IGame["player"] = new Player();
  private currentScore = 0;

  constructor() {
    this.start();
  }

  public score() {
    return this.currentScore;
  }

  private start() {
    for (let i = 0; i < Game.totalFramesAmount; i++) {
      const frame = new Frame();
      this.currentFrame += 1;
      this.currentScore += frame.score;
    }
  }

  public results() {
    const maxPointsPerFrame = 20;
    const goodEnoughScore =
      (60 * (maxPointsPerFrame * Game.totalFramesAmount)) / 100;

    if (this.score() >= goodEnoughScore) {
      return "Let's go champ 🥳";
    }
    return "Better keep practicing 💪";
  }
}
