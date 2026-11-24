import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eagle chat app",
  description: "an chat app",
};

export default function AuthLayout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="bg-green-500 w-full text-center h-16">eagle an app to chat with your friends privately or with group of people</header>
      <div className="flex flex-col flex-1 justify-center items-center gap-y-5 w-full p-5 border-2 border-solid border-black-500">
        {children}
      </div>
      <footer className="bg-green-500 w-full h-16 text-center">created by Ali Samy copyright-2026</footer>
    </div>
  );
}