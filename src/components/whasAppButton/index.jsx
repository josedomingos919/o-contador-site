import * as S from "./styles";

import WhatsApp from "../../assets/whatsapp.png";

export const WhasAppButton = () => {
  return (
    <S.Container
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=244926157276&text&type=phone_number&app_absent=0"
    >
      <img src={WhatsApp} width={60} height={60} />
    </S.Container>
  );
};
