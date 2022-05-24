import cortlandLogo from '@/assets/cortland_logo.png';
import mediaMarktLogo from '@/assets/media_markt_logo.png';
import rtvEuroAgdLogo from '@/assets/rtv_euro_agd_logo.png';
import { ShopNameModel } from '@/models/shopNameModel';

export const getShopLogoPath = (shopName: ShopNameModel): string => {
  if (shopName === 'media_markt') {
    return mediaMarktLogo;
  }
  if (shopName === 'RTVeuroAGD') {
    return rtvEuroAgdLogo;
  }
  if (shopName === 'cortland') {
    return cortlandLogo;
  }
  return '';
};
