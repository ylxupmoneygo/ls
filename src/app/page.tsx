// src/app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Carousel from '@/components/ui/Carousel';
import ProductCard from '@/components/ui/ProductCard';
import Footer from '@/components/layout/Footer';
const featuredProducts = [
  {
    title: "Safety Face Shield",
    image: "/products/product1.png",
    description: "High-quality face shield made with premium materials, providing comprehensive protection for various work environments"
  },
  {
    title: "Protective Gloves",
    image: "/products/product2.png",
    description: "Professional safety gloves with cut-resistant, puncture-proof, and chemical-resistant properties"
  },
  {
    title: "Safety Helmet",
    image: "/products/product3.png",
    description: "High-strength safety helmet meeting international safety standards for reliable head protection"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Carousel />

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-blue-600">Featured</span> Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-b from-white to-blue-50/30 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-blue-600">About</span> Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-[500px] group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-10" />
                <img
                  src="/company.jpg"
                  alt="Company Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-4">
                Professional Safety Protection Solutions
              </h3>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Qingdao GatherWell Co., Ltd. is a company that focuses on providing customers with safety protection solutions from head to toe.
                </p>
                <p className="leading-relaxed">
                  Our main products include: a variety of limited-use protective clothing, chemical protective clothing, flame-retardant work clothes, clean room clothing, safety gloves, safety shoes, reflective vests, work clothes, etc.
                </p>
                <p className="leading-relaxed">
                  GatherWell provides customers with high-quality products by insisting on continuous product research and development and technological innovation. The products comply with GB standards, CE European standards, etc., to provide users with the best protection.
                </p>
                <p className="leading-relaxed">
                  Over the years, GatherWell's products have been exported to more than 30 countries and regions including Europe, Japan, South Korea, Singapore, Thailand, the United States, Canada, and South America, etc. It is deeply loved by users.
                </p>
                <p className="leading-relaxed">
                  In the future, we will continue to provide users with better safety protection with our products with excellent quality, professional team, and meticulous service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}