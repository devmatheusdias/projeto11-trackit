import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Input } from "../constants/GlobalComponents"
import { HomeButton } from "../constants/GlobalComponents"
import { Ancor } from "../constants/GlobalComponents"
import { Title } from "../constants/GlobalComponents"
import { LogoImage } from "../constants/GlobalComponents"
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"
import axios from "axios";


export default function Login({setToken}) {
   
    const {auth, setAuth} = useContext(AuthContext);
    console.log('auth', auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate()

    function Logar(e) {
        e.preventDefault();

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`

        axios.post(url, {email: email, password: password}).
        then(res => {
            setAuth(true);
            setToken(res.data.token)
            alert(res.data.token);
            navigate('/habitos')
        }).
        catch(err => {
            {err.response.status == 401 ? alert('Usuario não encontrado') : alert('Tente novamente mais tarde')}
        });

    }

    return (
        <LoginContainer>
            <LogoImage src={Logo}></LogoImage>
            <Title>TrackIt</Title>
            <form action="" onSubmit={Logar}>
                <Input type="email" value={email} placeholder="email" required onChange={(e) => setEmail(e.target.value)}></Input>

                <Input type="password" value={password} placeholder="senha"
                    required onChange={(e) => setPassword(e.target.value)}></Input>
                <HomeButton type="submit">Entrar</HomeButton>
            </form>
            <Link to={"/cadastro"}>
                <Ancor href="#">Não tem uma conta? Cadastre-se!</Ancor>
            </Link>

        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FFFFFF;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;

    }
`