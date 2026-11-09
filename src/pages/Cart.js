import './Cart.css';

function Cart(props) {
  console.log("Cart props:", props);
  const totalCost = props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h1>Book Cart</h1>

      {props.cart.length > 0 ? (
        props.cart.map((book) => (
          <div className="cart-item" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="cart-item__details">
              <h3>{book.title}</h3>
              <p className="cart-item__price">Price: ${book.price}</p>
              <p className="cart-item__quantity">Quantity: {book.quantity}</p>
              <p className="cart-item__subtotal">Subtotal: ${book.price * book.quantity}</p>
              <div className="cart-item__buttons">
                <button className="btn btn--danger" onClick={() => props.removeFromCart(book.id)}>
                  Remove
                </button>
                <button className="btn btn--primary" onClick={() => props.updateQuantity(book.id, 1)}>
                  +
                </button>
                <button className="btn btn--secondary" onClick={() => props.updateQuantity(book.id, -1)}>
                  −
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="cart-empty">No books added</p>
      )}

      <p className="cart-total">Total: ${totalCost.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
