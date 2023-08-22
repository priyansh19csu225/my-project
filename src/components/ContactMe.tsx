import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope   } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContactMe() {
  return (
    <div    id="contact-me" className="bg-white">

    <div
   
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span className="relative">Contact Me</span>
          </span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <a
          href="mailto:priyanshgupta325@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label=""
        >
          <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col items-center  mb-2 lg:flex-row">
                <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                 
                  
                 <FontAwesomeIcon
              icon={faEnvelope}
              className="fa-solid fa-envelope text-blue-700 text-3xl "
            />
                </div>
                <h6 className="font-semibold leading-5">Email</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                Let's get in touch.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/priyanszh/"
          target="_blank"
          rel="noreferrer"
          aria-label=""
        >
          <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col items-center  mb-2 lg:flex-row">
                <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                
                  <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-brands fa-linkedin text-blue-700 text-3xl "
            />
                  
                </div>
                <h6 className="font-semibold leading-5">LinkedIn</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                Let's connect.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/priyansh19csu225"
          target="_blank"
          rel="noreferrer"
          aria-label=""
        >
          <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col items-center  mb-2 lg:flex-row">
                <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <FontAwesomeIcon
              icon={faGithub}
              className="fa-brands fa-github text-blue-700 text-3xl "
            />
                  
                </div>
                <h6 className="font-semibold leading-5">GitHub</h6>
              </div>
              <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">
                Check out my repos.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>

  );
}
