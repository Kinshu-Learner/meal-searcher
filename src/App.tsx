import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-lg:hidden">

        <Hero />
      </div>
      <div className="h-[10000px]"></div>
    </>
  );
}

export default App;
