import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  gap: 20px;
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: row;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: #af7b3f;
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  color: white;
  left: 0;
  top: 0;
  margin: 20px;
`;

export const Banner = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerLogin = styled.div`
  width: 50%;
  display: flex;
  background: linear-gradient(to left, rgba(175, 123, 63, 0.32), white);
`;

export const Image = styled.img`
  width: 600px;
`;

export const BoxDiv = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.b`
  font-size: 20px;
  font-family: Montserrat, sans-serif;
`;

export const LabelInput = styled.b`
  font-size: 15px;
  font-family: Montserrat, sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #af7b3f52;
`;

export const ButtonTile = styled.label`
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-family: Montserrat, sans-serif;
`;

export const Button = styled.button`
  width: 100%;
  height: 47px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #af7b3f;
`;

export const Link = styled.a`
  font-size: 12px;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: underline;
  font-family: Montserrat, sans-serif;
`;
