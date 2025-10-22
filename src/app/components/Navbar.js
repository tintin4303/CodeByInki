// components/Navbar.js
import Link from 'next/link';
export default function Navbar() {
  return (
     <nav className="sticky top-0 z-50  m-6 flex justify-between">
        <div>
            <Link href={"#home"} className="flex glass-effect justify-between items-center h-10 md:h-12 px-3 md:px-8">
                <h1 className="md:text-2xl text-xl font-bold">CodeBy<span className="text-blue-800">Inki</span></h1>
            </Link>
        </div>
        <div className='flex items-center text-lg font-bold underline decoration-current underline-offset-4 transition-colors duration-300'>
            <Link href="#projects" className="mx-4 hover:text-blue-800">Projects</Link>
            <Link href="#contact" className="mx-4 hover:text-blue-800">Contact</Link>
        </div>
    </nav>
    );
}
