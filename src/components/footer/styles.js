import styled from "styled-components";

import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

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

  //mobile
  @media (max-width: ${sizes.mobile}) {
    display: flex;
    padding: 30px 40px;
    flex-direction: column;
  }
`;

export const WhasAppBox = styled.div`
  flex: 1;
  padding: 64px;
  background-color: ${colors.whiteOpacity};
  display: flex;
  justify-content: space-between;

  //mobile
  @media (max-width: ${sizes.mobile}) {
    gap: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const BoxAddress = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 50px;

  //mobile
  @media (max-width: ${sizes.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const BoxAddressAddress = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  @media (max-width: ${sizes.mobile}) {
    gap: 25px;
    text-align: center;
  }
`;

export const BoxAddressSocial = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: ${sizes.mobile}) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const LinkSocial = styled.a`
  text-decoration: none;
  color: ${colors.iconDark};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.yellowLight};
  }
`;

export const AddressLabel = styled.label`
  font-size: 13px;
  color: ${colors.textDark};
  font-family: "Montserrat", sans-serif;
`;

export const WhasAppBoxInfo = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${colors.white};
  flex: 1;

  //mobile
  @media (max-width: ${sizes.mobile}) {
    text-align: center;
  }
`;

export const WhasAppBoxRihtContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;

  //mobile
  @media (max-width: ${sizes.mobile}) {
    gap: 25px;
    display: flex;
    flex-direction: column;
  }
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

  //mobile
  @media (max-width: ${sizes.mobile}) {
    max-width: unset;
    width: 100%;
    padding: unset;
    text-align: center;
  }
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

  //mobile
  @media (max-width: ${sizes.mobile}) {
    max-width: unset;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-between;

  //mobile
  @media (max-width: ${sizes.mobile}) {
    display: flex;
    gap: 25px;
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImageLogo = styled.img`
  height: 60px;
  margin-top: -30px;
  align-self: flex-start;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (max-width: ${sizes.mobile}) {
    margin: unset;
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
    display: flex;
    align-items: center;
    flex-direction: column;
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
