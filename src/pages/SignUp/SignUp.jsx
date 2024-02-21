import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";
import "./SignUp.css";

const Input = ({ type, placeholder, error, register, name }) => (
  <div className="cant">
    <input
      type={type}
      placeholder={placeholder}
      className={error ? "error" : ""}
      {...register(name, { required: true })}
      aria-label={placeholder}
    />
    {error && error.type === "required" && <span>Can't be empty</span>}
  </div>
);

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);

  const { handleRegisterUser, authenticating } = useAuth();

  const btnText = authenticating ? <Spinner /> : "Create an account";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleRegisterUser(data);
  };

  return (
    <div className="signup">
      <form className="up-form" onSubmit={handleSubmit(onSubmit)} action="">
        <h1 className="up-title">Sign Up</h1>
        <div className="up-input">
          <Input
            type="text"
            placeholder="Email Address"
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
          <Input
            type={passwordRepeatVisible ? "text" : "password"}
            placeholder="Repeat Password"
            error={errors.repeatPassword}
            register={register}
            name="repeatPassword"
          />
          <button disabled={authenticating}>{btnText}</button>
        </div>
        <div className="already">
          <p className="mb-0">Already have an account?</p>
          <Link to="/signin">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
