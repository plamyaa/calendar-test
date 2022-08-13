import React, { useContext } from "react";
import { DateContext } from "../../App";
import { FooterWrapper, FooterBtn } from "../styles";

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

export default Footer;
