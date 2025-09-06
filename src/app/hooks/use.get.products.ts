import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  currency: string
  inStock: boolean
  category: string
}

export function useGetProducts() {
  async function handleGetProductsService({ signal }: QueryFunctionContext) {
    return axios
      .get<IProduct[]>('/api/products', {
        signal,
      })
      .then((res) => res.data)
  }

  const query = useQuery({
    queryKey: ['products'],
    queryFn: handleGetProductsService,
  })

  return query
}
