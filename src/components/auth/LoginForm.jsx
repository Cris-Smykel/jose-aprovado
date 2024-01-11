import { useState } from "react";

export default function LoginForm() {
  const [loginForm, setLoginForm] = useState(() => {
    return {
      userEmail: "",
      userPassword: "",
    };
  });

  return (
    <form
      onSubmit={(event) => handleSubmitLoginForm(event, loginForm)}
      noValidate
      className="w-full max-w-96 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="user-email"
          className="font-medium text-primary text-lg"
        >
          Email:
        </label>
        <input
          className="p-2 pr-3 pl-3 text-base text-gray-800 font-normal border border-gray-400 rounded-2xl"
          type="email"
          value={loginForm.userEmail}
          name="userEmail"
          id="user-email"
          formNoValidate
          onChange={(event) => handleLoginInputChange(event, setLoginForm)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="user-password"
          className="font-medium text-primary text-lg"
        >
          Senha:
        </label>
        <input
          className="p-2 pr-3 pl-3 text-base text-gray-800 font-normal border border-gray-400 rounded-2xl"
          type="password"
          value={loginForm.userPassword}
          name="userPassword"
          id="user-password"
          onChange={(event) => handleLoginInputChange(event, setLoginForm)}
        />
      </div>

      <button
        type="submit"
        className="p-3 mt-2 rounded-3xl text-white bg-primary font-semibold text-base hover:bg-blue-500 transition duration-300"
      >
        Log-in
      </button>
    </form>
  );
}

function handleLoginInputChange(event, setLoginForm) {
  const target = event.target;

  setLoginForm((prevLoginForm) => {
    return {
      ...prevLoginForm,
      [target.name]: target.value,
    };
  });
}

function handleSubmitLoginForm(event, loginForm) {
  event.preventDefault();

  console.log("Login Submitted", loginForm);
}
