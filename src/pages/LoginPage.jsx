import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/actions/clientActions";
import { toast } from "react-toastify";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data));

      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-md flex flex-col gap-4 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          placeholder="Email"
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          className="border p-3"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password required",
          })}
          className="border p-3"
        />

        <label className="flex gap-2 items-center">
          <input type="checkbox" {...register("remember")} />
          Remember Me
        </label>

        <button className="bg-[#23A6F0] text-white py-3 font-semibold">
          Login
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
