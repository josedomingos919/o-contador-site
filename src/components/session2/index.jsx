import * as S from "./styles";

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
    </S.Container>
  );
};
