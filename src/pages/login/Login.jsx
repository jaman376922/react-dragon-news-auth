import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log( 'location in the login page', location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
        // console.log(form.get('password')); 

        // form/email diya check kora jabe password er jaygay.   
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>

                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 ml-2" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;

// first - create login page 

/*  1.import <Navbar></Navbar> 
 
2. niche <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 ml-2" to="/register">Register</Link></p>
 
 3. handleLogin console log porjonto. pages a create register page. go Register...

 4.const {signIn} = useContext(AuthContext); ... ay signIn ta authInfo teke anlam.
       
        const form = new FormData(e.currentTarget); ...handleLogin  new FormData(e.currentTarget); niche 
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);            .... browser a login koro deko email/password asche ki na.

        deke abar ay page a aso. erpor console log er niche....
        
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            }) ....... browser a login koro. Now ....create Home a NewsCard.jsx page 


    const location = useLocation();
    console.log( 'location in the login page', location); sign out kore console pathname/state deko. 
     pathname/state pawa gele erpor avabe 

      const navigate = useNavigate(); **** navigate(location?.state? location.state : '/'); ayta 
       console.log(result.user); er niche hobe. ata korle console a dekbe login kora obostay state ta
       akrokom asbe abar log out obostay state ta er akrokom asbe. go to firebase.config



 */