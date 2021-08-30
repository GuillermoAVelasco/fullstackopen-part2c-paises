import Pais from "./Pais"
const Paises=({paises})=>{
    return (
        <ul>
        {paises.map((e)=> <Pais key={e.name} pais={e} />)}
        </ul>
    )
}

export default Paises