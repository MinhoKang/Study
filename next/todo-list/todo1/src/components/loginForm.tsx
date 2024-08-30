"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { login } from "@/actions/login.action";
import { useRouter } from "next/navigation";
import style from "./loginForm.module.css";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(login, null);

  useEffect(() => {
    if (state?.status) {
      router.push(`/todo`);
    }
  }, [state, router]);

  return (
    <div className={style.container}>
      <form action={formAction} className={style.loginForm}>
        <label>
          ID
          <input name="id" required disabled={isPending} placeholder="id" />
        </label>
        <label>
          PASSWORD
          <input
            type="password"
            name="password"
            required
            disabled={isPending}
            placeholder="PASSWORD"
          />
        </label>
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

export default LoginForm;
