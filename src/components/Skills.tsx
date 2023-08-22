import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup , faCode , faTools  } from "@fortawesome/free-solid-svg-icons";

export function Skills() {
  return (
    <div id="skills" className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
              <span className="relative">My Skills</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            
                 <FontAwesomeIcon
              icon={faLayerGroup}
              className="fab fa-html5 text-4xl text-blue-700 "
            />
            </div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 text-black">
              FrontEnd
            </h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">HTML</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">CSS</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              JavaScript
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">React</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Redux</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Angular
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              TailwindCSS
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Bootstrap
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              jQuery
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              MaterialUI
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <FontAwesomeIcon
              icon={faCode}
              className="fab fa-html5 text-4xl text-blue-700 "
            />
            </div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 text-black">
              BackEnd
            </h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              NodeJS
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Express
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">MySQL</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              MongoDB
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Mongoose
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              RestAPI
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Java
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Spring MVC
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Spring Boot
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Spring Security
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24">
            <FontAwesomeIcon
              icon={faTools}
              className="fab fa-html5 text-4xl text-blue-700 "
            />
            </div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4 text-black">
              Tools
            </h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Git</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              GitHub
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Heroku
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Netlify
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              VSCode
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Postman
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Vercel
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              Docker
            </p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">SEO</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">
              IntelliJ
            </p>
          </div>
        </div>
        </div>
    </div>
  );
}
