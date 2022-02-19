import Image from "next/image";
import Link from "next/link";
import { GitHub, Instagram, Linkedin } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Projects", anchor: "#projects" },
  { name: "Technologies", anchor: "#tech" },
  { name: "About", anchor: "#about" },
  { name: "Blogs", anchor: "/blogs" },
];

export default function Header() {
  return (
    <AnimatePresence>
      <header className="border-b-2 border-gray-400/10 py-8 mb-2">
        <nav className="container flex justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            <div className="w-44">
              <Link href="/">
                <a>
                  <Image
                    src="/logo.svg"
                    alt="Muhammad Irtiza"
                    width={250}
                    height={40}
                  />
                </a>
              </Link>
            </div>
          </motion.div>

          <ul className="lg:flex gap-x-8 text-lg hidden">
            {links.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                  },
                }}
              >
                <Link href={link.anchor}>
                  <a className="hover:text-gray-200">{link.name}</a>
                </Link>
              </motion.li>
            ))}
          </ul>

          <ul className="flex gap-x-8">
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1,
                },
              }}
            >
              <Link href="https://github.com/Irtiza751/">
                <a target="_blank" className="hover:text-gray-200">
                  <GitHub size={24} />
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                },
              }}
            >
              <Link href="https://www.linkedin.com/in/muhammad-irtiza-b68843211/">
                <a className="hover:text-gray-200" target="_blank">
                  <Linkedin size={24} />
                </a>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                },
              }}
            >
              <Link href="https://www.instagram.com/muhammad_irtiza751/">
                <a className="hover:text-gray-200" target="_blank">
                  <Instagram size={24} />
                </a>
              </Link>
            </motion.li>
          </ul>
        </nav>
      </header>
    </AnimatePresence>
  );
}
