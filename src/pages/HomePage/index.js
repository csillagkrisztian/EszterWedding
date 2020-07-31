import React from "react";
import HomePageImage from "../../components/HomePageImage";
import LanguageChange from "../../components/LanguageChange";
import { Jumbotron } from "react-bootstrap";
export default function HomePage() {
  return (
    <div>
      <img
        className="timerPicture"
        src="https://images-ext-2.discordapp.net/external/6_r94cK3LW5W9O9vpojgd2CxvzVrpVjbYLF6H4tF4bI/https/i.ibb.co/m0f80Pv/3450.jpg?width=1386&height=499"
      ></img>

      <LanguageChange />
      <HomePageImage />
    </div>
  );
}
