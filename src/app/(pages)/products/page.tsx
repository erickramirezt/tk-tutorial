import { Metadata } from 'next'
import ProductsContent from './content'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
}

export default function ProductsPage() {
  return <ProductsContent />
}
