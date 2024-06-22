import { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import Card from "../reusable-components/Card";
import { useImages } from "../context/ImagesContext";

function TypeOfDisease() {
  const { theTypeOfDisease } = useImages();
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to truncate text
  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };

  // Length to which you want to truncate the description
  const truncateLength = 70;

  return (
    <div className="container mx-auto mt-32 flex flex-wrap items-center">
      <div className="mx-auto -mt-8 w-full px-4 md:w-4/12">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-icon p-2 text-center shadow-lg">
          <FaFingerprint className="h-8 w-8 text-white" />
        </div>
        <h3 className="block antialiased tracking-normal font-sans text-3xl leading-snug text-blue-gray-900 mb-3 font-bold">
          Checking up on your health now
        </h3>
        <p className="block antialiased font-sans text-base leading-relaxed mb-8 font-normal text-blue-gray-500">
          Always ensure the safety of your health, and that is why we designed
          the skinSafe website for you to always reassure yourself.
          <br />
          <br />
          {isExpanded
            ? theTypeOfDisease.description
            : truncateText(theTypeOfDisease.description, truncateLength)}
        </p>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "read less" : "read more"}
        </button>
      </div>
      <Card src="/sc-type.jpg" />
    </div>
  );
}

export default TypeOfDisease;
