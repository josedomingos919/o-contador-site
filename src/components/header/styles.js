import styled from "styled-components";
import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

export const Container = styled.header`
  height: 55px;
  background-color: ${colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid ${colors.border.dark};
  box-shadow: 0px 0px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width: ${sizes.mobile}) {
    height: 60px !important;

    .hide-mobile {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  color: ${colors.white};
  padding: 0px 60px;

  @media (max-width: ${sizes.mobile}) {
    padding: 0px 2rem;
  }
`;

export const ToggleButton = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ImageLogo = styled.img`
  height: 55px;
  align-self: flex-start;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (max-width: ${sizes.mobile}) {
    height: 45px;
    align-self: unset;
  }
`;

export const List = styled.ul`
  gap: 25px;
  display: flex;
  list-style: none;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    display: none;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
`;

export const Link = styled.a`
  color: ${colors.white};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
    color: ${colors.yellow};
  }
`;

export const LabelHaburguer = styled.label`
  display: none;
  font-size: 20px;
  color: ${colors.white};
  background-color: transparent;

  .fa-xmark {
    display: none;
  }

  @media (max-width: ${sizes.mobile}) {
    display: flex;
  }
`;

export const CheckboxLabel = styled.input`
  display: none;

  &:checked ~ ul {
    @media (max-width: ${sizes.mobile}) {
      left: 0;
      top: 0;
      font-size: 20px;
      gap: 2rem;
      padding: 2rem;
      display: flex;
      margin-top: 55px;
      position: absolute;
      justify-content: unset;
      flex-direction: column;
      background-color: ${colors.primary};
    }
  }

  &:checked ~ label .fa-solid.fa-xmark {
    display: unset !important;
  }

  &:checked ~ label .fa-solid.fa-bars {
    display: none !important;
  }
`;
