import { Button as ButtonAtom } from "../atoms/Button";
import { Input } from "../atoms/Input";
import styled from "@emotion/styled";
import { Title } from "../atoms/Title";
import { UserOutlined } from "@ant-design/icons";

const Button = styled(ButtonAtom)`
  height: 100%;
`;
export function Navbar() {
  return (
    <section className="max-w-[1280px] h-20 navbar-container">
      <div className="w-full h-full border-b-4 border-orange-200 flex flex-row items-center justify-between gap-10">
        <Title level={1}>ANILINGUS</Title>
        <Input placeholder="Search" className="w-full h-1/2" />
        <div className="flex gap-5">
          <Button>
            <Title level={3}>ТОП 100</Title>
          </Button>
          <Button>
            <Title level={3}>Аниме</Title>
          </Button>
          <Button>
            <Title level={3}>Манга</Title>
          </Button>
          <Button>
            <Title level={3}>Всякое мое</Title>
          </Button>
          <div className="text-white hover:text-orange-700 focus:text-orange-700">
            <Button className="flex items-center bg-orange-700 text-2xl px-2   ">
              <UserOutlined />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
