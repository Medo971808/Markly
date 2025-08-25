export interface Product {
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

export function useProduct (id: string) {
    const { data, error, pending } = useAsyncData<Product>(`product-${id}`, async () =>{
        return await $fetch<Product>(`https://fakestoreapi.com/products/${id}`)
    }
    )
    return { data, error, pending }
}
