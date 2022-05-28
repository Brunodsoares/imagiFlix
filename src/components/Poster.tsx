import { Movie } from "../data/mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import './Poster.css'

const Poster = ({ cover, title, score }: Movie, index: number) => (
  <article
    className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
    key={index}
  >
    <img src={cover} alt={title} />
    <div className="poster absolute inset-0 w-full h-full grid place-items-center bg-black bg-opacity-75 transition-all duration-500 ease-in-out opacity-0">
      <FontAwesomeIcon icon={faCirclePlay} size="5x" />
      <h2 className="text-2xl">{title}</h2>
    </div>
  </article>
);

export default Poster;
