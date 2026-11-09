import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Theme from "./context/Theme";
import "./App.css";

//import the shared comp
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

//import the pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });
  function addToCart(book) {
    setCart((previousCart) => {
      const existingBook = previousCart.find((item) => item.id === book.id);

      if (existingBook) {
        return previousCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...previousCart, { ...book, quantity: 1 }];
      }
    });
  }
  function removeFromCart(bookId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== bookId),
    );
  }
  function updateQuantity(bookId, change) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === bookId
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className={`app ${theme}-theme`}>
          <NavBar /> {/* outside routes (all pages) */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/books"
              element={<Books setCart={setCart} addToCart={addToCart} />}
            />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              }
            />
          </Routes>
          <Footer /> {/* outside routes (all pages) */}
        </div>
      </Router>
    </Theme.Provider>
  );
}

export default App;
