import useWindowDimensions from "../../../hooks/useWidnowDimension";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";

export function NavbarV2() {
  const { width } = useWindowDimensions();
  return (
    <section
      className="navbar-container"
      style={width > 1024 ? { width: 1280 } : { width: width }}
    >
      <Title level={1}>ANILINGUS</Title>
      <Input placeholder="Search" className="w-full h-1/2" />
      <div className="">
        <div className="navbar-container-buttons">
          <Button>ТОП 100</Button>
          <Button>Аниме</Button>
          <Button>Манга</Button>
          <Button>Всякое Мое</Button>
        </div>
      </div>
    </section>
  );
}
