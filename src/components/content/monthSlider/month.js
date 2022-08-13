import React from "react";
import styled from "styled-components";
import { getDaysInMonth } from "./monthSlider";
import { COLORS, SIZE } from "../../../consts";
import Day from "./day";

const Month = ({ date }) => {
  const daysInMonth = getDaysInMonth(date);
  const daysList = [];
  for (let i = 1; i < daysInMonth; i++) {
    daysList.push(
      <Day day={new Date(date.getFullYear(), date.getMonth(), i)} key={i} />
    );
  }
  daysList.push(
    <Day day={new Date(date.getFullYear(), date.getMonth(), 0)} key={0} />
  );
  return <MonthWrapper days={daysInMonth}>{daysList}</MonthWrapper>;
};

const MonthWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.days}, 98.6px);
  justify-items: center;
  background-color: ${COLORS.GREY};
  border-bottom: 1px solid #e3e3e3;
  @media (max-width: ${SIZE.BREAK_POINT}) {
    grid-template-columns: repeat(${(props) => props.days}, 13.3vw);
  }
`;

export default Month;
