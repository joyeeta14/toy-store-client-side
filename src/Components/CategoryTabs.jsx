import { useEffect, useState } from "react";


const CategoryTabs = () => {

    const [category, setCategory] = useState([]);
    const [clicked, setClicked] = useState('mini-Car');

    useEffect(()=>{
        fetch(`https://toy-store-server-side-joyeeta14.vercel.app/addToy/${clicked}`)
        .then(res => res.json())
        .then(data => setCategory(data))
    },[clicked])

    const result = category.filter(data=> data.category == clicked);
    console.log(result);

    const handleClick = (tabName) => {
        setClicked(tabName);
    }
    return (
        <div className="flex justify-center items-center mb-5">
            <div className="tabs">
                <a onClick={()=>handleClick('mini-car')} 
                className={clicked === 'mini-car' ? "tab tab-bordered tab-active": "tab tab-bordered"}>Mini Car</a>
                <a onClick={()=> handleClick('lego-truck')} className={clicked === 'lego-truck' ? "tab tab-bordered tab-active": "tab tab-bordered"}>Lego Truck</a>
 l                <a onClick={()=> handleClick('police-car')} className={clicked==='police-car' ? "tab tab-bordered tab-active": "tab tab-bordered"}>mini police car </a>
            </div>
        </div>
    );
};

export default CategoryTabs;