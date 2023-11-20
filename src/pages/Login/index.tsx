import { RegisterOptions, UseFormRegisterReturn, useForm } from "react-hook-form";
import { ILoginRequest } from "../../interface";
import Input from "../../components/Input";

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues
    formState: { errors },
  } = useForm<ILoginRequest>({
    // resolver: yupResolver(userLoginSchema),
  });

  const onSubmit = async (data: ILoginRequest) => {
    try {
    //   await LoginUser(data);
    console.log("login", data);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Login</h1>
        <Input label="E-mail | Username" type="string" errorMessage={errors.email?.message} register={register} id="email" getValues={getValues}/>
        <label></label>
        <input></input>
        <span>{errors.email?.message}</span>
        <label>Password</label>
        <input></input>
        <span>{errors.password?.message}</span>
        <a href="">Forgot the password?</a>
        <a href="">Don't you have an account?</a>
        <button>Login</button>
      </div>
    </form>
  );
};

export default Login;
