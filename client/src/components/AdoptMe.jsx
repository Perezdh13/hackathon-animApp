import React from 'react';
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'
import { Link } from 'react-router-dom'

function AdoptMe() {
    return (
        <div className='container alert-cont'>


            <Card>
                <Card.Header>Animapp</Card.Header>
                <Card.Body>
                    <Card.Title>Agradecemos tu interes en adoptar esta mascota</Card.Title>
                    <Card.Text>
                        Nos pondremos en contacto con su dueño para organizar la adopcion
                    </Card.Text>
                    <Link to="/">
                        <Button variant='primary'>Volver al inicio</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default AdoptMe

