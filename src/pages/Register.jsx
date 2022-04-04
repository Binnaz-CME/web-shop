import React from "react";
import { Helmet } from "react-helmet-async";
import RegisterInput from "../components/RegisterInput";
import { userState } from "../stores/auth/atom";
import { useRecoilValue } from "recoil";
import SuccessAlert from "../components/SuccessAlert";

function Register() {
  const user = useRecoilValue(userState);

  return (
    <div>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      {user ? <SuccessAlert /> : <RegisterInput />}
    </div>
  );
}

export default Register;
