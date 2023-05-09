import React, { useEffect, useState } from "react";
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
  const [search, setSearch] = useState("");
  const { characters, loadingCharacters } = useSelector(
    (state) => state.CharactersReducer
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  if (loadingCharacters) {
    return (
      <div>
        <img className="loading-image flex" src={loading} alt="Loading..." />
      </div>
    );
  }
  return (
    <section className="content-container">
      <form className="searchForm flex">
        <fieldset className="flex">
          <label>Character finder:</label>
          <input
            type="search"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </fieldset>
      </form>
      <SimpleBar style={{ maxHeight: 510 }} forceVisible="y">
        {characters
          .filter((character) => {
            return search.toLowerCase() === ""
              ? character
              : character.character.toLowerCase().includes(search);
          })
          .map((character) => {
            return (
              <div className="card flex" key={character.id}>
                <img
                  className="card-image__stamp card-image__stamp--multi"
                  src={stamp}
                  alt="stamp-logo"
                ></img>
                <Link to={`/characters/${character.id}`}>
                  <img
                    className="card-image__photo"
                    src={character.image}
                    alt={character.character}
                  />
                </Link>
                <h2> {character.character} </h2>
              </div>
            );
          })}
      </SimpleBar>
    </section>
  );
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
