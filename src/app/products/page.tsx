import Card from '@/components/ui/Card';

// Simulate fetching products
async function getProducts() {
  // In a real app, this would be an API call or database query
  return [
    { id: 1, title: 'Product A', description: 'High quality product A' },
    { id: 2, title: 'Product B', description: 'Durable product B' },
    { id: 3, title: 'Product C', description: 'Affordable product C' },
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} title={product.title} description={product.description} />
        ))}
      </div>
    </div>
  );
}