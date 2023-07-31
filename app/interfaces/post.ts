export interface Posts {
  data: Datum[];
  status: string;
}

export interface Datum {
  _id?: string;
  title: string;
  body?: string;
  image: string;
  author: string;
  slug: string;
  createdAt: Date | string;
  __v?: number;
}
