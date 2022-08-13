import React from "react";
import styled from "styled-components";
import Time from "./timeColumn";
import Tasks from "./tasksField";
import MonthSlider from "./monthSlider/monthSlider";
import { COLORS, SIZE } from "../../consts";

const TimeField = () => {
  return (
    <TimeFieldWrapper>
      <FakeDiv />
      <MonthSlider />
      <Time />
      <Tasks />
    </TimeFieldWrapper>
  );
};

const TimeFieldWrapper = styled.div`
  height: 800px;
  display: grid;
  grid-template-columns: 50px 690px;
  overflow-y: scroll;
`;

const FakeDiv = styled.div`
  border-bottom: 1px solid #e3e3e3;
  grid-row-start: 0;
  grid-column-start: 0;
  position: absolute;
  width: 50px;
  height: 49px;
  background-color: ${COLORS.GREY};
  z-index: 100;
`;

export default TimeField;
