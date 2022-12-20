import { useState } from "react";
import styled from "styled-components";

export default function DayButton({day, selectDays, temporaryHabitDays}){
    
    return(
        <StyledDayButton onClick={selectDays} temporaryHabitDays={temporaryHabitDays} day={day}>{day}</StyledDayButton>
    );
}

const StyledDayButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: ${(props) => props.temporaryHabitDays.includes(props.day) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D4D4D4;
    font-size: 19.98px;
    line-height: 24.97px;
    font-weight: 400;
    color: #dbdbdb;
    margin-right: 5px;
`