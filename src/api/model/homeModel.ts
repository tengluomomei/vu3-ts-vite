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

export type cardDataItem = {
  card_id: number;
  nickname: string;
  avatar: string;
  img: string;
  title: string;
  card_name: string;
  words: string;
  likes_number: number;
  review_status: number;
  card_status: number;
  publish_at: number;
  created_at: number;
  is_like: number;
  can_del: number;
  can_same_clause: number;
};
