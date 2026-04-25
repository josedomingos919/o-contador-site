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
      <a href="https://upload.app/download/gta-san-andreas/com.rockstargames.gtasa/9421f861559985757fc4f72e5c22456323eefcc1dfe7e42860dd74812692821c/downloading?utm_source=tg&utm_campaign=AppHunter-BR&utm_medium=content&utm_term=6259">
        GTA San Andreas
      </a>
      {/* <Header />
      <Landing />
      <Session1 />
      <Banner />
      <Session2 />
      <Contact />
      <Footer />
      <CopyRight />
      <WhasAppButton /> */}
    </S.Container>
  );
};
