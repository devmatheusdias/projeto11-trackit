import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Input } from "../constants/GlobalComponents"
import { HomeButton } from "../constants/GlobalComponents"
import { LogoImage } from "../constants/GlobalComponents"
import { Ancor } from "../constants/GlobalComponents"
import { Title } from "../constants/GlobalComponents"

export default function SignUp() {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");


    function getSignUp(e) {
        e.preventDefault();

        const user = {
            email: email,
            name: name,
            image: image,
            password: password
        };

        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;

        axios.post(url, user).then(res => alerta(res)).catch(err => err.response.status == 409 ? alert('Usuario já cadastrado') : alert('Tente novamente mais tarde'));
    }

    function alerta(res){
        alert(`${res.data.name} cadastrado com sucesso!`)
        navigate("/");
    }

    return (
        <LoginContainer>
            <LogoImage></LogoImage>
            <Title>TrackIt</Title>
            <form action="/" onSubmit={getSignUp}>
                <Input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)}></Input>

                <Input type="password" placeholder="senha" required onChange={(e) => setPassword(e.target.value)}></Input>

                <Input type="text" placeholder="nome" required onChange={(e) => setName(e.target.value)}></Input>

                <Input type="text" placeholder="foto" required onChange={(e) => setImage(e.target.value)}></Input>
                <HomeButton type="submit">Cadastrar</HomeButton>
            </form>
            <Link to={"/"}>
                <Ancor href="#">Já tem uma conta? Faça login!</Ancor>
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
    background-color: crimson;

    form{
        display: flex;
        flex-direction: column;

    }
`