import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  IUserContext,
  IUserProviderProps,
  IUser,
  IUserLoginResponse,
  ILoading,
} from "./@types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { TRegisterForm } from "../../pages/RegisterPage/components/RegisterForm/schema";
import { TLoginForm } from "../../pages/LoginPage/components/LoginForm/schema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<ILoading | boolean>(false);

  const navigate = useNavigate();

  const userLogin = async (formData: TLoginForm) => {
    try {
      setLoading(true);
  
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
  
      setUser(data.user);
  
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
  
      toast.success("Usuário logado com sucesso.");
    
      navigate("/dashboard");
    } catch (error: AxiosError | any) {
      toast.error("Senha ou e-mail inválidos.");
  
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };  
  
  const userRegister = async (formData: TRegisterForm) => {
    try {
      setLoading(true);

      await api.post("/users", formData);
      
      toast.success("Usuário criado com sucesso.");

      navigate("/login");
    } catch (error: AxiosError | any) {
      toast.error("E-mail já existente.");

      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    
    toast.success("Usuário deslogado com sucesso!");

    navigate("/");
  };

  useEffect(() => { 
    const getUser = async () => { 
      const token = localStorage.getItem("@TOKEN"); 
      const userId = JSON.parse(localStorage.getItem("@USERID")!); 
      
      if (token && userId) { 
        try { 
          setLoading(true); 
          
          const response = await api.get(`/users/${userId}`, { 
            headers: { 
              Authorization: `Bearer ${token}`, 
            }, }); 
            
            const userData = response.data; 
            
            setUser(userData); 
          } catch (error: AxiosError | any) { 
            console.error(error.message); 
          } finally { 
            setLoading(false); 
          } 
        } 
      }; 
      getUser(); 
    }, []); 

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
