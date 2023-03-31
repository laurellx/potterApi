import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.AuthReducer);
  return (
    <div className="wrapper--singleCard flex">
      <div className="singleCard flex">
        <img className="card-image__photo--single" src={user.image} />
        <div className="card-content">
          <h2>
            <label>Name: </label>
            {user.firstName}
          </h2>
          <h2>
            <label>Surname: </label>
            {user.lastName}
          </h2>
          <h2>
            <label>Email: </label>
            {user.email}
          </h2>
        </div>
      </div>
    </div>
  );
}
