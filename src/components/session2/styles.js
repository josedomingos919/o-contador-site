import styled from "styled-components";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    margin-top: 40px;
  }
`;

export const Content = styled.div``;

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
