import styled from 'styled-components';

export const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1960px; 
  padding: 1rem;
`;

// Estilo para a grade de imagens
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 1rem; 

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

// Estilo para o footer, se necessário
export const StyledFooter = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #f3f3f3; 
`;
