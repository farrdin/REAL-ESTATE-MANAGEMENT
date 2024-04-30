import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    const email = form.get("email");
    // const photo = form.get("photo");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-base-200 my-10 rounded-2xl p-8 ">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold">Register now!</h1>
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
                Alreay have an account?
                <Link className="text-blue-600 ml-1" to="/login">
                  LogIn
                </Link>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
