import styled from "styled-components";
import DailyForecast from "components/DailyForecast/index";
import DayStatus from "components/DayStatus/index";
import { colors } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.baseColor};
`;

export const StyledDailyForecast = styled(DailyForecast)`
  flex: 1;
`;

export const StyledDayStatus = styled(DayStatus)`
  margin-bottom: 32px;
`;
