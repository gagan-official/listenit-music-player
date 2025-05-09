import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SongPlayer from "./Components/SongPlayer/SongPlayer";
import RoutePage from "./Components/RoutePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutePage />
      <SongPlayer />
      <Footer />
    </BrowserRouter>
  );
}

export const apiURL =
  process.env.REACT_APP_MODE === "development"
    ? process.env.REACT_APP_LOCAL_API
    : process.env.REACT_APP_SECRET_RENDER_API;

export default App;

// How to deploy a folder inside repo in Netlify:
// https://answers.netlify.com/t/how-to-deploy-a-folder-inside-a-repository-in-github/71320
