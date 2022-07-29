import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Carsole from "./components/Carsole";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hotels from "./assets/Hotels";

function App() {
  return (
    <>
      <div className="container mt-0">
        <nav className="fixed-top">
          <div className="container-fluid">
            <Navbar />
            <hr />
            <Carsole />
          </div>
        </nav>

        <Hotels />
      </div>
      <Footer />
    </>
  );
}

export default App;
