import React from "react";
import { HOUR_IN_DAY } from "../../consts";
import { TimeWrapper, Hour } from "../styles";

const Time = () => {
  const hours = [];
  for (let i = 0; i < HOUR_IN_DAY; i++) {
    const hour = `${i}`.length === 1 ? `0${i}:00` : `${i}:00`;
    hours.push(hour);
  }
  return (
    <TimeWrapper>
      {hours.map((hour) => (
        <Hour key={hour}>{hour}</Hour>
      ))}
    </TimeWrapper>
  );
};

export default Time;
