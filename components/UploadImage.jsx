import { MdDeleteSweep } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageComponent from "../reusable-components/ImageComponent";
import { useImages } from "../context/ImagesContext";

function UploadImage() {
  const { upLoadImages, handlePhotoChange, handleDelete } = useImages();

  return (
    <div id="uploadImage" className="up-img my-56">
      <h1 className="text-center font-bold text-5xl mb-12">
        Upload and share your images.
      </h1>
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 ">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handlePhotoChange}
              multiple
            />
          </label>
        </div>
        <div className="imgContainer relative flex flex-wrap justify-center mt-6 border border-gray-200 min-h-72 rounded-md">
          {upLoadImages.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={upLoadImages.length <= 5 ? upLoadImages.length : 5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {upLoadImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative m-2 rounded overflow-hidden group cursor-pointer"
                    style={{ width: "300px", height: "300px" }}
                  >
                    <button
                      onClick={() => handleDelete(index)}
                      className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300"
                    >
                      <MdDeleteSweep size={30} className="text-red-500" />
                    </button>
                    <ImageComponent
                      src={img}
                      alt={`Uploaded ${index + 1}`}
                      className="object-cover w-full h-full bg-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <br />
              <br />
            </Swiper>
          ) : (
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-gray-400">
              Your Images Will Display here ▶️
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
