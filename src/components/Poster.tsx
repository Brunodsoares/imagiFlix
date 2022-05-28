import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import Score from "./Score";

import './Poster.css'
import { Movie } from "../data/mock";

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster cursor-pointer absolute inset-0 w-full h-full py-8 px-4 grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faCirclePlay} size="5x" />
      <h2 className="text-2xl">{title}</h2>
      <Score value={score} />
    </div>
  </article>
);

export default Poster;
