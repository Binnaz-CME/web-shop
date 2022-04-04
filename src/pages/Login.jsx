import React from "react";
import LoginInput from "../components/LoginInput";
import { useRecoilState, useRecoilValue } from "recoil";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  authState,
  passwordState,
  usernameState,
  userState,
} from "../stores/auth/atom";

function Login() {
  const username = useRecoilValue(usernameState);
  const password = useRecoilValue(passwordState);
  const [token, setToken] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);
  const { fetchData } = useFetch();
  const navigate = useNavigate();

  async function handleLogin() {
    const data = await fetchData({
      method: "post",
      url: "https://k4backend.osuka.dev/auth/login",
      data: {
        username: username,
        password: password,
      },
    });
    setToken(data);

    async function getUser() {
      const userData = await fetchData({
        method: "get",
        url: `https://k4backend.osuka.dev/users/${data.userId}`,
      });
      setUser(userData);
    }
    getUser();
  }

  if (token.token && user && user.role === "admin") {
    navigate("/admin");
  } else if (token.token && user && user.role === "user") {
    navigate("/profile");
  }

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginInput handleLogin={handleLogin} />
    </div>
  );
}

export default Login;
