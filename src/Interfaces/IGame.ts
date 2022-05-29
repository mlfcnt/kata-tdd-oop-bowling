import { Player } from "../Player";

export interface IGame {
  readonly player: Player;
  currentFrame: number;
  score(): number;
  results(): string;
}
