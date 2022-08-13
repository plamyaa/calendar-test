import React, { useContext } from "react";
import { MONTHS } from "../../consts";
import { DateContext } from "../../App";
import { NavigationWrapper, Arrow } from "../styles";

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


export default Navigation;
