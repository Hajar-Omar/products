export interface IProduct {
  id: number;
  title: number;
  description: string;
  brand_name: string;
  brand_type: string;
  serving_size: string;
  serving_unit: string;
  width: number;
  height: number;
  weight: number;
  color: string;
  requires_refrigeration: boolean;
  requires_freezing: boolean;
  featured: boolean;
  klass: string;
  group_quantity: number;
  group_description: string;
  sort_order: number;
  images: [
    {
      id: number;
      thumbnail: string;
      large: string;
      original: string;
      file_name: string;
      file_size: number;
      file_type: string;
    }
  ];
  status: string;
  favorite: boolean;
  price: string;
  discounted_price: string;
}

export interface IProductRes {
  success: boolean;
  data: {
    products: IProduct[];
  };
}

export interface IProductDetails {
  success: boolean;
  data: IProduct;
}
