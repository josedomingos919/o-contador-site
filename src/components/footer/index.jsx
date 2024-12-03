import * as S from "./styles";

import logo from "../../assets/logo2.png";

export const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.ImageLogo src={logo} />
          <S.List>
            <S.ListItem>
              <S.Link href="#serviços">Serviços</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href="#contactos">Contactos</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href="#Sobre">Sobre</S.Link>
            </S.ListItem>
          </S.List>
        </S.Header>
        <S.WhasAppBox></S.WhasAppBox>
      </S.Content>
    </S.Container>
  );
};
