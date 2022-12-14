import Header from "./components/header/header";
import Navigation from "./components/nav/navigation";
import React, { createContext, useReducer } from "react";
import TimeField from "./components/tasks/mainContent";
import Footer from "./components/footer/footer";
import { ContentWrapper } from "./components/styles";

export const DateContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, {
    date: new Date(),
    currentTask: false,
    tasks: [],
  });
  return (
    <DateContext.Provider value={{ state, dispatch }}>
      <ContentWrapper>
        <Header />
        <Navigation />
        <TimeField />
        <Footer />
      </ContentWrapper>
    </DateContext.Provider>
  );
}

export default App;

function reducer(state, action) {
  const newDate = state.date;
  switch (action.type) {
    case "increment":
      newDate.setMonth(newDate.getMonth() + 1);
      return { ...state, date: newDate };
    case "decrement":
      newDate.setMonth(newDate.getMonth() - 1);
      return { ...state, date: newDate };
    case "setNewTask":
      return { ...state, currentTask: action.value };
    case "addNewTask":
      const task = prompt("New Event");
      if (task === null) return { ...state };
      return {
        ...state,
        tasks: new Set([...state.tasks, action.value]),
        currentTask: false,
      };
    case "deleteTask":
      return {
        ...state,
        tasks: [...state.tasks].filter((task) => task !== action.value),
        currentTask: false,
      };
    default:
      return new Error();
  }
}
