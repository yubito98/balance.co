import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import styles from "../styles/Header.module.css"
const Header = () =>{
    return(
        <header className={styles.header}>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h3><a className="" href="#">Balance.co</a></h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={styles.navbarContainer + " navbar-nav mb-2 mb-lg-0"}>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Producto
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Para usuarios</a></li>
                            <li><a className="dropdown-item" href="#">Para empresas</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <PrimaryButton
                        text="Iniciar Sesión"
                        />
                        <SecondaryButton
                        text="Registrarse"
                        />
                    </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;