import React, { useContext } from "react";
import { DateContext } from "../../App";
import { HeaderWrapper, Button, Title } from "../styles";

const Header = () => {
  const { state, dispatch } = useContext(DateContext);
  const { currentTask } = state;
  return (
    <HeaderWrapper>
      <Title>Interview Calendar</Title>
      {currentTask ? (
        <Button
          onClick={() => dispatch({ type: "addNewTask", value: currentTask })}
        ></Button>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;
