import {
  GET_BOOK,
  GET_BOOKS,
  GET_BOOK_OK,
  GET_BOOKS_OK,
  GET_BOOK_FAIL,
  GET_BOOKS_FAIL,
} from "./actionTypes";

const initialState = {
  books: [],
  loadingBooks: false,
  book: {},
  loadingBook: false,
  error: {
    message: "",
  },
};

export default function BooksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      state = { ...state, loadingBooks: true };
      break;
    case GET_BOOKS_OK:
      state = {
        ...state,
        loadingBooks: false,
        books: action.payload,
      };
      break;
    case GET_BOOKS_FAIL:
      state = {
        ...state,
        loadingBooks: false,
        books: [],
        error: { message: action.payload },
      };
      break;
    case GET_BOOK:
      state = { ...state, loadingBook: true, book: {} };
      break;
    case GET_BOOK_OK:
      state = { ...state, loadingBook: false, book: action.payload };
      break;
    case GET_BOOK_FAIL:
      state = {
        ...state,
        loadingBook: false,
        book: {},
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state;
}
