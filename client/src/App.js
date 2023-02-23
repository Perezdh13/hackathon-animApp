import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
<<<<<<< HEAD
import HeaderBar from './components/HeaderBar'
=======
>>>>>>> 65d1b000919961d0505568dccc4d16a00b9b7b30
import SingleAnimal from './components/SingleAnimal';
import '../src/css/App.css';
import AboutMe  from './components/AboutMe';
<<<<<<< HEAD
import  ReportarAbuso  from './components/ReportarAbuso';
=======
import ReportarAbuso  from './components/ReportarAbuso';
>>>>>>> 65d1b000919961d0505568dccc4d16a00b9b7b30
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
<<<<<<< HEAD
      element:<><Carrousel/><Search/><HomePage/><FooterBar/> </>
=======
      element:<><HeaderBar /> <Carrousel/><Search/>  </>
>>>>>>> 65d1b000919961d0505568dccc4d16a00b9b7b30
    },
    {
      path:"/about",
      element:<> <HeaderBar /> <AboutMe />  </>
    },
    {
      path: "/reportarabuso",
      element: <> <ReportarAbuso/> </>
    },
  ]);

  return (
    <div className="App">
     
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
