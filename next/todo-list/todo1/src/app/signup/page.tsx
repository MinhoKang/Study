"use client";

import { useActionState, useEffect } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { signup } from "@/actions/signup.action";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signup, null);

  useEffect(() => {
    if (state?.status) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <form action={formAction} className={style.formContainer}>
      <label>
        <div>
          <span>ID</span>
          <input type="text" name="id" required disabled={isPending} />
        </div>
        {state?.error && (
          <span className={style.error}>{state.fieldErrors?.id}</span>
        )}
      </label>
      <label>
        <div>
          <span>PASSWORD</span>
          <input
            type="password"
            name="password"
            required
            disabled={isPending}
          />
        </div>
        {state?.error && (
          <span className={style.error}>{state.fieldErrors?.password}</span>
        )}
      </label>
      <label>
        <div>
          <span>PASSWORD CHECK</span>
          <input
            type="password"
            name="passwordCheck"
            required
            disabled={isPending}
          />
        </div>
        {state?.error && (
          <span className={style.error}>
            {state.fieldErrors?.passwordCheck}
          </span>
        )}
      </label>
      <label>
        <div>
          <span>PHONE NUMBER</span>
          <input name="phoneNumber" required disabled={isPending} />
        </div>
        {state?.error && (
          <span className={style.error}>{state.fieldErrors?.phoneNumber}</span>
        )}
      </label>
      <div className={style.buttonContainer}>
        <button disabled={isPending}>SIGN UP</button>
        <Link href={"/"}>BACK</Link>
      </div>
    </form>
  );
};

export default Page;
