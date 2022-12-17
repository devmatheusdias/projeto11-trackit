import styled from "styled-components";
import { Input } from "../constants/GlobalComponents"
import { HomeButton } from "../constants/GlobalComponents"
import { LogoImage } from "../constants/GlobalComponents"
import { Ancor } from "../constants/GlobalComponents"
import { Title } from "../constants/GlobalComponents"
import { Link } from "react-router-dom";


export default function SignUp() {
    return (
        <LoginContainer>
            <LogoImage></LogoImage>
            <Title>TrackIt</Title>
            <form action="">
                <Input type="email" placeholder="email" required></Input>
                <Input type="password" placeholder="senha" required></Input>
                <Input type="text" placeholder="nome" required></Input>
                <Input type="text" placeholder="foto" required></Input>
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