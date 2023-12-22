import styled from "styled-components";

export const MainContainer = styled.div`
  margin: auto;
  max-width: 1960px;
  padding: 1rem;
`;

// Estilo para a grade de imagens
export const ImageGrid = styled.div``;



export const ImageContent = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  height: 629px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 4rem 1.5rem 1rem 1.5rem;
  text-align: center;
  color: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    height: 400px;
    bottom: 0;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    padding-top: 0;
  }
`;

export const ImageOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  max-height: 100%;
  max-width: 100%;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 400px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
`;