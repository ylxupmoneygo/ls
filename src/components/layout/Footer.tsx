export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">SafetyGuard Pro</h3>
            <p className="text-sm">Professional Safety Equipment Supplier</p>
            <p className="text-sm">License No: XXXXXXXXXX</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Tel: +1 (XXX) XXX-XXXX</p>
              <p>Email: contact@safetyguardpro.com</p>
              <p>Address: XXX Business Street, City, Country</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <p><a href="/" className="hover:text-white">Home</a></p>
              <p><a href="/products" className="hover:text-white">Products</a></p>
              <p><a href="/contact" className="hover:text-white">Contact</a></p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} SafetyGuard Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}