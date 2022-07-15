import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import useWindowDimensions from "../../../hooks/useWidnowDimension";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function NavbarV2() {
  // const { width } = useWindowDimensions();
  return (
    <section
      className="navbar-container"
      // style={width > 1280 ? { width: 1280 } : { width: width }}
    >
      <h1 className="navbar-container__logo">ANILINGUS</h1>
      <Input placeholder="Search" className="navbar-container__search" />
      <div className="navbar-container-buttons">
        <Button>ТОП 100</Button>
        <Button>Аниме</Button>
        <Button>Манга</Button>
        <Button>Всякое Мое</Button>
      </div>

      <div className="navbar-container-menu">
        <Button className="navbar-container-buttons__button">
          <UserOutlined />
        </Button>
        <Button className="navbar-container-buttons__button">
          <MenuOutlined />
        </Button>
      </div>
    </section>
  );
}
