import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Header.css";
import newlyweds from "../../images/newlyweds.jpg"

function Header() {
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <section className="header" id="home">
      {
        resize ? (
          <div className="header__desctop">
            <h1 className="header__title">Приглашение на свадьбу</h1>
            <img src={newlyweds} className="header__image" alt="молодожены"></img>
            <div className="header__info">
              <p className="header__info_names">Тиму&#8204;р и</p>
              <p className="header__info_names">&ensp;&ensp;&ensp;Светлана</p>
              <p className="header__info_date">28.07.2023</p>
            </div>
          </div>
        ) : (
          <div className="header__mobile">
            <div className="header__info-mobile">
              <p className="header__info_names-mobile">Тиму&#8204;р и</p>
              <p className="header__info_names-mobile">&ensp;&ensp;&ensp;&ensp;Светлана</p>
            </div>
            <div className="header__block">
              <h1 className="header__title">Приглашение на свадьбу</h1>
              <img src={newlyweds} className="header__image-mobile" alt="молодожены"></img>
            </div>
            <p className="header__info_date-mobile">28.07.2023</p>
          </div>
        )
      }
    </section>
  );
}

export default Header;