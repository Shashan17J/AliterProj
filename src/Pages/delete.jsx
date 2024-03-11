import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");

  const handleChange = (e) => {
    setUserID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete("http://localhost:4000/v1/user/delete", {
        data: { ID: userID },
      });
      console.log(res.data);
      toast.success("User deleted successfully");
      // Reset form after successful submission
      setUserID("");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Delete User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="userID"
            className="block text-sm font-medium text-gray-700"
          >
            User ID:
          </label>
          <input
            type="text"
            id="userID"
            name="userID"
            value={userID}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Delete
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Go to Create
        </button>
        <button
          type="button"
          onClick={() => navigate("/read")}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Go to Read
        </button>
        <button
          type="button"
          onClick={() => navigate("/update")}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Go to Update
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DeleteUser;
