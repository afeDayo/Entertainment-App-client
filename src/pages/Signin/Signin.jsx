import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";
import "./Signin.css";

const Input = ({ type, placeholder, error, register, name }) => (
  <div className="cant">
    <input
      type={type}
      placeholder={placeholder}
      className={error ? "error" : ""}
      {...register(name, { required: true })}
    />
    {error && error.type === "required" && <span>Can't be empty</span>}
  </div>
);

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleSignInUser, authenticating } = useAuth();

  const btnText = authenticating ? <Spinner /> : "Login to your account";

  const onSubmit = (data) => {
    handleSignInUser(data);
  };

  return (
    <div className="signin">
      <form className="in-form" onSubmit={handleSubmit(onSubmit)} action="">
        <h1 className="in-title">Login</h1>
        <div className="in-input">
          <Input
            type="text"
            placeholder="Email address"
            error={errors.email}
            register={register}
            name="email"
          />
          <Input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            error={errors.password}
            register={register}
            name="password"
          />

          <button disabled={authenticating}>{btnText}</button>
        </div>
        <div className="dont">
          <p className="mb-0">Don't have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
