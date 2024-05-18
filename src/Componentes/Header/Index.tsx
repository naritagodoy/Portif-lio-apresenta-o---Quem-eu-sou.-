import React from "react";

import styled from "styled-components";
import { HoverEffect } from "../Styles/globalStyled";

const HeaderEstilizado = styled.div`
  display: grid;
  grid-template-columns: 70%30%;
  background-image: url("");
  background-position-x: right;
  background-position-y: top;
  background-size: auto;
  background-repeat: no-repeat;
  padding: 1px;
  position: relative;
`;
const HeaderContainer = styled.div`
  padding: 30px;
  line-height: 30px;
`;
const OverlayImage = styled.img`
  position: absolute;
  top: 50px;
  right: 0%;
  transform: translate (-50%, -50%);
  width: 28%;
`;
interface HeaderProps {
  h1: string;
  p: JSX.Element;
  p1: string;
  p2: string;
}

const HeaderText: React.FC = () => {
  const HeaderContent: HeaderProps = {
    h1: "Quem eu sou...",

    p: (
      <p>
        Meu nome é <HoverEffect>Narita Godoy</HoverEffect>, tenho 31 anos e
        atualmente estudo programação - mais especificamente desenvolvimento de
        front-end - com as aulas da escola Alura de programação. Também sou
        graduada em enfermagem obstetrica pela USP desde 2017.
      </p>
    ),

    p1: "Além do front-end, venho me dedicando ao inglês há cerca 8 meses, através de aulas online com professor particular.",

    p2: "Abaixo, através de um carrossel vocês podem conferir quais são as linguagens de programação que já aprendi e que com muita dedicação, venho me aprimorando a cada dia. Este portifólio por exemplo foi desenhado e codado por mim, (pode inspecionar :)) a fim de demonstrar alguns dos conhecimentos que adquiri! Claro, ainda faltam alguns ajustes, mas mesmo assim, Confira!",
  };

  return (
    <HeaderEstilizado>
      <OverlayImage src="Images/naritaimagem.png" alt="imagem sobrebosta" />
      <HeaderContainer>
        <HoverEffect>
          <h1>{HeaderContent.h1}</h1>
        </HoverEffect>
        {HeaderContent.p}
        <p>{HeaderContent.p1}</p>
        <p>{HeaderContent.p2}</p>
      </HeaderContainer>
    </HeaderEstilizado>
  );
};

export default HeaderText;
