export interface Foods {
  id: string;
  name: string;
  slug: string;
  description: string;
  restaurant: string;
  price: number;
  discountPrice: number;
  stock: number;
  isAvailable: boolean;
  tags: string[];

  category: Category;

  images: string[];

  subFoods: SubFoods[];

  reviews: Reviews[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface SubFoods {
  id: string;
  size: string;
  extras?: string[];
  spiceLevel?: string;
  price: number;
  stock: number;
}

export interface Reviews {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}
