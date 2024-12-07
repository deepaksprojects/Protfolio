import Link from "next/link";
import {
  FaAndroid,
  FaCss3,
  FaDatabase,
  FaDownload,
  FaFire,
  FaGit,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-indigo-600">codezz</h1>
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
                href="#blogs"
                className="text-gray-300 hover:text-indigo-500"
              >
                Blogs
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
