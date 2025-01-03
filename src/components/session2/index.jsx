import * as S from "./styles";

import image from "../../assets/CEO.png";

export const Session2 = () => {
  return (
    <S.Container id="serviços">
      <S.Content>
        <S.LabelTitle>
          Confira nos<S.YellowSpan>sos Racking</S.YellowSpan>
        </S.LabelTitle>
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
            <S.RakingSubTitle>Feedback Positivos</S.RakingSubTitle>
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
            comprometida em oferecer soluções personalizadas para negócios de
            todos os portes. Com uma equipe de profissionais altamente
            qualificados e experientes, trabalhamos para garantir a saúde
            financeira e a conformidade fiscal da sua empresa, promovendo
            segurança e eficiência em todas as operações.
          </S.AboutInfo1>
        </S.AboutInfo>
      </S.AboutContent>
    </S.Container>
  );
};
