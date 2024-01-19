import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import './Signup.css'

export default function Signup(){

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [endereco, setEndereco] = useState()
    const [senha, setSenha] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {nome, email, endereco, senha})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log("erro aqui"))
    }


    return(
        <div className="fundoCadastro">
            <div className="caixa">
            <div className="hamburguer">

            </div>
                <h2>Cadastre-se</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text"
                    placeholder="Escreva seu nome"
                    autoComplete="off"
                    name="email"
                    className="input"
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input type="email"
                    placeholder="Escreva seu Email"
                    autoComplete="off"
                    name="email"
                    className="input"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input type="text"
                    placeholder="Escreva seu endereço completo"
                    autoComplete="off"
                    name="email"
                    className="input"
                    onChange={(e) => setEndereco(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input type="password"
                    placeholder="Escreva sua senha"
                    autoComplete="off"
                    name="password"
                    className="input"
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit" className="registro">
                    Cadastrar-se!
                </button>
                </form>
                <p>Já tem uma conta? <Link className="linkLogin" to="/login">Faça o Login!</Link></p>
            </div>
        </div>
    );
}