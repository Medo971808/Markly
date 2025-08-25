export interface Products {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

export function useProducts() {
  const { data, pending, error } = useAsyncData<Products[]>('products', () =>
    $fetch('https://fakestoreapi.com/products')
  )
  const filteredProducts = (category: string = 'All') =>
    computed(() =>
      category
        ? data.value?.filter((item: Product) => item.category === category)
        : data.value
    )

  return { data, pending, error, filteredProducts }
}