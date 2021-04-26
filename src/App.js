import React, { useState, useEffect } from 'react';
import Jumbotron from "./components/Jumbotron";
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import API from "./utils/API";
import moment from "moment";

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [search, setSearch] = useState("");
  const [dataSort, setDataSort] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getRandomEmployees();
  }, []);

  const getRandomEmployees = () => {
    API.getEmployees().then((res) => {
      const data = res.data.results;
      data.forEach(user => {
        user.fullName = user.name.first + " " + user.name.last;
        user.birthdate = moment(user.dob.date).format("L");
      });
      setEmployeesData(data);

    });
  };

  const compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  const sortBy = (key) => {
    dataSort ? setEmployeesData((previousData) => [...previousData.sort().reverse()]) : setEmployeesData((previousData) => [...previousData.sort(compareBy(key))]);
    setDataSort(!dataSort);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron />
        <SearchBar search={search} handleInputChange={handleInputChange}/>
        <Table employeesData={employeesData.filter((employee) => {
            return employee.name.first
              .toUpperCase()
              .includes(search.toUpperCase());
          })} sortBy={sortBy} />
      </header>
    </div>
  );
}

export default App;
