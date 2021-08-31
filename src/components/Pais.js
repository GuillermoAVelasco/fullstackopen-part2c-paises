const Pais=({pais,datosPaisShow})=>{
    return (
        <>
        <li>{pais.name} - <button onClick={datosPaisShow} value={pais.name}>Show</button></li>
        </>
    )
}

export default Pais