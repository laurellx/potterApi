import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../store/auth/actions";
import { Navigate } from "react-router";

const LoginComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const [username, setUsername] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");
  const dispatch = useDispatch();

  function onClickLogin() {
    dispatch(doLogin({ username: username, password: password }));
  }

  if (user && user.id) {
    return <Navigate to="/profile" replace></Navigate>;
  }
  return (
    <div className="wrapper--login flex">
      <form>
        <fieldset className="flex">
          <label>Username</label>
          <input
            value={username}
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
      </form>
      <div className="flex">
        <button className="btnLogin flex" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
