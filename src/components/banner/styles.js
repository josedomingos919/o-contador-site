import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  min-height: 360px;
  margin-bottom: 70px;
  margin-top: 90px;
  background-color: red;
  display: flex;

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("/custos.jpg");
`;

export const FundoBlack = styled.div`
  flex: 1 1;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.whiteOpacity2};
  font-family: "Montserrat", sans-serif;
`;

export const SubTitle = styled.label`
  text-align: center;
  color: ${colors.whiteOpacity1};
  font-family: "Montserrat", sans-serif;
`;
