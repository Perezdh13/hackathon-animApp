import Carousel from 'react-bootstrap/Carousel';
import img1 from "../img/a7ed1cb4-3211-4ed3-bd6b-78b796f1c5de.jpg";
import "../css/carousel.css";


function Carrousel() {
  return (
    
    <div className="fluid">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-car"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-car"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-car"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Carrousel;