import { FaEnvelope } from "react-icons/fa";
import TRUPTI from "../assets/trupti-2.png";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload, MdOpenInBrowser } from "react-icons/md";
import { SectionWrapper } from "../hoc";
const Hero = () => {
  return (
    <section className="relative w-full h-full flex items-start md:mt-16 justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">Trupti Yadav</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">
              Full Stack Developer from India.
            </span>
          </h1>

          <div className="my-12 flex items-center gap-5">
            <a
              href="https://github.com/Trupti0406"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/trupti-yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </a>
            <a
              href="mailto:truptivijayyadav27@gmail.com"
              className="transition-all text-pink-500 hover:scale-125 duration-300">
              <FaEnvelope size={30} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href="/#contact">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-lg border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1c95ydpLBNIVJxeWD-PMWn79pRaGLkiYU/view?usp=sharing"
              className="flex items-center gap-1 hover:gap-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank">
              <span>View Resume</span>
              <MdOpenInBrowser size={16} />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="hidden md:flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="hidden md:block px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className=" overflow-hidden border-t-[2px] border-indigo-900 flex justify-center">
            <code>
              <img src={TRUPTI} alt="Hero" className="w-60 md:w-auto" />
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");
