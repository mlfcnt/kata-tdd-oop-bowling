import { IFrame } from "./Interfaces/IFrame";

export class Frame implements IFrame {
  score = 0;
  remainingPins = 10;
  readonly maxRollsAmount = 2;
  private currentRoll = 0;
  constructor() {
    this.doRolls();
  }

  private roll(amountOfPinsKnockedDown: number) {
    if (this.currentRoll < this.maxRollsAmount) {
      this.score += amountOfPinsKnockedDown;
      this.currentRoll += 1;
    }
  }

  private doRolls() {
    for (let i = 0; i < this.maxRollsAmount; i++) {
      this.roll(Frame.generateRandomAmountOfPinsKnockedDown());
    }
  }

  static generateRandomAmountOfPinsKnockedDown() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
