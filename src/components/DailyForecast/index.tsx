import React from "react";
import { Container, Day, Temperature, Status } from "./styles";

interface IProps {
  className?: string;
}

function DailyForecast(props: IProps) {
  return (
    <Container className={props.className}>
      <Day>sunday 3 marchs</Day>
      <Temperature>28°</Temperature>
      <Status>Mostly Sunny</Status>
    </Container>
  );
}

export default DailyForecast;
