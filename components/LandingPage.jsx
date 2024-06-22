import Features from "./Features";

function LandingPage() {
  return (
    <div className="relative mb-64 flex h-screen content-center items-center justify-center pt-16 pb-32">
      <Features />
      <div className="absolute top-0 h-full w-full">
        <video
          className="absolute top-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/landing-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-0 h-full w-full bg-black/80 bg-cover bg-center"></div>
      <div className="max-w-8xl container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white mb-6 font-black">
              Skin Cancer Detection
            </h1>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-80s">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necess
              voluptates, ut dolorum odit asperiores. Perspiciatis sed soluta,
              debitis quam illum omnis Perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
