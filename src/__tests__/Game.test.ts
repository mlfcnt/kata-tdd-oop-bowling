import { Game } from "../Game";
import { IGame } from "../Interfaces/IGame";

describe("Game", () => {
  it("should have a total of 10 frames", () => {
    expect(Game.totalFramesAmount).toBe(10);
  });

  test("the game should play all the frames", () => {
    const minPointsPerFrame = 1;
    const maxPointsPerFrame = 20;
    for (let index = 0; index < 1000; index++) {
      const game: IGame = new Game();
      expect(game.score).toBeGreaterThan(
        minPointsPerFrame * Game.totalFramesAmount
      );
      expect(game.score).toBeLessThanOrEqual(
        maxPointsPerFrame * Game.totalFramesAmount
      );
    }
  });
});
