import "./App.css";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import Menu from "./pages/menu/Menu";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
