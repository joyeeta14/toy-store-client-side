// import React from 'react';


import { useLoaderData } from "react-router-dom";

const MyToy = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            {
                // toys.map(toy => <UpdateOrDeleteToys key={toy._id}
                // toy={toy}
                // ></UpdateOrDeleteToys>)
            }
        </div>
    );
};

export default MyToy;