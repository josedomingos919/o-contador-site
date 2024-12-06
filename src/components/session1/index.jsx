import { ServiceCard } from "./service-card";

import financaPng from "../../assets/financa.png";
import fiscalidadePng from "../../assets/fiscalidade.png";
import contablidadePng from "../../assets/contablidade.png";
import recursosHumanosPng from "../../assets/recursos-humanos.png";
import analitycsPng from "../../assets/analitycs.png";

import * as S from "./styles";

export const Session1 = () => {
  return (
    <S.Container id="serviços">
      <S.H1>O seu negócio começa aqui</S.H1>
      <S.Content>
        Somos o parceiro ideal para<br></br>
        <S.Strong>qualquer tipo de negócio</S.Strong>
      </S.Content>
      <S.CardContainer>
        <S.LabelServices>Serviços</S.LabelServices>
        <ServiceCard
          className="first-service-card"
          icon={
            <img
              width="34"
              height="34"
              src={contablidadePng}
              alt="accounting"
            />
          }
          title="Contabilidade"
          description="Contabilidade é a ciência que registra, organiza e interpreta dados financeiros e patrimoniais de uma entidade. "
        />
        <ServiceCard
          icon={
            <img width="34" height="34" src={financaPng} alt="accounting" />
          }
          title="Finanças"
          description="Finanças é a gestão eficiente de recursos financeiros para alcançar objetivos e maximizar valor."
        />
        <ServiceCard
          icon={
            <img width="34" height="34" src={fiscalidadePng} alt="accounting" />
          }
          title="Fiscalidade"
          description="Fiscalidade é o conjunto de normas e práticas relacionadas à tributação e ao cumprimento das obrigações fiscais."
        />
        <ServiceCard
          icon={
            <img
              width="34"
              height="34"
              src={recursosHumanosPng}
              alt="accounting"
            />
          }
          title="Recursos Humanos"
          description="Recursos Humanos é a área responsável pela gestão de pessoas, ajudando no alinhamento com os objetivos organizacionais."
        />
        <ServiceCard
          icon={
            <img width="34" height="34" src={analitycsPng} alt="accounting" />
          }
          title="Análise Económica e Financeira."
          description="Análise Económica e Financeira avalia a viabilidade e desempenho econômico-financeiro das organizações."
        />
      </S.CardContainer>
    </S.Container>
  );
};
