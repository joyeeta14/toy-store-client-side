// import React from 'react';

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut   } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);

const registerUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const loginUser =(email,password)=>{
    return signInWithEmailAndPassword (auth, email, password);
}



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('logged in uther',currentUser);
            setUser(currentUser);
    
        })
        return unSubscribe();
    } ,[])
    const authInfo = {registerUser, loginUser, user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;