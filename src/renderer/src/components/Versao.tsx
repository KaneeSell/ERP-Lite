import { useTheme } from "./ThemeContext"; // Importa o hook de tema
import { Container, Navbar } from 'react-bootstrap'

function Versao(): JSX.Element {
  const { theme, toggleTheme } = useTheme(); // Obtém o tema e a função de troca

  return (
    <Navbar className="py-3" fixed="bottom">
      <Container className="justify-content-center">
        <ul className="versao d-flex flex-row justify-content-center align-items-center list-unstyled">
          <li>V 1.0.0</li>
          <li><a className="btn text-body link-github" href="https://github.com/KaneeSell" target="_blank">By Kanee Sell</a>
          </li>
          <li className={(theme === "light" ? "dark" : "light")} onClick={toggleTheme}>
          {theme === "light" ? "Light" : "Dark"} Mode
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Versao;
