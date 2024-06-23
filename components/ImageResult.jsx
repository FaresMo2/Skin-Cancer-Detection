import ImageComponent from "../reusable-components/ImageComponent";

function ImageResult({ img }) {
  return (
    <li className="border border-gray-200 p-5 rounded-md">
      <ImageComponent src={img} alt="result" />
      <div className="text-center">
        <h2 className="text-lg my-6 font-semibold">
          your type of illness is (type)
        </h2>
        <p className="text-lg">The Result is : (result)</p>
      </div>
    </li>
  );
}

export default ImageResult;
