import React, {useEffect, useState,} from 'react';
import { ErrorMessage, Form, Field, Formik } from 'formik';

function Contact() {

    let data = JSON.parse(localStorage.getItem("persons")) || []

    // let [alertTxt, setAlertTxt] = useState("");
    let [person, setPerson] = useState([...data]);
    let [name, setName] = useState("");
    let [mail, setMail] = useState("");
    let [message, setMessage] = useState("");

    function addPerson() {

        let newId = person.length > 0 ? person[person.length - 1].id + 1 : 1;

        setPerson([...person, { id: newId, Name: name, Mail: mail, Message: message }])
        setName("");
        setMail("");
        setMessage("");
    }

    useEffect(() => {
        localStorage.setItem("persons", JSON.stringify(person));
    }, [person]);


        const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
    <>
    <Formik
        initialValues={{
            name: '',
            mail: '',
            message: ''
        }}
        validate={(valores) => {
        let errores = {};

        //validación name
        if(!valores.name){
            errores.name = 'Por favor ingresa un nombre'
        } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errores.name = 'El nombre sólo puede contener letras y espacios'
        }

        //validacion mail
        if(!valores.mail){
            errores.mail = 'Por favor ingresa un correo electrónico'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.mail)){
            errores.mail = 'El correo sólo puede contener letras y espacios y debe mantener el formato correo@correo.com'
        }

        //validacion message
        if(!valores.message){
            errores.message = 'Por favor escriba un mensaje'
        } else if(!/[a-zA-Z0-9]/.test(valores.message)){
            errores.message = 'El mensaje sólo puede contener letras y espacios'
        }

        return errores;

        }}
       //al darle al boton enviar
            onSubmit={(valores, {resetForm}, values) =>{



            resetForm();
            // console.log('Formulario enviado');
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
    >
            {( { isSubmitting, errors } ) => (
            <div className="h-100 container md-auto rounded-3">
                <Form className="mb-3">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field
                        className="form-control" 
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Pepita Pérez"
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <ErrorMessage name="name" component={() => (
                    <div className='error'>{errors.name}</div>
                    )} />
                </div>

                <div>
                    <label htmlFor="mail">Correo</label>
                        <Field
                            type="email" 
                            className="form-control" 
                            id="mail"
                            name="mail"
                            placeholder="Correo@corrreo.com"
                            value={mail} onChange={e => setMail(e.target.value)}
                        />
                        <ErrorMessage name="mail" component={() => (
                    <div className='error'>{errors.mail}</div>
                )} />
                </div>

                <div>
                    <label htmlFor="message" for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                    <Field
                        className="form-control" 
                        id="mensaje" 
                        rows="3" 
                        name="message"
                        as="textarea"
                        placeholder="Hola! Quisiera ponerme en contacto para/por..."
                        value={message} onChange={e => setMessage(e.target.value)}
                    />
                    <ErrorMessage name="message" component={() => (
                    <div className='error'>{errors.message}</div>
                )} />
                </div>


                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Enviar</button>
                    {formularioEnviado && <p className='exito'>Mensaje enviado correctamente, gracias!</p>}
                </div>
                </Form>
            </div>
            )}  
        </Formik>
    </>
    );
}

export default Contact
