import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "80vh" }}></main>
      <Footer />
    </div>
  );
}

export default App;
