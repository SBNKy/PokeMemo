import { describe, expect, it } from "vitest";
import shuffleArray from "./shuffle.js";

describe("shuffleArray function", () => {
    it("should return an array of the same length", () => {
        const inputDeck = [1, 2, 3, 4, 5];
        const resultDeck = shuffleArray([...inputDeck]);

        expect(resultDeck).toHaveLength(inputDeck.length);
    });

    it("should not mutate the original array", () => {
        const inputDeck = [1, 2, 3, 4, 5];
        const copy = [...inputDeck];

        shuffleArray(inputDeck);

        expect(inputDeck).toEqual(copy);
    });
});
