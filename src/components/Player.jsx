import { IoClose } from "react-icons/io5";

const Player = ({handlePlay}) => {
  return (
    <div className="absolute z-[99999] top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm">
      <div className="center h-full">
        <div className="bg-white m-3 p-5 rounded-lg shadow-md w-full sm:w-[500px]">
          <div className="pb-3 flex justify-between">
            <h1 className="sm:text-xl font-bold ">
              Subscribe our TCJ youtube channel
            </h1>
            <IoClose
              className="text-3xl cursor-pointer hover:scale-110 duration-200"
              onClick={handlePlay}
            />
          </div>
          <iframe
            width="100%"
            height="260"
            src="https://www.youtube.com/embed/i9e9Xz4OHig?si=rZ_k0qUIcjUIPUH_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Player;
