import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import loading from "../../assets/loading-hedwig.gif";
import { Link, Navigate } from "react-router-dom";

const CharacterComponent = () => {
  const { character, loadingCharacter } = useSelector(
    (state) => state.CharactersReducer
  );

  if (loadingCharacter) {
    return (
      <div>
        <img className="loading-image" src={loading} alt="Loading..." />
      </div>
    );
  }
  return (
    <div className="wrapper--singleCard flex">
      <div key={character.id} className="singleCard flex">
        <img
          className="card-image__photo--single"
          src={character.image}
          alt={character.character}
        />
        <div className="card-content">
          <h1>{character.character}</h1>
          <h2>{character.hogwartsHouse}</h2>
          <h3>Interpreted by:{character.interpretedBy}</h3>
          <h3>Children:{character.child}</h3>
        </div>
      </div>

      <Link to="/characters">
        <button className="btnBack">Go back</button>
      </Link>
    </div>
  );
};

CharacterComponent.propTypes = {};

CharacterComponent.defaultProps = {};

export default CharacterComponent;
