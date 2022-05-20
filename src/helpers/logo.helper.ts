import mediaExpertLogo from '@/assets/media_expert_logo.png';
import mediaMarktLogo from '@/assets/media_markt_logo.png';
import { ShopNameModel } from '@/models/shopNameModel';

export const getShopLogoPath = (shopName: ShopNameModel): string => {
  if (shopName === 'media_markt') {
    return mediaMarktLogo;
  }
  if (shopName === 'media_expert') {
    return mediaExpertLogo;
  }
  return '';
};
