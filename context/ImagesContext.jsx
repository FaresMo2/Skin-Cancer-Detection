import { createContext, useContext, useState, useEffect } from "react";

const skinCancerTypes = [
  {
    id: 1,
    typeName: "Actinic keratosis",
    description:
      "is the most common precancer that forms on skin damaged bychronic exposure to ultraviolet (UV) rays from the sun and/orindoor tanning",
    img: "../public/sc-type.jpg",
  },
  {
    id: 2,
    typeName: "Basal cell carcinoma",
    description:
      "is a type of skin cancer that originates in the basal cells,which produce new skin cells as old ones die off. It often appears as a slightly transparent bump on the skin, although it can take other forms",
    img: "../public/sc-type.jpg",
  },
  {
    id: 3,
    typeName: "Dermatofibroma",
    description:
      "are small, non-cancerous growths that appear on the skin.Appearance: Dermatofibromas present as round bumps that are mostly under the skin. They can vary in color but are typically pink to light brown in light skin and dark brown or black in dark skin. If accidentally irritated (for example,during shaving), they may appear more pink or darker.",
    img: "../public/sc-type.jpg",
  },
  {
    id: 4,
    typeName: "Melanoma",
    description:
      "is the most dangerous type of skin cancer; it develops from the melanin-producing cells known as melanocytes.[1] It typically occurs in the skin, but may rarely occur in the mouth, intestines, or eye (uveal melanoma).[1][2] In women,melanomas most commonly occur on the legs; while in men, on the back.[2] Melanoma is frequently referred to as malignant melanoma",
    img: "../public/sc-type.jpg",
  },
  {
    id: 5,
    typeName: "Nevus",
    description:
      "is a benign (noncancerous) melanocytic tumor, more commonly called a mole. Nevi (the plural of nevus) are not usuallypresent at birth but begin to appear in children andteenagers. Most moles will never cause any problems, but aperson who has 50 or more moles is more likely to developmelanoma, the most aggressive form of skin cancer",
    img: "../public/sc-type.jpg",
  },
  {
    id: 6,
    typeName: "Pigmented Benign keratosis",
    description:
      "also known as actinic keratosis or solar keratosis, is a common skin condition characterized by rough, scaly patches or bumps on the skin.",
    img: "../public/sc-type.jpg",
  },
  {
    id: 7,
    typeName: "Seborrheic keratosis",
    description:
      "is a common benign skin growth that typically appears in middle-aged or older individuals. It is also known as seborrheic warts or basal cell papillomas. These growths are non-cancerous and do not pose a serious health risk",
    img: "../public/sc-type.jpg",
  },
  {
    id: 8,
    typeName: "Vascular Lesion",
    description:
      "are abnormalities that affect the blood vessels in the body, including the arteries, veins, and capillaries. These lesions can occur anywhere in the body and can vary in size, shape, and severity",
    img: "../public/sc-type.jpg",
  },
];

const ImagesContext = createContext();

function ImagesProvider({ children }) {
  const [upLoadImages, setupLoadImages] = useState([]);
  const [index, setIndex] = useState(0);
  const theTypeOfDisease = skinCancerTypes[index];

  useEffect(() => {
    // Load images from localStorage if available
    const storedImages = JSON.parse(localStorage.getItem("upLoadImages"));
    if (storedImages) {
      setupLoadImages(storedImages);
    }
  }, []);

  const handlePhotoChange = (e) => {
    const files = e.target.files;
    const newupLoadImages = [...upLoadImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newupLoadImages.push(reader.result);
        setupLoadImages([...newupLoadImages]);
        localStorage.setItem("upLoadImages", JSON.stringify(newupLoadImages)); // Save to localStorage
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedImages = upLoadImages.filter(
      (_, index) => indexToDelete !== index
    );
    setupLoadImages(updatedImages);
    localStorage.setItem("upLoadImages", JSON.stringify(updatedImages)); // Update localStorage
  };

  return (
    <ImagesContext.Provider
      value={{
        upLoadImages,
        handlePhotoChange,
        handleDelete,
        index,
        setIndex,
        theTypeOfDisease,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

function useImages() {
  const context = useContext(ImagesContext);
  if (context === undefined)
    throw new Error("ImagesContext was used out of the ImagesProvider");

  return context;
}

export { ImagesProvider, useImages };
