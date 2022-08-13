import styled from "styled-components";
import { COLORS } from "../consts";

export const ContentWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  max-width: 740px;
  margin: auto;
`;

export const NavigationWrapper = styled.div`
  border-top: 1px solid ${COLORS.MAIN_BORDER};
  background-color: ${COLORS.GREY};
  height: 30px;
  align-items: center;
  display: flex;
  padding: 0 10px 0 80px;
  justify-content: space-between;
`;

export const Arrow = styled.button`
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
