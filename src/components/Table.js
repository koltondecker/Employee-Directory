import React from "react";
import TableBody from "./TableBody";
import moment from "moment";

function Table({ employeesData, sortBy }) {
    console.log(employeesData);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" onClick={() => sortBy("name")}>Name</th>
                        <th scope="col" onClick={() => sortBy("phone")}>Phone</th>
                        <th scope="col" onClick={() => sortBy("email")}>Email</th>
                        <th scope="col" onClick={() => sortBy("dob")}>DOB</th>
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
