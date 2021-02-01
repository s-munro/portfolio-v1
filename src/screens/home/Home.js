import React from "react";
import "../../App.css";
const Home = () => {
  return (
    <div className="row w-100">
      <main className="col-12 w-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          <div className="col-6 hero-border-right d-flex justify-content-center align-items-center">
            <h1>
              H<span className="yellow">i</span>, I'm Sam
              <span className="yellow">.</span>
            </h1>
          </div>
          <div className="col-6 main-right-side"></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
