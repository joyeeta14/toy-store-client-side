import { useState } from "react";


const CategoryTabs = () => {
    const [clicked, setClicked] = useState('mini-Car');

    const handleClick = (tabName) => {
        setClicked(tabName);
    }
    return (
        <div className="flex justify-center items-center mb-5">
            <div className="tabs">
                <a onClick={()=>handleClick('mini-car')} 
                className={clicked === 'mini-car' ? "tab tab-bordered tab-active": "tab tab-bordered"}>Mini Car</a>
                <a onClick={()=> handleClick('lego-truck')} className={clicked === 'lego-truck' ? "tab tab-bordered tab-active": "tab tab-bordered"}>Lego Truck</a>
                <a onClick={()=> handleClick('police-car')} className={clicked==='police-car' ? "tab tab-bordered tab-active": "tab tab-bordered"}>mini police car </a>
            </div>
        </div>
    );
};

export default CategoryTabs;