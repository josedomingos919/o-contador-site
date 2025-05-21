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
import { useLocation } from "react-router";
import { useEffect } from "react";

export const HomePage = () => {
  const { hash } = useLocation();
  console.log(useLocation());
  useEffect(() => {
    if (hash) {
      console.log(hash);
      const el = document.querySelector("q");
      if (!el) {
        // el.scrollIntoView({ behavior: "smooth" });
      }
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
