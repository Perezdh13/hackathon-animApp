import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddAnimals from "./components/AddAnimals";
import FooterBar from "./components/FooterBar";
import Search from "./components/Search";
import Carrousel from "./components/Carrousel";
import HomePage from "./components/HomePage";
import HeaderBar from "./components/HeaderBar";
import SingleAnimal from "./components/SingleAnimal";
import Contact from "./components/Contact";
import "../src/css/App.css";
import AboutMe from "./components/AboutMe";
import { ReportarAbuso } from "./components/ReportarAbuso";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HeaderBar /> <AddAnimals />{" "}
        </>
      ),
    },
    {
      path: "/about",
      element: <> </>,
    },
    {
      path: "/reportarabuso",
      element: (
        <>
          {" "}
          <ReportarAbuso />{" "}
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
