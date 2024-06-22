import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import ImageComponent from "../reusable-components/ImageComponent";

function TeamCard({ name, Specialization, src }) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center">
      <ImageComponent
        src={src}
        alt={name}
        className="inline-block relative object-cover object-center rounded-2xl h-full w-full shadow-lg shadow-gray-500/25"
      />
      <h5 className="block antialiased tracking-normal font-sans text-xl font-bold leading-snug text-blue-gray-900 mt-6 mb-1">
        {name}
      </h5>
      <p className="block antialiased font-sans text-base leading-relaxed font-bold text-register">
        {Specialization}
      </p>
      <div className="mx-auto mt-5">
        <div className="flex items-center gap-2">
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-light-blue-500 hover:bg-light-blue-500/10 active:bg-light-blue-500/30"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <FaTwitter className="text-xl" />
            </span>
          </button>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <FaLinkedin className="text-xl" />
            </span>
          </button>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-black hover:bg-pink-500/10 active:bg-pink-500/30"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <FaGithub className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
