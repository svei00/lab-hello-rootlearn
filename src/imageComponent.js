import "./App.css";

import React from "react";
import img1 from "./img/H2L3ohY.png";
import img2 from "./img/IHW1mFB.png";
import img3 from "./img/LtUDB9y.png";
import img4 from "./img/agN6R4Y.png";

const ImageComponet = () => {
  <div className="image-component">
    <div className="img-container">
      <img src={img1} alt="Declarative" />
      <h3>Declarative</h3>
      <p>React makes it painless to create Interactive UIs</p>
    </div>
    <div className="img-container">
      <img src={img2} alt="Components" />
      <h3>Components</h3>
      <p>Build encapsulated Components that manage their state</p>
    </div>
    <div className="img-container">
      <img src={img3} alt="Single Way" />
      <h3>Single Way</h3>
      <p>A set of immutable values are passed to the components</p>
    </div>
    <div className="img-container">
      <img src={img4} alt="JSX" />
      <h3>JSX</h3>
      <p>Statically-typed designed to run on modern browsers.</p>
    </div>
  </div>;
};

export default ImageComponet;
