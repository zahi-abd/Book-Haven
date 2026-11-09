import BookDetails from "../components/BookDetails";
import BookCard from "../components/BookCard";
import currentBooks from "../data/BookList";
import { useState } from "react";
import './Books.css';

function Books(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = currentBooks.filter(
    (book) =>
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(book.price).includes(searchTerm)) &&
      book.category.toLowerCase().includes(searchCategory.toLowerCase()),
  );

  return (
    <div className="books-page">

      <div className="books-controls">
        <input
          type="text"
          placeholder="Search by title, author, or price..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Classic">Classic</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Adventure">Adventure</option>
          <option value="Psychological Fiction">Psychological Fiction</option>
          <option value="Magical Realism">Magical Realism</option>
          <option value="Mystery">Mystery</option>
        </select>
      </div>

      <h1>Browse Our Books</h1>

      {filteredBooks.length > 0 ? (
        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div key={book.id}>
              <BookCard
                book={book}
                onViewDetails={() => setSelectedBook(book)}
                onAddToCart={() => props.addToCart(book)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="books-empty">No books found matching your search.</p>
      )}

      {selectedBook !== null ? (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <BookDetails
              image={selectedBook.image}
              title={selectedBook.title}
              author={selectedBook.author}
              price={selectedBook.price}
              category={selectedBook.category}
              description={selectedBook.description}
            />
            <div className="modal-close-row">
              <button className="close-details-btn" onClick={() => setSelectedBook(null)}>Close</button>
            </div>
          </div>
        </div>
      ) : (
        <p className="books-detail-hint">Select a book to view its details.</p>
      )}
    </div>
  );
}

export default Books;
