import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;


  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SectionFooter = styled.footer`

`;

export const ResponsiveGrid = styled.div`

`;