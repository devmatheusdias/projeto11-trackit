import styled from "styled-components";
import {LIGHT_BLUE} from "./Colors"
import {DARK_BLUE} from "./Colors"
import {GRAY_BORDERS} from "./Colors"
import Logo from "../assets/logo.png"

export const LogoImage = styled.img`
        width: 75px;
        height: 50px;
        background-image: ${Logo};
`
export const Title = styled.h1`
        font-size: 68.98px;
        line-height: 86.23px;
        font-weight: 400;
        color: ${DARK_BLUE};
`
export const HomeButton = styled.button`
    width: 303px;
    height: 45px;
    background-color: ${LIGHT_BLUE};
    border: none;
    border-radius: 4.64px;
    text-align: center;
    color: #FFFFFF;
    font-size: 20.98px;
    line-height: 26.22px;
    font-weight: 400;
`
export const Input = styled.input`
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid ${GRAY_BORDERS};
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 0px 10px;
    margin-bottom: 5px;

    ::placeholder{
        font-size: 19.98px;
        line-height: 24.97px;
        color: #DBDBDB;
        font-weight: 400;
    }
`
export const Ancor = styled.a`
        font-size: 13.98px;
        line-height: 17.47px;
        font-weight: 400;
        color: ${LIGHT_BLUE};
`
export const Header = styled.div`
    width: 375px;
    height: 70px;
    background-color: ${DARK_BLUE};
    box-sizing: border-box;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;

    h1{
        font-size: 38.98px;
        line-height: 48.73px;
        font-weight: 400;
        color: #FFFFFF;
    }
`
export const AvatarFrame = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    background-color: brown;
`
export const Footer = styled.div`
    width: 375px;
    height: 70px;
    background-color: blue;
    box-sizing: border-box;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;

    a{
        font-size: 17.98px;
        line-height: 22.47px;
        font-weight: 400;
        color: ${LIGHT_BLUE};
        text-decoration: none;
    }

`
export const Today = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 100%;
    background-color: ${LIGHT_BLUE};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17.98px;
    line-height: 22.47px;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 35px;
    cursor: pointer;

`



























