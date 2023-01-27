import React from "react";
import Title from "../Title/Title";
import "./Questions.css";

function Questions() {
  return (
    <section className="question" id="questions">
      <Title title={"Опрос"}/>
      <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста,
        ответьте на несколько вопросов
      </p>
      <form className="question__form">
        <p className="question__string">
          <label htmlFor="who" className="question__label-input">ИМЯ И ФАМИЛИЯ:</label>
          <input type="text" name="who" id="who" required className="question__input"></input>
        </p>
        <fieldset className="question__string">Будут ли с вами дети:
          <label  htmlFor="yes-transfer" className="question__label">
            <input className="question__unvisible" type="radio" name="transfer" value="yes-transfer" id="yes-transfer"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Да</span>
          </label>
          <label className="question__label" htmlFor="no-transfer">
            <input className="question__unvisible" type="radio" name="transfer" value="no-transfer" id="no-transfer"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Нет</span>
          </label>
        </fieldset>
        <fieldset className="question__string">Пожелания по напиткам:
          <label  htmlFor="champange" className="question__label">
            <input className="question__unvisible" type="radio" name="alco" value="шампанское" id="champange"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Шампанское</span>
          </label>
          <label htmlFor="vino-red" className="question__label">
            <input className="question__unvisible" type="radio" name="alco" value="вино красное" id="vino-red"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Вино красное полусладкое</span>
          </label>
          <label htmlFor="vino-withe" className="question__label">
            <input className="question__unvisible" type="radio" name="alco" value="вино белое" id="vino-withe"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Вино белое полусухое</span>
          </label>
          <label htmlFor="cognac" className="question__label">
            <input className="question__unvisible" type="radio" name="alco" value="Коньяк" id="cognac"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Коньяк</span>
          </label>
          <label htmlFor="vodka" className="question__label">
            <input className="question__unvisible" type="radio" name="alco" value="Водка" id="vodka"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Водка</span>
          </label>
          <label htmlFor="no-alco" className="question__label">
            <input className="question__unvisible" type="radio" name="alco" value="Безалкогольное" id="no-alco"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Безалкогольные напитки</span>
          </label>
        </fieldset>
        <button type="submit" className="question__button">Подтвердить</button>
      </form>
    </section>
  );
}

export default Questions;