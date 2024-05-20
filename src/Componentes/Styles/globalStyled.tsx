import { styled } from "styled-components";

export const FundoGradiente = styled.div`
  background: #534c4c;
  font-size: 18px;
  color: #ffff;
  margin: 5px;
  padding: 30px;
  text-indent: 10px;
  border: 5px solid;
  border-radius: 30px;
`;

export const HoverEffect = styled.span`
  &:hover {
    color: #b1ffff;
  }
`;
export const ContainerTexts = styled.div`
  background: #419494;
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

export const StyleLinks = styled.a `
text-decoration: none;
color: inherit;
`