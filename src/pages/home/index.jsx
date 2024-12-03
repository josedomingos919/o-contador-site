import * as S from "./styles";

import { Footer, Header, Landing } from "../../components";

export const HomePage = () => {
  return (
    <S.Container>
      <Header />
      <Landing />
      <Footer />
    </S.Container>
  );
};
