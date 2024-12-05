import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const H1 = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  font-family: "Montserrat", sans-serif;
  color: ${colors.yellow};
`;

export const Content = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  color: #081430;
  font-family: "Montserrat", sans-serif;
`;

export const Strong = styled.strong`
  color: ${colors.yellow};
`;
