import React from "react";
import { Container } from "components/Container";
import Footer from "components/Footer";
import Menu from "components/Menu";
import * as S from "./styles";

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base: React.FC<BaseTemplateProps> = ({ children }) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
    <S.SectionFooter></S.SectionFooter>
  </S.Wrapper>
);

export default Base;
