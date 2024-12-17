import React from "react";
import {
  CardsContainer,
  OverlayImage,
  CardP,
  CardP1,
  CardP2,
  TitleHome,
} from "../Styles/homeStyles";
import { Texts } from "../Styles/globalStyled";

interface HeaderProps {
  h1: string;
  h2: string;
  p: JSX.Element;
  p1: string;
  p2: string;
}

const Home: React.FC = () => {
  const HeaderContent: HeaderProps = {
    h1: "Quem eu sou...",
    h2: "Projetos e Certificados",

    p: (
      <p>
        Meu nome é Narita Godoy, tenho 31 anos e atualmente estou cursando
        superior em Engenharia de Software na UNICID -SP, com previsão de
        término em 2028.
      </p>
    ),

    p1: " Para dar sequencia a essa fase intensa de dedicação a profissão, além da faculdade complemento meus estudos com as aulas da escola Alura de programação e venho também me dedicando ao inglês há cerca de 1 ano.",

    p2: " Através de um carrossel vocês podem conferir quais são as linguagens de programação que já aprendi e venho me aprimorando a cada dia. Este portifólio por exemplo foi desenhado e codado por mim! Clique acima em Projetos e Certificados para visualizar!",
  };

  return (
    <CardsContainer>
      <Texts>
        <h1>{HeaderContent.h1}</h1>
      </Texts>

      <OverlayImage src="Images/avatarNarita.jpeg" alt="imagem sobrebosta" />

      <TitleHome href="/projects">{HeaderContent.h2}</TitleHome>

      <CardP>{HeaderContent.p}</CardP>

      <CardP1>
        <p>{HeaderContent.p1}</p>
      </CardP1>

      <CardP2>
        <p>{HeaderContent.p2}</p>
      </CardP2>
    </CardsContainer>
  );
};

export default Home;
