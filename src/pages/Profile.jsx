import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.AuthReducer);
  return (
    <div className="mbody-container m-wrapper--singleCard flex">
      <div className="m-singleCard flex">
        <img
          className="mcard-image__photo--single"
          src={user.image}
          alt="card"
        />
        <div className="mcard-content">
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
