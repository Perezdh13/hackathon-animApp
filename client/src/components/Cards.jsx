import "../css/cards.css"
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';



function Cards() {
  let data = JSON.parse(localStorage.getItem("animals")) || []
  const [pets, setPets] = useState([...data]);
  const [species, setSpecies] = useState("");


  console.table(pets)

  useEffect(() => {
    const animalsData = JSON.parse(localStorage.getItem("animals")) || [];
    setPets(animalsData);
  }, []);



  const handleSearch = (e) => {
    e.preventDefault();
    if (species === "") {
      setPets([...data])
    } else {
      const newFilteredData = data.filter((animal) => animal.Species === species);
      setPets(newFilteredData);
    }
  };
  return (


    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Escoge tu animalito</Navbar.Brand>
          <Form className="d-flex ">
            <Form.Select aria-label="Default select example" value={species} onChange={e => setSpecies(e.target.value)}>
              <option value="" ></option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Pez">Pez</option>
              <option value="Reptil">Reptil</option>
              <option value="Roedor">Roedor</option>
            </Form.Select>
            <Button onClick={handleSearch} className='ms-1' variant="warning">Buscar</Button>
          </Form>

        </Container>
      </Navbar>







    <div className="pets-container">
      {pets.map((pet) => (
        <div className="cardi" key={pet.Id}>
          <div className="face front">
            <img src={Object.values(pet.Image)[0]} alt="file not found" />
            <h3>{pet.Name}</h3>
          </div>
          <div className="face back">
            <h3>{pet.Name}</h3>
            <p>{pet.Description}</p>
            <p>Edad: {pet.Age}</p>
            <p>Altura: {pet.Height}</p>
            <div className="link">
                    <a href="./AdoptMe">Adoptame</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards;
