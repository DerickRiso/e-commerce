import axios from "axios"

const api = process.env.REACT_APP_API;

export enum Categorie {
  Dining = "dining",
  Living = "living",
  Bedroom = "bedroom"
}

export type Product = {
  id: number;
  image: string;
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
  //const products: Product[] = data.data;
  return data;
}

export async function getSingleProduct(id: string) {
  const response = await axios.get(`${api}/products/${id}`);

  return response.data;
}

export async function createProductObject(id: string) {
  const products = await getSingleProduct(id);
  return products;
}
