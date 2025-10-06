export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "mens" | "womens" | "kids";
  imageUrls: string[];
  colors: string[];
  subcategory: string;
  material: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}
