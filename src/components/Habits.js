import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../constants/GlobalComponents";
import { AvatarFrame } from "../constants/GlobalComponents";
import { Footer } from "../constants/GlobalComponents";
import { TodayButton } from "../constants/GlobalComponents";
import { Input } from "../constants/GlobalComponents";
import DayButton from "./DayButton";
import { list_days } from "../constants/list_days";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Habits({token}) {

    const [formVisible, setFormVisible] = useState(false);
    const [habitsList, setHabitsList] = useState([]);
    const [habitName, setHabitName] = useState("");
    const [temporaryHabitDays, setTemporaryHabitDays] = useState([])

    useEffect(()=> {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
       
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(URL, config).then((res) => setHabitsList(res.data)).catch((err) => console.log(err));
    
    }, []);

    function ativarForm() {
        setFormVisible(formVisible ? false : true);
    }

    function selectDays(day) {
        if (!temporaryHabitDays.includes(day)) {
            setTemporaryHabitDays([...temporaryHabitDays, day.id]);
            alert(`${day.day} adicionado!`)
            console.log(temporaryHabitDays)
        } else {
            const filteredDays = temporaryHabitDays.filter((d) => !(d.id === day.id));
            setTemporaryHabitDays([...filteredDays]);
            alert(`${day.day} removido`)
            console.log(temporaryHabitDays)
        }
    }

    function saveHabit() {
        const habit = {
            name: habitName,
            days: temporaryHabitDays,
        }

        if (habitName != "" && temporaryHabitDays.length != 0) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
           
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            axios.post(URL, habit, config)
            .then(
                (res) => setHabitsList([...habitsList, res.data])
            )
            .catch((err) => console.log(err));

            setTemporaryHabitDays([]);
            setHabitName("");
            return
        }
        else if (habitName == "") {
            return alert("Informe um habito")
        }
        else if (temporaryHabitDays.length == 0) {
            return alert("Informe pelo menos um dia")
        }

    }

    function deleteHabit(habit) {

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
           
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            axios.delete(URL,config)
            .then(
                (res) => {

                    const filteredHabits = habitsList.filter((h) => !(h.id === habit.id));
                    setHabitsList([...filteredHabits]);
                    alert(`${habit.name} removido`)
                }
            )
            .catch((err) => console.log(err));
    }

    return (
        <HabitsContainer>
            <div className="body">
                <NewHabitContainer>
                    <HeaderNewHabit>
                        <p>Meus hábitos</p>
                        <button onClick={ativarForm}>+</button>
                    </HeaderNewHabit>

                    {formVisible ? <NewHabitContaier>
                        <Input placeholder="nome do hábito" value={habitName} onChange={(e) => setHabitName(e.target.value)} required></Input>
                        <ListDayButtons>
                            {list_days.map((day) => <DayButton day={day.initial} selectDays={() => { selectDays(day) }} temporaryHabitDays={temporaryHabitDays}></DayButton>)}
                        </ListDayButtons>
                        <FooterNewHabit>
                            <a href="">Cancelar</a>
                            <button onClick={saveHabit}>Salvar</button>
                        </FooterNewHabit>
                    </NewHabitContaier> : ''}
                </NewHabitContainer>


                <HabitCardContainer formVisible={formVisible}>
                    {habitsList.length != 0 ? habitsList.map((habit) =>
                        <HabitCard>
                            <div className="header-habit-card">
                                <p>{habit.name}</p>
                                <button onClick={() => { deleteHabit(habit) }}><ion-icon name="trash-outline"></ion-icon></button>
                            </div>
                            <ListDayButtons>
                                {habit.days.map((day) => <DayButton day={day.initial} selectDays={() => { selectDays(day) }} temporaryHabitDays={temporaryHabitDays}></DayButton>)}
                            </ListDayButtons>
                        </HabitCard>
                    ) : <TextNoHistory>
                        Você não tem nenhum habito cadastrado ainda. Adicione o hábito para começar a trackear!
                    </TextNoHistory>}
                </HabitCardContainer>

            </div>
            <Header>
                <h1>TrackIt</h1>
                <AvatarFrame></AvatarFrame>
            </Header>

            <Footer>
                <a href="">Hábitos</a>
                <Link to={"/hoje"}>
                    <TodayButton>Hoje</TodayButton>
                </Link>
                <a href="">Histórico</a>
            </Footer>
        </HabitsContainer>
    );

}

const NewHabitContainer = styled.div`

`

const HabitCardContainer = styled.div`
    width: 100%;
    height: ${(props) => props.formVisible ? "290px" : "440px"};
    overflow-y: scroll;
`

const HabitCard = styled.div`
    padding: 0px 15px;
    .header-habit-card{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 19.98px;
        color: #666666;

        ion-icon{
            width: 13px;
            height: 15px;
            color: #666666
        }
    }
`

const TextNoHistory = styled.p`
    font-size: 17.98px;
    line-height: 22.47px;
    font-weight: 400;
    color: #666666;
    width: 338px;
    text-align: center;
`

const FooterNewHabit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 5px;

    a{
        text-decoration: none;
        margin-right: 20px;
        font-weight: 400;
        font-size: 15.98px;
        line-height: 19.97px;
    }

    button{
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #52b6ff;
        color: #FFFFFF;
        border: none;
    }
`

const HeaderNewHabit = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 5px;

            font-size: 22.98px;
            line-height: 28.72px;
            font-weight: 400;
            color: #126BA5;

            button{
                width: 40px;
                height: 35px;
                border-radius: 4.65px;
                background-color: #52b6ff;
                font-size: 26.98px;
                line-height: 33.72px;
                font-weight: 400;
                color: #FFFFFF;
                border: none;
            }

`

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
        position: absolute;
        background-color: #ffffff;
        top: 70px;
    }
`

const NewHabitContaier = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .list-day-buttons{
        
    }

`

const ListDayButtons = styled.div`

`