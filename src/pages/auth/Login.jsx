import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <div>
      <div className="max-w-4xl flex m-auto flex-col items-center justify-center min-h-screen p-2">
        <article className="p-3 bg-white pt-20 pb-20 rounded-lg w-full max-w-xl flex flex-col gap-6 items-center">
          <h1 className="text-3xl text-primary font-bold">Log-in</h1>
          <LoginForm />
        </article>
      </div>
    </div>
  );
}
