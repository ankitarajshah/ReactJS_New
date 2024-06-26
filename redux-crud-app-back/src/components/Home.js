import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Reducer/UserReducer";
export default function Home() {
  const users = useSelector((state) => state.users);
  console.log(users, "Home");

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    alert("Are you sure you want to delete");
    dispatch(deleteUser({ id }));
  };

  return (
    <>
      <div className="container">
        <h2>CRUD App using React-Redux toolkit</h2>
        <Link to="/create" className="btn btn-success my-3">
          Create
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-info mx-3">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
