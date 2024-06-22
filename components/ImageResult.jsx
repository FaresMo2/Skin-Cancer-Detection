import ImageComponent from "../reusable-components/ImageComponent";

function ImageResult() {
  return (
    <li className="border border-gray-200 p-5 rounded-md">
      <ImageComponent src="/sc-type.jpg" alt="result" />
      <div className="text-center">
        <h2 className="text-lg mb-6 font-semibold">
          your type of illness is (type)
        </h2>
        <p className="text-lg">The Result is : (result)</p>
      </div>
    </li>
  );
}

export default ImageResult;
