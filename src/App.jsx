import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Account from "./pages/Account";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <video className="video-background" autoPlay loop muted>
          <source
            src="/public/videos/background-football-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
