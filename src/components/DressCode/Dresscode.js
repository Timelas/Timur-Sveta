import React from "react";
import Title from "../Title/Title";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <Title title={"Dress Code"}/>
      <p className="dresscode__description">БУДЕМ ПРИЗНАТЕЛЬНЫ, ЕСЛИ ВЫ ПОДДЕРЖИТЕ ЦВЕТОВУЮ ГАММУ НАШЕГО ПРАЗДНИКА В СВОИХ НАРЯДАХ:</p>
      <div className="dresscode__colors">
        <div className="dresscode__color dresscode__color_var_one"></div>
        <div className="dresscode__color dresscode__color_var_two"></div>
        <div className="dresscode__color dresscode__color_var_three"></div>
        <div className="dresscode__color dresscode__color_var_four"></div>
        <div className="dresscode__color dresscode__color_var_five"></div>
      </div>
    </section>
  );
}

export default Dresscode;