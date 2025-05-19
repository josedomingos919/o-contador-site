import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Container = styled.div`
  gap: 15px;
  width: 100%;
  padding: 20px;
  display: flex;
  min-height: 228;
  min-width: 170px;
  position: relative;
  flex-direction: column;
  border: 2px solid ${colors.borderDark};
  margin-bottom: 25px;
  z-index: 1212;
`;

export const LineContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 10px solid ${colors.yellowLight2};
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: -20px;
  margin-bottom: -20px;
  z-index: -13;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: ${colors.black1};
`;

export const Text = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.iconDark};
  margin-bottom: 15px;
  text-align: justify;
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  background-color: #af7b3f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
