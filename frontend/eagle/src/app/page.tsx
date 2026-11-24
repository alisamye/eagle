import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="bg-green-500 w-full text-center h-16">eagle an app to chat with your friends privately or with group of people</header>
      <div className="flex flex-col flex-1 justify-center items-center gap-y-5 w-full p-5 border-2 border-solid border-black-500">
        <Link href="/auth/register" className="bg-blue-500 w-1/5 p-5">Create a new account</Link>
        <Link href="/auth/login" className="bg-red-500 w-1/5 p-5">log in</Link>
        <div className="flex-1">welcome to eagle</div>
      </div>
      <footer className="bg-green-500 w-full h-16 text-center">created by Ali Samy copyright-2026</footer>
    </div>
  );
}
