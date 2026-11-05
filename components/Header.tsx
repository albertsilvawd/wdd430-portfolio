import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-4 shadow-md">
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div id="header-title" className="text-2xl font-bold">Albert Silva</div>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}