import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdoptMeMsg() {
  return (
    <Card>
      <Card.Header>Animapp</Card.Header>
      <Card.Body>
        <Card.Title>Agradecemos tu interes en adoptar esta mascota</Card.Title>
        <Card.Text>
         Nos pondremos en contacto con su dueño para organizar todo lo que sea necesario y asegurarnos que ésta mascota
         tendrá las mejores condiciones en su nuevo hogar.
        </Card.Text>
        <a href="./"><Button variant="primary">Volver al inicio</Button></a> 
      </Card.Body>
    </Card>
  );
}

export default AdoptMeMsg;