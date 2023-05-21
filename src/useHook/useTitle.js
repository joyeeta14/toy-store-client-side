import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
        document.title = `Fun Store|${title}`;
    } ,[title])
};

export default useTitle;