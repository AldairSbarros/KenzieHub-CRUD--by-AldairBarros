import logo from "../../assets/Logo.svg";
import { RegisterForm } from "../../components/forms/RegisterForm";
import style from "../../pages/RegisterPage/style.module.scss";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <div className={style.registerBox}>
        <img src={logo} alt="" />
        <Link to="/">
          <button className="desabilitado small">Voltar</button>
        </Link>
      </div>

      <main>
        <RegisterForm />
      </main>
    </>
  );
};
