import Pais from "./Pais"
const Paises=({paises,datosPaisShow})=>{
    return (
        <ul>
        {paises.map((e)=> <Pais key={e.name} pais={e} datosPaisShow={datosPaisShow}/>)}
        </ul>
    )
}

export default Paises