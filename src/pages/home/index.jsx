import * as S from "./styles";

import {
  Banner,
  CopyRight,
  Footer,
  Header,
  Landing,
  Session1,
  WhasAppButton,
} from "../../components";

export const HomePage = () => {
  return (
    <S.Container>
      <Header />
      <Landing />
      <Session1 />
      <Banner />
      <Footer />
      <CopyRight />
      <WhasAppButton />
    </S.Container>
  );
};
