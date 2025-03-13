import { useTheme } from "./ThemeContext"; // Importa o hook de tema
import styles from '../assets/styles/versao.module.css'

function Versao(): JSX.Element {
  const { theme, toggleTheme } = useTheme(); // Obtém o tema e a função de troca

  return (
    <div className={styles.versao + " position-absolute bottom-0 start-50 translate-middle-x mb-3"}>
        <ul className=" nav nav-bar position-relative">
        <div className="container justify-content-center">
            <ul className="versao d-flex flex-row justify-content-center align-items-center list-unstyled">
            <li>V 1.0.0</li>
            <strong className="ms-3">|</strong>
            <li><a className="btn text-body link-github" href="https://github.com/KaneeSell" target="_blank">By Kanee Sell</a>
            </li>
            <strong className="me-3">|</strong>
            <li className={(theme === "light" ? "dark" : "light")} onClick={toggleTheme}>
            {theme === "light" ? "Light" : "Dark"} Mode
            </li>
            </ul>
        </div>
        </ul>
    </div>
  );
}

export default Versao;
