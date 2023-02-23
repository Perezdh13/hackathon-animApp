import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
import SingleAnimal from './components/SingleAnimal';
import Contact from './components/Contact';
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<><Search/> </>
    },
    {
      path:"/singleAnimal",
      element:<> <HeaderBar/> <SingleAnimal/> <FooterBar/> </>
    },
    {
      path:"/",
      element:<>   </>
    },
  ])

  return (
    <div className="App">
      
     
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
