import Alert from 'react-bootstrap/Alert';

function Alerta() {
  return (
    <>
      {[
        'success'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          ¡Gracias por adoptarme!
        </Alert>
      ))}
    </>
  );
}

export default Alerta;