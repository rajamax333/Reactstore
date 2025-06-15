import type { Product } from '../../components/ProductCard/product.types';
import { getAllProducts } from '../../service/service';
import type { params } from '../../url/url';

interface FetchProductsParams {
  categories: string[];
  params: params;
}

export const fetchProducts = async (
  categories: FetchProductsParams['categories'],
  params: FetchProductsParams['params'],
): Promise<Product[]> => {
  try {
    const response = await getAllProducts(params);
    const products: Product[] = response.data.products ?? [];

    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error; // Important so react-query handles it as an error
  }
};
