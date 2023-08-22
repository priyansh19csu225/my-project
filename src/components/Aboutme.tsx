import Image from "next/image";
import image from "../../images/working.png";

function Aboutme() {
  return (
    <div id="about-me" className="relative bg-gray-900">
      <div className="barber-pic absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10"></div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
          <h2 className="text-center max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
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
              <span className="relative">About</span>
            </span>{" "}
            Me
          </h2>
          <div className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 p-2 flex items-center">
              {/* <img alt="Raul" loading="lazy" width="500" height="333" decoding="async" data-nimg="1" className="mx-auto rounded-lg border border-gray-800 shadow-md" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture.3e4a1241.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture.3e4a1241.png&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture.3e4a1241.png&amp;w=1080&amp;q=75"> */}
              <Image
      src={image}
      width={380}
      // height={500}
      alt="working"
      // className="mix-blend-multiply"
    />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-2 py-8">
              <p className="text-base text-gray-400 md:text-lg">
              I'm Priyansh, a talented full stack developer from Gurugram, Haryana, India. I have done my major in Computer Science and Engineering from The NorthCap University (2019-2023). I am extremely motivated and passionate towards learning new skills and gain knowledge about different topics related to computer science. It's not just a career, but a lifelong interest :)
              </p>
              <p className="mt-4 text-base text-gray-400 md:text-lg">
              Besides coding, I love engaging in fun activities like playing basketball and badminton. When I'm indoors, I find solace in music and online gaming. Gaming not only helps me unwind but also fuels my creativity, making it the perfect source of inspiration for my work.
             
              </p>
              <p className="mt-4 text-base text-gray-400 md:text-lg">
              In addition to my technical skills, I am a strong believer in teamwork and collaboration. I thrive in dynamic environments where I can contribute my ideas and learn from others. With a keen eye for detail and a problem-solving mindset, I am constantly seeking opportunities to refine my coding abilities and deliver high-quality solutions. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
