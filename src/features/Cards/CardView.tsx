import { Box, useTheme } from "@mui/material";

interface CardProps {
  imgSrc?: string;
}

const CardView = ({ imgSrc }: CardProps) => {
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
};

export default CardView;
