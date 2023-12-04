import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";
import Tours from "./Components/Tours";

export default function App() {
  return (
    <>
     <NavBar/>
     <Hero/>
     <About />
     <Service />
     <Tours />
     <Footer />
    </>
  );
}

