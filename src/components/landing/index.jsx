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
    </S.Container>
  );
};
