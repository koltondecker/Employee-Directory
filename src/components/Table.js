import React from "react";
import TableBody from "./TableBody";
import moment from "moment";
import "./table.css";

function Table({ employeesData, sortBy }) {
    return (
        <div id="tableDiv">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={() => sortBy("fullName")}>Name</th>
                        <th scope="col" onClick={() => sortBy("phone")}>Phone</th>
                        <th scope="col" onClick={() => sortBy("email")}>Email</th>
                        <th scope="col" onClick={() => sortBy("birthdate")}>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.map((employee, index) => (
                        <TableBody
                        key={index}
                        image={employee.picture.thumbnail}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        dob={moment(employee.dob.date).format("L")}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
