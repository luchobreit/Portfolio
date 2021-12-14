import './portfolioList.scss'

function PortfolioList({title,id, active, setSelected}) {
    return (
        <li className={active ? "li-p activo" : 'li-p'} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList