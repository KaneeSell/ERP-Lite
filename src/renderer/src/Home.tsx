import { useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { MarkDownReader } from "./components/MarkDownReader";

function Home(): JSX.Element {
    useEffect(() => {
        document.body.classList.add("home-page");
        return () => {
          document.body.classList.remove("home-page"); // Remove ao sair
        };
      }, []);
    return(
    <>
    <NavBar/>
      <Container className="d-flex justify-content-center align-items-center flex-column mt-4">
        <MarkDownReader/>
      </Container>
    <Footer/>
    </>
    )
}

export default Home