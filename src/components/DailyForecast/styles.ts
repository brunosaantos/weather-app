import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Day = styled.span`
  margin-top: 32px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -2px;
  text-transform: uppercase;
`;

export const Temperature = styled.h2`
  margin-top: 64px;
  font-size: 128px;
  letter-spacing: -10px;
`;

export const Status = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;
