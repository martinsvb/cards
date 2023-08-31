import { memo, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Card } from "../../types/card";
import { useAppDispatch } from "../../rtk/hooks";
import {
  increaseSuit,
  increaseValue,
} from "../../rtk/slices/matches/matchesSlice";
import { testingIds } from "../../config/tests/testingIds";

interface MatchProps {
  firstCard: Omit<Card, "images">;
  secondCard: Omit<Card, "images">;
}

const Match = memo(({ firstCard, secondCard }: MatchProps) => {
  const [text, setText] = useState<string | undefined>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    let newText;
    const { value, suit } = firstCard;
    if (value && secondCard.value && value === secondCard.value) {
      newText = "SNAP VALUE!";
      dispatch(increaseValue());
    } else if (suit && secondCard.suit && suit === secondCard.suit) {
      newText = "SNAP SUITE!";
      dispatch(increaseSuit());
    }
    setText(newText);
  }, [dispatch, firstCard, secondCard]);

  return (
    <Box sx={{ height: 40 }}>
      <Typography
        variant="h4"
        textAlign="center"
        data-testid={testingIds.matchText}
      >
        {text}
      </Typography>
    </Box>
  );
});

export default Match;
