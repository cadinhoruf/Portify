import { TCreateProfileForm } from "../../pages/DashboardPage/ProfilePage/components/CreateProfileForm/schema";
import { TEditProfileForm } from "../../pages/DashboardPage/ProfilePage/components/EditProfileForm/schema";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import {
  IPortfolio,
  IPortfolioContext,
  IPortfolioProviderProps,
} from "./@types";

export const PortfolioContext = createContext({} as IPortfolioContext);

export const PortfolioProvider = ({ children }: IPortfolioProviderProps) => {
  const { setLoading } = useContext(UserContext);

  const [portfolio, setPortfolio] = useState<IPortfolio | null>(null);
  const [isPortfolioId, setIsPortfolioId] = useState<number | null>(null);

  const navigate = useNavigate();

  const createPortfolio = async (
    formData: TCreateProfileForm,
    userId: number
  ) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);

      const { data } = await api.post(
        "/portfolios",
        { ...formData, userId: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPortfolio(data);

      localStorage.setItem("@COLORTHEME", data.color);

      toast.success("Portfólio criado com sucesso.");
      navigate("/dashboard");
    } catch (error: AxiosError | any) {
      toast.error("Não foi possível criar este portfólio.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const editPortfolio = async (formData: TEditProfileForm) => {
    const token = localStorage.getItem("@TOKEN");
    const userId = JSON.parse(localStorage.getItem("@USERID")!);

    try {
      const { data } = await api.get(`/portfolios?userId=${userId}`);

      const portfolio = await api.patch(`/portfolios/${data[0].id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPortfolio(portfolio.data);

      localStorage.setItem("@COLORTHEME", portfolio.data.color);

      toast.success("Portfólio atualizado com sucesso.");

      navigate("/dashboard");
    } catch (error: AxiosError | any) {
      toast.error("Não foi possível editar este portfólio.");
      console.error(error.message);
    }
  };

  const verifyPortfolio = async (): Promise<boolean> => {
    const userId = JSON.parse(localStorage.getItem("@USERID")!);

    if (userId) {
      try {
        const { data } = await api.get(`/portfolios?userId=${userId}`);

        if (data.length !== 0) {
          setIsPortfolioId(data[0].id);
          setPortfolio(data[0]);
          return true;
        } else {
          return false;
        }
      } catch (error: AxiosError | any) {
        console.error(error.message);
        return false;
      }
    }

    return false;
  };

  useEffect(() => {
    verifyPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        setPortfolio,
        editPortfolio,
        createPortfolio,
        verifyPortfolio,
        isPortfolioId,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
