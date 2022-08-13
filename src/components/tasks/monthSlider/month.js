import React from "react";
import { getDaysInMonth } from "./monthSlider";
import Day from "./day";
import { MonthWrapper } from "../../styles";

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

export default Month;
