import React, { useContext, useState, useEffect } from "react";
import { DateContext } from "../../App";
import { HOUR_IN_DAY, COLORS } from "../../consts";
import { getDaysInMonth } from "./monthSlider/monthSlider";
import { TaskBorder, TaskWrapper, TasksWrapper } from "../styles";

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

export default Tasks;
