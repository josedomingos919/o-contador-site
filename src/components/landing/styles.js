import styled from "styled-components";

import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  background-image: url(/fundo4.png);
  background-position: 0 0;
  background-position-y: 55px;
  background-repeat: no-repeat;
  background-size: auto 100%;

  @media (max-width: ${sizes.mobile}) {
    height: 50vh;
  }
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

  @media (max-width: ${sizes.mobile}) {
    display: none;
  }
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

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: ${sizes.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
`;

export const MobileContent = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: "Montserrat", sans-serif;
`;

export const MobileTitle = styled.label`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${colors.whiteOpacity2};
`;

export const MobileSubTitle = styled.label`
  font-size: 13px;
  margin-bottom: 1rem;
`;

export const MobileInfo = styled.strong`
  font-style: italic;
  font-size: 12px;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -20px;
`;

export const ButtonSpeakWithUs = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  font-size: 17px;
  border-radius: 5px;
  margin-top: 20px;
  color: ${colors.white};
  background-color: ${colors.yellow};
  border: 1px solid ${colors.white};
`;
