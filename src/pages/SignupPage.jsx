import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../api/axios";

function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/roles").then((res) => {
      setRoles(res.data);
    });
  }, []);

  const selectedRole = watch("role_id");

  const selectedRoleObj = roles.find((r) => r.id === Number(selectedRole));

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      delete data.confirmPassword;

      if (selectedRoleObj?.code !== "store") {
        delete data.store;
      }

      await api.post("/signup", data);

      alert("You need to click link in email to activate your account!");

      // 🔥 FIX BURADA
      window.location.href = "/shop";
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-md shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <input
          placeholder="Name"
          {...register("name", {
            required: "Name required",
            minLength: { value: 3, message: "Min 3 char" },
          })}
          className="border p-3"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: "Weak password",
            },
          })}
          className="border p-3"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          className="border p-3"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}

        <select
          {...register("role_id")}
          className="border p-3"
          defaultValue={3}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {selectedRoleObj?.code === "store" && (
          <>
            <input
              placeholder="Store Name"
              {...register("store.name")}
              className="border p-3"
            />

            <input
              placeholder="Store Phone"
              {...register("store.phone")}
              className="border p-3"
            />

            <input
              placeholder="Tax ID"
              {...register("store.tax_no")}
              className="border p-3"
            />

            <input
              placeholder="IBAN"
              {...register("store.bank_account")}
              className="border p-3"
            />
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#23A6F0] text-white py-3 font-semibold"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </section>
  );
}

export default SignupPage;
