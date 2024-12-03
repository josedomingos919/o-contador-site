import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.footer`
  width: 100%;
  position: relative;
  background-color: ${colors.primary};

  background-image: url(/footer.png);

  background-repeat: no-repeat;
`;

export const Content = styled.div`
  padding: 59px 80px;
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
`;

export const WhasAppBox = styled.div`
  flex: 1;
  padding: 64px;
  background-color: ${colors.whiteOpacity};
  display: flex;
  justify-content: space-between;
`;

export const WhasAppBoxInfo = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.white};
  flex: 1;
`;

export const WhasAppBoxRihtContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
`;

export const InputOpacity = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.inputBorder};
  height: 56px;
  max-width: 323px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  padding: 0px 25px;
  color: ${colors.inputBorder};
  font-size: 15px;
`;

export const SendButton = styled.button`
  background-color: ${colors.yellowLight};
  height: 56px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: ${colors.white};
  font-weight: bold;
  padding: 0px 30px;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: ${colors.whiteOpacity} 4px 3px 10px 5px;
  }
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
