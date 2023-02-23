import Carousel from 'react-bootstrap/Carousel';
import "../css/carousel.css";
import pets from '../json/fakeAPI'; 


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
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    
  );
}

export default Carrousel;