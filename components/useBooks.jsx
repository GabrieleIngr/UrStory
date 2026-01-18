import { useState, useEffect } from "react";
import { BsController } from "react-icons/bs";

function useBooks(query) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchBooks() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://openlibrary.org/search.json?title=${encodeURIComponent(
              query
            )}&limit=8&fields=title,author_name,first_publish_year,cover_i,key`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching the request");
          const data = await res.json();
          if (data.numFound === 0) throw new Error("Book not found");
          console.log("API Result:", data.docs);
          const newBooks = data.docs.map((book) => ({
            id: book.key,
            title: book.title,
            year: book.first_publish_year || "unknown",
            author:
              book.author_name?.length > 2
                ? `${book.author_name.slice(0, 2).join(", ")} and others...`
                : book.author_name?.join(", ") || "Unknown Author",
            coverId: book.cover_i,
          }));
          setBooks(newBooks);
          console.log(newBooks);
        } catch (err) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setBooks([]);
        setError("");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const timer = setTimeout(() => {
        fetchBooks();
      }, 500);
      return function () {
        clearTimeout(timer);
        controller.abort();
      };
    },
    [query]
  );

  return { books, isLoading, error };
}

export default useBooks;
