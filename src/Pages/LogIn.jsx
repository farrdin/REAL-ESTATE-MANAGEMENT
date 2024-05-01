import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LogIn = () => {
  const [showPass, setShowPass] = useState(false);
  const { logIn, googleLogIn, gitHubLogIn } = useContext(AuthContext);
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
        toast.success("Logged In Successfully", {
          theme: "colored",
        });
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid Email or Password", { theme: "colored" });
      });
  };

  const handleGitHubLogin = () => {
    gitHubLogIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-base-200 my-10 rounded-2xl p-8 ">
      <Helmet>
        <title>EstateVista | LogIn</title>
      </Helmet>
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold">LogIn now!</h1>
      </div>
      <div className="w-full max-w-sm shadow-2xl bg-base-100 mx-auto rounded-2xl pb-5">
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter Your Password"
              className="input input-bordered "
              required
            />
            <span
              className="absolute right-2 bottom-4"
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? (
                <FaEye className="text-xl"></FaEye>
              ) : (
                <FaEyeSlash className="text-xl"></FaEyeSlash>
              )}
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">LogIn</button>
          </div>
        </form>
        <div className="flex justify-center items-center">
          <hr className=" w-full border-gray-400" />
          <span>OR</span>
          <hr className=" w-full border-gray-400" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary  w-[320px] mx-auto block"
        >
          LogIn with Google
        </button>
        <div className="flex justify-center items-center">
          <hr className=" w-full border-gray-400" />
          <span>OR</span>
          <hr className=" w-full border-gray-400" />
        </div>
        <button
          onClick={handleGitHubLogin}
          className="btn btn-success  w-[320px] mx-auto block"
        >
          LogIn with Github
        </button>
        <div className="flex justify-center mt-5">
          <p>
            Dont have an account?
            <Link className="text-blue-600 ml-1" to="/register">
              Register Here
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LogIn;
