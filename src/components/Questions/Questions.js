import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzTkeYvid-uDPae-ZFxpoZhHw3SGWQiLzb_C-1h11xfBY16fs2FSDDI8SpHnPgGe7a4_A/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }

  return (
    <section className="question" id="questions">
      <Title title={"Опрос"}/>

      { isFormVisible ?
        <div className="question__container">
<p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста,
        ответьте на несколько вопросов</p>
      <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
        <p className="question__string">
          <label htmlFor="who" className="question__label-input">ИМЯ И ФАМИЛИЯ:</label>
          <input type="text" name="Имя и Фамилия" id="who" required className="question__input"></input>
        </p>
        <fieldset className="question__string">Будут ли с вами дети:
          <label  htmlFor="yes-children" className="question__label">
            <input className="question__unvisible" type="radio" name="Дети" value="Да" id="yes-children"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Да</span>
          </label>
          <label className="question__label" htmlFor="no-children">
            <input className="question__unvisible" type="radio" name="Дети" value="Нет" id="no-children"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Нет</span>
          </label>
        </fieldset>
        <fieldset className="question__string">Пожелания по напиткам:
          <label  htmlFor="champange" className="question__label">
            <input className="question__unvisible" type="radio" name="Алкоголь" value="Шампанское" id="champange"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Шампанское</span>
          </label>
          <label htmlFor="vino-red" className="question__label">
            <input className="question__unvisible" type="radio" name="Алкоголь" value="Вино красное" id="vino-red"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Вино красное полусладкое</span>
          </label>
          <label htmlFor="vino-withe" className="question__label">
            <input className="question__unvisible" type="radio" name="Алкоголь" value="Вино белое" id="vino-withe"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Вино белое полусухое</span>
          </label>
          <label htmlFor="cognac" className="question__label">
            <input className="question__unvisible" type="radio" name="Алкоголь" value="Коньяк" id="cognac"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Коньяк</span>
          </label>
          <label htmlFor="vodka" className="question__label">
            <input className="question__unvisible" type="radio" name="Алкоголь" value="Водка" id="vodka"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Водка</span>
          </label>
          <label htmlFor="no-alco" className="question__label">
            <input className="question__unvisible" type="radio" name="Алкоголь" value="Безалкогольное" id="no-alco"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text-span">Безалкогольные напитки</span>
          </label>
        </fieldset>
        <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Обработка..." : "Отправить"}</button>
      </form>
      </div>
      :
      <p className="question__text">Форма отправлена!</p>
      }

    </section>
  );
}

export default Questions;