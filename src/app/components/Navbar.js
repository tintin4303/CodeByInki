// components/Navbar.js
import Link from 'next/link';
export default function Navbar() {
  return (
     <nav className="sticky top-0 z-50 p-5 mx-3 flex justify-between">
        <Link href={"#home"} className="flex glass-effect justify-between items-center h-12 px-8">
            <h1 className="text-2xl font-bold">CodeBy<span className="text-blue-800">Inki</span></h1>
        </Link>
        <div className='text-lg font-bold underline decoration-current underline-offset-4 transition-colors duration-300'>
            <Link href="#home" className="mx-4 hover:text-blue-800">Projects</Link>
            <Link href="#contact" className="mx-4 hover:text-blue-800">Contact</Link>
        </div>
    </nav>
    );
}
