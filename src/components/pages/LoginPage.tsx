import { Typography, Form, Divider } from "antd";
import { useForm } from "react-hook-form";
import { Button } from "../UI/atoms/Button";
import { Input } from "../UI/atoms/Input";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px;
  color: rgb(120 53 15);
`;

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const login = watch("login");
  const password = watch("password");

  const submitHandler = () => {
    console.log(login, password);
  };
  return (
    <section className="h-screen flex items-center justify-center !text-amber-900">
      <main className="h-[500px] w-[800px] flex flex-row bg-orange-50 ">
        <Container className="w-5/6">
          <Typography.Title className="!text-inherit" level={1}>
            Login to Your Account
          </Typography.Title>
          <Divider />
          <Form
            className="w-4/5 flex flex-col items-center gap-2"
            onFinish={handleSubmit(submitHandler)}
            initialValues={{ login: "", password: "" }}
          >
            <Form.Item
              className="w-4/5"
              name="login"
              rules={[{ required: true, message: "Username!" }]}
            >
              <Input
                className="w-full"
                placeholder="login"
                {...register("login")}
              />
            </Form.Item>
            <Form.Item
              className="w-4/5"
              name="password"
              rules={[{ required: true, message: "Password!" }]}
            >
              <Input
                className="w-full"
                placeholder="password"
                {...register("password")}
              />
            </Form.Item>
            <Button
              className="w-3/5 bg-orange-200 hover:bg-orange-100"
              htmlType="submit"
            >
              Sing In
            </Button>
          </Form>
        </Container>
        <Container className="bg-orange-200 gap-5 ">
          <Typography.Title className="!text-inherit" level={1}>
            New Here?
          </Typography.Title>
          <div>Sing up and discover a great things about anime and manga</div>
          <Button className="bg-orange-50 hover:bg-orange-100">Sing Up</Button>
        </Container>
      </main>
    </section>
  );
}

export default LoginPage;
