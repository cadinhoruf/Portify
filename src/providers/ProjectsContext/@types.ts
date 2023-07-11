import React from "react";
import { TAddForm } from "../../pages/DashboardPage/ProjectsPage/components/AddProjectModal/components/AddForm/schema";
import { TEditForm } from "../../pages/DashboardPage/ProjectsPage/components/EditProjectModal/components/EditForm/schema";

export interface IProjectsProviderProps {
  children: React.ReactNode;
}

export interface IProject {
  portfolioId: number;
  id?: number;
  name: string;
  description: string;
  repository: string;
  link?: string;
  coverUrl?: string;
}

export interface IProjectsContext {
  projectList: IProject[];
  selectedProject: IProject | undefined;
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<IProject | undefined>>;
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
  createProject: (formData: TAddForm, isPortfolioId: number) => Promise<void>;
  deleteProject: (projectID: number) => Promise<void>;
  editProject: (formData: TEditForm, idProject: number) => Promise<void>;
}