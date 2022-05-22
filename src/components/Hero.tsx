import placeholder from '../assets/Layer1.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Hero = ({ title = "Avengers Endgame", score = 10 }) => {
 const getBorderColor = () => {
  if (score >= 7) {
     return 'border-green-400';
  } else if (score > 4 && score < 7) {
    return "border-yellow-400";
  } else {
    return "border-red-400"
  }

 }

 return (
   <header className="relative min-h-screen">
     <img
       className="object-cover object-center h-full w-full"
       src={placeholder}
       alt="capa do filme os vingadores em destaque"
     />
     <article className="absolute bottom-0 mb-64 px-8">
       <p className="text-3xl">Assista agora:</p>
       <h2 className="text-6xl font-bold">{title}</h2>
       <p className="text-base">
         Nota{" "}
         <span
           className={`inline-block mx-2 py-2 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}
         >
           {score}
         </span>
       </p>
       <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
         <FontAwesomeIcon icon={faPlay} className="mr-2" /> Assistir
       </button>
       <button className="text-base py-2 px-8 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
         <FontAwesomeIcon icon={faPlus} className="mr-2" /> Minha Lista
       </button>
     </article>
   </header>
 );
};

export default Hero;