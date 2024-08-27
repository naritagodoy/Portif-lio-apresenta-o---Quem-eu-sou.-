import React, { useState } from "react";
import { ContainerTexts } from "../Styles/globalStyled";
import "./experiencias.css";
import styled from "styled-components";

interface ExpericiasProps {
  h1: string;
  h2: string;
  h3: string;
  p: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
}

const Paragrafo = styled.div`
  margin-top: 10px;
`;

const Experiencias: React.FC = () => {
  const experienciasText: ExpericiasProps = {
    h1: "Saiba os lugares que já trabalhei e os cargos ocupados!",

    p: "Hospital Geral de Itapevi: 2017 - atual.Enfª Obstetra. Realiza preenchimento e correção de planilhas de parto, gerenciamento de protocolos e indicadores. Responsável pelos setores PSGO E CPN (Pronto Socorro Obstétrico e Centro de Parto Normal). Atua na classificação de risco obstétrico, condução do trabalho de parto, assistência ao parto normal e puerpério. Enfermeira referência do setor no plantão noturno. .",

    p2: "Universidade Cruzeiro do Sul · Temporário 4 meses. Preceptora de estágio/ professora de laboratório.2022. Principais atividades: Aulas teóricas e práticas em laboratório com os alunos graduandos em enfermagem do 6° semestre, disciplina: Saúde da mulher. Prática clínica hospitalar (estágio): auxílio e realização de procedimentos visando treino de habilidades manuais, técnicas, anamnese, entrevista, consulta de enfermagem, coleta de papanicolau entre outras atividades desenvolvidas.",

    p3: "Hospital Unimed Bebedouro: 2016-2017.Enfª Obstetra. Principais atividades: No setor da maternidade (Alojamento Conjunto): responsável por aplicar a SAE, assistência ao binômio mãe/bebê, auxílio ao aleitamento materno, aprazamentos, checagem de materiais, escala de funcionários, treinamento da equipe, dentre outras atividades da rotina e gestão do setor. Organizadora do Grupo de gestantes de preparação para o parto e cuidados com o bebê.",

    h2: "Acesse minhas atividades de front-end realizadas para treinamento!",

    h3: "Minhas principais competências e habilidades:",

    p4: " ask desenvolvida para escola <strong> Láboratorio de Forró </strong>: ajustando componentes e lista de objetos. PR aprovado em 23/06/2024. Confira: XXXXXX  ",
    p5: "Resolução de problemas. Capacidade analítica.",
    p6: "Capacidade de escuta. Gestão de tempo.",
    p7: "Comunicação empática. Capacidade de organização.",
  };

  const [textoVisivel, setTextoVisivel] = useState<number | null>(null);

  const textoSelecionado = (index: number) => {
    setTextoVisivel((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div> 
      {/* container sobre minhas experiências profissionais */}
      <ContainerTexts>
        <h1 className="titulo">{experienciasText.h1}</h1>
        <img
          className="imagem-botao"
          src="Images/chevrondown.svg"
          alt="seta para baixo"
          onClick={() => textoSelecionado(1)}
        />
      </ContainerTexts>

      {textoVisivel === 1 && (
        <Paragrafo>
          <p className="textoExperiencias">{experienciasText.p}</p>
          <p className="textoExperiencias">{experienciasText.p2}</p>
          <p className="textoExperiencias">{experienciasText.p3}</p>
        </Paragrafo>
      )}
      <div>
        {/* container sobre meus códigos para treinamento
        <ContainerTexts>
          <h2 className="titulo">{experienciasText.h2}</h2>
          <img
            className="imagem-botao"
            src="Images/chevrondown.svg"
            alt="seta para baixo"
            onClick={() => textoSelecionado(2)}
          />
        </ContainerTexts>

        {textoVisivel === 2 && (
          <Paragrafo>
            <p className="textoExperiencias">{experienciasText.p4}</p>
          </Paragrafo>
        )}  */}
      </div>
      <div>
        {/* container para minhas competencias */}
        <ContainerTexts>
          <h3 className="titulo">{experienciasText.h3}</h3>
          <img
            className="imagem-botao"
            src="Images/chevrondown.svg"
            alt="seta para baixo"
            onClick={() => textoSelecionado(3)}
          />
        </ContainerTexts>

        {textoVisivel === 3 && (
          <Paragrafo>
            <p className="textoExperiencias">{experienciasText.p4}</p>
            <p className="textoExperiencias">{experienciasText.p5}</p>
            <p className="textoExperiencias">{experienciasText.p6}</p>
            <p className="textoExperiencias">{experienciasText.p7}</p>
          </Paragrafo>
        )}
      </div>
    </div>
  );
};

export default Experiencias;
