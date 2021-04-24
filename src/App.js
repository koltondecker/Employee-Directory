import React, { useState, useEffect } from 'react';
import Jumbotron from "./components/Jumbotron";
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import API from "./utils/API";

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getRandomEmployees();
  }, []);

  const getRandomEmployees = () => {
    API.getEmployees().then((res) => {
      setEmployeesData(res.data.results);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron />
        <SearchBar search={search} handleInputChange={handleInputChange}/>
        <Table employeesData={employeesData.filter((employee) => {
            return employee.name.first
              .toUpperCase()
              .includes(search.toUpperCase());
          })} />
      </header>
    </div>
  );
}

export default App;
