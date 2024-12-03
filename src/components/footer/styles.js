import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.footer`
  width: 100%;
  position: relative;
  background-color: ${colors.primary};
`;

export const Content = styled.div`
  padding: 59px 80px;
  flex: 1;
`;

export const WhasAppBox = styled.div`
  flex: 1;
  padding: 64px;
  background-color: ${colors.whiteOpacity};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-between;
`;

export const ImageLogo = styled.img`
  height: 60px;
  margin-top: -30px;
  align-self: flex-start;
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
