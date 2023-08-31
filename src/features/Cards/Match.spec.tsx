import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import Match from "./Match";
import { initCards } from "./cardsInitData";
import { testingIds } from "../../config/tests/testingIds";
import { store } from "../../rtk/store";
import { getTheme } from "../../config/design/muiTheme";
import { Card } from "../../types/card";

const renderMatch = (cards: {
  firstCard: Omit<Card, "images">;
  secondCard: Omit<Card, "images">;
}) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={getTheme(true)}>
        <Match {...cards} />
      </ThemeProvider>
    </Provider>
  );
};

describe("Match component", () => {
  it("should render match component for empty cards", () => {
    renderMatch({ firstCard: initCards[0], secondCard: initCards[1] });
    const title = screen.getByTestId(testingIds.matchText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("");
  });

  it("should show different cards values empty text", () => {
    renderMatch({
      firstCard: { ...initCards[0], value: "7" },
      secondCard: { ...initCards[1], value: "8" },
    });
    const title = screen.getByTestId(testingIds.matchText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("");
  });

  it("should show different cards suit empty text", () => {
    renderMatch({
      firstCard: { ...initCards[0], suit: "CLUBS" },
      secondCard: { ...initCards[1], suit: "HEARTS" },
    });
    const title = screen.getByTestId(testingIds.matchText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("");
  });

  it("should show same cards values text", () => {
    renderMatch({
      firstCard: { ...initCards[0], value: "9" },
      secondCard: { ...initCards[1], value: "9" },
    });
    const title = screen.getByTestId(testingIds.matchText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("SNAP VALUE!");
  });

  it("should show same cards suits text", () => {
    renderMatch({
      firstCard: { ...initCards[0], suit: "SPADES" },
      secondCard: { ...initCards[1], suit: "SPADES" },
    });
    const title = screen.getByTestId(testingIds.matchText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("SNAP SUITE!");
  });

  it("should prefer values over suits match", () => {
    renderMatch({
      firstCard: { ...initCards[0], value: "9", suit: "SPADES" },
      secondCard: { ...initCards[1], value: "9", suit: "SPADES" },
    });
    const title = screen.getByTestId(testingIds.matchText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("SNAP VALUE!");
  });
});
