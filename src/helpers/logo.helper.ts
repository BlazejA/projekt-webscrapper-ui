import { ShopNameModel } from "@/models/shopNameModel";
import mediaMarktLogo from "@/assets/media_markt_logo.png";

export const getShopLogoPath = (shopName: ShopNameModel): string => {
  if (shopName === "media_markt") {
    return mediaMarktLogo;
  }
  return "";
};
