import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  let handle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    console.log(user);
  };

  const preventsub = async (e) => {

    try {
      e.preventDefault();
      const pending1 = await axios.post("http://localhost:3002/users", user);
      console.log(user)
      alert("Data Added Successfully");
      history.push("/react-crud");
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <h1>Add USer</h1>

      <form onSubmit={(e) => preventsub(e)} className="w-50 m-auto">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handle(e)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>

          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handle(e)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => handle(e)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
