import { FC, memo, MouseEventHandler } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export interface PhotoFetcherBarProps {
  grayscale: boolean;
  handleGrayscale: MouseEventHandler<HTMLButtonElement>;
  handleNewItems: MouseEventHandler<HTMLButtonElement>;
}

const PhotoFetcherBar: FC<PhotoFetcherBarProps> = ({
  grayscale,
  handleGrayscale,
  handleNewItems,
}) => {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between", mb: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={grayscale}
              onClick={handleGrayscale}
              aria-label="photos grayscale"
            />
          }
          label="Make photos grayscale"
        />
      </FormGroup>
      <Button onClick={handleNewItems} variant="contained" type="button">
        Fetch New Photos
      </Button>
    </Stack>
  );
};

export default memo(PhotoFetcherBar);
