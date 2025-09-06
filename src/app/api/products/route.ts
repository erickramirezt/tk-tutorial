export async function GET() {
  const data = [
    {
      id: 1,
      name: 'Apple',
      description: 'The best fruit ever',
      price: 1.99,
      currency: 'USD',
      inStock: true,
      category: 'Fruit',
    },
    {
      id: 2,
      name: 'Banana',
      description: 'The sweet fruit',
      price: 0.99,
      currency: 'USD',
      inStock: true,
      category: 'Fruit',
    },
    {
      id: 3,
      name: 'Orange',
      description: 'The orange fruit',
      price: 0.99,
      currency: 'USD',
      inStock: true,
      category: 'Fruit',
    },
    {
      id: 4,
      name: 'Pineapple',
      description: 'The pineapple fruit',
      price: 0.99,
      currency: 'USD',
      inStock: true,
      category: 'Fruit',
    },
    {
      id: 5,
      name: 'Grapes',
      description: 'The grapes fruit',
      price: 0.99,
      currency: 'USD',
      inStock: true,
      category: 'Fruit',
    },
  ]

  return Response.json(data)
}
