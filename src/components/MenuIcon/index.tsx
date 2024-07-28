import React from "react";
import "./index.css";

const MenuIcon = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <ul className={`menu ${isActive ? "active" : ""}`}>
        <div className="menuToggle" onClick={handleMenuToggle}>
          <ion-icon name="add-outline"></ion-icon>
        </div>
        <li style={{ "--i": 0, "--clr": "#ff2972" }}>
          <a href="#">
            <ion-icon name="home-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 1, "--clr": "#fee800" }}>
          <a href="#">
            <ion-icon name="settings-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 2, "--clr": "#04fc43" }}>
          <a href="#">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 3, "--clr": "#fe00f1" }}>
          <a href="#">
            <ion-icon name="key-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 4, "--clr": "#00b0fe" }}>
          <a href="#">
            <ion-icon name="camera-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 5, "--clr": "#fea600" }}>
          <a href="#">
            <ion-icon name="game-controller-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 6, "--clr": "#a529ff" }}>
          <a href="#">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </li>
        <li style={{ "--i": 7, "--clr": "#01bdab" }}>
          <a href="#">
            <ion-icon name="videocam-outline"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(MenuIcon);
