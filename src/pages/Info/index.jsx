import { useParams } from "react-router";
import { CopyRight, Footer, Header, WhasAppButton } from "../../components";

import * as S from "./styles";

export const Info = () => {
  const { type } = useParams();

  console.log({ type });

  return (
    <S.Container>
      <Header />
      <S.Session>Breve Mente</S.Session>
      <Footer />
      <CopyRight />
      <WhasAppButton />
    </S.Container>
  );
};
