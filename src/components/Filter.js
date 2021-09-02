const Filter=({filter,setFilterFind})=>{
    return(
        <div>
            Find Countries:<input type="text" value={filter} onChange={setFilterFind}/>
        </div>
    )
}

export default Filter