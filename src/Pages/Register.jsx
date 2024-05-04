import { useContext, useState } from "react";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      toast.error("You must enter 6 character or long", {
        theme: "colored",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("You must enter at least one Uppercase character", {
        theme: "colored",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("You must enter at least one Lowercase character", {
        theme: "colored",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Congratulations Account Created Successfully", {
          theme: "colored",
        });
        e.target.reset();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, { theme: "colored" });
      });
  };

  return (
    <div className="bg-base-200 my-10 rounded-2xl p-8 ">
      <Helmet>
        <title>EstateVista | Register</title>
      </Helmet>
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold animate__animated animate__slideInUp">
          Register now!
        </h1>
      </div>
      <div className="w-full max-w-sm shadow-2xl bg-base-100 mx-auto rounded-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter  Your Name"
              className="input input-bordered"
              required
            />
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
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter Your Photo Url "
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
              className="input input-bordered"
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="flex justify-center pb-5 text-center">
          <p>
            Alreay have an account?
            <Link className="text-blue-600 ml-1" to="/login">
              LogIn
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
