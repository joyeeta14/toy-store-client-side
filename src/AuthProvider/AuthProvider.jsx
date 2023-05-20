// import React from 'react';

import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);

const registerUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}


const AuthProvider = ({children}) => {

    const authInfo = {registerUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;