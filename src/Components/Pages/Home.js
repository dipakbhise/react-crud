import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    Data();
  }, [user]);

  const Data = async () => {
    const Pending1 = await axios.get("http://localhost:3002/users");

    const Pending2 = await Pending1.data;

    setuser(Pending2.reverse());
  };


  const asc = () => {
    setuser(user.reverse());
  };

  const deleteUser = (id)=>{

       if (window.confirm("Do you to delete this user?") ) {
        axios.delete(`http://localhost:3002/users/${id}`)
        }
}

  return (
    <div>
      <h1>Home</h1>

      <table className="table text-center ">
        <thead className="table-dark">
          <tr>
            <th scope="col">
              ID
              <button className="btn btn-primary mx-3" onClick={() => asc()}>
                Asc
              </button>
            </th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((elm, id, array) => 
            <tr key={id}>
              <th scope="row">{id+1}</th>
              <td>{elm.name}</td>
              <td>{elm.username}</td>
              <td>{elm.email}</td>
              <td>
                <NavLink to={`user/${elm.id}`} className="btn btn-primary">
                  View
                </NavLink>
                <NavLink to={`users/edit/${elm.id}`} className="btn btn-secondary mx-3">
                  Edit
                </NavLink>
                <button className="btn btn-danger" onClick={()=>deleteUser(elm.id)}>
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
