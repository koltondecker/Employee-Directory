import React from "react";
import TableBody from "./TableBody";
import moment from "moment";

function Table({ employeesData }) {
    console.log(employeesData);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
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
