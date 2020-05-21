import styled from "styled-components";
import { darken } from "polished";
import { colors } from "../../constants";

const baseColor = colors.baseColor;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  min-height: 128px;
  background-color: blue;

  span {
    text-transform: uppercase;
    letter-spacing: -1px;
  }
`;

export const Container = styled.section`
  display: flex;
  color: white;

  ${Day}:nth-child(1) {
    background-color: ${darken("0.02", baseColor)};
  }

  ${Day}:nth-child(2) {
    background-color: ${darken("0.04", baseColor)};
  }

  ${Day}:nth-child(3) {
    background-color: ${darken("0.06", baseColor)};
  }

  ${Day}:nth-child(4) {
    background-color: ${darken("0.08", baseColor)};
  }
`;
