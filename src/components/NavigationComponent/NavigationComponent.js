import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoHP from "../../assets/gold-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../store/auth/actions";

const NavigationComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  function closeSession() {
    dispatch(doLogout());
  }

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img src={logoHP} alt="logoHP" />
      </Link>
      <div className="navbar__nav">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/books">Books</Link>
        {user && user.id ? "" : <Link to="/login">Login</Link>}
        {user && user.id ? <Link to="/profile">Profile</Link> : ""}
        {user && user.id ? (
          <Link to="/profile" onClick={closeSession}>
            Logout
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
