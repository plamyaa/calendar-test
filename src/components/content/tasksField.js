import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DateContext } from "../../App";
import { HOUR_IN_DAY, COLORS, SIZE } from "../../consts";
import { getDaysInMonth } from "./monthSlider/monthSlider";

const Tasks = () => {
  const { state, dispatch } = useContext(DateContext);
  const { date } = state;
  const daysInMonth = getDaysInMonth(date);
  const tasks = [];
  for (let i = 0; i < HOUR_IN_DAY * daysInMonth; i++) {
    tasks.push(<Task key={i} value={String(i)}></Task>);
  }
  return (
    <TasksWrapper daysInMonth={Number(daysInMonth)} dispatch={dispatch}>
      {tasks}
    </TasksWrapper>
  );
};

const TasksWrapper = styled.div`
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

const Task = ({ value }) => {
  const { state, dispatch } = useContext(DateContext);
  const { tasks, currentTask } = state;
  const [color, setColor] = useState();
  useEffect(() => {
    const taskInStore = [...tasks].includes(value);
    if (taskInStore) setColor(COLORS.TASK);
    else setColor("white");
    if (currentTask === value) setColor(COLORS.TASK_ACTIVE);
  }, [tasks, currentTask, value, color]);
  return (
    <div
      id={value}
      onClick={(e) =>
        dispatch({ type: "setNewTask", value: e.currentTarget.id })
      }
    >
      <TaskBorder>
        <TaskWrapper color={color} />
      </TaskBorder>
    </div>
  );
};

const TaskBorder = styled.div`
  height: 100%;
  border-right: 1px solid ${COLORS.TASK_BORDER};
  border-top: 1px solid ${COLORS.TASK_BORDER};
  z-index: 1;
`;

const TaskWrapper = styled.div`
  z-index: 100;
  height: 92%;
  border: 1px solid white;
  background-color: ${(props) => props.color};
  background-size: 90%;
`;

export default Tasks;
