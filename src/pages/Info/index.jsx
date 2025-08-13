import { useState } from "react";
import { initialData } from "./util";
import { useParams } from "react-router";
import {
  Banner,
  Contact,
  CopyRight,
  Footer,
  Header,
  Session2,
  WhasAppButton,
} from "../../components";

import * as S from "./styles";

export const Info = () => {
  const [data, setData] = useState(initialData);

  const { type } = useParams();

  const item = data[type];

  return (
    <S.Container>
      <Header />
      <S.Session>
        <S.ContainerInside>
          <S.Header>
            <S.Image src={item?.img} />
            <S.Title>{item?.title}</S.Title>
          </S.Header>
          <S.Description dangerouslySetInnerHTML={{ __html: item?.info }} />
        </S.ContainerInside>
      </S.Session>
      <Footer />
      <CopyRight />
      <WhasAppButton />
    </S.Container>
  );
};
