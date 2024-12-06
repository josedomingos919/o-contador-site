import * as S from "./styles";

export const ServiceCard = ({ icon, title, description }) => {
  return (
    <S.Container>
      <S.Icon>{icon}</S.Icon>
      <S.Label>{title}</S.Label>
      <S.Text>{description}</S.Text>
      <S.LineContainer />
    </S.Container>
  );
};
