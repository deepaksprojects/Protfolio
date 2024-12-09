import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-indigo-500">
          codezz
        </Link>
        <nav>
          <ul className="flex space-x-6 md:space-x-8 justify-center  ">
            <li>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-indigo-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-indigo-500"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-gray-300 hover:text-indigo-500"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="text-white flex items-center space-x-2 hover:text-green-500"
              >
                <span>Know More</span>
                <FaDownload />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
