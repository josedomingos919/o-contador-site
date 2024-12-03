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
        <S.WhasAppBox>
          <S.WhasAppBoxInfo>
            Pretende começar a trabalhar com<br></br> o contador, Hoje ?
          </S.WhasAppBoxInfo>
          <S.WhasAppBoxRihtContent>
            <S.InputOpacity type="email" placeholder="Deixe o seu email" />
            <S.SendButton>Enviar</S.SendButton>
          </S.WhasAppBoxRihtContent>
        </S.WhasAppBox>
      </S.Content>
    </S.Container>
  );
};
