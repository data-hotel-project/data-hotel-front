import { useForm } from "react-hook-form";
import { ILoginRequest } from "../../interface";

const Login = () => {
  const {
    // register,
    handleSubmit,
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
        <label>E-mail | Username</label>
        <input></input>
        <span>{errors.login?.message}</span>
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
