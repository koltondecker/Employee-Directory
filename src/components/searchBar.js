import React from 'react';
import "./searchbar.css";

function SearchBar({search, handleInputChange}) {
    return (
        <div id="searchBarWrapper" className="input-group mb-3">
            <input 
                id="searchBar"
                name="search"
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={search}
                onChange={handleInputChange}>
            </input>
        </div>
    )
}

export default SearchBar