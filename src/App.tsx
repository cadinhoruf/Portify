import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyles } from "./styles/globalStyles";
import { ResetStyles } from "./styles/resetStyles";
import { UserProvider } from "./providers/UserContext/UserContext";
import { PortfolioProvider } from "./providers/PortfolioContext/PortfolioContext";
import { ProjectsProvider } from "./providers/ProjectsContext/ProjectsContext";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useState } from "react";

export const App = () => {
  const [currentTheme] = useState(localStorage.getItem("@COLORTHEME"));

  const theme = currentTheme === "Escuro" ? dark : light;

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyles />
        <UserProvider>
          <PortfolioProvider>
            <ProjectsProvider>
              <RoutesMain />
            </ProjectsProvider>
          </PortfolioProvider>
        </UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </>
  );
};
