import React from "react";
import { Container, Status } from "./styles";

interface IProps {
  className?: string;
}

function DayStatus(props: IProps) {
  return (
    <Container className={props.className}>
      <Status.Container>
        <Status.Title>Sunrise</Status.Title>
        <Status.Value>5:49</Status.Value>
      </Status.Container>
      <Status.Container>
        <Status.Title>wind</Status.Title>
        <Status.Value>SSE 8mph</Status.Value>
      </Status.Container>
      <Status.Container>
        <Status.Title>temperature</Status.Title>
        <Status.Value>29° / 24°</Status.Value>
      </Status.Container>
    </Container>
  );
}

export default DayStatus;
