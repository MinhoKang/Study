"use client";

import { useActionState } from "react";
import style from "./login.module.css";
import { login } from "@/actions/login.action";
import Link from "next/link";

const Login = () => {
  const [state, formAction, isPending] = useActionState(login, null);

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

export default Login;
