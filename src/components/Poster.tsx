import CONST from "../data/contants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import Score from "./Score";

import "./Poster.css";
import { Movie } from "../data/mock";

const Poster = (
  { cover, poster_path, title, name, vote_average }: Movie,
  index: number
) => {
  const { IMAGEURL } = CONST;
  return (
    <article
      className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
      key={index}
    >
      <img
        src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover}
        alt={title}
      />
      <div className="poster cursor-pointer absolute inset-0 w-full h-full py-8 px-4 grid place-items-center text-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
        <h2 className="text-2xl leading-6 ">{title ? title : name}</h2>
        <FontAwesomeIcon icon={faCirclePlay} size="5x" />
        <Score value={vote_average} />
      </div>
    </article>
  );
};

export default Poster;
