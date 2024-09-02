"use client";

import { useActionState, useEffect } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { signup, signup2 } from "@/actions/signup.action";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../../types/schema";
import { SignupProps } from "../../../types/types";

const Page = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signup, null);

  const {
    register,
    watch,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = () => {
    const params = getValues();

    signup2(params)
      .then(() => router.push("/"))
      .catch(() => alert("회원가입에 실패 했습니다."));
  };

  useEffect(() => {
    if (state?.status) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>
      <label>
        <div>
          <span>ID</span>
          <input type="text" disabled={isPending} {...register("id")} />
        </div>
        {errors?.id && (
          <span className={style.error}>{errors.id?.message}</span>
        )}
      </label>
      <label>
        <div>
          <span>PASSWORD</span>
          <input
            type="password"
            {...register("password")}
            disabled={isPending}
          />
        </div>
        {errors?.password && (
          <span className={style.error}>{errors.password?.message}</span>
        )}
      </label>
      <label>
        <div>
          <span>PASSWORD CHECK</span>
          <input
            type="password"
            {...register("passwordCheck")}
            disabled={isPending}
          />
        </div>
        {errors?.passwordCheck && (
          <span className={style.error}>{errors.passwordCheck?.message}</span>
        )}
      </label>
      <label>
        <div>
          <span>PHONE NUMBER</span>
          <input {...register("phoneNumber")} disabled={isPending} />
        </div>
        {errors?.phoneNumber && (
          <span className={style.error}>{errors.phoneNumber?.message}</span>
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
