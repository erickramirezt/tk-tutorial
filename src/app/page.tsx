import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <main className='flex items-center justify-center min-h-screen gap-2'>
      <Button asChild>
        <Link href='/products'>Products</Link>
      </Button>
    </main>
  )
}
