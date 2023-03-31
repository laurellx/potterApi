import {
  GET_CHARACTERS,
  GET_CHARACTERS_OK,
  GET_CHARACTERS_FAIL,
  GET_CHARACTER,
  GET_CHARACTER_OK,
  GET_CHARACTER_FAIL,
} from "./actionTypes";

const initialState = {
  characters: [],
  loadingCharacters: false,
  character: {},
  loadingCharacter: false,
  error: {
    message: "",
  },
};

export default function CharactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      state = { ...state, loadingCharacters: true };
      break;
    case GET_CHARACTERS_OK:
      state = {
        ...state,
        loadingCharacters: false,
        characters: action.payload,
      };
      break;
    case GET_CHARACTERS_FAIL:
      state = {
        ...state,
        loadingCharacters: false,
        characters: [],
        error: { message: action.payload },
      };
      break;
    case GET_CHARACTER:
      state = { ...state, loadingCharacter: true, character: {} };
      break;
    case GET_CHARACTER_OK:
      state = { ...state, loadingCharacter: false, character: action.payload };
      break;
    case GET_CHARACTER_FAIL:
      state = {
        ...state,
        loadingCharacter: false,
        character: {},
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state;
}
