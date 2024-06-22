import HomePageNav from "../components/HomePageNav";
import { Link } from "react-router-dom";
import ImageComponent from "../reusable-components/ImageComponent";

function HomePage() {
  return (
    <>
      <HomePageNav />
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full">
          <ImageComponent
            src="/homePage.jpg"
            alt="homepage"
            className="absolute top-0 h-full w-full object-cover"
          />
        </div>
        <div className="absolute top-0 h-full w-full bg-black/90 bg-cover bg-center"></div>
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white mb-6 font-black">
                Welcome to SkinSafe
              </h1>
              <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-80s">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum, quos, magni molestiae corrupti in, culpa explicabo
                facere nesciunt eum veniam ex? Odio dicta commodi est numquam
              </p>
              <Link
                to="/login"
                className="inline-block text-white mt-20 py-3 px-7 border border-gray-200 font-bold transition duration-300 hover:bg-slate-100 hover:text-black"
              >
                Start Checking now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
