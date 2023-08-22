
import YoutubeEmbed from "./YoutubeEmbed";
import DemoAccount from "./DemoAccount";


  const projects = [
    {
      id: 1,
      name: "ReadMaster",
      description: "A speed reading website with minimal UI design, where user can speed read custom text of their choice or select from a bunch of comprehensions. Website provides easy login with support of Auth0, and insights over their past results.",
      demoAccount: {
        email: "testuser@gmail.com",
        password: "Testuser@123",
      },
      videoFileName: "bjN5AwiCu1o",
      technologies: ["React", "Redux",  "Auth0", "Material UI", "Node.js", "Express.js", "MongoDB" , "HTML" ,"CSS" , "JavaScript" ,"Netlify", "Azure"  ],
      liveDemoLink: "https://readmaster.netlify.app/",
      sourceCodeLink: "https://github.com/priyansh19csu225/speed-reader",
    },
    {
      id: 2,
      name: "RedStore",
      description: "It's an online clothing webstore made using React and Node.js with integration of stripe. Anybody can register/login, select their desired clothes, select clothes color and size, add them to cart and pay with secure trusted payment gateway stripe for quick checkout. It's that simple.",
      demoAccount: {
        email: "milliah@gmail.com",
        password: "Millie",
      },
      videoFileName: "PFhUwJGze0w",
      technologies: ["React", "Redux",  "Stripe", "Styled Components", "Material UI Icons", "Node.js", "Express.js", "MongoDB" , "HTML" ,"CSS" , "JavaScript" ,"Netlify" , "Vercel" ],
      liveDemoLink: "https://redstore-clothing.netlify.app/",
      sourceCodeLink: "https://github.com/priyansh19csu225/react-clothing-store",
    },
    {
      id: 3,
      name: "Frulenco",
      description: "A web application with Spring web MVC, Spring security, Hibernate and MySQL for buying furniture.I created various services using Spring annotations for user and admin.",
      demoAccount: {
        email: "Priyansh",
        password: "priyansh",
      },
      videoFileName: "2dQK-8ejpDc",
      technologies: ["Spring Framework", "Spring Web MVC" , "Spring security" , "Hibernate", "Tomcat", "Eclipse" , "JSP", "JSTL" , "MySQL" , "CSS", "BootStrap", "Azure" ],
      liveDemoLink: "https://frulenco.azurewebsites.net/",
      sourceCodeLink: "https://github.com/priyansh19csu225/Frulenco",
    },
  ];

export default function Projects() {
  
  return (
    <div id="projects" className="bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <span className="relative">Projects</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 flex flex-col overflow-hidden transition-shadow duration-300 rounded shadow-md"
            >
              {/* <Image src={project.image} height={500} alt="working" /> */}
              
              {/* <div
       
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(-1)}
      >
        
        <video className="w-full h-auto"  autoPlay loop muted {...(hoveredIndex === index) && {
                controls: true,
                controlsList: 'nodownload noplaybackrate',
                disableRemotePlayback: true,
                disablePictureInPicture: true,
              }}> 
              <source src={`/videos/${project.videoFileName}`} type="video/mp4" />
        </video> 
      </div> */}
      <YoutubeEmbed videoLink={project.videoFileName} />
     
              <div className="p-5 flex flex-col bg-white flex-1">
                <h1 className="text-gray-900 inline-block mb-3 text-2xl font-bold leading-7 ">
                  {project.name}
                </h1>
                <p className="mb-2 text-gray-700">{project.description}</p>
                {project.demoAccount && <DemoAccount email={project.demoAccount.email} password={project.demoAccount.password} />}
                <div className="flex flex-wrap space-x-2 mt-5">
                  <h2 className="inline-block text-gray-600 mb-3 text-xl font-bold leading-5">
                    Technologies:
                  </h2>
                  {project.technologies.map((technology, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap space-x-2 mt-5">
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="text-gray-900 inline-flex px-4 py-2 items-center transform font-semibold border transition duration-300 hover:scale-105 shadow hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className="inline-flex bg-blue-500 hover:bg-blue-700 shadow hover:shadow-lg px-4 py-2 items-center font-semibold transition duration-300 hover:scale-105 text-white"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
