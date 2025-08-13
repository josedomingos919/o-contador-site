import * as S from "./styles";

import logo from "../../assets/logo2.png";

import { useControlLink } from "../../hooks/useControlLink";

export const Header = () => {
  const { getUrlByPage } = useControlLink();

  return (
    <S.Container>
      <S.Content>
        <S.CheckboxLabel id="hamburger" type="checkbox" />
        <S.LabelHaburguer for="hamburger">
          <i class="fa-solid fa-xmark"></i>
          <i class="fa-solid fa-bars"></i>
        </S.LabelHaburguer>
        <S.List>
          <S.ListItem>
            <S.Link href={getUrlByPage("#servicos")}>Serviços</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link href={getUrlByPage("#sobre")}>Sobre</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link href={getUrlByPage("#contactos")}>Contactos</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link href={getUrlByPage("singin")}>Login</S.Link>
          </S.ListItem>
        </S.List>
        <S.ImageLogo src={logo} />
      </S.Content>
    </S.Container>
  );
};
