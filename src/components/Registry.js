import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    //fetch planets
    useEffect(()=>{
        fetch("http://localhost:8085/planets")
            .then((r) => r.json())
            .then((planets) => {
                setPlanets(planets);
        });    
    }, []);
    

    //add planet
    function handleAddPlanet(newPlanet) {
        const updatedPlanetsArray = [...planets, newPlanet];
        setPlanets(updatedPlanetsArray);
      }

    

    //search planets 
    const displayedPlanets = planets.filter((planet) => {
        return planet.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

    return(
        <div className="registry">
            <Search searchTerm = {searchTerm} onSearchChange={setSearchTerm}/>
            <div className="content">
                <PlanetList planets={displayedPlanets}/>
                <NewPlanetForm onAddPlanet = {handleAddPlanet}/>
            </div>
        </div>
    )
}

export default Registry;