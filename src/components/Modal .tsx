import { useEffect, useState } from "react";
import CONST from "../data/contants";
import Score from "./Score";

const Modal = ({
  poster_path,
  title,
  original_title,
  name,
  original_name,
  overview,
  vote_average,
  runtime,
  number_of_seasons,
  video,
}: any) => {
  const { IMAGEURL } = CONST;

  useEffect(() => {
    console.log({
    poster_path,
    title,
    original_title,
    name,
    original_name,
    overview,
    vote_average,
    runtime,
    number_of_seasons,
    video,})
  }, []);
    
  return (
    <div className=" fixed z-10 p-12 top-0 left-0 w-full h-screen grid place-items-center ">
      <article className=" w-full h-full grid grid-flow-col auto-cols-max gap-4 p-4 opacity-80 shadow-lg-2xl bg-black ">
        <img
          src={`${IMAGEURL}/w500/${poster_path}`}
          alt={title ? title : name}
        />
        <div>
            <h2 className="text-3xl font-bold">{title ? title : name}</h2>
            <h6 className="font-bold">{original_title ? original_title : original_name}</h6>
            <p>{overview}</p> 
            <Score value={vote_average} />
            <span>{runtime ? `${runtime}min` : `${number_of_seasons}temporadas`}</span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
