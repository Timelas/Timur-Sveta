import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <p className="details__text">Нам неважно, какой подарок вы выберете, главное, чтобы он поместился в конверт.</p>
      <div className="details__line"></div>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного семейного праздника.</p>
    </section>
  );
}

export default Details;