
import logo from "../assets/logo-imagiflix.png";
import placeholderUser from "../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";


const NavBar = () => (
  <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
    <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
      <h1 className="hidden">Imagiflix</h1>
      <img src={logo} alt="logomarca de nome imagiflix" />

      <ul className="grid grid-flow-col gap-4">
        <li className="font-bold">Inicio</li>
        <li>
          <a href="#series">Séries</a>
        </li>
        <li>
          <a href="#movies">Filmes</a>
        </li>
      </ul>
    </div>

    <div className="justify-self-end flex justify-items-end items-center">
      <form className="relative w-64">
        <input
          className="w-full bg-black border rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
          type="text"
          placeholder="Titulos, gente e gênero"
        />
        <button className="search absolute right-0 py-1 px-2" 
        onClick={ (e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="flex ml-4">
        <img src={placeholderUser} alt="foto de usuário" />
        <button>
          <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
        </button>
        <ul className="hidden">
          <li>
            <a href="#account">Minha conta</a>
          </li>
          <li>
            <a href="#logout">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
