import * as S from "./styles";

import {
  Banner,
  Footer,
  Header,
  Landing,
  Contact,
  Session1,
  Session2,
  CopyRight,
  WhasAppButton,
} from "../../components";
import { useEffect } from "react";
import { useLocation } from "react-router";

export const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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
