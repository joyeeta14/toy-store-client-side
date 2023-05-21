// import React from 'react';

import { useLoaderData } from "react-router-dom";
import TableData from "./TableData";

const AllToy = () => {
    const data = useLoaderData();
    return (
        <div className="bg-blue-500">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                {data.map(data => <TableData key={data._id}
                    data={data}
                    ></TableData>)}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;