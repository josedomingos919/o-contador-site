import styled from "styled-components";

import { colors } from "../../styles/colors";
import { sizes } from "../../styles/size";

export const Container = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.5px;
  color: ${colors.black};
  font-family: "Montserrat", sans-serif;

  @media (max-width: ${sizes.mobile}) {
    text-align: center;
    padding: 10px 10px;
  }
`;
