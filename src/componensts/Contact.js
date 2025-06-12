import "./Contact.css";

const Contact = () => {
  return (
    <div className="under-construction-container mt-5">
      <div className="under-construction-content">
        <div className="construction-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M15 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h14zM2 13h12V2H2v11z" />
            <path d="M6.5 5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>
        <h1>Under Construction</h1>
        <p className="construction-message">
          We're currently working on improving our contact page. Please check
          back soon!
        </p>
        <p className="alternative-contact">
          For urgent inquiries, please email us at{" "}
          <a href="mailto:contact@thryvv.com">contact@thryvv.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
