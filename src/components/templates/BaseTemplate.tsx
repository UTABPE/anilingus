import { Outlet } from "react-router-dom";
import { AppFooter } from "../UI/organisms/Footer";
import { NavbarV2 } from "../UI/organisms/Navbar";
export function BaseLayout() {
  return (
    <div>
      <NavbarV2 />
      <Outlet />
      <AppFooter />
    </div>
  );
}
