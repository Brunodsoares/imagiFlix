import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="m-auto bg-black text-white antialised font-sans">
      <Hero />
      <NavBar />
    </div>
  );
}

export default App;
