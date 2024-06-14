import { Header } from "./components/Header/Header";
import { HomeContainer } from "./components/Home/HomeContainer";
import { Footer } from "./components/footer/Footer";
import { UserLogic } from "./components/user/UserLogic";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <UserLogic />
        {/* <Header />
        <HomeContainer /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
