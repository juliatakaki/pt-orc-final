import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css'

export default function Login(){


    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, senha})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/menu')
            }
        })
        .catch(err => console.log(err))
    }

    return(
       <div className="fundo">
        <div className="caixaLogin">
            <div className="hamburguer">

            </div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="email" 
                    placeholder="Seu Email"
                    autoComplete="off"
                    name="email"
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                        <input type="password" 
                        placeholder="Sua Senha"
                        name="password"
                        className="senha"
                        onChange={(e) => setSenha(e.target.value)}
                        />
                </div>
                <button type="submit" className="login">
                    Login
                </button>
            </form>
            <p>Não tenho Conta! <Link className="cadastro" to="/register">Cadastrar-se!</Link></p>
        </div>

       </div>
    )
}