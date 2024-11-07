import {  useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-bars loading-xs"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
        
   
};

export default PrivateRoute;

/* const {user} = useContext(AuthContext); *** props a bosao ({children}) *** if(user){
        return children;
    } ... erpor return er div soho breaket kete -return <Navigate to="/login"></Navigate>
     go to Router.jsx

     {user, loading} ***  if(loading){return <span className="loading loading-bars loading-xs"></span>}    
      daisyUi teke akta loading nia aso. browser a jaya reload deo. erpor 
     
      const location = useLocation(); useLocation ta import korte hobe
      console.log(location); ...... Read Moore click koro. console deko pathname/state ache. 
      ay pathname/state ta avabe  

      console.log(location.pathname);  
      return <Navigate state={location.pathname} to="/login"></Navigate> go to Login.jsx



    
    



*/