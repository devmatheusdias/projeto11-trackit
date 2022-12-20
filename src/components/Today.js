import styled from "styled-components";
import { Header } from "../constants/GlobalComponents";
import { Footer } from "../constants/GlobalComponents";
import { days } from "../constants/days";
import TodaysHabit from "./TodaysHabit";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { TodayButton } from "../constants/GlobalComponents";
import { AvatarFrame } from "../constants/GlobalComponents";
import axios from "axios";
const dayjs = require('dayjs');





export default function Today({token}) {

    const [dayOfWeek, setDayOfWeek] = useState(dayjs().day());
    const [dayOfMonth, setDayOfMonth] = useState(dayjs().date());
    const [month, setMonth] = useState(dayjs().month());
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        for (let index = 0; index < days.length; index++) {
            if (index == dayOfWeek) {
                setDayOfWeek(days[index-1])
            }
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`
        axios.get(URL, config).then((res) => setHabits(res.data)).catch((err) => console.log(err));
    }, []);


    return (
        <TodayContainer>
            <Header>
            <h1>TrackIt</h1>
                <AvatarFrame></AvatarFrame>
            </Header>
            <Date>
                {dayOfWeek}, {dayOfMonth}/{month}
            </Date>
            <Campaign>
                Nenhum hábito concluido ainda
            </Campaign>
            <HabitsList>
                {habits.map((habit) => <TodaysHabit key={habit.id} habit={habit}></TodaysHabit>)}
            </HabitsList>
            <Footer>
            <a href="">Hábitos</a>
                <Link to={"/hoje"}>
                    <TodayButton>Hoje</TodayButton>
                </Link>
                <a href="">Histórico</a>
            </Footer>
        </TodayContainer>
    );
}

const TodayContainer = styled.div`
    width: 375px;
    height: 667px;
    position: relative;
`

const TodayListContainer = styled.div`
    width: 375px;
    height: 527px;
    margin-top: 70px;
    position: absolute;
`

const Date = styled.div`
    width: 375px;
    height: 100px;
    margin-top: 70px;
    position: absolute;
    font-size: 22.98px;
    font-weight: 400;
    color: #126BA5;
    padding: 15px;
`
const Campaign = styled.p`
    font-size: 17.98px;
    color: #bababa;
    font-weight: 400;
    position: absolute;
    margin-top: 100px;
    padding: 15px;
`

const HabitsList = styled.div`
    width: 375px;
    height: 440px;
    z-index: 3;
    position: absolute;
    margin-top: 120px;
    overflow-y: scroll;
`
