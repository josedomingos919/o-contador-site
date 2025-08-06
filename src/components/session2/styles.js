import styled from "styled-components";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

export const Container = styled.section`
  padding-top: 50px;
  background: linear-gradient(to bottom, #af7b3f52, white);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    margin-bottom: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: 15px;
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const BodyFooter = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 100px;

  @media (max-width: ${sizes.mobile}) {
    gap: 40px;
    margin-top: 25px;
    flex-direction: column;
  }
`;

export const RakingTitle = styled.label`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.yellow};
`;

export const RakingSubTitle = styled.label``;

export const LabelTitle = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  @media (max-width: ${sizes.mobile}) {
    margin-top: 30px;
  }

  position: relative;
  display: flex;
  width: 100%;
  max-width: 1280px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0px 20px;
  gap: 35px;

  padding-top: 50px;
  margin-top: 25px;

  & .first-service-card {
    margin-left: 35px;
  }

  & > div:last-child {
    margin-right: 35px;
  }

  /* Style the scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
    height: 12px; /* Height of the scrollbar for horizontal scroll */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
    border-radius: 10px; /* Rounded corners */
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.yellowLight}; /* Semi-transparent thumb */
    border-radius: 10px; /* Rounded corners */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.yellowLight}; /* Darker on hover for better visibility */
  }

  /* For Firefox */
  scrollbar-width: thin; /* Thin scrollbar */
  scrollbar-color: ${colors.yellowLight} transparent; /* Custom colors */

  & > div:nth-child(2n) {
    background: linear-gradient(to bottom, #af7b3f52, white);
  }
`;

export const LabelServices = styled.label`
  font-family: "Montserrat", sans-serif;
  border-bottom: 5px solid ${colors.yellowLight3};
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bold;
  color: ${colors.black};
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 7px;
  border-radius: 50%;
  margin-left: 35px;
`;

export const AboutContent = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  max-width: 1280px;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${sizes.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutImage = styled.img`
  width: 200px;
  border-radius: 20px;
  border: 3px solid ${colors.yellow};
`;

export const AboutImageContent = styled.div`
  padding-left: 30px;

  @media (max-width: ${sizes.mobile}) {
    padding: 0px;
  }
`;

export const AboutInfo = styled.div`
  max-width: 380px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    padding: 0px 40px;
  }
`;

export const AboutInfo1 = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: justify;
`;

export const AboutInfo2 = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 8px;
  font-family: "Montserrat", sans-serif;
`;

export const AboutInfo3 = styled.div`
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
`;

export const AboutLogo = styled.div`
  flex: 1;
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    width: 100%;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  flex-direction: row;
  gap: 50px;

  @media (max-width: ${sizes.mobile}) {
    gap: 0px;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  position: relative;
  background-color: black;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  color: ${colors.yellow};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizes.mobile}) {
    width: 100%;
    height: 90px;
    border-radius: unset;
  }
`;

export const ItemSubtitle = styled.label`
  font-size: 10px;
  margin-top: 5px;
  letter-spacing: 2px;
`;
