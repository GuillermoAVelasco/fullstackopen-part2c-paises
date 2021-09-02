import React,{ useState,useEffect } from "react"
import axios from "axios"
import Paises from "./components/Paises"
import Filter from "./components/Filter"
import DatosPais from "./components/DatosPais"

//npm run start .env.local
function App() {
  const [paises,setPaises]=useState([])
  const [filterPaises,setFilterPaises]=useState([])
  const [filter,setFilter]=useState('')
  const [mje,setMje]=useState('')
  const [datosPais,setDatosPais]=useState([]) 
  
  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>{
        setPaises(response.data)
    })
  },[])

  useEffect(()=>{
    setFilterPaises([])
    setDatosPais([])
    if(filter!==""){
      const pat = new RegExp(filter.toUpperCase());
      const filtered=paises.filter(e => 
          pat.test(e.name.toUpperCase())
      )
      
      if(filtered.length>10){
        setMje('Too many matches, specify another filter')
      }
      else if(filtered.length===1){
        setDatosPais(filtered)        
      }
      else if(filtered.length<=10){
        setFilterPaises(filtered)
      }
    }
    else setFilterPaises(paises) 
  },[filter])

  const datosPaisShow=(e)=>{
    axios.get('https://restcountries.eu/rest/v2/name/'+e.target.value)
    .then(response=>{
      setMje('')
      setPaises([])
      setDatosPais(response.data)
    })
  }

  const setFilterFind=(e)=>{
    setFilter(e.target.value)
  }
  
  const paisShow=(filter==="")?paises:filterPaises
  console.log(paisShow)
  return (
    <div className="App">
        <Filter filter={filter} setFilterFind={setFilterFind}/>
        <Paises paises={paisShow} datosPaisShow={datosPaisShow} />
        {(datosPais.length>0)?<DatosPais datosPais={datosPais}/>:''}
        
        <p>{mje}</p>
    </div>
  );
}

export default App;
