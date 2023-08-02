import { PhotoFetcherItem } from "./photoFetcherItem";

interface MainPartItem {
  content: {
    banner?: unknown;
    items: PhotoFetcherItem[];
    title: string;
  };
  mCode: string;
  type: string;
  visible: string[];
}

export interface PhotoFetcherData {
  introPart: unknown[];
  mainPart: MainPartItem[];
}
