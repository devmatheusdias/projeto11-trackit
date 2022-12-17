import styled from "styled-components";
import { Header } from "../constants/GlobalComponents";
import { AvatarFrame } from "../constants/GlobalComponents";
import { Footer } from "../constants/GlobalComponents";
import { Today } from "../constants/GlobalComponents";


export default function Habits() {
    return (
        <HabitsContainer>
            <div className="body">
                <div>
                    <p className="text-no-history">Você não tem nenhum habito cadastrado ainda. Adicione o hábito para começar a trackear!</p>
                </div>
            </div>

            <Header>
                <h1>TrackIt</h1>
                <AvatarFrame></AvatarFrame>
            </Header>
            <p>titulo</p>
            <Footer>
                <a href="">Hábitos</a>
                <Today>Hoje</Today>
                <a href="">Histórico</a>
            </Footer>
        </HabitsContainer>
    );

}

const HabitsContainer = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FFFFFF;
    background-color: crimson;
    position: relative;

    .body{
        width: 375px;
        height: 527px;
        box-sizing: border-box;
        padding: 0px 15px;
        background-color: burlywood;
        position: absolute;
        top: 70px;
    }

    .text-no-history{
        font-size: 17.98px;
        line-height: 22.47px;
        font-weight: 400;
        color: #666666;
        width: 338px;
        text-align: center;
    }
`