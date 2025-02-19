import { styled } from "styled-components";

export const CardsContainer = styled.div`
  position: relative;
  padding: 15px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #e0e0e0;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const CardP = styled.div`
  position: absolute;
  width: 230px;
  top: 86%;
  right: 74%;
  margin-left: 4%;
  line-height: 1.6;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  background-color: #000000b3;
  border-radius: 10px;
  padding: 18px;

  a {
    color: #e0e0e0;
  }

  &:hover {
    transform: scale(1.25);
    transition: 500ms linear;
  }
  @media (max-width: 450px) {
    position: static;
    margin: 10px;
    width: 60%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    position: static;
    margin: 10px;
    width: 60%;
  }
`;
export const CardP1 = styled.div`
  position: absolute;
  line-height: 1.6;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  top: 180%;
  left: 32%;
  width: auto;
  max-width: 300px;
  height: auto;
  max-height: 300px;
  background-color: #000000b3;
  border-radius: 10px;
  padding: 15px;

  &:hover {
    transform: scale(1.25);
    transition: 500ms linear;
  }

  @media (max-width: 450px) {
    position: static;
    margin: 10px;
    width: 65%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    position: static;
    margin: 10px;
    width: 65%;
  }
`;
export const CardP2 = styled.div`
  position: absolute;
  line-height: 1.6;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  top: 162%;
  left: 66%;
  width: auto;
  max-width: 300px;
  height: auto;
  max-height: 300px;
  background-color: #000000b3;
  border-radius: 10px;
  padding: 18px;

  &:hover {
    transform: scale(1.25);
    transition: 500ms linear;
  }

  @media (max-width: 450px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: static;
    margin: 10px;
    width: 67%;
  }
`;
export const CardP3 = styled.div`
  display: block;
  position: absolute;
  line-height: 1.6;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  top: 162%;
  left: 66%;
  width: auto;
  max-width: 300px;
  height: auto;
  max-height: 300px;
  background-color: #000000b3;
  border-radius: 10px;
  padding: 18px;

  &:hover {
    transform: scale(1.25);
    transition: 500ms linear;
  }

  @media (max-width: 450px) {
    position: static;
    margin: 10px;
    width: 67%;

    a {
      cursor: pointer;
      color: #e0e0e0;
    }
  }
  @media (min-width: 450px) {
    display: none;
  }
`;

export const OverlayImage = styled.img`
  position: absolute;
  width: 194px;
  height: auto;
  border-radius: 10px;
  top: 116%;
  left: 55%;
  transform: translate(-50%, -50%); /* Move para o centro */

  @media (max-width: 450px) {
    position: static;
    margin-botton: 20px;
    width: 50%;
    transform: translateX(10px);
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: static;
    margin-botton: 20px;
    width: 30%;
    transform: translateX(10px);
  }
`;

export const TitleHome = styled.a`
  font-size: 35px;
  font-family: "Orbitron", sans-serif;
  color: #ffffff;
  position: absolute;
  left: 71%;
  top: 55%;
  line-height: 1.6;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.1); /* Efeito de leve zoom */
    transition: 0.3s; /* Suaviza a transição */
  }

  @media (max-width: 450px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 10px;
    font-size: 30px;
    position: unset;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
