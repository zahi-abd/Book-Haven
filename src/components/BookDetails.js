import './BookDetails.css';

function BookDetails(props) {
  return (
    <div className="book-details">
      <img src={props.image} alt={props.title} />
      <div className="book-details__info">
        <h1>{props.title}</h1>
        <h3 className="book-details__author">{props.author}</h3>
        <p className="book-details__price">${props.price}</p>
        <p className="book-details__category">{props.category}</p>
        <p className="book-details__description">
          <strong>Description:</strong> {props.description}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
