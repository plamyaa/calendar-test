import React from "react";
import Time from "./timeColumn";
import Tasks from "./tasks";
import MonthSlider from "./monthSlider/monthSlider";
import { FakeDiv, MainContentWrapper } from "../styles";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <FakeDiv />
      <MonthSlider />
      <Time />
      <Tasks />
    </MainContentWrapper>
  );
};

export default MainContent;
