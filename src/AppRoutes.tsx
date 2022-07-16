import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { BaseLayout } from "./components/templates/BaseTemplate";
import { MainPageV2 } from "./components/pages/MainPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<MainPageV2 />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
