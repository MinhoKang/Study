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
        ID
        <input type="text" name="id" required disabled={isPending} />
      </label>
      <label>
        PASSWORD
        <input type="password" name="password" required disabled={isPending} />
      </label>
      <label>
        PASSWORD CHECK
        <input
          type="password"
          name="passwordCheck"
          required
          disabled={isPending}
        />
      </label>
      <label>
        PHONE NUMBER
        <input name="phoneNumber" required disabled={isPending} />
      </label>
      <div className={style.buttonContainer}>
        <button disabled={isPending}>SIGN UP</button>
        <Link href={"/"}>BACK</Link>
      </div>
    </form>
  );
};

export default Page;
