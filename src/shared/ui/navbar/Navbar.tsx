import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../icon/logo.svg";
import menuBurger from "../../icon/menu.svg";
import closeIcon from "../../icon/menuXClose.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300); // должно совпадать с CSS-анимацией
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.container}>
          <Link to="/">
            <img src={logo} alt="logo" className={style.logo} />
          </Link>
          <button className={style.menuButton} onClick={toggleMenu}>
            <img src={menuBurger} alt="menu" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          <div className={style.overlay} onClick={toggleMenu}></div>
          <div
            className={`${style.menuBurger} ${
              isClosing ? style.slideOut : style.slideIn
            }`}
          >
            <div className={style.menuHeader}>
              <Link to="/">
                <img src={logo} alt="logo" className={style.logo} />
              </Link>
              <button className={style.closeButton} onClick={toggleMenu}>
                <img src={closeIcon} alt="close" />
              </button>
            </div>
            <ul>
              <Link to="/architecture" onClick={toggleMenu}>
                <li>architecture</li>
              </Link>
              <Link to="/product" onClick={toggleMenu}>
                <li>product</li>
              </Link>
              <Link to="/modelling" onClick={toggleMenu}>
                <li>modelling</li>
              </Link>
              <Link to="/academy" onClick={toggleMenu}>
                <li>academy</li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
