import { FC, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import PhotoFetcherPhoto from "./PhotoFetcherPhoto";
import { PhotoFetcherItem } from "../../types/photoFetcher/photoFetcherItem";
import PhotoFetcherBar, { PhotoFetcherBarProps } from "./PhotoFetcherBar";

interface PhotoFetcherPhotosProps {
  items: PhotoFetcherItem[];
}

const getRandomIndexes = (items: PhotoFetcherItem[]) => {
  let indexes: number[] = [];
  if (items.length) {
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      if (indexes.includes(randomIndex)) {
        i--;
      } else {
        indexes = [...indexes, randomIndex];
      }
    }
  }

  return indexes;
};

const PhotoFetcherPhotos: FC<PhotoFetcherPhotosProps> = ({ items }) => {
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    if (!randomIndexes.length) {
      setRandomIndexes(getRandomIndexes(items));
    }
  }, [items, randomIndexes]);

  const handleNewItems = useCallback<
    PhotoFetcherBarProps["handleNewItems"]
  >(() => {
    setRandomIndexes(getRandomIndexes(items));
  }, [items]);

  const handleGrayscale = useCallback<
    PhotoFetcherBarProps["handleGrayscale"]
  >(() => {
    setGrayscale((prevGrayScale) => !prevGrayScale);
  }, []);

  return (
    <Box>
      <PhotoFetcherBar
        grayscale={grayscale}
        handleGrayscale={handleGrayscale}
        handleNewItems={handleNewItems}
      />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {items
          .filter((item, idx) => randomIndexes.includes(idx))
          .map((item) => (
            <PhotoFetcherPhoto grayscale={grayscale} key={item.id} {...item} />
          ))}
      </Box>
    </Box>
  );
};

export default PhotoFetcherPhotos;
