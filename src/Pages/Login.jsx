import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { Result } from "postcss";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [google, setGoogle] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if(email, password){
      setError("");
      signIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location.state ? location.state : "/")
      })
      .catch(error => {
        console.log(error.message);
        setError("Invalid Email or Password. Please use a valid Email and Password")
      })
    }
  };
  const handleGoogle = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  return (
    <div>
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
                {/* <p className="text-green-800">{success}</p> */}
                <div className="form-control mt-6">
                  <button onClick={handleSignIn} className="btn btn-secondary">
                    Login
                  </button>
                </div>
                <p className="text-center">Or</p>
                <div className="form-control">
                  <button onClick={handleGoogle} className="btn btn-secondary">
                    Login With Google
                  </button>
                </div>
              </form>
              <div className="flex flex-col px-2 mb-2 text-center">
                <p className="">Do not have an account?</p>
                <p>
                  Please{" "}
                  <NavLink to="/register" className="text-red-600">
                    {" "}
                    Resister
                  </NavLink>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
