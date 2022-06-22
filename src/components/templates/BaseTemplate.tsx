import { Outlet } from "react-router-dom";
import { Navbar } from "./../UI/organisms/Navbar";
import { AppFooter } from "../UI/organisms/Footer";
import { NavbarV2 } from "./../UI/organisms/NavbarV2";
export function BaseLayout() {
  return (
    <div>
      <NavbarV2 />
      <Outlet />
      <AppFooter />
    </div>
  );
}
