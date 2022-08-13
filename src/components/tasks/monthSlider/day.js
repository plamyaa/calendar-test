import React from "react";
import { DAYS_OF_WEEK } from "../../../consts";
import { DayWrapper, DayOfWeek, Today } from "../../styles";

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

export default Day;
