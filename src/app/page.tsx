import Hero from '@/components/ui/Hero';
import Card from '@/components/ui/Card';

export default function LandingPage() {
  const features = [
    { title: 'Fast', description: 'Built on Next.js for performance' },
    { title: 'Scalable', description: 'Ready for production workloads' },
    { title: 'Modern', description: 'Uses latest React features' },
  ];

  return (
    <>
      <Hero />
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>
    </>
  );
}