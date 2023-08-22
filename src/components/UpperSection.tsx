import Image from "next/image";
import image from "../../images/me.png";

export default function UpperSection() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h1 className="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none max-w-lg mb-6">
                Hi there, I'm{" "}
                <span className="inline-block text-blue-500">Priyansh</span>
              </h1>
              <h2 className="text-gray-700 text-base md:text-lg">
                I'm a Full Stack Web Developer based in Gurugram, Haryana, India.
              </h2>
            </div>
            <a
              href="#about-me"
              className="items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700"
            >
              About Me
            </a>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="flex w-full relative">
            <Image
      src={image}
      width={1000}
      height={1000}
      alt="me"
      className="mix-blend-multiply"
    />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
