interface ProductDetailPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  // Fetch product by id (simulated)
  const product = { id, title: `Product ${id}`, description: `Detailed description for product ${id}` };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}