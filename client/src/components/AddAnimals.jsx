import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import fakeAPI from '../json/fakeAPI'




function AddAnimals() {



    let [animal, setAnimal] = useState([...fakeAPI]);
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [height, setHeight] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState("");
    let [species, setSpecie] = useState("");


    function addPets() {

        let newId = animal.length > 0 ? animal[animal.length - 1].id + 10 : 1;

        setAnimal([...animal, { id: newId, Name: name, Age: age, Height: height, Description: description, Image: image, Species: species }]);



        setName("");
        setAge("");
        setHeight("");
        setDescription("");
        setImage("");
        setSpecie("");




    }
    useEffect(() => {
        localStorage.setItem("animals", JSON.stringify(animal));
    }, [animal]);










    return (
        <div className="container m-auto  addAnimals">
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Col sm={10}>
                        <Form.Label column sm={2}>
                            Nombre...
                        </Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Col>
                        <Form.Group className="d-flex">
                            <Form.Group className="col-2 me-5">
                                <Form.Label column sm={1}>
                                    Edad...
                                </Form.Label>
                                <Col>
                                    <Form.Control value={age} onChange={e => setAge(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex age">
                                <Form.Check className="me-2"
                                    type="radio"
                                    label="años"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check className="ms-2"
                                    type="radio"
                                    label="meses"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            </Form.Group>
                            <Form.Group className="ms-4 ">
                                <Form.Label column sm={6}>
                                    Altura en cm
                                </Form.Label>
                                <Col className="w-75">
                                    <Form.Control value={height} onChange={e => setHeight(e.target.value)} />
                                </Col>
                            </Form.Group>
                        </Form.Group>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Describe a tu mascota
                    </Form.Label>
                    <InputGroup>
                        <Form.Control as="textarea" value={description} onChange={e => setDescription(e.target.value)} />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label column sm={2}>
                        Selecciona una especie
                    </Form.Label>
                    <Form.Select aria-label="Default select example" value={species} onChange={e => setSpecie(e.target.value)}>
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
                            <img src={`data:image/jpeg;base64,${""}`} alt='' />
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



                <Form.Group className="d-flex gap-5" >
                    <Button variant="warning" onClick={addPets}>Publicar</Button>
                    <Button variant="warning">Cancelar</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default AddAnimals