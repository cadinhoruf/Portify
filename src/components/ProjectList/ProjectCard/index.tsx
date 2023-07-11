import Edit from "../../../assets/icons/edit.png";
import Delete from "../../../assets/icons/delete.png";
import Git from "../../../assets/icons/github.png";
import Link from "../../../assets/icons/link.png";
import { useContext } from "react";
import { ProjectsContext } from "../../../providers/ProjectsContext/ProjectsContext";
import { ImagesContainer, StyledProjectCard } from "./styles";

export const ProjectCard = () => {
  const { setSelectedProject } = useContext(ProjectsContext);

  const isDashboardProjects = window.location.pathname.includes(
    "/dashboard/projects"
  );

  const { deleteProject, projectList, setOpenEditModal } = useContext(ProjectsContext);

  const handleDelete = (projectID: number | undefined) => {
    if (typeof projectID === "number") {
      deleteProject(projectID);
    }
  };

  return (
    <>
      {projectList.map((project) => {
        if (isDashboardProjects) {
          if (project.coverUrl == "") {
            return (
              <StyledProjectCard key={project.id}>
                <div className="title-container">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
                <ImagesContainer>
                  <img
                    src={Edit}
                    alt="Ícone de um lápis na cor verde que simboliza um botão para editar o projeto"
                    onClick={() => {
                      setSelectedProject(project);
                      setOpenEditModal(true);
                    }}
                  />
                  <img
                    src={Delete}
                    alt="Ícone de uma lixeira na cor verde que simboliza um botão para excluir o projeto"
                    onClick={() => {
                      handleDelete(project.id);
                    }}
                  />
                </ImagesContainer>
              </StyledProjectCard>
            );
          } else {
            return (
              <StyledProjectCard key={project.id}>
                <div className="img-container">
                  <img className="img-project" src={project.coverUrl} />
                  <div className="title-container">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                  </div>
                </div>
                <ImagesContainer>
                  <img
                    src={Edit}
                    alt="Ícone de um lápis na cor verde que simboliza um botão para editar o projeto"
                    onClick={() => {
                      setSelectedProject(project);
                      setOpenEditModal(true);
                    }}
                  />
                  <img
                    src={Delete}
                    alt="Ícone de uma lixeira na cor verde que simboliza um botão para excluir o projeto"
                    onClick={() => {
                      handleDelete(project.id);
                    }}
                  />
                </ImagesContainer>
              </StyledProjectCard>
            );
          }
        } else {
          return (
            <StyledProjectCard key={project.id}>
              <div className="img-container">
                {project.coverUrl !== "" && (
                  <img className="img-project" src={project.coverUrl} />
                )}
                <div className="title-container">
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
              <ImagesContainer>
                <a href={project.repository} target="_blank">
                  <img
                    src={Git}
                    alt="Ícone do GitHub na cor verde que simboliza um botão para visualizar o projeto"
                  />
                </a>
                <a href={project.link} target="_blank">
                  <img
                    src={Link}
                    alt="Ícone de um link na cor verde que simboliza um botão para acessar o projeto"
                  />
                </a>
              </ImagesContainer>
            </StyledProjectCard>
          );
        }
      })}
    </>
  );
};
