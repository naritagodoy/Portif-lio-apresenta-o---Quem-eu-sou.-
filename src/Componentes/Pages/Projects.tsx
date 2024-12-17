import Carousel from "../Carousel/Index";
import { FundoGradiente } from "../Styles/globalStyled";
import {
  CardImages,
  ContainerCardImages,
  MainContainerProjects,
  TextProject,
  TitleProjects,
} from "../Styles/projectsStyles";

const Projects: React.FC = () => {
  const images = [
    "Images/formação HTML e CSS - 51h.png",
    "Images/formação iniciante em programação- 75h.png",
    "Images/formaçaocompleta react com javascript - 68h.png",
    "Images/curso styled components - 10h.png",
    "Images/curso responsividade e publicação de projetos - 6h.png",
    "Images/curso react router com javascript - 8h.png",
    "Images/curso react migrando para typescript - 8h.png",
    "Images/curso react gerenciando estados com context API- 8h.png",
    "Images/curso react como os componenntes funcionam - 8h.png",
    "Images/curso praticando recat com javascript - 8h.png",
    "Images/curso páginas dinâmicas javascript - 10h.png",
    "Images/curso manipulando objetos javascript- 8h.png",
    "Images/curso logica de programação - 6h.png",
    "Images/curso GIT e GITHUB -8h.png",
    "Images/curso Linux1 - 4h.png",
    "Images/curso classes, posicionamentos e flexbox - 8h.png",
    "Images/curso cabeçalho, footer e CSS - 6h.png",
    "Images/curso arquitetura de computadores -8h.png",
    "Images/curso responsividade com mobile first- 8h.png",
  ];
  return (
    <FundoGradiente>
      <MainContainerProjects>
        <TextProject href="/">Home</TextProject>
        <TitleProjects>Projetos e Certificados</TitleProjects>
        <ContainerCardImages>
          <CardImages src="/Images/aluraBook.png" />
          <CardImages src="/Images/aluraPlus.png" />
          <CardImages src="/Images/olaMundo.png" />
        </ContainerCardImages>
      </MainContainerProjects>
      <Carousel images={images} />
    </FundoGradiente>
  );
};
export default Projects;
