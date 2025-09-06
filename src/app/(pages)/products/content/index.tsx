'use client'

import { useGetProducts } from '@/app/hooks/use.get.products'

export default function ProductsContent() {
  const products = useGetProducts()

  if (products.isLoading) return <div>Loading...</div>
  if (products.isError) return <div>Error: {products.error.message}</div>

  return (
    <div>
      {products.data?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}
