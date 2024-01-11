import { ProductState } from "@/features/productSlice"

export const getProducts = async (products: ProductState[]): Promise<void> => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Products getting...', products);
        resolve();
      }, 1000); // Simulating a delay of 1 second
    });
  };