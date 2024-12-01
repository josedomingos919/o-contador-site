import * as S from "./styles";

import logo from "../../assets/logo2.png";

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
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
        <S.ImageLogo src={logo} />
      </S.Content>
    </S.Container>
  );
};
