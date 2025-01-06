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
  Contact,
} from "../../components";

export const HomePage = () => {
  return (
    <S.Container>
      <Header />
      <Landing />
      <Session1 />
      <Banner />
      <Session2 />
      <Contact />
      <Footer />
      <CopyRight />
      <WhasAppButton />
    </S.Container>
  );
};
