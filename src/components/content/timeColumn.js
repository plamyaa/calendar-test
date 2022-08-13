import React from "react";
import styled from "styled-components";
import { HOUR_IN_DAY, SIZE } from "../../consts";

const Time = () => {
  const hours = [];
  for (let i = 0; i < HOUR_IN_DAY; i++) {
    const hour = `${i}`.length === 1 ? `0${i}:00` : `${i}:00`;
    hours.push(hour);
  }
  return (
    <TimeWrapper>
      {hours.map((hour) => (
        <Hour key={hour}>{hour}</Hour>
      ))}
    </TimeWrapper>
  );
};

const Hour = styled.div`
  color: #bababa;
  @media (max-width: ${SIZE.BREAK_POINT}) {
  }
`;

const TimeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 40px);
  align-items: center;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 8px;
  position: sticky;
  left: 0;
  background-color: white;
  z-index: 50;
  @media (max-width: ${SIZE.BREAK_POINT}) {
    //width: 4vw;
  }
`;

export default Time;
