import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import MemoryGame from "./MemoryGame.jsx";
import fetchPokemons from "../../utils/fetcher.js";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import userEvent from "@testing-library/user-event";

vi.mock("../../utils/fetcher.js", () => ({ default: vi.fn() }));

vi.mock("../../utils.shuffle.js", () => ({
    default: vi.fn((array) => array),
}));

describe("MemoryGame component", () => {
    const mockCards = [
        { id: 1, name: "Bulbasaur", image: "bulbasaur.png" },
        { id: 2, name: "Ivysaur", image: "ivysaur.png" },
        { id: 3, name: "Venusaur", image: "venusaur.png" },
    ];

    beforeEach(() => {
        vi.useFakeTimers();
        fetchPokemons.mockResolvedValue(mockCards);
    });

    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
        vi.useRealTimers();
    });

    it("should display loader initially, then render cards after data loads", async () => {
        const mockSetScore = vi.fn();

        render(<MemoryGame difficulty="easy" setScore={mockSetScore} />);

        expect(screen.getByTestId("loader")).not.toBeNull();
        expect(screen.queryByText("Bulbasaur")).toBeNull();

        await act(async () => {
            vi.advanceTimersByTime(1500);
        });

        expect(screen.queryByTestId("loader")).toBeNull();
        expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
        expect(screen.getByText("Ivysaur")).toBeInTheDocument();
    });

    it("should increment score and shuffle cards when clicking an UNCLICKED card", async () => {
        const mockSetScore = vi.fn();

        render(<MemoryGame difficulty="easy" setScore={mockSetScore} />);

        await act(() => {
            vi.advanceTimersByTime(1500);
        });

        const card = screen.getByText("Bulbasaur");
        fireEvent.click(card);

        expect(mockSetScore).toHaveBeenCalledOnce();
        expect(mockSetScore.mock.calls[0][0]).toBeTypeOf("function");
    });

    it("should reset score to 0 when clicking an already clicked card", async () => {
        const mockSetScore = vi.fn();

        render(<MemoryGame difficulty="easy" setScore={mockSetScore} />);

        await act(() => {
            vi.advanceTimersByTime(1500);
        });

        const card = screen.getByText("Bulbasaur");

        fireEvent.click(card);
        fireEvent.click(card);

        expect(mockSetScore).toHaveBeenCalledTimes(2);
        expect(mockSetScore).toHaveBeenLastCalledWith(0);
    });
});
