import SearchResults from "../components/SearchResults.jsx";

function SearchBar({ setQuery, isLoading, error, books, query }) {
  return (
    <div className="search-container">
      <label className="search">
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <i className="fa fa-search search-icon"></i>
      </label>

      {query.length > 2 && (
        <SearchResults books={books} isLoading={isLoading} error={error} />
      )}
    </div>
  );
}

export default SearchBar;
