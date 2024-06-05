import HomeNew from "./Components/HomeNew";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-body bg-color-body" id="home">
      <Header />
      <HomeNew />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
