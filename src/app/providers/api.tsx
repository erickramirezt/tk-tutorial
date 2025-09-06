'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function ApiProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: 'always',
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
