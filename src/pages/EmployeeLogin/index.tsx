import { useForm } from "react-hook-form";
import { iLoginRequest } from "../../interface";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";

import { employeeSchemaLogin } from "../../validators/employeeValidators";
import { StyledBody } from "./style";
import Background from "../../components/Background";
import { useEmployee } from "../../contexts";

const EmployeeLogin = () => {
  const { loginEmployee } = useEmployee();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iLoginRequest>({
    resolver: zodResolver(employeeSchemaLogin),
  });

  const onSubmit = async (data: iLoginRequest) => {
    await loginEmployee(data);
  };

  return (
    <Background>
      <StyledBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="name">DATA HOTEL</h1>
          <div className="box">
            <h1>Login</h1>
            <Input
              label="E-mail | Username"
              type="text"
              errorMessage={errors.username?.message}
              register={register}
              id="username"
              getValues={getValues}
            />
            <Input
              label="Password"
              type="password"
              errorMessage={errors.password?.message}
              register={register}
              id="password"
              getValues={getValues}
              showPass={true}
            />
            <div className="links">
              <a href="/">Home</a>
              <a href="/register">Still don't have account?</a>
            </div>

            <Button size={"medium"} backgroundColor={"black"}>
              Login
            </Button>
          </div>
        </form>
      </StyledBody>
    </Background>
  );
};

export default EmployeeLogin;
