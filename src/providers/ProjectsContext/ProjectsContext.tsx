import { createContext, useContext, useEffect, useState } from "react";
import { IProject, IProjectsContext, IProjectsProviderProps } from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { TAddForm } from "../../pages/DashboardPage/ProjectsPage/components/AddProjectModal/components/AddForm/schema";
import { TEditForm } from "../../pages/DashboardPage/ProjectsPage/components/EditProjectModal/components/EditForm/schema";
import { UserContext } from "../UserContext/UserContext";
import { PortfolioContext } from "../PortfolioContext/PortfolioContext";

export const ProjectsContext = createContext({} as IProjectsContext);

export const ProjectsProvider = ({ children }: IProjectsProviderProps) => {
  const { setLoading } = useContext(UserContext);
  const { isPortfolioId } = useContext(PortfolioContext);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [projectList, setProjectList] = useState<IProject[]>([]);
  const [ selectedProject, setSelectedProject ] = useState<IProject>();

  const createProject = async (formData: TAddForm, isPortfolioId: number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const { data } = await api.post("/projects", formData, {
          headers: { Authorization: `Bearer ${token}` },
          params: { isPortfolioId },
        }
    );
      setProjectList((projectList) => [...projectList, data]);
      toast.success("Projeto criado com sucesso.");
    } catch (error: AxiosError | any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const editProject = async (formData: TEditForm, idProject: number) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const { data } = await api.patch(`/projects/${idProject}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const index = projectList.findIndex(
        (project) => project.id === idProject
      );
      if (index !== -1) {
        const updateProjectList = [...projectList];
        updateProjectList[index] = data;
        setProjectList(updateProjectList);  
        toast.success("Projeto editado com sucesso.")
      }
    } catch (error: AxiosError | any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (projectID: number) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      await api.delete(`/projects/${projectID}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Projeto deletado com sucesso.");
      setProjectList(projectList.filter((project) => project.id !== projectID));
    } catch (error: AxiosError | any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      const token = JSON.parse(localStorage.getItem("@USERID")!);
      const portfolioId = isPortfolioId;

      if (portfolioId) {
        try {
          const { data } = await api.get(`/portfolios/${portfolioId}/projects/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProjectList(data);          
        } catch (error: AxiosError | any) {
          console.error(error);
        }
      }
    };
    getProjects();
  }, [isPortfolioId]);

  return (
    <ProjectsContext.Provider
      value={{
        projectList,
        setProjectList,
        createProject,
        editProject,
        deleteProject,
        setSelectedProject,
        selectedProject,
        setOpenEditModal,
        openEditModal
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
