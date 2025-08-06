import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Container id="contactos">
      <S.CardContainer id="sobre">
        <S.LabelServices>Contactos</S.LabelServices>
      </S.CardContainer>
      <S.AboutContent>
        <S.CardContact>
          <S.CardContactIconSide>
            <S.IconCard>
              <i class="fa-solid fa-phone"></i>
            </S.IconCard>
          </S.CardContactIconSide>
          <S.CardContactContentSide>
            <S.ContactTitle>Departamento de Contablidade</S.ContactTitle>
            <S.ContactContent>+244 926-157-276</S.ContactContent>
          </S.CardContactContentSide>
        </S.CardContact>
        <S.CardContact>
          <S.CardContactIconSide>
            <S.IconCard>
              <i class="fa-solid fa-envelope"></i>
            </S.IconCard>
          </S.CardContactIconSide>
          <S.CardContactContentSide>
            <S.ContactTitle>Email Contacto Geral</S.ContactTitle>
            <S.ContactContent>ocontador@outlook.pt</S.ContactContent>
          </S.CardContactContentSide>
        </S.CardContact>
        <S.CardContact>
          <S.CardContactIconSide>
            <S.IconCard>
              <i class="fa-solid fa-location-dot"></i>
            </S.IconCard>
          </S.CardContactIconSide>
          <S.CardContactContentSide>
            <S.ContactTitle>Endereço</S.ContactTitle>
            <S.ContactContent>Cassenda Rua 8</S.ContactContent>
          </S.CardContactContentSide>
        </S.CardContact>
      </S.AboutContent>
    </S.Container>
  );
};
