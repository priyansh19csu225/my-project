
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="relative bg-gray-900 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            aria-label="PriyanshWebDev"
            title="PriyanshWebDev"
            className="inline-flex items-center"
            href="/"
          >
            <FontAwesomeIcon
              icon={faCubesStacked}
              className="fa-solid fa-layer-group mr-2 text-2xl text-blue-500 "
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              PriyanshWebDev
            </span>
          </a>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="#about-me"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/11MOpAgOUjtAIlA-Y8Js4EUqmdDqP2yHw/view?usp=sharing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="#contact-me"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                Contact Me
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <a href="#popup1">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded"
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
              </a>
            <div id="popup1" className="overlay">
              <div className="popup">
                <div className="flex justify-end ">
                 <div>
                  <a href="#" className="close">
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline close"
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                    </a>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#about-me"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-200"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a
                        href="#skills"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-200"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-200"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/11MOpAgOUjtAIlA-Y8Js4EUqmdDqP2yHw/view?usp=sharing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-200"
                        target="_blank"
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-me"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                      >
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
