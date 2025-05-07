import React from "react";
import { useRouter } from "next/router";

import useMovie from "../../hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  console.log("movieId", movieId);
  const { data } = useMovie(movieId as string);
  console.log("data", data);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full z-10 p-4 flex flex-row items-center gap-8 bg-black/70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer hover:opacity-70 transition"
          size={40}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light mr-0.5">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className="h-full w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
