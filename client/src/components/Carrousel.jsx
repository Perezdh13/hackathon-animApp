import Carousel from 'react-bootstrap/Carousel';
import img1 from "../img/a7ed1cb4-3211-4ed3-bd6b-78b796f1c5de.jpg";
import "../css/carousel.css";
import pets from '../json/fakeAPI'; // importamos la lista de objetos de mascotas


function Carrousel() {
  return (
    
    <div className="fluid">

      <Carousel>
      {pets.map(pet => (
        <Carousel.Item key={pet.Id}>
          <img
            className="d-block w-100 img-car"
            src={Object.values(pet.Image)[0]}
            alt={pet.Name}
          />
          <Carousel.Caption>
            <h3>{pet.Name}</h3>
            <p>{pet.Description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    
  );
}

export default Carrousel;