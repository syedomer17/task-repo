import React from 'react';
import google from "./photo/google1.png";
import "./style.css"

function App() {
  return (
    <>
    <div>
      <a className='app' href="">About</a>
      <a className='app' href="">Store</a>
    </div>
      <div className="d-flex justify-content-center google-img">
        <a href="google.com">
          <img src={google} alt="" width={"280"} />
        </a>
      </div>

      <div className="input-group mb-3 text-center d-flex justify-content-center g-put">
        <span className="input-group-text" id="search-icon">
          <i className="bx bx-search-alt-2 bx-sm"></i>
        </span>
        <input
          type="text"
          className="google-input"
          aria-describedby="search-icon"
        />
      </div>

      <div className="button text-center">
        <button className="bten">Google Search</button>
        <button className="bten">I'm Feeling Lucky</button>
      </div>

      <div className="text-center">
        <p className="goi">
          Google offered in:{" "}
          <a href="" class="goi-a">
            हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ
          </a>{" "}
        </p>
      </div>

      <div className="footer fixed-bottom">
        <p className="p-footer">Indonesia</p>
        <hr />
        <p className="a-footer">
          <a href="#" className="a-foot" style={{ color: "#6F6F99" }}>
            About
          </a>
          <a href="#" className="a-foot" style={{ color: "#6F6F99" }}>
            Diskcode
          </a>
          <a href="#" className="a-foot" style={{ color: "#6F6F99" }}>
            Business
          </a>
          <a href="#" className="a-foot" style={{ color: "#6F6F99" }}>
            Instagram
          </a>
        </p>
      </div>
    </>
  );
}

export default App