import style from "../../components/Header/style.module.scss"
import logo from "../../assets/Logo.svg"

export const Header = () => {
  return (
    <header className={style.headerBox}>
           <img src={logo} alt="Logo Kenzie" />
    </header>
  );
};
