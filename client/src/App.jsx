import { Header } from "./components/Header/Header";
import { HomeContainer } from "./components/Home/HomeContainer";
import { Footer } from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HomeContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
