import React from "react";

import "../home.css";

const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcH71XUNwBNgrhADpjgugAkTkuGdg1-A8Wxg&usqp=CAU";

const Hero = () => (
  <div className="text-center hero beans-background">
    <img src={url} alt="Beans" width="200" />
    <h1 className="mb-4 ">Beans</h1>
    <p className="lead">
      We love beans... drink some beans
      <br />
      ... spill some beans.
    </p>
  </div>
);

export default Hero;
