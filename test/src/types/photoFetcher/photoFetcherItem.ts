interface Price {
  amount: number;
  currency: string;
}

interface PhotoFetcherImage {
  id: number;
  position: number;
  titleImage: boolean;
  url: string;
  size: string;
  thumbnailReady: boolean;
}

export interface PhotoFetcherItem {
  endingTime: string;
  id: number;
  name: string;
  aukroPlus: boolean;
  paymentOnline: boolean;
  buyNowPrice: Price;
  biddingPrice: Price;
  priceWithShipping: Price;
  freeShipping: boolean;
  images: {
    lists: {
      small: PhotoFetcherImage[];
      original: PhotoFetcherImage[];
      large: PhotoFetcherImage[];
      medium: PhotoFetcherImage[];
    };
  };
  itemTypeEnumCode: string;
  seoUrl: string;
  paymentViaAukro: boolean;
  statusAdultContent: boolean;
}
