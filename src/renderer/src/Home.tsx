import { Container, Breadcrumb, BreadcrumbItem } from "react-bootstrap"

function Home(): JSX.Element {

    return(
    <>
    <Breadcrumb>
        <Breadcrumb.Item href="/">Logout</Breadcrumb.Item>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>
    <h1>Logado com sucesso!</h1>
    </>
    )
}

export default Home