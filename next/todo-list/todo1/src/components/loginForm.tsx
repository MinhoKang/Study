"use client";

import { useActionState } from "react";
import style from "./loginForm.module.css";
import { login, login2 } from "@/actions/login.action";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { LoginProps } from "../../types/types";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../types/schema";

const Login = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(login, null);

  const {
    getValues,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  });

  const onSubmit = () => {
    const params = getValues();

    login2(params)
      .then(() => router.push("/todo"))
      .catch(() => alert("로그인에 실패 했습니다."));
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
        <label>
          ID
          <input disabled={isPending} placeholder="ID" {...register("id")} />
        </label>
        {errors.id && <span className={style.error}>{errors.id?.message}</span>}
        <label>
          PASSWORD
          <input
            type="password"
            disabled={isPending}
            placeholder="PASSWORD"
            {...register("password")}
          />
        </label>
        {errors.password && (
          <span className={style.error}>{errors.password?.message}</span>
        )}

        <div className={style.buttonContainer}>
          <button disabled={isPending} type="submit">
            LOGIN
          </button>
          <Link href="/signup">SIGN UP</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
