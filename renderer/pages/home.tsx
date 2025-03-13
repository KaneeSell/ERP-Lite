import { useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import HomeConteudo from "../components/HomeConteudo";
// import styles from '../assets/styles/home.module.css'

function Home(): JSX.Element {
    useEffect(() => {
        document.body.classList.add("home-page");
        return () => {
          document.body.classList.remove("home-page"); // Remove ao sair
        };
      }, []);
    return(
    <>
    <NavBar navegar="home-page"/>
      <div className="container-fluid d-flex justify-content-center align-items-center flex-column mt-4">
        <HomeConteudo/>
      </div>
    <Footer/>
    </>
    )
}

export default Home