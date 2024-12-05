import * as S from "./styles";

import { CopyRight, Footer, Header, Landing, Session1 } from "../../components";

export const HomePage = () => {
  return (
    <S.Container>
      <Header />
      <Landing />
      <Session1 />
      <Footer />
      <CopyRight />
    </S.Container>
  );
};
