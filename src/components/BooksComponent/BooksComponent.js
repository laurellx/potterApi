import React, { useEffect } from "react";
import PropTypes from "prop-types";
import loading from "../../assets/loading-hedwig.gif";
import { getBooks } from "../../store/books/actions";
import { useDispatch, useSelector } from "react-redux";
import stamp from "../../assets/stamp.png";
import SimpleBar from "simplebar-react";

const BooksComponent = () => {
  const dispatch = useDispatch();
  const { books, loadingBooks } = useSelector((state) => state.BooksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (loadingBooks) {
    return (
      <div>
        <img className="loading-image flex" src={loading} alt="Loading..." />
      </div>
    );
  }
  return (
    <section className="content-container flex">
      <section className="content-container--books flex">
        {books.map((book) => (
          <div className="card card--books flex">
            <img
              className="card-image__stamp card-image__stamp--multi"
              src={stamp}
              alt={book.title}
            ></img>
            <h1> {book.title} </h1>
            <h2>{book.author}</h2>
            <h5>{book.description}</h5>
            <h5>release date: {book.releaseDay}</h5>
          </div>
        ))}
      </section>
    </section>
  );
};

BooksComponent.propTypes = {};

BooksComponent.defaultProps = {};

export default BooksComponent;
