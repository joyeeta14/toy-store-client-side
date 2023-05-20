// import React from 'react';

import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);

const registerUser=(email, password)=>{

}


const AuthProvider = ({children}) => {

    const authInfo = {name : 'Jarina', age: 14};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;