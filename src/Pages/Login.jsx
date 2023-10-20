import { NavLink } from "react-router-dom";

const Login = () => {
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
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <p className="text-red-400"></p>
                <p className="text-green-400"></p>
                <div className="form-control mt-6">
                  <button className="btn btn-secondary">Login</button>
                </div>
                <p className="text-center">Or</p>
                {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button> */}
                <div className="form-control">
                  <button className="btn btn-secondary">
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
