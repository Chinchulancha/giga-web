import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Error from "./Error";
import swal from 'sweetalert'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    //Validacion del Form
    if ([name, email, phone, message].includes("")) {
      setError(true);

    } else {

      setName('')
      setEmail('')
      setPhone('')
      setMessage('')

      setError(false);

      swal("Enviado con éxito!", "Le responderemos a la brevedad", "success");
      
      sendEmail();
    }
  };

  const asignarValueInputs = (e) => {
    if (e.target.id == "name") {
      setName(e.target.value);
    } else if (e.target.id == "email") {
      setEmail(e.target.value);
    } else if (e.target.id == "phone") {
      setPhone(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_v3my8kf",
        "template_3ht0y6c",
        form.current,
        "RgozR5sdSOUnnJVTL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 
  return (
    <form className="w-full h-full" ref={form} onSubmit={handleSubmit}>
      <div className="w-full h-full px-5 md:px-72 pt-10 pb-3 text-center">
        <div className="flex justify-center gap-y-7 flex-col mb-8">
          <h3 className="text-4xl uppercase font-bold">
            Formulario de Contacto
          </h3>

          <h4 className="text-gray-200 font-mono text-lg">
            Contáctenos y no tardaremos en responder!
          </h4>
        </div>
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="flex flex-col gap-y-7 justify-center mb-14">
          <input
            type="text"
            value={name}
            placeholder="Nombre Completo"
            className="bg-slate-900 text-center p-2 rounded text-xl"
            name="user_name"
            onChange={asignarValueInputs}
            id="name"
          />
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            className="bg-slate-900 text-center p-2 rounded text-xl"
            name="user_email"
            onChange={asignarValueInputs}
            id="email"
          />
          <input
            type="number"
            value={phone}
            placeholder="Teléfono"
            className="bg-slate-900 text-center p-2 rounded text-xl"
            name="user_phone"
            onChange={asignarValueInputs}
            id="phone"
          />

          <textarea
            cols="5"
            rows="5"
            value={message}
            placeholder="Mensaje"
            className="bg-slate-900 text-center p-2 rounded text-xl resize-none"
            name="message"
            onChange={asignarValueInputs}
            id="message"
          ></textarea>
        </div>
        
        <div>
          <input
            type="submit"
            value="Enviar"
            className="uppercase cursor-pointer text-xl tracking-wide duration-700 py-2 px-24 transition rounded  bg-orange-500 hover:scale-110"
          />
        </div>

        
      </div>
    </form>
  );
};

export default Form;
