export type params = {
  [key: string]: string
}
export const url = {
  getAllProducts: (params: params) => `https://dummyjson.com/products?${new URLSearchParams(params).toString()}`,
  getAllCategories: 'https://dummyjson.com/products/category-list',
  getTopSeller: 'https://dummyjson.com/users?limit=5&skip=10'
}