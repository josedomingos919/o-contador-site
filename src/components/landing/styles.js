import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  background-image: url(/fundo4.png);
  background-position: 0 0;
  background-position-y: 55px;
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 56%;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 200px;
  height: 170px;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  overflow: hidden;
  position: relative;
  display: flex;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${colors.textDark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to bottom, #af7b3f52, white);
  gap: 10px;
  padding-top: 30px;
`;

export const Label = styled.div`
  padding-bottom: 5px;
  font-family: "Montserrat", sans-serif;
  border-bottom: 3px solid ${colors.yellow};
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
`;

export const Image = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;
