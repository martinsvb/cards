import { Box, Typography } from "@mui/material";
import { useShallowEqualSelector } from "../../rtk/hooks";
import { selectMatches } from "../../rtk/slices/matches/matchesSlice";

const MatchesView = () => {
  const { value, suit } = useShallowEqualSelector(selectMatches);
  return (
    <Box>
      <Typography variant="h4" textAlign="center">
        Value matches: {value}
      </Typography>
      <Typography variant="h4" textAlign="center">
        Suit matches: {suit}
      </Typography>
    </Box>
  );
};

export default MatchesView;
