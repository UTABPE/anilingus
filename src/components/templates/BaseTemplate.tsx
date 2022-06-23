import { Outlet } from "react-router-dom";
import { AppFooter } from "../UI/organisms/Footer";
import { NavbarV2 } from "./../UI/organisms/NavbarV2";
export function BaseLayout() {
  return (
    <div>
      <NavbarV2 />
      <div className="navbar__divider"></div>
      <Outlet />
      <AppFooter />
    </div>
  );
}
