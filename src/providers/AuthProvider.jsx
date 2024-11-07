import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, } from "firebase/auth";




export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user itn the state changed', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

import app from "../firebase/firebase.config";

{/* 1.export const AuthContext = createContext(null); agula enter diya import korte hobe.
    
    2.  return (
        <AuthContext.Provider>  3.AuthProvider = ayta ({children}) 
    
    4. <AuthContext.Provider 
           ayta {children} go to main.jsx

    5.  const authInfo = {} ,  Provider value={authInfo}>
    6. const [user, setUser] = useState(null);  ,  const authInfo = {user}
    7. const auth = getAuth(app); getAuth import na hole , import { getAuth } from "firebase/auth";
    ayta copy past korbo app er p kete abar import korbo.

    8. const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); , createUser aytay bosabo 
        const authInfo{createUser} go to Register.jsx

    9.   useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user itn the state changed', currentUser)
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();  ...... const unSubscribe bosalam form ta clear korar jonno.
        }
    }, [])
           
    10.const logOut = () => {
        return signOut(auth);
    }       ....   ay signOut import korbo ... logOut ayta bosabo const authInfo te. go to Navbar.jsx

    10. const signIn = (email, password) =>{
            return createUserWithEmailAndPassword(auth, email, password);

            signIn ayta bosabo const authInfo te. go to Login.jsx

    11. const [loading, setLoading] = useState(true); *** createUser/signIn/logOut a hobe setLoading(true)
    useEffect a setLoading(false) er loading ta hobe authInfo te o PrivateRoute a . go to PrivateRoute.jsx
    */}

