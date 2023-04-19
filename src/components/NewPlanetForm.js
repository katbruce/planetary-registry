import React, {useState} from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({onAddPlanet}) {
    const [name, setName] = useState("")
    const [climate, setClimate] = useState("")
    const [terrain, setTerrain] = useState("")
    const [population, setPopulation] = useState("")
    function resetForm(){
        setName(''); 
        setClimate('');
        setPopulation('');
        setTerrain('');
    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:8085/planets", {
            method: "POST", 
            headers: {"Content-Type": "application/json",
        }, 
        body: JSON.stringify({
            name: name, 
            climate: climate,
            terrain: terrain, 
            population: population, 
        }), 
    })
    .then((r)=>r.json())
    .then((newPlanet) => onAddPlanet(newPlanet))
    
    resetForm();     
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={name} onChange= {(e) => setName(e.target.value)}/>
            <input type="text" name="climate" placeholder="Climate" value={climate} onChange= {(e) => setClimate(e.target.value)}/>
            <input type="text" name="terrain" placeholder="Terrain" value={terrain} onChange= {(e) => setTerrain(e.target.value)}/>
            <input type="text" name="population" placeholder="Population" value={population} onChange= {(e) => setPopulation(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;