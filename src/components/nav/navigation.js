import React, { useContext } from "react";
import styled from "styled-components";
import { MONTHS } from "../../consts";
import { DateContext } from "../../App";
import { COLORS } from "../../consts";

const Navigation = () => {
  const { state, dispatch } = useContext(DateContext);
  const { date } = state;
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth();
  return (
    <NavigationWrapper>
      <Arrow onClick={() => dispatch({ type: "decrement" })} />
      {`${MONTHS[nowMonth]} ${nowYear}`}
      <Arrow right onClick={() => dispatch({ type: "increment" })} />
    </NavigationWrapper>
  );
};
const NavigationWrapper = styled.div`
  border-top: 1px solid ${COLORS.MAIN_BORDER};
  background-color: ${COLORS.GREY};
  height: 30px;
  align-items: center;
  display: flex;
  padding: 0 10px 0 80px;
  justify-content: space-between;
`;

const Arrow = styled.button`
  cursor: pointer;
  width: 13px;
  height: 13px;
  border: 0;
  border-top: 2px solid ${COLORS.RED};
  border-right: 2px solid ${COLORS.RED};
  background-color: ${COLORS.GREY};
  transform: rotate(${(props) => (props.right ? "45deg" : "225deg")});
  padding: 0;
`;


export default Navigation;
