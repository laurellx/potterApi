import CharactersReducer from "./characters/reducer";
import BooksReducer from "./books/reducer";
import AuthReducer from "./auth/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  CharactersReducer,
  BooksReducer,
  AuthReducer,
});

export default rootReducer;
