import { styled } from "styled-components";

export const FundoGradiente = styled.div`
  display: block;
  background-image: url("/Images/background.png");
  background-size: 100% auto;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  }
`;

export const Texts = styled.h1`
  display: flex;
  align-self: flex-start;
  color: #ffffff;
  margin-left: 10px;
  font-size: 30px;
  font-family: "Orbitron", sans-serif;
  

  @media (max-width: 450px) {
    position: static; 
    font-size: 20px;
`;
export const ContainerTexts = styled.div`
  margin: 10px;
  color: #ffff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0px;
`;

export const DisplayImages = styled.img`
  width: 24px;
  height: 21px;
  display: inline-block;
`;

export const StyleLinks = styled.a`
  text-decoration: none;
  color: inherit;
`;
