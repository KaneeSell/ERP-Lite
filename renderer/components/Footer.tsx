function Footer() : JSX.Element{
    return (
        <div className="container-fluid">
        <footer className="py-3 my-4">

        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <a href="https://github.com/KaneeSell" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <i className="bi bi-github mb-1 mx-2"></i>
                    Github</a></li>
            <li className="nav-item">
                <a href="https://www.linkedin.com/in/daniel-henrique-sell/" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <i className="bi bi-linkedin mb-1 mx-2"></i>
                    LinkedIn</a></li>
            <li className="nav-item">
                <a href="mailto:Kanee.Sell@gmail.com" 
                className="nav-link px-2 text-body-secondary">
                    <i className="bi bi-envelope-at-fill mb-1 mx-2"></i>
                    G-Mail</a></li>
            <li className="nav-item">
                <a href="https://wa.me/+5547991166401" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <i className="bi bi-whatsapp mb-1 mx-2"></i>
                    Whatsapp</a></li>
            <li className="nav-item">
                <a href="https://github.com/KaneeSell/ERP-Lite/blob/main/README.md" 
                className="nav-link px-2 text-body-secondary"
                target="_blank">
                    <i className="bi bi-file-earmark-text-fill mb-1 mx-2"></i>
                    Documentação</a></li>
        </ul>
        <p className="text-center text-body-secondary">ERP-Lite  - By Kanee Sell</p>
        </footer>
        </div>
    )
}
export default Footer