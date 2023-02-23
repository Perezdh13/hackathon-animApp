import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

let data = JSON.parse(localStorage.getItem("animals")) || []



const Search = () => {

  const [pets, setPets] = useState([...data]);
  const [species, setSpecies] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
   
    const animalsData = JSON.parse(localStorage.getItem("animals")) || [];
    setPets(animalsData);
  }, []);



  const handleSearch = (e) => {
    e.preventDefault();
    
    const newFilteredData = data.filter((animal) => animal.species === species);
    setFilteredData(newFilteredData);
  };
  console.table(filteredData)
  
  return (

    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Escoge tu animalito</Navbar.Brand>    
          <Form className="d-flex ">
          <Form.Select aria-label="Default select example"  value={species} onChange={e => setSpecies(e.target.value)}>
                        <option></option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Pez">Pez</option>
                        <option value="Reptil">Reptil</option>
                        <option value="Roedor">Roedor</option>
                    </Form.Select>
            <Button className='ms-1' variant="warning">Buscar</Button>
          </Form>
        
      </Container>
    </Navbar>



    </>







  );
}

export default Search