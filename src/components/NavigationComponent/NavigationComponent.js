import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import logoHP from "../../assets/gold-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../store/auth/actions";

const NavigationComponent = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const location = useLocation();

  function closeSession() {
    dispatch(doLogout());
  }

  return (
    <section className="header flex">
      <Link className="header-logo" to="/">
        <img src={logoHP} alt="logoHP" />
      </Link>
      <nav className="header__nav flex">
        {location.pathname === "/" ? "" : <Link to="/">Home</Link>}
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
      </nav>
    </section>
  );
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
