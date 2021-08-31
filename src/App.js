import React,{ useState,useEffect } from "react"
import axios from "axios"
import Paises from "./components/Paises"
import Filter from "./components/Filter"
import DatosPais from "./components/DatosPais"

function App() {
  const [paises,setPaises]=useState([])
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
    if(filter!==""){
      axios.get('https://restcountries.eu/rest/v2/name/'+filter)
      .then(response=>{
        setMje('')
        setPaises([])
        setDatosPais('')
        if(response.data.length>10){
          setMje('Too many matches, specify another filter')
        }
        else if(response.data.length===1){
          setDatosPais(response.data)
        }
        else if(response.data.length<=10){
          setPaises(response.data)
        }
      })
    }
    else axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
      setPaises(response.data)
  })
  },[filter])

  const setFilterFind=(e)=>{
    setFilter(e.target.value)
  }
  
  return (
    <div className="App">
        <Filter paises={paises} filter={filter} setFilterFind={setFilterFind}/>
        <Paises paises={paises}/>
        {(datosPais.length>0)?<DatosPais datosPais={datosPais}/>:''}
        
        <p>{mje}</p>
    </div>
  );
}

export default App;
