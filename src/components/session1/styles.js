import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif;
`;

export const H1 = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: ${colors.yellow};
`;

export const Content = styled.label`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  color: #081430;
  padding: 0px 15px;
  font-family: "Montserrat", sans-serif;
`;

export const Strong = styled.strong`
  text-align: center;
  color: ${colors.yellow};
`;

export const CardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  max-width: 1280px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0px 20px;
  gap: 35px;

  & > div:first-child {
    margin-left: 35px;
  }

  & > div:last-child {
    margin-right: 35px;
  }
`;
