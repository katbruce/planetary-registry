import React from "react"

function Search({searchTerm, onSearchChange}) {
    return (
        <div>
            <input type="text" 
            onChange={(e) => onSearchChange(e.target.value)} 
            placeholder="Search..."/>
        </div>
    );
}

export default Search;