import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../../App";
import Month from "./month";

const MonthSlider = () => {
  const { state } = useContext(DateContext);
  const { date } = state;
  return (
    <MonthSliderWrapper>
      <Month date={date} />
    </MonthSliderWrapper>
  );
};

const MonthSliderWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-column-start: 2;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export default MonthSlider;

export function getDaysInMonth(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0).getDate();
}
