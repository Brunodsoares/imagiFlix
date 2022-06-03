import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    const today = new Date();

    return (
      <footer className="mt-32 px-12 pb-4 text-white opacity-40">
        <FontAwesomeIcon className="mr-4" icon={faFacebook} size="2x" />
        <FontAwesomeIcon className="mr-4" icon={faInstagram} size="2x" />
        <FontAwesomeIcon className="mr-4" icon={faTwitter} size="2x" />
        <FontAwesomeIcon className="mr-4" icon={faYoutube} size="2x" />
        <div className="grid grid-cols-4 gap-2 my-8 ">
          <a href="#">Idiomas e legendas</a>
          <a href="#">Audiodescrição</a>
          <a href="#">Centro de ajuda</a>
          <a href="#">Cartão pré-pago</a>
          <a href="#">Impresa</a>
          <a href="#">Relação com investidores</a>
          <a href="#">Carreiras</a>
          <a href="#">Termos de uso</a>
          <a href="#">Privacidade</a>
          <a href="#">Avisos legais</a>
          <a href="#">Preferências de cookies</a>
          <a href="#">Informações corporativas</a>
          <a href="#">Entre em contato</a>
        </div>
        <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
      </footer>
    );
};

export default Footer;