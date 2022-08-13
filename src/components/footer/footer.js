import React, { useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../../consts";
import { DateContext } from "../../App";
const Footer = () => {
  const { state, dispatch } = useContext(DateContext);
  const { currentTask } = state;
  return (
    <FooterWrapper>
      <FooterBtn>Today</FooterBtn>
      {currentTask ? (
        <FooterBtn
          onClick={() => dispatch({ type: "deleteTask", value: currentTask })}
        >
          Delete
        </FooterBtn>
      ) : null}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  height: 50px;
  background-color: ${COLORS.GREY};
  border-top: 1px solid ${COLORS.MAIN_BORDER};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const FooterBtn = styled.button`
  color: ${COLORS.RED};
  border: 0;
  background-color: ${COLORS.GREY};
  font-size: 20px;
  cursor: pointer;
`;

export default Footer;
