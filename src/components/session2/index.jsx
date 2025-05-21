import * as S from "./styles";

import image from "../../assets/CEO.png";

export const Session2 = () => {
  return (
    <S.Container id="servicos">
      <S.Content>
        <S.LabelTitle>Confira os nos sos Rankings</S.LabelTitle>
        <S.BodyFooter>
          <S.Card>
            <S.RakingTitle>80+</S.RakingTitle>
            <S.RakingSubTitle>Clientes Satisfeitos</S.RakingSubTitle>
          </S.Card>
          <S.Card>
            <S.RakingTitle>200+</S.RakingTitle>
            <S.RakingSubTitle>Projectos Completos</S.RakingSubTitle>
          </S.Card>
          <S.Card>
            <S.RakingTitle>99+</S.RakingTitle>
            <S.RakingSubTitle>Feedbacks Positivos</S.RakingSubTitle>
          </S.Card>
        </S.BodyFooter>
      </S.Content>
      <S.CardContainer id="sobre">
        <S.LabelServices>Sobre</S.LabelServices>
      </S.CardContainer>
      <S.AboutContent>
        <S.AboutImageContent>
          <S.AboutImage src={image} />
        </S.AboutImageContent>
        <S.AboutInfo>
          <S.AboutInfo1>
            Somos uma empresa especializada em contabilidade e auditoria,
            comprometida em oferecer soluções personalizadas para empresas de
            todos os tamanhos. Com uma equipa de profissionais altamente
            qualificados e experientes, trabalhamos para garantir a saúde
            financeira e a conformidade fiscal do seu negócio, promovendo
            segurança e eficiência em todas as operações.
          </S.AboutInfo1>
          <S.AboutInfo2>Josemar Paixão</S.AboutInfo2>
          <S.AboutInfo3>CEO & Founder</S.AboutInfo3>
        </S.AboutInfo>
        <S.AboutLogo>
          {/*
          TODO: Espera sugestão da equipe deles
          <S.ItemsContainer>
            <S.Item>
              ANALIZAR
              <S.ItemSubtitle>{">"} Registrar</S.ItemSubtitle>
            </S.Item>
            <S.Item>
              DEMOSTRAR
              <S.ItemSubtitle>{">"} Organizar</S.ItemSubtitle>
            </S.Item>
            <S.Item>
              PLANEAR
              <S.ItemSubtitle>{">"} Conclusão</S.ItemSubtitle>
            </S.Item>
          </S.ItemsContainer> */}
        </S.AboutLogo>
      </S.AboutContent>
    </S.Container>
  );
};
