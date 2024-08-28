"use client";

import { useActionState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { signup } from "@/actions/signup.action";

const Page = () => {
  const [state, formAction, isPending] = useActionState(signup, null);


  return (
    <form action={formAction} className={style.formContainer}>
      <label>
        ID
        <input type="text" name="id" required />
      </label>
      <label>
        PASSWORD
        <input type="password" name="password" required />
      </label>
      <label>
        PASSWORD CHECK
        <input type="password" name="passwordCheck" required />
      </label>
      <label>
        PHONE NUMBER
        <input name="phoneNumber" required />
      </label>
      <div className={style.buttonContainer}>
        <button disabled={isPending}>SIGN UP</button>
        <Link href={"/"}>BACK</Link>
      </div>
    </form>
  );
};

export default Page;
