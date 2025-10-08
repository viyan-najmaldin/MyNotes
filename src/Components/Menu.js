import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 order-2 sm:order-3 relative justify-self-end">
      <div className="flex items-center">
        <div className="hidden sm:block text-md mr-4 bg-[gray] w-6 h-6 rounded-3xl font-bold"></div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:block p-2 rounded hover:bg-gray-200"
        >
          {/* Hamburger icon */}
          <span className="block rounded w-6 h-1 bg-[gray] mb-1"></span>
          <span className="block rounded w-6 h-1 bg-[gray] mb-1"></span>
          <span className="block rounded w-6 h-1 bg-[gray]"></span>
        </button>
      </div>

      {/* Menu items */}
      <div className={`${isOpen ? "block" : "hidden"} mt-4`}>
        <a href="" className="block py-2">Home</a>
        <a href="" className="block py-2">About</a>
        <a href="" className="block py-2">Services</a>
        <a href="" className="block py-2">Pricing</a>
        <a href="" className="block py-2">Contact</a>
      </div>
    </nav>
  );
}
