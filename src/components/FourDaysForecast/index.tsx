import React from "react";
import { Container, Day } from "./styles";

interface IDay {
  day: string;
  min: string;
  max: string;
}

function FourDaysForecast() {
  const days: IDay[] = [
    { day: "mon", max: "30°", min: "25°" },
    { day: "tue", max: "31°", min: "25°" },
    { day: "wed", max: "30°", min: "26°" },
    { day: "thu", max: "29°", min: "21°" },
  ];

  return (
    <Container>
      {days.map((day) => (
        <Day>
          <span>{day.day}</span>
          <p>
            {day.min} / {day.max}
          </p>
        </Day>
      ))}
    </Container>
  );
}

export default FourDaysForecast;
