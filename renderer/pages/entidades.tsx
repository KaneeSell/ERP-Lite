import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import styles from '../assets/styles/entidades.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Entidades(){
    interface Entidade {
        id: string;
        nomerazao: string;
        nomefantasia: string;
        cpfcnpj: string;
        fornecedor: boolean;
        cliente: boolean;
    }

    const baseUrl = 'http://177.221.174.240:25565/entidades'
    const [list, setList] = useState<Entidade[]>([]);
    const [message, setMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const [searchType, setSearchType] = useState("")
    const [originalList, setOriginalList] = useState<Entidade[]>([]);
    const [formData, setFormData] = useState({
        id: "",
        cpfcnpj: "",
        nomerazao: "",
        nomefantasia: "",
        cliente: false,
        fornecedor: false
    })

    useEffect(() => {
        axios.get(baseUrl).then(resp => {
            setList(resp.data);
            setOriginalList(resp.data); // Armazena a lista original
        });
    }, []);
    
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // Usa a lista original como base
        const filteredList = originalList.filter((user) => {
            const matchesSearch = 
                user.nomefantasia.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.nomerazao.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.cpfcnpj.includes(searchTerm);
    
            const matchesType = 
                searchType === "" || 
                (searchType === "fornecedor" && user.fornecedor) || 
                (searchType === "cliente" && user.cliente); 
    
            return matchesSearch && matchesType;
        });
    
        setList(filteredList);
    };

    const handleChange = (event:React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
        const { name, type, value, checked } = event.target as HTMLInputElement;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`${baseUrl}/${id}`);
            setList(prevList => prevList.filter(user => user.id !== id));
            setMessage("Excluído com sucesso!");
        } catch {
            setMessage("Erro ao excluir!");
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const method = formData.id ? "put" : "post";
        const url = formData.id ? `${baseUrl}/${formData.id}` : baseUrl
        try {
            const response = await axios[method](url, formData);
            setList(prevList => prevList.filter(u => u.id !== response.data.id).concat(
                response.data));
                setFormData({ id: "", cpfcnpj: "", nomefantasia: "", nomerazao: "", cliente: false, fornecedor: false });
                setMessage("Salvo com Sucesso!")
            } catch {
                setMessage("Erro ao Salvar!")
            }
    };
    const renderForm = () => ( 
        <div className={"container d-flex justify-content-center align-items-center"}>
            <form className={"form"}
            onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center align-items-start flex-row gap-2">
                <div 
                className="form-check">
                    <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={formData.cliente} 
                    id="cliente"
                    name="cliente"
                    onChange={handleChange} />
                    <label 
                    className="form-check-label" 
                    htmlFor="cliente">Cliente</label>
                </div>
                <div 
                className="form-check">
                    <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={formData.fornecedor} 
                    id="fornecedor"
                    name="fornecedor"
                    onChange={handleChange} />
                    <label 
                    className="form-check-label" 
                    htmlFor="fornecedor">Fornecedor</label>
                </div>
                </div>
                <div className={styles.inputGroupResponse}>
                <div className={"input-group"}>
                    <label className="input-group-text" htmlFor="cpfcnpj">
                        CPF/CNPJ:
                    </label>
                    <input itemType="text" 
                    className={styles.input250 + " form-control"} 
                    id="cpfcnpj"
                    maxLength={18}
                    value={formData.cpfcnpj}
                    onChange={handleChange}
                    name="cpfcnpj">
                    </input>
                </div>
                <div className={"input-group"}>
                    <label 
                    className="input-group-text" 
                    htmlFor="nomefantasia">
                        Nome Fantasia:
                    </label>
                    <input itemType="text" 
                    className={styles.input300 + " form-control"}  
                    id="nomefantasia"
                    value={formData.nomefantasia}
                    onChange={handleChange}
                    name="nomefantasia">
                    </input>
                </div>
                <div className={"input-group"}>
                    <label className="input-group-text" htmlFor="nomerazao">
                        Nome Razão:
                    </label>
                    <input itemType="text" 
                    className={styles.input350 + " form-control"}  
                    id="nomerazao"
                    name="nomerazao"
                    value={formData.nomerazao}
                    onChange={handleChange}>
                    </input>
                </div>
                </div>
                <div className="d-flex justify-content-center align-items-start flex-row my-3 gap-2">
                    <button
                    type="submit"
                    className={"btn btn-primary"}>
                        Salvar
                    </button>
                    <button
                    type="submit"
                    className={"btn btn-secondary"}
                    onClick={() => setFormData({ id: "", nomefantasia: "", nomerazao: "", cpfcnpj: "", cliente: false, fornecedor: false })}>
                        Cancelar
                    </button>
                </div>
            </form>
            </div>
    )
    const renderRows = () => (
        list.map(user => (
            <tr className={styles.thSelect} key={user.id}>
                <td>{user.id}</td>
                <td>{user.nomefantasia}</td>
                <td>{user.nomerazao}</td>
                <td>{user.cpfcnpj}</td>
                <td>{user.cliente? "Sim" : "Não" }</td>
                <td>{user.fornecedor? "Sim" : "Não" }</td>
                <td>
                    <button className="btn btn-warning me-2" onClick={() => setFormData(user)}>
                        <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        ))
    )
    const renderSearch = () => (
        <form 
            className="container-fluid d-flex justify-content-center align-items gap-2"
            onSubmit={handleSearch}
        >
            {/* Select do Tipo de Entidade */}
            <div className={styles.input250 + " input-group "}>
                <label htmlFor="tipoentidade" className="input-group-text">
                    Tipo Entidade:
                </label>
                <select 
                    id="tipoentidade" 
                    name="tipoentidade"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="form-select"
                >
                    <option value="">Todos os tipos</option>
                    <option value="fornecedor">Fornecedor</option>
                    <option value="cliente">Cliente</option>
                </select>
            </div>
            {/* Campo de Busca */}
            <input 
                className={styles.input150 + " form-control "} 
                type="search" 
                placeholder="Buscar..." 
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
    
            <button className="btn btn-outline-success" type="submit">
                Buscar
            </button>
        </form>
    );
    return (
        <div className="w-100">
            <NavBar navegar="entidades"/>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column mt-2">
                <h1>Entidades</h1>
                <div className="d-flex justify-content-center align-items-center flex-column w-100">
                    {renderForm()}
                    <div>
                        {message && <p className={styles.messageResponse + " alert alert-info"}>{message}</p>}
                    </div>
                    <p className="w-100 nav justify-content-center border-bottom mb-3"></p>
                    <div className="container-fluid">
                        {renderSearch()}
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome Fantazia</th>
                                        <th>Nome Razão</th>
                                        <th>CPF/CNPJ</th>
                                        <th>Cliente</th>
                                        <th>Fornecedor</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderRows()}
                                </tbody>
                            </table>
                        </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}