import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title || !author) return;

    const newBook = {
      id: Date.now(),
      title,
      author
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="container">
        <h1>Library Management System</h1>

        <input
          type="text"
          placeholder="Search books..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="input-group">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button className="add-btn" onClick={addBook}>
            Add Book
          </button>
        </div>

        <div className="book-list">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
