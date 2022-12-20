import styled from "styled-components";

export default function TodaysHabit({habit}) {
    
    const {name, done, currentSequence, highestSequence} = habit;

    return (
        <Habit>
            <p>{name}</p>
            <p>Sequência atual: {currentSequence} dias <br></br> Seu recorde: {highestSequence} dias</p>
        </Habit>
    );
}

const Habit = styled.div`

    padding: 25px;
    p:first-child{
        font-size: 19.98px;
        box-sizing: border-box;
        margin: 0;
    }
    p{
        font-size: 12.98px;
        color: #666666;
        margin-top: 5px;
    }
`