import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddContact({ addContactHandler }) {
  const [state, setState] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (state.name.trim() === "" || state.email.trim() === "") {
      alert("All fields are required");
      return;
    }
    addContactHandler(state);
    setState({ name: "", email: "" });
  };

  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handleAdd}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              value={state.name}
              onChange={handleChange}
              name="name"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              type="email"
              placeholder="email@example.com"
              value={state.email}
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mt-4">
        <Link to="/">
          <button className="text-gray-600 underline focus:outline-none">
            Go back to contacts
          </button>
        </Link>
      </div>
    </>
  );
}
