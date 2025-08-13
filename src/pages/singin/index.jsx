import * as S from "./styles";

import { useNavigate } from "react-router";

import Logo from "../../assets/logo-contador.png";

export const SingInPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Banner>
        <S.BackButton onClick={() => navigate("/")}>
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        </S.BackButton>
        <S.Image src={Logo} />
      </S.Banner>
      <S.ContainerLogin>
        <S.BoxDiv>
          <S.Title style={{ marginBottom: 20 }}>Sign In</S.Title>
          <S.InputContainer style={{ marginBottom: 25 }}>
            <S.LabelInput>Usuário</S.LabelInput>
            <S.Input
              style={{ marginTop: 10 }}
              placeholder="Ex.: josedomingos4839"
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.LabelInput>Senha</S.LabelInput>
            <S.Input style={{ marginTop: 10 }} placeholder="Ex.: user2021@." />
          </S.InputContainer>
          <S.Button style={{ marginTop: 30 }}>
            <S.ButtonTile>Entrar</S.ButtonTile>
          </S.Button>
          <S.Link>Esqueceu a senha!</S.Link>
        </S.BoxDiv>
      </S.ContainerLogin>
    </S.Container>
  );
};
