import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import "swiper/css";
import ImageComponent from "../reusable-components/ImageComponent";
import { useImages } from "../context/ImagesContext";
import axios from "axios"; // Import Axios
import { toast } from "react-toastify";

function UploadImage() {
  const { handlePhotoChange } = useImages();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const apiUrl = "https://169f-34-32-158-43.ngrok-free.app/";

  const handleUpload = async () => {
    if (!uploadedImage) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", uploadedImage);

      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.warning("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const onPhotoChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      setUploadedImage(file); // Set the uploaded image state
      handlePhotoChange(file); // Adapt this based on your context method
    }
  };

  return (
    <div
      id="uploadImage"
      className="py-16 my-40 bg-zinc-200 shadow-custom-dark up-img"
    >
      <h1 className="mb-12 text-5xl font-bold text-center">
        Upload and share your image.
      </h1>
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center w-full">
          {!uploadedImage ? (
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100"
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
                onChange={onPhotoChange}
                accept="image/*"
              />
            </label>
          ) : (
            <div className="relative m-2 overflow-hidden border border-gray-200 rounded cursor-pointer group shadow-custom-dark">
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute transition-all duration-300 opacity-0 right-3 top-3 group-hover:opacity-100 group-hover:rotate-12"
              >
                <MdDeleteSweep size={30} className="text-red-500" />
              </button>
              <ImageComponent
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded"
                className="object-cover w-full h-full bg-center"
              />
            </div>
          )}
        </div>
        {uploadedImage && (
          <button
            onClick={handleUpload}
            className="py-3 mt-10 text-lg font-bold text-white bg-blue-500 rounded-lg px-7"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Start Detection"}
          </button>
        )}
      </div>
    </div>
  );
}

export default UploadImage;
