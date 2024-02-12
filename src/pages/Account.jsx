// import PropTypes from 'prop-types';
import "./Account.css";

function Account() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Player Infor<span style={{ color: "rgb(3, 253, 170)" }}>mation</span></h1>
        </div>
        <div className="container-user-info">
          <div>
            <div className="user-info">
              <img src="/public/photo.jpeg" alt="" />
              <label className="name">
                <strong>Joan Sebastian</strong>
                <br />
                <strong>Herrera Montes</strong>
              </label>
              <p>Striker</p>
              <p>Medellin - Colombia</p>
              <div className="social-media-links">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="social-link"
                >
                  <img src="/public/facebook.png" alt="Facebook" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="social-link"
                >
                  <img src="/public/gorjeo.png" alt="Twitter" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="social-link"
                >
                  <img src="/public/instagram.png" alt="Instagram" />
                </a>
              </div>
              <a className="main-button-account">
                <span>Edit</span>
              </a>
            </div>
          </div>
          <div>
            <div className="user-info-stats">
              <div>
                <label>Defensive</label>

                <progress id="file" max="100" value="30">
                  70%
                </progress>
              </div>
              <div>
                <label>Ofensive</label>

                <progress id="file" max="100" value="70">
                  70%
                </progress>
              </div>
              <div>
                <label>Passing</label>

                <progress id="file" max="100" value="80">
                  70%
                </progress>
              </div>
              <div>
                <label>Assists</label>

                <progress id="file" max="100" value="90">
                  70%
                </progress>
              </div>
              <div>
                <label>Goals</label>

                <progress id="file" max="100" value="15">
                  70%
                </progress>
              </div>
              <div>
                <label>Strength</label>

                <progress id="file" max="100" value="45">
                  70%
                </progress>
              </div>
              <div>
                <label>Speed</label>

                <progress id="file" max="100" value="60">
                  70%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
