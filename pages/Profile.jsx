import NavSign from "../components/NavSign";
import { useImages } from "../context/ImagesContext";
import ImageResult from "../components/ImageResult";
import PersonalInfo from "../components/PersonalInfo";

export default function Profile() {
  const { upLoadImages } = useImages();

  return (
    <>
      <NavSign />
      <div className="h-full mt-10">
        <div className="block md:flex mb-8">
          <PersonalInfo />
        </div>
      </div>

      <hr />

      <div className="album container mx-auto mt-10">
        <h2 className="font-bold text-3xl border-b border-gray-500 pb-2 w-fit">
          Results
        </h2>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-14 mt-14">
          {upLoadImages.map((img, index) => (
            <ImageResult key={index} img={img} />
          ))}
        </ul>
      </div>
    </>
  );
}
