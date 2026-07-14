import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import DifficultySelector from "./DifficultySelector.jsx";

describe("DifficultySelector component", () => {
    afterEach(() => {
        cleanup();
    });

    it.each([
        ["easy", /easy/i],
        ["medium", /medium/i],
        ["hard", /hard/i],
    ])(
        "calls setDifficulty with '%s' when the %s button is clicked",
        async (expectedLevel, buttonRegex) => {
            const user = userEvent.setup();
            const mockSetDifficulty = vi.fn();

            render(
                <DifficultySelector
                    setDifficulty={mockSetDifficulty}
                    currentDifficulty="easy"
                />,
            );

            const button = screen.getByRole("button", { name: buttonRegex });
            await user.click(button);

            expect(mockSetDifficulty).toHaveBeenCalledOnce();
            expect(mockSetDifficulty).toHaveBeenCalledWith(expectedLevel);
        },
    );

    // it("calls setDifficulty with 'hard' when the Hard button is clicked", async () => {
    //     const user = userEvent.setup();
    //     const mockSetDifficulty = vi.fn();

    //     render(
    //         <DifficultySelector
    //             setDifficulty={mockSetDifficulty}
    //             currentDifficulty={"easy"}
    //         />,
    //     );

    //     const hardButton = screen.getByRole("button", { name: /hard/i });
    //     await user.click(hardButton);

    //     expect(mockSetDifficulty).toHaveBeenCalledOnce();
    //     expect(mockSetDifficulty).toHaveBeenCalledWith("hard");
    // });
});
