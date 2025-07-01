export type Product = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  new: boolean;
  sale: string;
};

export async function requestApi (url: string) {
    const response = await fetch(url);
    const dados = await response.json();

    const products: Product[] = dados;

    return products;
}