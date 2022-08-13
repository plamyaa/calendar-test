import React from "react";
import { DAYS_OF_WEEK } from "../../../consts";
import styled from "styled-components";
import { COLORS } from "../../../consts";

const Day = ({ day }) => {
  const nowDay = day.getDate();
  const dayOfWeek = day.getDay();
  const today = new Date().toDateString();
  return today === day.toDateString() ? (
    <DayWrapper>
      <DayOfWeek>{DAYS_OF_WEEK[dayOfWeek].slice(0, 1)}</DayOfWeek>
      <Today>{nowDay}</Today>
    </DayWrapper>
  ) : (
    <DayWrapper>
      <DayOfWeek>{DAYS_OF_WEEK[dayOfWeek].slice(0, 1)}</DayOfWeek>
      <span>{nowDay}</span>
    </DayWrapper>
  );
};

const DayOfWeek = styled.span`
  font-size: 10px;
`;

const DayWrapper = styled.div`
  margin: 5px;
  display: grid;
  text-align: center;
`;

const Today = styled.span`
  color: white;
  background-color: ${COLORS.RED};
  width: 19px;
  height: 19px;
  border: 3px solid ${COLORS.RED};
  border-radius: 100%;
`;
export default Day;
