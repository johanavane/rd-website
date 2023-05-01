import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Pricing />
      <Gallery />
      <Schedule />
    </div>
  );
}

export default App;
