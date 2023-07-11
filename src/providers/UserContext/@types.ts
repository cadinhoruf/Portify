import { TRegisterForm } from "../../pages/RegisterPage/components/RegisterForm/schema";

export interface IUserProviderProps{
  children: React.ReactNode;
}

export interface IUser{
  id: number;
  name: string;
  email: string;
}

export interface ILoading{
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserLoginResponse{
  accessToken: string;
  user: IUser;
}

export interface IUserContext{
  user: IUser | null;
  loading: ILoading | boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean | ILoading>>;
  userRegister: (formData: TRegisterForm) => Promise<void>;
  userLogin: (formData: any) => Promise<void>;
  userLogout: () => void;
}