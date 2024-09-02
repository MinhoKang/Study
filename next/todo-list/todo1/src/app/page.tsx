import LoginForm from "@/components/loginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODO LIST",
  description: "TODO LIST",
  openGraph: {
    title: "TODO LIST",
    description: "TODO LIST",
  },
};

export default function Home() {
  return <LoginForm />;
}
