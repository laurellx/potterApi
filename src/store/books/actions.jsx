import axios from "axios";
import {
  GET_BOOK,
  GET_BOOKS,
  GET_BOOK_OK,
  GET_BOOKS_OK,
  GET_BOOK_FAIL,
  GET_BOOKS_FAIL,
} from "./actionTypes";

export function actionGetBooks() {
  return {
    type: GET_BOOKS,
  };
}
export function actionGetBooksOk(books) {
  return {
    type: GET_BOOKS_OK,
    payload: books,
  };
}
export function actionGetCharactersFail(error) {
  return {
    tyoe: GET_BOOKS_FAIL,
    payload: error,
  };
}
export function getBooks() {
  return async (dispatch) => {
    dispatch(actionGetBooks());

    try {
      const response = await axios.get(
        "https://harry-potter-api-en.onrender.com/books"
      );
      dispatch(actionGetBooksOk(response.data));
    } catch (error) {
      dispatch(actionGetCharactersFail(error));
    }
  };
}
export function actionGetBook(bookId) {
  return {
    type: GET_BOOK,
    payload: bookId,
  };
}
export function actionGetBookOk(book) {
  return {
    type: GET_BOOK_OK,
    payload: book,
  };
}
export function actionGetBookFail(error) {
  return {
    type: GET_BOOK_FAIL,
    payload: error,
  };
}
export function getBook(bookId) {
  return async (dispatch) => {
    dispatch(actionGetBook(bookId));
    try {
      const response = await axios.get(
        `https://harry-potter-api-en.onrender.com/books/${bookId}`
      );
      dispatch(actionGetBookOk(response.data));
    } catch (error) {
      dispatch(actionGetBookFail(error));
    }
  };
}
