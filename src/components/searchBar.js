import React from 'react'

function SearchBar({search, handleInputChange}) {
    return (
        <div className="input-group mb-3">
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