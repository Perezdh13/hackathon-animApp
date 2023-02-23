import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import './css/footer.css';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
import SingleAnimal from './components/SingleAnimal';
import '../src/css/App.css';
import AboutMe  from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
        element:<><HeaderBar/><Carrousel/><Search/><FooterBar/></>
    },
    {
      path:"/about",
      element:<> <HeaderBar /> <AboutMe />  </>
    },
  
  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;

