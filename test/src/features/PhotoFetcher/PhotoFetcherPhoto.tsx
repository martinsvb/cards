import { FC } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { PhotoFetcherItem } from "../../types/photoFetcher/photoFetcherItem";

interface PhotoFetcherPhotoProps extends PhotoFetcherItem {
  grayscale: boolean;
}

const PhotoFetcherPhoto: FC<PhotoFetcherPhotoProps> = ({
  grayscale,
  images: {
    lists: {
      medium: [image],
    },
  },
  name,
  seoUrl,
}) => {
  return (
    <Card sx={{ width: 400, m: 1 }}>
      <CardMedia
        sx={{ filter: grayscale ? "grayscale(50)" : undefined }}
        component="img"
        height="140"
        alt={name}
        image={image.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {seoUrl}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PhotoFetcherPhoto;
