import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.AuthReducer);
  return (
    <div className="wrapper--singleCard flex">
      <div className="singleCard flex">
        <img className="card-image__photo--single" src={user.image} />
        <div className="card-content">
          <h1>
            <label>Name: </label>
            {user.firstName}
          </h1>
          <h1>
            <label>Surname: </label>
            {user.lastName}
          </h1>
          <h1>
            <label>Email: </label>
            {user.email}
          </h1>
        </div>
      </div>
    </div>
  );
}
