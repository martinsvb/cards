import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

interface PhotoFetcherStatusProps {
  error: unknown;
  loading: boolean;
}

const PhotoFetcherStatus: FC<PhotoFetcherStatusProps> = ({
  error,
  loading,
}) => {
  return (
    <Stack
      sx={{ height: "80%", justifyContent: "center", alignItems: "center" }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        !!error && <pre>{JSON.stringify(error, undefined, 2)}</pre>
      )}
    </Stack>
  );
};

export default PhotoFetcherStatus;
