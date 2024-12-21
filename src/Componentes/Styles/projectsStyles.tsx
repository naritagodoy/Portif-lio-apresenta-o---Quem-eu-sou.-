import { styled } from "styled-components";

export const MainContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 30px;

  @media (max-width: 450px) {
    position: relative;
    left: 10%;
    gap: 0px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    left: 15%;
    gap: 0px;
  }
`;
export const TitleProjects = styled.h1`
  font-size: 50px;
  font-family: "Orbitron", sans-serif;
  color: #ffffff;

  @media (max-width: 450px) {
    font-size: 35px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 35px;
    position: relative;
    right: 14%;
    }
  }
`;
export const TextProject = styled.a`
  display: flex;
  align-self: flex-start;
  color: #ffffff;
  margin-left: 10px;
  font-size: 30px;
  font-family: "Orbitron", sans-serif;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(1.25);
    transition: 500ms linear;
  }
`;

export const CardImages = styled.img`
  max-width: 200px;
  padding: 50px;
  background-color: #000000b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  &:hover {
    transform: scale(1.25);
    transition: 500ms linear;
  }
  @media (max-width: 450px) {
    padding: 20px;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
    width: 100%;
  }
`;
export const ContainerCardImages = styled.div`
  display: flex;
  column-gap: 60px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    flex-grow: grow;
    gap: 15px;
    position: relative;
    right: 13%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-grow: grow;
    gap: 15px;
    position: relative;
    right: 13%;
  }
`;
