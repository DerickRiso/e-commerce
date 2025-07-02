import axios from "axios"

export enum Categorie {
  Dining = "dining",
  Living = "living",
  Bedroom = "bedroom"
}

export type Product = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  new: boolean;
  sale: number;
  categorie: Categorie;
};

export async function getProducts(url: string) {
  const response = await axios.get(url);
  const data = response.data;

  const products: Product[] = data;
  return products;
}