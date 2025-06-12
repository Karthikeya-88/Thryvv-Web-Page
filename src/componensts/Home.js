import "./Home.css";
import Vid from "../assets/Vid-1.mp4";

const Home = () => (
  <div className="home-container">
    <div className="video-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={Vid} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content-overlay">
        <h1 className="company-title">Thryvv India Pvt Ltd</h1>
        <p className="home-quote">
          <span className="highlight-text">If you want to be the best</span>,
          you have to do things other people aren't willing to do.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
