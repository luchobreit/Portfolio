import "./contact.scss"
import {useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';


function Contact() {
    const form = useRef();
    const notify = (error)=>{
        if (error){
            toast('Ups hubo un error, pero hay cananales alternativos para contactarme',
                {
                    icon: '❌',
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
        } else{

                toast('Gracias responderé lo mas rapido posible',
                    {
                        icon: '🔥',
                        style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                        },
                    }
                );
            }  
        }     

        
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r8xzly2', 'template_nqwlnj5', form.current, 'user_owJYa9C0g94ladlw9mtK7')
          .then((result) => {
            notify(false)
            e.target.reset()
            console.log(result);
          }, (error) => {
              notify(true)
              console.log(error);
          });
      };
    return (
        
        <div id="contact" className="contact">
            <div className="left-c">
                <h1>Contacto</h1>
                <img src="/img/contact.png" alt="tel" className="tel-c" />
            </div>

            <div className="right-c">
                <form ref={form} onSubmit={sendEmail}className="form-c">
                    <input autoComplete="off" required type="email" name="mail" placeholder="Mail" className="input mail" />
                    <input autoComplete="off" required type="text" name="nombre" placeholder="Nombre" className="input mail" />
                    <textarea className="texto" required name="text" placeholder="Mensaje"/>
                    
                    <button className="button" > Enviar </button>
                </form>
                <div className="redes-container">
                <a href="https://www.instagram.com/luchobreit_/" target="_blank" className="link-c"><img src="/img/RRSS/instagram2.png" alt="ig" className="rrss ig" ></img></a>
                <a target="_blank" href="https://wa.me/5491150550571" className="link-c"><img src="/img/RRSS/wpp2.png" alt="wpp" className="rrss wpp" ></img></a>
                <a target="_blank" href="https://www.linkedin.com/in/lucio-breitbart/" className="link-c"><img src="/img/RRSS/in.png" alt="in" className="rrss in" ></img></a>
                </div>

            </div>
            <Toaster position="bottom-center" />
        </div>
    )
}

export default Contact
