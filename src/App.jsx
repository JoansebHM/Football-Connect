import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#" className="option">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="option">
                Wallet
              </a>
            </li>
            <li>
              <a href="#" className="option">
                Find Match
              </a>
            </li>
            <li>
              <a href="#" className="option">
                Watch Game
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <video className="video-background" autoPlay loop muted>
          <source
            src="/public/videos/background-football-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
          <Content />
      </div>
    </>
  );
}

export default App;
