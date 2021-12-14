import "./contact.scss"

function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="left-c">
                <h1>Contacto</h1>
                <img src="/img/contact.png" alt="tel" className="tel-c" />
            </div>

            <div className="right-c">
                <form className="form-c">
                    <input autoComplete="off" type="mail" name="mail" placeholder="Mail" className="input mail" />
                    <input autoComplete="off" type="text" name="nombre" placeholder="Nombre" className="input mail" />
                    <textarea className="texto" name="text" placeholder="Mensaje"></textarea>
                    
                    <button className="button" type="button" > Enviar </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
