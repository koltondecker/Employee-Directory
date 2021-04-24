import React from 'react'

function TableBody(props) {
    return (
        <tr>
            <td>
                <img src={props.image} alt="user"></img>
            </td>
            <td>{props.firstName + " " + props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default TableBody
