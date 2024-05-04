import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile, updatePassword } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdateProfile = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    user,
    name,
    photoURL,
    setPhotoURL,
    setName,
    newPassword,
    setNewPassword,
  } = useContext(AuthContext);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      if (newPassword) {
        await updatePassword(user, newPassword);
        alert("Password updated successfully!");
      }
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-base-200 my-10 rounded-2xl p-8 ">
        <Helmet>
          <title>EstateVista | UpdateProfile</title>
        </Helmet>
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">User Profile</h1>
        </div>
        <div className="w-full max-w-sm shadow-2xl bg-base-100 mx-auto rounded-2xl">
          <form onSubmit={handleSaveChanges} className="card-body">
            <div className="form-control">
              <label htmlFor="name">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Update  Your Name"
                className="input input-bordered"
              />
              <label htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                value={user.email}
                readOnly
                className="input input-bordered"
              />
              <label htmlFor="photoURL">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Update Your Photo"
                className="input input-bordered"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                required
              />
            </div>
            <div className="form-control relative">
              <label htmlFor="newPassword">
                <span className="label-text">New Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Update Password"
                className="input input-bordered"
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
              <button className="btn btn-secondary" type="submit">
                Save Changes
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
