import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { useState } from "react";

function NavBar(props: { navegar: string }): JSX.Element {
    const { theme, toggleTheme } = useTheme();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><strong>ERP-Lite</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/home" className={`nav-link ${props.navegar === 'home-page' ? 'active' : ''}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/entidades" className={`nav-link ${props.navegar === 'entidades' ? 'active' : ''}`}>Entidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${props.navegar === "produtos" ? "active" : ""}`}>Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${props.navegar === "estoque" ? "active" : ""}`}>Estoque</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${props.navegar === "vendas" ? "active" : ""}`}>Vendas</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${props.navegar === "compras" ? "active" : ""}`}>Compras</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className={`nav-link ${props.navegar === "livro-caixa" ? "active" : ""}`}>Livro Caixa</Link>
                        </li>

                        {/* Dropdown de Relatórios */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle"
                                href="#" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                            >
                                Relatórios
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                                <li><Link className="dropdown-item" href="#">R. Compras</Link></li>
                                <li><Link className="dropdown-item" href="#">R. Vendas</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" href="#">R. Livro Caixa</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Botão de modo escuro/claro */}
                    <button className="btn btn-outline-secondary me-2" onClick={toggleTheme}>
                        {theme === "light" ? "Light" : "Dark"} Mode
                    </button>

                    {/* Botão de logout */}
                    <Link href="/">
                        <button className="btn btn-outline-danger">Sair</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
