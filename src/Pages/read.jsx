import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ReadUser = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setUserID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:4000/v1/user/read`);
      setUser(res.data); // Set user to res.data
      console.log(res.data);
      toast.success("User Data Fetched Successfully");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Read User</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          <span className="text-gray-700">User ID:</span>
          <input
            type="text"
            value={userID}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Fetch User Details
        </button>
      </form>
      {user && (
        <div>
          <h3 className="text-lg font-bold mb-2">User Details</h3>
          <p>
            <span className="font-semibold">ID:</span> {user.data.ID}
          </p>
          <p>
            <span className="font-semibold">Full Name:</span>{" "}
            {user.data.FullName}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {user.data.Age}
          </p>
          <p>
            <span className="font-semibold">City:</span> {user.data.City}
          </p>
        </div>
      )}
      <ToastContainer />

      <button
        type="button"
        onClick={() => navigate("/delete")}
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        Go to Delete
      </button>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        Go to Create
      </button>
      <button
        type="button"
        onClick={() => navigate("/update")}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        Go to Update
      </button>
    </div>
  );
};

export default ReadUser;
