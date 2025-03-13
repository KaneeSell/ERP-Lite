import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Versao from '../components/Versao';
import { ThemeProviderComponent } from '../components/ThemeContext'
import styles from '../assets/styles/index.module.css'

function Login(): JSX.Element {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [validacao, setValidacao] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [remember, setRemember] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const rememberme = localStorage.getItem('remember');
        if (rememberme) {
            const [savedUser, savedPassword] = rememberme.split(',');
            setUsuario(savedUser);
            setSenha(savedPassword);
            setRemember(true);
        }
        document.body.classList.add('login-page');
        return () => {
            document.body.classList.remove('login-page'); // Remove ao sair
        };
    }, []);

    function validarLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            if (usuario === 'admin' && senha === 'admin') {
                if (remember) {
                    localStorage.setItem('remember', `${usuario},${senha}`);
                } else {
                    localStorage.removeItem('remember');
                }
                setErro('');
                router.push('/home'); 
            } else {
                setErro('Usuário ou senha inválido!');
            }
        }
        setValidacao(true);
    }

    return (
        <>
        <ThemeProviderComponent>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column vh-100">
                <Image width={100} height={100} alt="logo" className={styles.logo} src="images/logo.png" priority={true} />
                <h1>ERP-Lite</h1>

                {erro && <div className="alert alert-danger">{erro}</div>}

                <form className="d-flex flex-column justify-content-center align-items-center gap-2 needs-validation" 
                      noValidate={validacao} onSubmit={validarLogin}>

                    {/* Campo de Usuário */}
                    <div className="mb-3 w-100 text-center">
                        <input type="text" className="form-control text-center" 
                            placeholder="Usuário" 
                            value={usuario} 
                            required 
                            onChange={(e) => setUsuario(e.target.value)} />
                        <div className="invalid-feedback">Usuário não informado!</div>
                    </div>

                    {/* Campo de Senha */}
                    <div className="mb-3 w-100 text-center">
                        <div className="input-group">
                            <input 
                                type={mostrarSenha ? "text" : "password"} 
                                className={`form-control text-center ${validacao && !senha ? 'is-invalid' : ''}`} 
                                placeholder="Senha" 
                                value={senha} 
                                required 
                                onChange={(e) => setSenha(e.target.value)} 
                            />
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button" 
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                            >
                                <i className={`bi ${mostrarSenha ? 'bi-eye-slash' : 'bi-eye'}`} />
                            </button>
                        </div>
                        <div className="invalid-feedback">Senha não informada!</div>
                    </div>

                    {/* Checkbox "Lembrar-me" e Botão de Login */}
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="remember" 
                                checked={remember} 
                                onChange={(e) => setRemember(e.target.checked)} 
                            />
                            <label className="form-check-label" htmlFor="remember">Lembrar</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <Versao />
        </ThemeProviderComponent>
        </>
    );
}

export default Login;
