import styled from "styled-components";
import { COLORS, SIZE } from "../consts";

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

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 26px;
  text-align: left;
  font-weight: 200;
  margin: 0;
`;

export const Button = styled.button`
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

export const FooterWrapper = styled.div`
  height: 50px;
  background-color: ${COLORS.GREY};
  border-top: 1px solid ${COLORS.MAIN_BORDER};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

export const FooterBtn = styled.button`
  color: ${COLORS.RED};
  border: 0;
  background-color: ${COLORS.GREY};
  font-size: 20px;
  cursor: pointer;
`;

export const Hour = styled.div`
  color: #bababa;
`;

export const TimeWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 40px);
  align-items: center;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 8px;
  position: sticky;
  left: 0;
  background-color: white;
  z-index: 50;
`;

export const TaskBorder = styled.div`
  height: 100%;
  border-right: 1px solid ${COLORS.TASK_BORDER};
  border-top: 1px solid ${COLORS.TASK_BORDER};
  z-index: 1;
`;

export const TaskWrapper = styled.div`
  z-index: 100;
  height: 92%;
  border: 1px solid white;
  background-color: ${(props) => props.color};
  background-size: 90%;
`;

export const TasksWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 40px);
  grid-template-columns: repeat(${(props) => props.daysInMonth}, 98.6px);
  padding-top: 9px;
  @media (max-width: ${SIZE.BREAK_POINT}) {
    grid-template-columns: repeat(
      ${(props) => props.daysInMonth},
      13.3vw
    );
  }
`;

export const MainContentWrapper = styled.div`
  height: 800px;
  display: grid;
  grid-template-columns: 50px 690px;
  overflow-y: scroll;
`;

export const FakeDiv = styled.div`
  border-bottom: 1px solid #e3e3e3;
  grid-row-start: 0;
  grid-column-start: 0;
  position: absolute;
  width: 50px;
  height: 49px;
  background-color: ${COLORS.GREY};
  z-index: 100;
`;

export const DayOfWeek = styled.span`
  font-size: 10px;
`;

export const DayWrapper = styled.div`
  margin: 5px;
  display: grid;
  text-align: center;
`;

export const Today = styled.span`
  color: white;
  background-color: ${COLORS.RED};
  width: 19px;
  height: 19px;
  border: 3px solid ${COLORS.RED};
  border-radius: 100%;
`;

export const MonthWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.days}, 98.6px);
  justify-items: center;
  background-color: ${COLORS.GREY};
  border-bottom: 1px solid #e3e3e3;
  @media (max-width: ${SIZE.BREAK_POINT}) {
    grid-template-columns: repeat(${(props) => props.days}, 13.3vw);
  }
`;

export const MonthSliderWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-column-start: 2;
  position: sticky;
  top: 0;
  z-index: 10;
`;