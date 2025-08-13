import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
`;

export const Session = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 75px;
  min-height: 400px;
  display: flex;
  justify-content: center;
`;

export const ContainerInside = styled.div`
  width: 100%;
  padding-top: 50px;
  max-width: 1280px;
`;

export const Header = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Image = styled.img``;

export const Title = styled.label`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 3px;
  border-bottom: 6px solid #c17935;
  font-family: "Montserrat", sans-serif;
`;

export const Description = styled.p`
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
`;
