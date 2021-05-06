import React from "react";
import "./Home.css";
import { Buttonsss } from "../Button";
import MobileButton from "../MobileButton";
import { BrowserRouter as  Link } from "react-router-dom";
import Slogan from "../Slogan/Slogan";
import Welcome from "../Welcome/Welcome";
import Fee from "../Fee/Fee";
import No from "../No/No";


function Home() {
  return (
    <div>
      {" "}
      <br></br>
      <Slogan />
      <div className="Flexbox_Fee">
        <Fee />
        <br></br>
      </div>
      <No />
      <div className="home-buttons-container">
        <Link to="/artwork">
          <MobileButton buttonName="Artwork" className="artwork">
            Artwork
          </MobileButton>
        </Link>

        <br></br>
        <Link to="/instrumentals">
          <MobileButton buttonName="Instrumentals" className="instrumentals">
            {" "}
            Instrumentals
          </MobileButton>
        </Link>
      </div>
      <br></br>
      <div className="ledgerDiv">
        <Link to="/ledger">
          <Buttonsss>Ledger</Buttonsss>
        </Link>
      </div>
    </div>
  );
}

export default Home;
