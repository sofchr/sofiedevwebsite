import React from "react";
import { Link } from "react-router-dom";
import {
  JavascriptOriginal,
  ReactOriginal,
  Html5Original,
  Css3Original,
  PythonOriginal,
  PostgresqlOriginal,
  NodejsOriginal,
  ExpressOriginal,
  CypressioOriginal,
  VitejsOriginal,
} from "devicons-react";

import JavascriptPlain from "devicons-react/lib/icons/JavascriptPlain";

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
        <div className="languages">
          <JavascriptOriginal size="30"></JavascriptOriginal>
          <ReactOriginal size="30"></ReactOriginal>
          <Html5Original size="30"></Html5Original>
          <Css3Original size="30"></Css3Original>
          <PostgresqlOriginal size="30"></PostgresqlOriginal>
          <NodejsOriginal size="30"></NodejsOriginal>
          <VitejsOriginal size="30"></VitejsOriginal>
          <ExpressOriginal size="30"></ExpressOriginal>
          <PythonOriginal size="30"></PythonOriginal>
          <CypressioOriginal size="30"></CypressioOriginal>
        </div>
      </div>
    </>
  );
}

export default Home;
