import "./App.css";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <HomePage />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
