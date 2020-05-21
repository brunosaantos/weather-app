import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  margin: 16px;
  position: relative;
  color: white;

  span {
    text-transform: uppercase;
  }
`;

export const MenuButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 0;
  border: 1px solid white;
  background-color: transparent;
  color: white;
`;
