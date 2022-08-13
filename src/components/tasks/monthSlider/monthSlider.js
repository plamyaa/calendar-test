import React, { useContext } from "react";
import { DateContext } from "../../../App";
import Month from "./month";
import { MonthSliderWrapper } from "../../styles";

const MonthSlider = () => {
  const { state } = useContext(DateContext);
  const { date } = state;
  return (
    <MonthSliderWrapper>
      <Month date={date} />
    </MonthSliderWrapper>
  );
};

export default MonthSlider;

export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0).getDate();
}
