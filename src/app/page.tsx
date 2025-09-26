// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Blue Bar */}
      <div className="bg-blue-900 text-white text-sm px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png" // replace with your logo in public/
            alt="University Logo"
            width={40}
            height={40}
          />
          <span className="font-semibold">
            Faculty of Engineering – University of Peradeniya
          </span>
        </div>
        <button className="bg-blue-700 px-3 py-1 rounded text-white text-sm hover:bg-blue-600">
          LMS
        </button>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-10 text-sm font-medium">
          <a href="#" className="text-red-600 font-semibold">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Academic
          </a>
          <a href="#" className="hover:text-blue-600">
            EngEx2025
          </a>
          <a href="#" className="hover:text-blue-600">
            Departments & Units
          </a>
          <a href="#" className="hover:text-blue-600">
            Services
          </a>
          <a href="#" className="hover:text-blue-600">
            Alumni
          </a>
          <a href="#" className="hover:text-blue-600">
            Useful Links
          </a>
        </div>
        <button className="text-gray-600 hover:text-blue-600">🔍</button>
      </nav>

      {/* Hero Section */}
      <div className="relative flex-1">
        <Image
          src="/faculty.jpg" // replace with actual image in /public
          alt="Faculty Building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Faculty of Engineering
          </h1>
          <p className="text-lg md:text-2xl">
            University of Peradeniya, Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
}
