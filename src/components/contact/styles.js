import styled from "styled-components";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

export const Container = styled.section`
  padding-top: 50px;
  background: linear-gradient(top right, white, #af7b3f52);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    padding-top: 0px;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1280px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0px 20px;
  gap: 35px;

  padding-top: 50px;

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
  justify-content: space-between;

  @media (max-width: ${sizes.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const CardContact = styled.div`
  border: 1px solid ${colors.yellow};
  border-radius: 10px;
  padding: 17px;
  min-width: 200px;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: ${sizes.mobile}) {
    margin: 0px 25px;
    flex: 1;
  }
`;

export const CardContactIconSide = styled.div``;

export const CardContactContentSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactTitle = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
`;

export const IconCard = styled.div`
  padding: 15px 17px;
  border-radius: 10px;
  background-color: ${colors.yellow};
  color: ${colors.white};
  font-size: 16px;
`;

export const ContactContent = styled.label`
  font-size: 16px;
`;
