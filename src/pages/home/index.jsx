import * as S from "./styles";

import {
  Banner,
  Footer,
  Header,
  Landing,
  Session1,
  Session2,
  CopyRight,
  WhasAppButton,
} from "../../components";

export const HomePage = () => {
  return (
    <S.Container>
      <Header />
      <Landing />
      <Session1 />
      <Banner />
      <Session2 />
      <Footer />
      <CopyRight />
      <WhasAppButton />
    </S.Container>
  );
};
