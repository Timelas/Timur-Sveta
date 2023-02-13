import React from "react";
import Dresscode from "../DressCode/Dresscode";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <p className="details__text">Нам неважно, какой подарок вы выберете, главное, чтобы он поместился в конверт</p>
      <div className="details__line"></div>
      <p className="details__text">В случае, если фрукты на столе будут не нарезаны, попросите об этом официанта</p>
      <div className="details__line"></div>
      <Dresscode />
    </section>
  );
}

export default Details;