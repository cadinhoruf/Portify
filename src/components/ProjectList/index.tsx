import React from "react";
import { StyledProjectList } from './styles';

interface IProjectList {
  children: React.ReactNode;
}

export const ProjectList: React.FC<IProjectList> = ({ children }) => {
  return <StyledProjectList>{children}</StyledProjectList>;
};
