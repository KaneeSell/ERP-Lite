import { Button } from "react-bootstrap";
import { useTheme } from "./ThemeContext"; // Importa o hook de tema

function Versao(): JSX.Element {
  const { theme, toggleTheme } = useTheme(); // Obtém o tema e a função de troca

  return (
      <ul className="versions bg-body">
        <li>V 1.0.0</li>
        <li>By Kanee Sell</li>
        <li className={theme === "light" ? "dark" : "light"} onClick={toggleTheme}>
        {theme === "light" ? "Light" : "Dark"} Mode
        </li>
      </ul>
  );
}

export default Versao;
