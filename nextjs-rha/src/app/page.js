import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <Pricing />
      <Schedule />
      <Gallery />
      <Footer />
    </div>
  );
}
