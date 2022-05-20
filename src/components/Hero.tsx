import placeholder from '../assets/Layer1.jpg'

const Hero = () => (
  <header className="min-h-screen">
    <img
      className="object-cover object-center h-full w-full"
      src={placeholder}
      alt="capa do filme os vingadores em destaque"
    />
  </header>
);

export default Hero;