// import React from 'react';

import { Link } from "react-router-dom";

const TableData = ({data}) => {
    return (
        <tr>
        <th>
            <img className="w-16" src={data.toyPic} alt="" />
        </th> 
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.category}</td>
        <td>{data.price}/-</td>
        <td style={{paddingLeft: '80px'}}>{data.quantity}</td>
        <td>
            <button htmlFor="my-modal-3" className="btn btn-info btn-outline">
            <Link to={`/allToy/${data._id}`}>
                View Details
            </Link>
            </button>
        </td>
      </tr>
    );
};

export default TableData;