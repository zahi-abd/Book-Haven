import "./Home.css";

function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Silent Library",
      author: "John Carter",
      date: "12/12/2026",
      image: `${process.env.PUBLIC_URL}/BookCovers/The Silent Library.png`,
    },
    {
      id: 2,
      title: "Beyond the Stars",
      author: "Emma Wilson",
      date: "16/1/2027",
      image: `${process.env.PUBLIC_URL}/BookCovers/Beyond The Stars.png`,
    },
    {
      id: 3,
      title: "The Last Kingdom",
      author: "David Miller",
      date: "21/1/2027",
      image: `${process.env.PUBLIC_URL}/BookCovers/The Last Kingdom.png`,
    },
  ];

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Welcome to BookHaven</h1>
        <p>Discover your next favorite book with us!</p>
      </div>

      <h2 className="home-section-title">Coming Soon</h2>

      <div className="home-books-grid">
        {featuredBooks.map((book) => (
          <div className="home-book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="home-book-card__info">
              <h3>{book.title}</h3>
              <p className="home-book-card__author">{book.author}</p>
              <p className="home-book-card__price">{book.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
