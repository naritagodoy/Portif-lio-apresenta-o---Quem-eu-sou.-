import React from "react";
import styled from "styled-components";
import { DisplayImages, StyleLinks } from "../Styles/globalStyled";

const FooterEStilizado = styled.footer`
  color: #ffff;
  border-radius: 20px;
  padding-right: 10px;
  display: inline-block; /* Ajusta a largura ao conteúdo */
  text-align: center; /* Centraliza o texto dentro da div */
`;

const ContainerFooter = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

const Contatos = styled.div`
  background: bottom;
  color: #ffff;
  display: flex;
  justify-content: center;
  padding: 30px;
  align-items: center;
  gap: 5px;
`;

const ContainerContatos = styled.div`
  display: flex;
  justify-contente: center;
  align-items: center;
`;
const ContainerStyle = styled.div`
  display: flex;
  place-self: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <div>
      <ContainerFooter>
        <FooterEStilizado>
          <p>Contatos:</p>
        </FooterEStilizado>
      </ContainerFooter>
      <ContainerContatos>
        <ContainerStyle>
          <Contatos>
           
            <StyleLinks href="https://wa.me/55119994537804"
              target="__blank"
            rel="noopener noreferrer">
              <p>Tel: (11) 9 94537804 </p>
            </StyleLinks>
             <DisplayImages src="Images/iconewhatsapp.png" alt="icone whats" />
            
          </Contatos>
          <Contatos>
            <StyleLinks href="mailto:nari.godoys@gmail.com">
              <p>Email: nari.godoys@gmail.com</p>
            </StyleLinks>
            
            <DisplayImages src="Images/iconeemail.png" alt="icone email" />
          </Contatos>
          <Contatos>
            <p>
              <StyleLinks href="https://www.linkedin.com/in/narita-godoy/">
                Linkedin: Narita godoy
              </StyleLinks>
            </p>
            <DisplayImages
              src="Images/iconelinkedin.png"
              alt="icone linkedin"
            />
          </Contatos>
          <Contatos>
            <p>
              <StyleLinks href="https://github.com/naritagodoy">
                GItHUb: naritagodoy
              </StyleLinks>
            </p>
            <DisplayImages src="Images/iconegithub.png" alt="icone github" />
          </Contatos>
        </ContainerStyle>
      </ContainerContatos>
      <Contatos>
        “ Sinto que como desenvolvedora posso exercer mais meu lado criativo,
        intelectual e digamos assim, meu lado nerd de ser :) “
      </Contatos>
    </div>
  );
};
export default Footer;
