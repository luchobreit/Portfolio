import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


function Intro() {

    const textRef=useRef()

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            typeSpeed: 130,
            strings: ['Estudiante', 'Desarrollador Front-end','Emprendedor' ] 
        })
    },[])


    return (
        <div className="intro" id="home">
            <div className="left">
                <div className="contenedor">
    
                    <img src="/img/yo.png" alt="yo" className="yo" />

                </div>
            </div>
            <div className="right">
                <div className="wraper">
                    <h2>Hola! Mi nombre es</h2>
                    <h1 className="nombre">Lucio Breitbart</h1>
                    <h3 className="soy">Y soy <span ref={textRef}></span></h3>
                    <a href="/#portfolio" className="href-down">
                    <img  className="down" src="/img/down.png" alt="flecha" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
