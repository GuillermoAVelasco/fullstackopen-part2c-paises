const DatosPais=({datosPais})=>{
    const pais=datosPais[0]
    console.log(pais)
    return (        
        <div>
            <h1>{pais.name}</h1>        
            <p>Capital {pais.capital}</p>
            <p>population {pais.population}</p>          
            <h2>Languages</h2>
            <ul>
                {pais.languages.map(lang=> <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img alt="flag"  src={pais.flag}/>
        </div>
        )
    
}

/*
  <h1>{name}</h1>        
            <p>Capital {capital}</p>
            <p>population {population}</p>          
            <h2>Languages</h2>
          
*/


export default DatosPais