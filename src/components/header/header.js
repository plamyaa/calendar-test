import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../App";
import { COLORS } from "../../consts";

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

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 26px;
  text-align: left;
  font-weight: 200;
  margin: 0;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background: linear-gradient(${COLORS.RED}, ${COLORS.RED}),
    linear-gradient(${COLORS.RED}, ${COLORS.RED});
  background-position: center;
  background-size: 50% 2px, 2px 50%; 
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
`;

export default Header;
