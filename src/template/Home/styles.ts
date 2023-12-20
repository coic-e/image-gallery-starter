import styled from 'styled-components';

// Estilo para o container principal
export const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1960px; // ou outro valor conforme sua necessidade
  padding: 1rem;
`;

// Estilo para a grade de imagens
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Ajuste o tamanho mínimo e máximo da coluna como necessário
  gap: 1rem; // Espaçamento entre as imagens

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  // Estilize mais se necessário, por exemplo, para hover effects, etc.
`;

// Estilo para o footer, se necessário
export const StyledFooter = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #f3f3f3; // Exemplo de cor de fundo
  // Outros estilos para o footer
`;
