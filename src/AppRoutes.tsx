import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { BaseLayout } from "./components/templates/BaseTemplate";
import { MainPageV2 } from "./components/pages/MainPage";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { AnimePage } from "./components/pages/AnimePage";

export function AppRoutes() {
  let globalContext = useContext(GlobalContext)
  
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        
        <Route path="/" element={globalContext?.isFiltred ? <AnimePage/> : <MainPageV2 />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
