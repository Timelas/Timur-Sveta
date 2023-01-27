import React from 'react';
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import InfoDate from "../InfoDate/InfoDate";
import Dresscode from "../DressCode/Dresscode";
import Details from "../Details/Details";
import Counter from "../Counter/Counter";
import Rsvp from "../RSVP/Rsvp";
import Questions from "../Questions/Questions"
import Footer from "../Footer/Footer";
import './App.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function App() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isCloseBurger, setIsCloseBurger] = React.useState(true);

  function handleOpenBurger () {
    setIsOpenBurger(true);
    setIsButtonVisible(false);
    setIsCloseBurger(false);
  }

  function handleCloseBurger () {
    setIsOpenBurger(false);
    setIsButtonVisible(true);
    setIsCloseBurger(true);
  }

  return (
    <div className="App">
      <Menu
        isButtonVisible={isButtonVisible}
        onOpenBurger={handleOpenBurger} />
      <Header />
      <InfoDate />
      <Dresscode />
      <Details />
      <Counter
      date={new Date('27 Jul 2023 17:00')} />
      <Rsvp />
      <Questions />
      <Footer />
      <BurgerMenu
        isOpenBurger={isOpenBurger}
        onCloseBurger={handleCloseBurger} />
    </div>
  );
}

export default App;
