import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';



function AddAnimals() {

    let data = JSON.parse(localStorage.getItem("animals")) || []

    let [alertTxt, setAlertTxt] = useState("");
    let [animal, setAnimal] = useState([...data]);
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");
    let [species, setSpecie] = useState("");


    function addPets() {

        let newId = animal.length > 0 ? animal[animal.length - 1].id + 1 : 1;

        setAnimal([...animal, { id: newId, Name: name, Age: age, Height: height, Description: description, Image: image, Species: species }]);
        setName("");
        setAge("");
        setHeight("");
        setDescription("");
        setImage("");
        setSpecie("");

        setAlertTxt("New task added");
        setTimeout(() => {
            setAlertTxt('');
        }, 2000);


    }
    useEffect(() => {
        localStorage.setItem("animals", JSON.stringify(animal));
    }, [animal]);





    <div className='addTask-page-popUp'>
        <h1>{alertTxt}</h1>
    </div>

    return (
        <div className="container m-auto">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Nombre...
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label Row sm={2}>
                        Edad...
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={age} onChange={e => setAge(e.target.value)} />
                        <Form.Check
                            type="radio"
                            label="años"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="meses"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Label column sm={2}>
                            Altura en cm
                        </Form.Label>
                        <Form.Control value={height} onChange={e => setHeight(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Describe a tu mascota
                    </Form.Label>
                    <InputGroup>
                        <Form.Control value={description} onChange={e => setDescription(e.target.value)} />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label column sm={2}>
                        Selecciona una especie
                    </Form.Label>
                    <Form.Select aria-label="Default select example"value={species} onChange={e => setSpecie(e.target.value)}>
                        <option></option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Pez">Pez</option>
                        <option value="Reptil">Reptil</option>
                        <option value="Roedor">Roedor</option>
                    </Form.Select>

                    <Form.Group>
                        <Form.Label>Seleccione una imagen:</Form.Label>
                        <Form.Control type="file" onChange={e => setImage(e.target.value)} />
                    </Form.Group>
                    {"" && (
                        <div>
                            <img src={`data:image/jpeg;base64,${""}`} />
                        </div>
                    )}
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={10}>
                            <Form.Label as="legend" column sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="Vacunación"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Form.Label>
                            <Form.Check
                                type="radio"
                                label="Desparasitación"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Esterelización"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button variant="warning" onClick={addPets}>Publicar</Button>
                        <Button variant="warning">Cancelar</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddAnimals