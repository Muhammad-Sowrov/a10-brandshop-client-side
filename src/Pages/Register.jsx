import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Register = () => {

  const {signUp, signInWithGoogle} = useContext(AuthContext);
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();
    if(!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)){
      setError("Password is invalid. It should be at least 6 characters long, contain at least one uppercase letter, and have at least one special character");
    }
    else{
      setError("");
      if(email){
        signUp(email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("User Created Successfully")
        })
        .catch((error)=> {
          console.log(error.message);
          setError(error.message)
        })
      }
    }

  } 
  const handleGoogle = () => {
    signInWithGoogle()
    .then((result)=> {
      console.log(result.user);
      setSuccess("User Created Successfully")
    })
    .catch((error) => {
      console.log(error.message);
    })
  }


  // console.log(email, password);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <p className="text-red-700">{error}</p>
              <p className="text-green-800">{success}</p>
              <div className="form-control mt-6">
                <button onClick={handleRegister} className="btn btn-secondary">Register</button>
              </div>
              <p className="text-center">Or</p>
              <div className="form-control">
                <button onClick={handleGoogle} className="btn btn-secondary">
                  Register With Google
                </button>
              </div>
            </form>
            <div className="flex flex-col px-2 mb-2 text-center">
              <p className="">Already have an account?</p>
              <p>
                Please{" "}
                <NavLink to="/login" className="text-red-600">
                  {" "}
                  Login
                </NavLink>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
