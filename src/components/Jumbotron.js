import React from 'react';
import "./jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron bg-dark text-white jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        </div>
    )
}

export default Jumbotron
