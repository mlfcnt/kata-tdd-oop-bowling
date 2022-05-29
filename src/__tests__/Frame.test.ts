import { Frame } from "../Frame";
import { Game } from "../Game";

describe("Frame", () => {
  it("should have 2 rolls", () => {
    const frame = new Frame();

    expect(frame.maxRollsAmount).toBe(2);
  });

  it("should have a default amount of remaining pins to 10", () => {
    const frame = new Frame();

    expect(frame.remainingPins).toBe(10);
  });

  //   it("cannot have more than 2 rolls", () => {
  //     const frame = new Frame();
  //     frame.roll(Game.generateRandomAmountOfPinsKnockedDown());
  //     frame.roll(Game.generateRandomAmountOfPinsKnockedDown());
  //     expect(() =>
  //       frame.roll(Game.generateRandomAmountOfPinsKnockedDown())
  //     ).toThrowError("Frame cannot have more than 2 rolls");
  //   });
});
