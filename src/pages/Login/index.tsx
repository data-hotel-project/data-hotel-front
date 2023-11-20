import { useForm } from "react-hook-form";
import { iLoginRequest } from "../../interface";
import Input from "../../components/Input";
import Button from "../../components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchemaLogin } from "../../validators/employeeValidators";

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iLoginRequest>({
    resolver: zodResolver(employeeSchemaLogin),
  });

  const onSubmit = async (data: iLoginRequest) => {
    try {
      await userLogin(data);
      console.log("login", data);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Login</h1>
        <Input
          label="E-mail | Username"
          type="string"
          errorMessage={errors.username?.message}
          register={register}
          id="email"
          getValues={getValues}
          login={true}
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
        <a href="/">Forgot the password?</a>
        <a href="/register">Don't you have an account?</a>
        <Button buttonSize={"medium"}>Login</Button>
      </div>
    </form>
  );
};

export default Login;
