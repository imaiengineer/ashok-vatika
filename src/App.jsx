import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import MapEmbed from "./components/MapEmbed";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonial";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <MapEmbed />
      </main>
      <Footer>
        <Footer />
      </Footer>
    </>
  );
}
