import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title}-Fun-Store`;
    } ,[title])
};

export default useTitle;