import { useState, useEffect } from "react";
import { sendRequest } from "../../util/util";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(() => {
    return {
      userEmail: "",
      userPassword: "",
      errorInfo: {
        error: false,
        msg: "",
      },
    };
  });

  return (
    <form
      onSubmit={(event) =>
        handleSubmitLoginForm(event, loginForm, setLoginForm, navigate)
      }
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

        {loginForm.errorInfo.error && (
          <p className="text-sm text-red-600 font-normal">
            {loginForm.errorInfo.msg}
          </p>
        )}
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

async function handleSubmitLoginForm(event, loginForm, setLoginForm, navigate) {
  event.preventDefault();

  try {
    const requestData = {
      method: "POST",
      path: "http://localhost:5000/api/v1/user",
      body: loginForm,
    };

    const responseData = await sendRequest(requestData);

    if (!responseData.success) {
      setLoginForm((prevLoginForm) => {
        return {
          ...prevLoginForm,
          errorInfo: { error: true, msg: responseData.msg },
        };
      });
      return;
    }

    return navigate("/");
  } catch (error) {
    console.error(error);

    throw error;
  }
}
