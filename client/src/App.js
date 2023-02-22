import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AddAnimals from './components/AddAnimals';
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import '../src/css/contact.css'

function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<><HeaderBar /> <AddAnimals/></>
    },
    {
      path:"/",
      element:<>   </>
    },
    {
      path:"/",
      element:<>   </>
    },
  ])

  return (
    <div className="App">
      <h1>animApp </h1>
      <Contact></Contact>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
