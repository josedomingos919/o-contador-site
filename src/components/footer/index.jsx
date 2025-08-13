import * as S from "./styles";

import logo from "../../assets/logo2.png";

import { useControlLink } from "../../hooks/useControlLink";

export const Footer = () => {
  const { getUrlByPage } = useControlLink();

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.ImageLogo src={logo} />
          <S.List>
            <S.ListItem>
              <S.Link href={getUrlByPage("#contactos")}>Contactos</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href={getUrlByPage("#servicos")}>Serviços</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link href={getUrlByPage("#sobre")}>Sobre</S.Link>
            </S.ListItem>
            <S.ListItem className="hide-mobile">
              <S.Link href={getUrlByPage("singin")}>Login</S.Link>
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
        <S.BoxAddress>
          <S.BoxAddressAddress>
            <S.AddressLabel>
              <i class="fa-solid fa-location-dot mr-5"></i> Luanda - Angola,
              Avenida 21 de Janeiro, Rua 1, Casa Nº 2
            </S.AddressLabel>
            <S.AddressLabel>
              <i class="fa-regular fa-envelope mr-5"></i> geral@ocontador.ao
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <i class="fa-solid fa-phone"></i> +244 926 157 276
            </S.AddressLabel>
          </S.BoxAddressAddress>
          <S.BoxAddressSocial>
            <S.LinkSocial
              target="_blank"
              href="https://www.linkedin.com/company/o-contador/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </S.LinkSocial>
            <S.LinkSocial
              target="_blank"
              href="https://www.facebook.com/share/1CfYtQthQm/?mibextid=wwXIfr"
            >
              <i class="fa-brands fa-facebook"></i>
            </S.LinkSocial>
            <S.LinkSocial
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=244926157276&text&type=phone_number&app_absent=0"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </S.LinkSocial>
            <S.LinkSocial
              target="_blank"
              href="https://www.instagram.com/ocontador.ao?igsh=N2licDVhczh5bHlx"
            >
              <i class="fa-brands fa-instagram"></i>
            </S.LinkSocial>
          </S.BoxAddressSocial>
        </S.BoxAddress>
      </S.Content>
    </S.Container>
  );
};
