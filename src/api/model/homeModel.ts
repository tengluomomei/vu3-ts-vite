export type ImageItem = {
  card_id: number;
  img: string;
  title: string;
  nickname: string;
  avatar: string;
  likes_number: number;
  is_like: number;
  pic_height: number;
  pic_width: number;
  link_url: string;
  imageHeight?: number; // 图片高度
  allHeight?: number; // 总高度
  reply_number: number;
};

export type ImageList = {
  rows: ImageItem[];
  total: number;
};
