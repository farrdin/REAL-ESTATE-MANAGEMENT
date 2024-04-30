import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const LogIn = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-base-200 my-10 rounded-2xl p-8 ">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold">LogIn now!</h1>
      </div>
      <div className="w-full max-w-sm shadow-2xl bg-base-100 mx-auto rounded-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a>
                Dont have an account?
                <Link className="text-blue-600 ml-1" to="/register">
                  Register Here
                </Link>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">LogIn</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
