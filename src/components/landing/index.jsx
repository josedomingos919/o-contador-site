import * as S from "./styles";

import missaoPng from "../../assets/missao.png";
import visaoPng from "../../assets/visao.png";
import valorPng from "../../assets/valor.png";

export const Landing = () => {
  return (
    <S.Container>
      <S.CircleContainer>
        <S.Circle>
          <S.Image>
            <img src={missaoPng} />
          </S.Image>
          <S.Label>Missão</S.Label>
          <S.Link>
            <i class="fa-solid fa-arrow-right"></i>
          </S.Link>
        </S.Circle>
        <S.Circle>
          <S.Image>
            <img src={visaoPng} />
          </S.Image>
          <S.Label>Visão</S.Label>
          <S.Link>
            <i class="fa-solid fa-arrow-right"></i>
          </S.Link>
        </S.Circle>
        <S.Circle>
          <S.Image>
            <img src={valorPng} />
          </S.Image>
          <S.Label>Valor</S.Label>
          <S.Link>
            <i class="fa-solid fa-arrow-right"></i>
          </S.Link>
        </S.Circle>
      </S.CircleContainer>
      <S.MobileContainer>
        <S.MobileContent>
          <S.MobileTitle>
            Nossa Missão é Fazer<br></br> o Seu Telefone Tocar
          </S.MobileTitle>
          <S.MobileSubTitle>
            Desde 2012 no mercado ajudando escritórios contábeis de toda Angola
            a Conquistar Clientes pela Internet.
          </S.MobileSubTitle>
          <S.MobileInfo>Conheça nosso Trabalho!</S.MobileInfo>
          <S.ButtonContainer>
            <S.ButtonSpeakWithUs
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=244926157276&text&type=phone_number&app_absent=0",
                  "_blank"
                );
              }}
            >
              <i class="fa-regular fa-message"></i>Fale com a Gente!
            </S.ButtonSpeakWithUs>
          </S.ButtonContainer>
        </S.MobileContent>
      </S.MobileContainer>
    </S.Container>
  );
};
