import React from "react";
import "./App.css";
import logo from "./asserts/logo.png"; // Adjust the path to your logo
import leftImage from "./asserts/1.png"; // Adjust the path to your left image
import additionalImage from "./asserts/2.png"; // Adjust the path to your additional image
import Third from "./asserts/3.png";
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageIcon from '@mui/icons-material/Language';

function App() {
  return (
    <div className="App">
      <div className="center-content">
        <img src={logo} alt="Logo" className="centered-logo" />
      </div>
      <div className="side-content">
        <div className="left-section">
          <img src={leftImage} alt="Left" className="left-image" />
        </div>
        <div className="right-section">
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <li className="subtext">
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li className="subtext">
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
          <div className="additional-content">
            <img
              src={additionalImage}
              alt="Additional"
              className="additional-image"
            />
            <p className="additional-text">
              Government of India has awarded the{" "}
              <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
              Selvaraj, Joint Managing Director of C.R.I. Group received the
              award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
              Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="center-content">
        <p className="center-content">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={Third} alt="Logo" className="center-img" />
        <p className="center-content">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div className="divider"></div>
      <div className="center-content">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
      </div>

      <div className="custom-container">
        <div className="custom-item">CHEMICALS & PROCESS</div>
        <div className="custom-line"></div>
        <div className="custom-item">POWER</div>
        <div className="custom-line"></div>
        <div className="custom-item">WATER & WASTE WATER</div>
        <div className="custom-line"></div>
        <div className="custom-item">OILS & GAS</div>
        <div className="custom-line"></div>
        <div className="custom-item">PHARMA</div>
        <div className="custom-line"></div>
        <div className="custom-item">SUGARS & DISTILLERIES</div>
        <div className="custom-line"></div>
        <div className="custom-item">PAPER & PULP</div>
        <div className="custom-line"></div>
        <div className="custom-item">MARINE & DEFENCE</div>
        <div className="custom-line"></div>
        <div className="custom-item">METAL & MINING</div>
        <div className="custom-line"></div>
        <div className="custom-item">
          FOOD & BEVERAGE
        </div>
        <div className="custom-line"></div>
        <div className="custom-item">
          PETROCHEMICAL & REFINERIES SOLAR
        </div>
        <div className="custom-line"></div>
        <div className="custom-item">
          SOLAR
        </div>
        <div className="custom-line"></div>
        <div className="custom-item">
        BUILDING 
        </div>
        <div className="custom-line"></div>
        <div className="custom-item">
          HVAC
        </div>
        <div className="custom-line"></div>
        <div className="custom-item">
          FIRE FIGHTING
        </div>
        <div className="custom-line"></div>
        <div className="custom-item">
          AGRICULTURE & RESIDENTIAL
        </div>
      </div>


      <footer className="footer">
        <div className="footer-icon">
          {/* <img src={phoneIcon} alt="Phone" /> */}
          <CallIcon className="icon" style={{height: "25px", width: "25px", borderRadius: "25px", backgroundColor: "#fff", color:"red"}} />
          <p>123-456-7890</p>
        </div>
        <div className="footer-icon">
          {/* <img src={facebookIcon} alt="Facebook" /> */}
          <FacebookRoundedIcon className="icon" style={{height: "25px", width: "25px", borderRadius: "25px", backgroundColor: "red", color:"#fff"}} />
          <p>Facebook</p>
        </div>
        <div className="footer-icon">
          {/* <img src={websiteIcon} alt="Website" /> */}
          <LanguageIcon className="icon" style={{height: "25px", width: "25px", borderRadius: "25px", backgroundColor: "red", color:"#fff",}} />
          <p>www.example.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
