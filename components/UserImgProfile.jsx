import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ImageComponent from "../reusable-components/ImageComponent";

function UserImgProfile() {
  const { user } = useAuth();

  const [profilePhoto, setProfilePhoto] = useState(user?.profileImg || ""); // Initial profile photo

  const handleButtonClick = () => {
    document.getElementById("file-input").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold block">User Profile</span>
        <button
          className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
          id="edit-button"
          onClick={handleButtonClick}
          aria-label="Edit profile picture"
        >
          Edit
        </button>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <span className="text-gray-600">
        This information is secret so be careful
      </span>
      <div className="w-full p-8 mx-2 flex justify-center">
        <ImageComponent
          src={profilePhoto}
          alt="profile-img"
          className="max-w-xs w-32 items-center border"
        />
      </div>
    </div>
  );
}

export default UserImgProfile;
