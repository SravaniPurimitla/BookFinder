const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-36 h-52 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p className="text-gray-600 text-sm mt-1">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-gray-500 text-sm mt-1">
        {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
};

export default BookCard;
