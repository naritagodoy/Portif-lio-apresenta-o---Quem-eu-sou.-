import React from "react";
import {
  CardsContainer,
  OverlayImage,
  CardP,
  CardP1,
  CardP2,
  TitleHome,
  CardP3,
} from "../Styles/homeStyles";
import { Texts } from "../Styles/globalStyled";

interface HeaderProps {
  h1: string;
  h2: string;
  p: JSX.Element;
  p1: string;
  p2: string;
  p3: JSX.Element;
}

const Home: React.FC = () => {
  const HeaderContent: HeaderProps = {
    h1: "Quem eu sou...",
    h2: "Projetos e Certificados",

    p: (
      <p>
        Meu nome é Narita Godoy, tenho 31 anos e atualmente estou cursando
        superior em Engenharia de Software na UNICID -SP, com previsão de
        término em 2028. Clicando{" "}
        <a href="https://www.linkedin.com/in/narita-godoy/">aqui</a> você acessa
        meu linkedin!
      </p>
    ),

    p1: " Para dar sequencia a essa fase intensa de dedicação a profissão, além da faculdade complemento meus estudos com as aulas da escola Alura de programação e venho também me dedicando ao inglês há cerca de 1 ano.",

    p2: "Este portfólio foi desenhado e codado por mim! Através de um carrossel vocês podem conferir quais as linguagens de programção que já aprendi e venho me aprimorando a cada dia. Clique acima em Projetos e Certificados para visualizar alguns!",

    p3: (
      <>
        Este portifólio foi desenhado e codado por mim!Através de um carrossel
        vocês podem conferir quais são as linguagens de programação que já
        aprendi e venho me aprimorando a cada dia. Clique em{" "}
        <a href="/Projects"> Projetos e Certificados </a> para visualizar alguns
        deles!
      </>
    ),
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
      <CardP3>
        <p>{HeaderContent.p3}</p>
      </CardP3>
    </CardsContainer>
  );
};

export default Home;
