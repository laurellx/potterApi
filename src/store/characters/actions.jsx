import axios from "axios";
import {
  GET_CHARACTERS,
  GET_CHARACTERS_OK,
  GET_CHARACTERS_FAIL,
  GET_CHARACTER,
  GET_CHARACTER_OK,
  GET_CHARACTER_FAIL,
} from "./actionTypes";

export function actionGetCharacters() {
  return {
    type: GET_CHARACTERS,
  };
}
export function actionGetCharacter(characterId) {
  return {
    type: GET_CHARACTER,
    payload: characterId,
  };
}
export function actionGetCharactersOk(characters) {
  return {
    type: GET_CHARACTERS_OK,
    payload: characters,
  };
}
export function actionGetCharacterOk(character) {
  return {
    type: GET_CHARACTER_OK,
    payload: character,
  };
}
export function actionGetCharactersFail(error) {
  return {
    tyoe: GET_CHARACTERS_FAIL,
    payload: error,
  };
}
export function actionGetCharacterFail(error) {
  return {
    type: GET_CHARACTER_FAIL,
    payload: error,
  };
}
export function getCharacters() {
  return async (dispatch) => {
    dispatch(actionGetCharacters());

    try {
      const response = await axios.get(
        "https://harry-potter-api-en.onrender.com/characters"
      );
      dispatch(actionGetCharactersOk(response.data));
    } catch (error) {
      dispatch(actionGetCharactersFail(error));
    }
  };
}
export function getCharacter(characterId) {
  return async (dispatch) => {
    dispatch(actionGetCharacter(characterId));
    try {
      const response = await axios.get(
        `https://harry-potter-api-en.onrender.com/characters/${characterId}`
      );
      dispatch(actionGetCharacterOk(response.data));
    } catch (error) {
      dispatch(actionGetCharacterFail(error));
    }
  };
}
