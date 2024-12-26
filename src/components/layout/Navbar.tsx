export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">SafetyGuard Pro</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/products" className="hover:text-blue-600">Products</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}