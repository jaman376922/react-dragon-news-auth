import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
   
        const email = form.get ('email');
        const name = form.get ('name');
        const photo = form.get ('photo');
        const password = form.get ('password');
        console.log( name, photo, email, password);
        
        // creteUser

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
     
        

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>

                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">All ready have an account <Link className="text-blue-600 ml-2" to="/login">Login</Link></p>
               
            </div>
        </div>
    );
};     {/* login page theke copy kore paste korlam. 1. import <Link 2.import <Navbar 3. cntr/d 
    diya handleRegister 4. All ready have an account , to="/login">Login, button a Register go to 
    router- import path: '/login',element: <Login></Login> and path: '/register',element:<Register>.
    alt/sift diya name,photo url 2 ta div korlam, 

     5. const email = form.get ('email'); const name = form.get ('name');const photo = form.get ('photo');
     const password = form.get ('password'); console.log( name, photo, email, password); console koro.
     firebase a google/email enabol koro. firebase config file check koro. folder create koro providers
     file AuthProvider.jsx go to AuthProviders.jsx.

     6.const {createUser} = useContext(AuthContext); ay user ta authInfo te ache erpor-
     
       createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)      .....form a register kore console deko. got to AuthProvider.jsx
        })



    */}
   

    

export default Register;

