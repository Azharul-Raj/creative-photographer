import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider";

const Update = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [updateCmnt, setUpdateCmnt] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ comment: updateCmnt }),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        toast.success("SUCCESSFULLY UPDATED");
        console.log(data);
        navigate("/myreviews");
      })
      .catch((err) => {
        toast.error("UPDATE ERROR");
        console.log(err);
      });
    e.target.reset();
  };
  return (
    <form onSubmit={handleUpdate} class="my-6">
      <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          onBlur={(e) => setUpdateCmnt(e.target.value)}
          rows="6"
          cols="80"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
      >
        Update comment
      </button>
    </form>
  );
};

export default Update;
