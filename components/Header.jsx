import Link from 'next/link';
import { GitHub, Instagram, Linkedin } from 'react-feather';

const links = [
  { name: "Projects", anchor: "#projects" },
  { name: "Technologies", anchor: "#tech" },
  { name: "About", anchor: "#about" },
  { name: "Blogs", anchor: "/blogs" },
];

export default function Header() {
  return (
    <header className="border-b-2 border-gray-400/10 py-8 mb-2">
      <nav className="container flex justify-between">
        <div className="w-44">
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Muhammad Irtiza" />
            </a>
          </Link>
        </div>

        <ul className='lg:flex gap-x-8 text-lg hidden'>
          {links.map((link, i) => (
            <li key={i}><Link href={link.anchor}><a className='hover:text-gray-200'>{link.name}</a></Link></li>
          ))}
        </ul>

        <ul className='flex gap-x-8'>
          <li>
            <Link href="https://github.com/Irtiza751/">
              <a target="_blank" className='hover:text-gray-200'>
                <GitHub size={24} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/muhammad-irtiza-b68843211/">
              <a className='hover:text-gray-200' target="_blank">
                <Linkedin size={24} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/muhammad_irtiza751/">
              <a className='hover:text-gray-200' target="_blank">
                <Instagram size={24} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}