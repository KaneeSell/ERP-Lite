import { Container } from 'react-bootstrap'
import { Whatsapp, Linkedin, Github, EnvelopeAtFill, FileEarmarkTextFill } from 'react-bootstrap-icons'

function Footer() : JSX.Element{
    return (
        <Container className="container">
        <footer className="py-3 my-4">

        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <a href="https://github.com/KaneeSell" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <Github className='mb-1 mx-2'></Github>
                    Github</a></li>
            <li className="nav-item">
                <a href="https://www.linkedin.com/in/daniel-henrique-sell/" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <Linkedin className='mb-1 mx-2'></Linkedin>
                    LinkedIn</a></li>
            <li className="nav-item">
                <a href="mailto:Kanee.Sell@gmail.com" 
                className="nav-link px-2 text-body-secondary">
                    <EnvelopeAtFill className='mb-1 mx-2'></EnvelopeAtFill>
                    G-Mail</a></li>
            <li className="nav-item">
                <a href="https://wa.me/+5547991166401" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <Whatsapp className='mb-1 mx-2'></Whatsapp>
                    Whatsapp</a></li>
            <li className="nav-item">
                <a href="https://github.com/KaneeSell/ERP-Lite/blob/main/README.md" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <FileEarmarkTextFill className='mb-1 mx-2'></FileEarmarkTextFill>
                    Documentação</a></li>
        </ul>
        <p className="text-center text-body-secondary">ERP-Lite  - By Kanee Sell</p>
        </footer>
        </Container>
    )
}
export default Footer