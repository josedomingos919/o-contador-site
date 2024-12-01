import styled from "styled-components";
import { colors } from "../../styles/colors";

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
`;

export const ImageLogo = styled.img`
  align-self: flex-start;
  height: 55px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const List = styled.ul`
  gap: 25px;
  display: flex;
  list-style: none;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;
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
