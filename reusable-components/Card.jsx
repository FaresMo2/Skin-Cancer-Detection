import { useImages } from "../context/ImagesContext";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function Card() {
  const { index, setIndex, theTypeOfDisease } = useImages();

  function handleNext() {
    setIndex((index) => index + 1);
  }
  function handlePrevious() {
    setIndex((index) => index - 1);
  }

  return (
    <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
      <div className="relative rounded-xl flex flex-col bg-clip-border bg-white text-gray-700 shadow-lg border shadow-gray-500/10 rounded-lgs">
        <div className="bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg relative h-56">
          <img
            alt={`${theTypeOfDisease.img + theTypeOfDisease.id}`}
            src={theTypeOfDisease.img}
            className="h-full w-full"
          />
        </div>
        <div className="p-6">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            TYPE
          </p>
          <h5 className="block antialiased tracking-normal font-sans text-xl leading-snug text-blue-gray-900 mb-3 mt-2 font-bold">
            {theTypeOfDisease.typeName}
          </h5>
          <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500">
            {theTypeOfDisease.description}
          </p>
          <div className="btns flex justify-between items-center mt-8">
            <button
              className="disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={index <= 0}
              onClick={handlePrevious}
            >
              <FaArrowCircleLeft size={30} />
            </button>
            <button
              className="disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={index >= 7}
              onClick={handleNext}
            >
              <FaArrowCircleRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
