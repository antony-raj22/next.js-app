import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MyBrand</h1>
      <p className="text-lg md:text-xl mb-8">Building amazing digital experiences</p>
      <Button variant="secondary" className="bg-white text-gray-800 hover:bg-gray-100">
        Get Started
      </Button>
    </section>
  );
}