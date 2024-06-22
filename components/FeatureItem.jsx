import { TbMessage } from "react-icons/tb";

function FeatureItem({ feature }) {
  return (
    <li className="flex flex-col bg-clip-border bg-white text-gray-700 rounded-lg shadow-lg shadow-gray-500/10">
      <div className="p-8 px-8 text-center">
        <span className="flex justify-center items-center rounded-full w-12 h-12 ml-auto mr-auto mb-4 bg-icon ">
          <TbMessage className="icon text-white" size={24} />
        </span>
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          {feature.title}
        </h5>
        <p className="font-sans leading-relaxed font-normal text-blue-gray-600 text-base">
          {feature.description}
        </p>
      </div>
    </li>
  );
}

export default FeatureItem;
