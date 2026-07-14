import { afterEach, describe, expect, it, vi } from "vitest";
import fetchPokemons from "./fetcher.js";

describe("fetchPokemons function", () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it("should successfully fetch and format pokemon data", async () => {
        vi.spyOn(Math, "random")
            .mockReturnValueOnce(0) // generates id = 1
            .mockReturnValueOnce(0.007); // generates id = 2

        const mockFetch = vi.fn().mockImplementation((url) => {
            const id = url.split("/").pop();
            return Promise.resolve({
                ok: true,
                json: () =>
                    Promise.resolve({
                        id: Number(id),
                        name: `pokemon-${id}`,
                        sprites: { front_default: `img-${id}.png` },
                    }),
            });
        });

        vi.stubGlobal("fetch", mockFetch);

        const result = await fetchPokemons(2);

        expect(mockFetch).toHaveBeenCalledTimes(2);
        expect(mockFetch).toHaveBeenCalledWith(
            "https://pokeapi.co/api/v2/pokemon/1",
        );

        expect(result).toEqual([
            { id: 1, name: "pokemon-1", image: "img-1.png" },
            { id: 2, name: "pokemon-2", image: "img-2.png" },
        ]);
    });
});
