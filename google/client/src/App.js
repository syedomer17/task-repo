import React from 'react';
import google from "./photo/google1.png";
import "./style.css"

function App() {
  return (
    <>
    <div className='fixed-top as'>
      <p style={{ color: "#6F6F99 !important" }} >
        <a href="">About</a> <a href="">Store</a>
      </p>
    </div>
      <div className="d-flex justify-content-center google-img">
        <a href="google.com">
          <img src={google} alt="" width="280" />
        </a>
      </div>

      <div className="input-group mb-3 text-center d-flex justify-content-center g-put">
        <span className="input-group-text" id="Search-icon">
          <i className="bx bx-search"></i>
        </span>
        <input
          type="text"
          className="google-input"
          aria-describedby="Search-icon"
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
          <a href="" className="a-foot" style={{ color: "#6F6F99" }}>
            Adverstising
          </a>{" "}
          <a href="" className="a-foot" style={{ color: "#6F6F99" }}>
             Business
          </a>{" "}
          <a href="" className="a-foot" style={{ color: "#6F6F99" }}>
           How search works
          </a>{" "}
        </p>
      </div>
    </>
  );
}

export default App