import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 20));
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <SearchBar onSearch={fetchBooks} />

      {loading ? (
        <p className="text-center text-lg mt-6 text-gray-500">Loading...</p>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          Search for a book to get started.
        </p>
      )}
    </div>
  );
};

export default Home;
