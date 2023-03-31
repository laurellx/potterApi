import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/characters/actions";
import loading from "../../assets/loading-hedwig.gif";
import stamp from "../../assets/stamp.png";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

const CharactersComponent = () => {
  const dispatch = useDispatch();
  const { characters, loadingCharacters } = useSelector(
    (state) => state.CharactersReducer
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  if (loadingCharacters) {
    return (
      <div>
        <img className="loading-image" src={loading} alt="Loading..." />
      </div>
    );
  }
  return (
    <SimpleBar style={{ maxHeight: 800 }} forceVisible="y" autoHide={false}>
      <div className="wrapper flex">
        {characters.map((character) => {
          return (
            <div className="card flex" key={character.id}>
              <img
                className="card-image__stamp card-image__stamp--multi"
                src={stamp}
              ></img>
              <Link to={`/characters/${character.id}`}>
                <h2> {character.character} </h2>
                <img className="card-image__photo" src={character.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </SimpleBar>
  );
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
