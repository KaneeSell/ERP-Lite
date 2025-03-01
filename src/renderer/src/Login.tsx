import electronLogo from './assets/electron.svg'
import { Button, Form, Stack, Alert, InputGroup, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Versao from './components/Versao';
import { Eye, EyeSlash } from "react-bootstrap-icons";

function Login(): JSX.Element {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [validacao, setValidacao] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const rememberme = localStorage.getItem("remember");
        if (rememberme) {
            const [savedUser, savedPassword] = rememberme.split(',');
            setUsuario(savedUser);
            setSenha(savedPassword);
            setRemember(true);
        }
        document.body.classList.add("login-page");
        return () => {
            document.body.classList.remove("login-page"); // Remove ao sair
        };
    }, []);

    function validarLogin(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            if (usuario === 'admin' && senha === 'admin') {
                if (remember) {
                    localStorage.setItem("remember", `${usuario},${senha}`);
                } else {
                    localStorage.removeItem("remember");
                }
                setErro('');
                navigate('/home');
            } else {
                setErro('Usuário ou senha inválido!');
            }
        }
        setValidacao(true);
    }

    return (
        <>
        <Container className='container-fluid d-flex justify-content-center align-items-center flex-column'>
            <img alt="logo" className="logo" src={electronLogo} />
            <h1>ERP-Lite</h1>
            {erro && <Alert variant='danger'>{erro}</Alert>}
            <Form className='d-flex flex-column justify-content-center align-items-center gap-2'
                noValidate validated={validacao} onSubmit={validarLogin}>
                <Form.Group className='d-flex flex-column justify-content-center align-items-center gap-2'
                    controlId="username">
                    <Form.Control type="text" placeholder='Usuario' value={usuario} required
                        onChange={(e) => setUsuario(e.target.value)} />
                    <Form.Control.Feedback type='invalid'>Usuário não informado!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="d-flex flex-column justify-content-center align-items-center gap-2" controlId="password">
                    <div style={validacao ? (senha ? { maxWidth: "225px" } : { maxWidth: "225px" }) : { maxWidth: "200px" }}>
                        <InputGroup className={validacao ? (senha ? "" : "is-invalid") : ""}>
                            <Form.Control
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="Senha"
                                value={senha}
                                required
                                onChange={(e) => setSenha(e.target.value)}
                                isInvalid={validacao && !senha}
                            />
                            <InputGroup.Text onClick={() => setMostrarSenha(!mostrarSenha)}>
                                {mostrarSenha ? <EyeSlash /> : <Eye />}
                            </InputGroup.Text>
                        </InputGroup>
                        {validacao && !senha && (
                            <Form.Text className="text-dangerr">
                                Senha não informada!
                            </Form.Text>
                        )}
                    </div>
                </Form.Group>
                <Stack direction="horizontal" gap={3} className='justify-content-center'>
                    <Form.Group>
                        <Form.Check type="checkbox" name="remember" id="remember" label='Lembrar'
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                    </Form.Group>
                    <Button type='submit' variant='primary'>Login</Button>
                </Stack>
            </Form>
        </Container>
        <Versao />
        </>
    );
}
export default Login;
