import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homepage-content">
        <div className="homepage-block">
          <img className="headshot" src="src/assets/schristensenheadshot.jpg" />
        </div>
        <div className="homepage-block">
          <h1 className="name">Sofie Christensen</h1>
          <h1>Software Engineer</h1>
          <h3 className="odd-jobs">
            {/* <Link to="/Research">Researcher</Link> | Musician */}
            Researcher | Musician
          </h3>
        </div>
      </div>
    </>
  );
}

export default Home;
