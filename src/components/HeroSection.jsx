import { lazy, Suspense, useEffect, useState } from "react";
import { FaStar, FaYoutube } from "react-icons/fa";
import HeroImg2 from "../assets/dora.webp";
// import DoremonComponent from "./Doremon";

const HeroBottom = lazy(() => import("./HeroBottom"));
const Player = lazy(() => import("./Player"));
const DoremonComponent = lazy(() => import("./Doremon"));

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isPlay, setIsPlay] = useState(false);
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <>
      <div className="min-h-[600px] h-[90vh] center relative ">
        <div className="container pb-20 pt-0 md:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 relative z-10">
            <div className="space-y-3 md:space-y-7 order-2 sm:order-1  flex flex-col justify-center text-center sm:text-left px-10 sm:px-0  ">
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold">
                  Watch Now in
                </h1>
                <h1 className="text-6xl font-bold text-primary">3D</h1>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-gray-500 text-sm font-semibold"
              >
                The first full story in the Doraemon series was published in
                January 1970
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="mx-auto sm:mx-0"
              >
                <button
                  onClick={handlePlay}
                  className="primary-btn center gap-2"
                >
                  Play on
                  <span>
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>

              <div className="relative order-1">
              <Suspense fallback={<div className="text-center text-gray-400">Loading 3D...</div>}>
                <DoremonComponent windowWidth={windowWidth} />
              </Suspense>
            </div>

            <div
              data-aos="slide-left"
              className="sm:pl-16 order-3 md:pl-24 flex justify-center sm:justify-end "
            >
              <div className="flex items-center justify-end">
                <div className="space-y-4">
                  <img
                    src={HeroImg2}
                    alt=""
                    loading="lazy"
                    className="w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200"
                  />
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    4.7{" "}
                    <span>
                      <FaStar className="text-primary" />
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Bandai Figuartszero Doraemont
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={<div>Loading footer...</div>}>
          <HeroBottom />
        </Suspense>
      </div>

      {/* Video Play section */}
      {isPlay && (
        <Suspense fallback={<div>Loading...</div>}>
          <Player handlePlay={handlePlay} />
        </Suspense>
      )}
    </>
  );
};

export default HeroSection;
