import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useTheme } from "./ThemeContext";

function NavBar() :JSX.Element{
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><strong>ERP-Lite</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={NavLink} to="/home" end active>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="#">Entidades</Nav.Link>
                        <Nav.Link as={NavLink} to="#">Produtos</Nav.Link>
                        <Nav.Link as={NavLink} to="#">Estoque</Nav.Link>
                        <Nav.Link as={NavLink} to="#">Vendas</Nav.Link>
                        <Nav.Link as={NavLink} to="#">Compras</Nav.Link>
                        <Nav.Link as={NavLink} to="#">Livro Caixa</Nav.Link>
                        <NavDropdown title="Relatórios" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#">R. Compras</NavDropdown.Item>
                            <NavDropdown.Item href="#">R. Vendas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                            R. Livro Caixa
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        <Button variant={theme === "light" ? "light" : "dark"} className={(theme === "light" ? "dark" : "light")} onClick={toggleTheme}>
                        {theme === "light" ? "Light" : "Dark"} Mode
                        </Button>
                    <Nav>
                        <Nav.Link  as={NavLink} to="/">
                        <Button variant="outline-danger">Sair</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar