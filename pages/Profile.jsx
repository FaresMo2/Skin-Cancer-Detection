import NavSign from "../components/NavSign";
import { useImages } from "../context/ImagesContext";
import ImageResult from "../components/ImageResult";
import PersonalInfo from "../components/PersonalInfo";
import { Link } from "react-router-dom";

export default function Profile() {
  const { upLoadImages } = useImages();

  return (
    <>
      <NavSign />
      <div className="h-full mt-10">
        <div className="block md:flex mb-8">
          <PersonalInfo />
          <div className="flex justify-center items-center ml-60">
            <p className="block antialiased font-sans text-sm leading-normal font-medium text-white px-6 py-3 rounded bg-gray-900">
              <Link to="/change-password/:userId">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="album container mx-auto mt-10">
        <h1 className="inline-flex  items-center justify-center px-6 py-3 text-xl font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
          The Analysis&apos; Results
        </h1>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-20 mt-14">
          {upLoadImages.map((img, index) => (
            <ImageResult key={index} img={img} upLoadImages={upLoadImages} />
          ))}
        </ul>
      </div>
    </>
  );
}
