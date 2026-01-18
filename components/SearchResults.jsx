import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import ImageWithLoader from "../components/ImageWithLoader";
import errorImage from "../src/assets/no-cover.jpg";

function SearchResults({ books, isLoading, error }) {
  return (
    <ul className="search-results">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading &&
        !error &&
        books?.map((book) => (
          <li className="search-item" key={book.id}>
            <ImageWithLoader
              src={
                book.coverId
                  ? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
                  : errorImage
              }
              alt={`${book.title} cover`}
              className="book-cover"
            />
            <div className="book-info">
              <h3 className="name-book">{book.title}</h3>
              <p className="author">{book.author}</p>
              <p className="year">{book.year}</p>
            </div>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </li>
        ))}
    </ul>
  );
}
export default SearchResults;
