import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts-page">
      <h1>Contact Us</h1>
      <p className="contacts-intro">
        Have a question, a book request, or just want to say hello? We'd love to
        hear from you. Get in touch with the BookHaven team using the details
        below, and we'll get back to you as soon as we can.
      </p>
      <p className="contacts-detail">
        <strong>Email:</strong>{" "}
        <a href="mailto:bookhaven@gmail.com">bookhaven@gmail.com</a>
      </p>
      <p className="contacts-detail">
        <strong>Phone:</strong> <a href="tel:+96181464134">+961 81 464 134</a>
      </p>
      <p className="contacts-detail">
        {" "}
        <strong>Address:</strong> Baalbeck, Douris, Next to Chamsine, Lebanon
      </p>
    </div>
  );
}

export default Contacts;
