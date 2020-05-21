import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  color: white;
`;

export const Status = {
  Container: styled.div`
    flex: 1;
    border-left: 1px solid white;

    &:first-child {
      border-left: none;
    }
  `,
  Title: styled.div`
    text-transform: uppercase;
    font-size: 12px;
  `,
  Value: styled.div`
    margin-top: 4px;
    font-weight: bold;
  `,
};
