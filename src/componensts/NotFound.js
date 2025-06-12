import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
          <button onClick={() => navigate("/")} className="home-button">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
