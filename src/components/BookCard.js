import './BookCard.css';

function BookCard(props) {
  return (
    <div className="book-card">
      <img src={props.book.image} alt={props.book.title} />
      <h3>{props.book.title}</h3>
      <p className="book-card__author">{props.book.author}</p>
      <p className="book-card__price">${props.book.price}</p>
      <p className="book-card__category">{props.book.category}</p>
      <div className="book-card__actions">
        <button className="btn btn--outline" onClick={props.onViewDetails}>View Details</button>
        <button className="btn btn--primary" onClick={props.onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default BookCard;
