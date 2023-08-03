import { Box, useTheme } from "@mui/material";
import { memo } from "react";

interface CardViewProps {
  imgSrc?: string;
}

const CardView = memo(({ imgSrc }: CardViewProps) => {
  const { palette, shape } = useTheme();
  return (
    <Box
      sx={{
        width: 226,
        height: 314,
        border: !imgSrc ? `1px solid ${palette.grey[500]}` : undefined,
        borderRadius: shape.borderRadius,
      }}
    >
      {imgSrc && <img src={imgSrc} alt="Card" />}
    </Box>
  );
});

export default CardView;
