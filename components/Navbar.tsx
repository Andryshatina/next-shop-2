import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-lime-200 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-gray-800">Next Shop</div>
          <div className="flex space-x-8">
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Cart
            </Link>
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
