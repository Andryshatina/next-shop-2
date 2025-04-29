import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Next Shop</div>
        <div className="space-x-6">
          <Link
            href="/products"
            className="hover:text-gray-300 transition-colors"
          >
            Products
          </Link>
          <Link href="/cart" className="hover:text-gray-300 transition-colors">
            Cart
          </Link>
          <Link href="/login" className="hover:text-gray-300 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
