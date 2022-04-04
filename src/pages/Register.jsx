import React from "react";
import { Helmet } from "react-helmet-async";
import RegisterInput from "../components/RegisterInput";

function Register() {
  return (
    <div>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegisterInput />
    </div>
  );
}

export default Register;
