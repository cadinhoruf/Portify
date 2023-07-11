import { TCreateProfileForm } from "../../pages/DashboardPage/ProfilePage/components/CreateProfileForm/schema";
import { TEditProfileForm } from "../../pages/DashboardPage/ProfilePage/components/EditProfileForm/schema";

export interface IPortfolioProviderProps {
  children: React.ReactNode;
}

export interface IPortfolio {
  id: number;
  color: string;
  position: string;
  description: string;
}

export interface IPortfolioContext {
  portfolio: IPortfolio | null;
  isPortfolioId: number | null;
  setPortfolio: React.Dispatch<React.SetStateAction<IPortfolio | null>>;
  createPortfolio: (formData: TCreateProfileForm, userId: number) => Promise<void>;
  editPortfolio: (formData: TEditProfileForm) => Promise<void>;
  verifyPortfolio: () => Promise<boolean>;
}
