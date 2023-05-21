import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const data = useLoaderData();
    return (
        <div className="py-20 bg-blue-100">
            <div className="hero-content ps-40 grid grid-cols-1 lg:grid-cols-2 flex-col lg:flex-row">
                <div>
                <img src={data.toyPic} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{data?.toyName}</h1>
                    <p className="py-2 text-xl font-normal">Seller Name : {data.name}</p>
                    <p className="py-2 text-xl font-normal">Seller Email : {data.email}</p>
                    <p className="py-2 text-xl font-normal">Price: ${data.price}</p>
                    <p className="py-2 text-xl font-normal">Available Quantity: {data.quantity}</p>
                    <p className="py-2 text-xl font-normal">Rating: {data.rating}</p>
                    <p className="py-2 text-xl font-normal">Description : {data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;