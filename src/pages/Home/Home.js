 import React from "react";
//import starsVideo from "../../assets/stars-19289.mp4";
import "./Home.scss";

function Home() {
  return (
    <div className="home">

      <input
        checked="checked"
        class="planet2"
        id="venus"
        name="planet"
        type="radio"
      />
      <label class="menu venus" for="venus">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Venus
          </h2>
          <h3>0.723 AU</h3>
        </div>
      </label>
      <input
        checked="checked"
        class="planet1"
        id="mercury"
        name="planet"
        type="radio"
      />
      <label class="menu mercury" for="mercury">
        <div class="preview"></div>
        <div class="info">
          <h2>
            <div class="pip"></div>
            Mercury
          </h2>
          <h3>0.39 AU</h3>
        </div>
      </label>
      <div class="solar">
        <div class="solar_systm">
          <div class="planet mercury">
            <div class="planet_description mercury">
              {/* <h2>Planet</h2> */}
              <h1>Earth</h1>
              <p>
                This is Earth, this is your home. But, it's the year 2050 and humans have colonized Mars.
                Fly to Mars with us and try the wide variety of exotic cuisines Dawat E Mars has to offer.
                <br/>
                <span style={{fontWeight: "500", fontSize: "15px"}}>Click on Mars and experience the immersive journey.</span>
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="solar_systm">
          <div class="planet venus">
            <div class='moon deimos'>
              <h3 style={{ fontWeight: "500" }}>Moon</h3>
              <h2>Deimos</h2>
              <p style={{ fontSize: "30px" }}>Earth cuisine</p>
            </div>
            <div class='trajectory d'></div>
            <div class='moon phoebos'>
              <h3 style={{ fontWeight: "500" }}>Moon</h3>
              <h2>Phoebos</h2>
              <p style={{ fontSize: "30px" }}>Mars cuisine</p>
            </div>
            <div class='trajectory p'></div>
            <div class="planet_description mars">
              <h1>Welcome to</h1>
              <h1>Mars</h1>
              <p>
                We value diversity, that's why we offer cuisines for both Earth and Mars dwellers.
                You can try our exotic cuisines and also mix them up!
              </p>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
