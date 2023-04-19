import type { ImageList, ImageItem } from '@/api/model/homeModel';
import {request} from '@/utils/http';


enum Api {
  ImageList = '/app/carddiy/card/square-list',
  CardLike = '/app/carddiy/card/like',
  CardInfo = '/app/carddiy/card/info'
}

export function ImageListApi(params: { page: number; page_size: number }) {
  return request<ImageList>(
    {
      url: Api.ImageList,
      method: 'POST',
      data: params,
    },
  );
}

export function CardLikeApi(params: Pick<ImageItem, 'card_id'>) {
  return request(
    {
      url: Api.CardLike,
      method: 'POST',
      data: params,
    }
  );
}

export function CardInfoApi(params:any) {
  return request(
    {
      url: Api.CardInfo,
      method: 'POST',
      data: {
        ...params,
      },
    }
  );
}
