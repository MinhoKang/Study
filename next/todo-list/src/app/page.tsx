"use client";

import Link from "next/link";
import style from "./page.module.css";
import { useActionState } from "react";
import { login } from "@/actions/login.action";

export default function Home() {
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
}
