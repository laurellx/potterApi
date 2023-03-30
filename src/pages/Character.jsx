import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CharacterComponent from "../components/CharacterComponent/CharacterComponent";
import { getCharacter } from "../store/characters/actions";

export default function Character() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacter(params.id));
  }, []);

  return (
    <div>
      <CharacterComponent></CharacterComponent>
    </div>
  );
}
