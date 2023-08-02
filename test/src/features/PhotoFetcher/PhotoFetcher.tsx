import { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhotoFetcherPhotos from "./PhotoFetcherPhotos";
import useFetch from "../../config/api/useFetch";
import { PHOTO_FETCHER_URLS } from "../../config/api/endpoints/photoFetcher";
import { HTTP_METHODS } from "../../config/api/configuration";
import { PhotoFetcherData } from "../../types/photoFetcher/photoFetcherData";
import PhotoFetcherStatus from "./PhotoFetcherStatus";
import { PhotoFetcherItem } from "../../types/photoFetcher/photoFetcherItem";

const PhotoFetcher: FC = () => {
  const { data, loading, error } = useFetch<undefined, PhotoFetcherData>(
    PHOTO_FETCHER_URLS.PHOTOS,
    HTTP_METHODS.GET
  );

  const [items, setItems] = useState<PhotoFetcherItem[]>([]);

  useEffect(() => {
    if (data) {
      setItems(
        data.mainPart.find(({ type }) => type === "CrazyPricesItems")?.content
          .items || []
      );
    }
  }, [data]);

  return (
    <Box sx={{ height: "100vh" }}>
      <Typography variant="h2">Photo Fetcher</Typography>
      {data ? (
        <PhotoFetcherPhotos items={items} />
      ) : (
        <PhotoFetcherStatus error={error} loading={loading} />
      )}
    </Box>
  );
};

export default PhotoFetcher;
