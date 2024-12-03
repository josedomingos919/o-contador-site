import * as S from "./styles";

import { CopyRight, Footer, Header, Landing } from "../../components";

export const HomePage = () => {
  return (
    <S.Container>
      <Header />
      <Landing />
      <Footer />
      <CopyRight />
    </S.Container>
  );
};
