import PortfolioList from "../PortfolioList/PortfolioList"
import "./portfolio.scss"
import { useState, useEffect } from "react";
import {waP, ecP, lpP, poP} from '../data'

function Portfolio() {
    const list =[{
        title:'Weather App',
        id: 'wa'
        },
        {
            title:'E-comerce',
            id: 'ec'
        },

        {
            title:'Landing Page',
            id: 'lp'
        },

        {
        title:'Portfolio',
        id: 'po'
        },        
    ];


    const [selected, setSelected] = useState('wa')
    const [data, setData] = useState([])

    useEffect(()=>{

        switch (selected) {
            case 'wa':
                setData(waP)
                break;
            case 'ec':
                setData(ecP)
                break;
            case 'lp':
                setData(lpP)
                break;
            case 'po':
                setData(poP)
                break;    
            default:
                setData(waP)
                break;
        }

    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1 className="titulo-p">Portfolio</h1>
            <ul className="ul-p">
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title}
                    id={item.id} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    key={item.id}/>
                ))}
            </ul>
            
            <div className="portfolio-cards">
                {data.map((d)=>(
                <>
                <img src={d.img} alt="wa" key={d.id}/>
                <p>{d.descritption}</p>
                <a href={d.link} target="_blank" className="link">Visita la pagina</a>
                </>
                ))}
            </div>
        </div>
        
    )
}

export default Portfolio
