import { useEffect, useState } from "react";
import Logo from "../components/Logo.jsx";
import NavBar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Hero from "../components/Hero.jsx";
import SelectedBooks from "../components/SelectedBooks.jsx";
import Chat from "../components/Chat.jsx";
import useBooks from "../components/useBooks.jsx";

function App() {
  const [query, setQuery] = useState("");
  const { books, isLoading, error } = useBooks(query);

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar
          setQuery={setQuery}
          isLoading={isLoading}
          error={error}
          books={books}
          query={query}
        />
      </NavBar>

      <Hero />
      <SelectedBooks />
      <Chat />
    </>
  );
}

export default App;
