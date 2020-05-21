import React from "react";
import { Container, StyledDailyForecast, StyledDayStatus } from "./styles";
import Header from "../../components/Header/index";
import FourDaysForecast from "../../components/FourDaysForecast/index";

function Home() {
  return (
    <Container>
      <Header />
      <StyledDailyForecast />
      <StyledDayStatus />

      <FourDaysForecast />
    </Container>
  );
}

export default Home;
