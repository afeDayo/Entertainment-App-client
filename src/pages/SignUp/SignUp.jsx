import React, { useState } from "react";
import "./SignUp.css";
import movieicon from "../../assets/Movie.png";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);

  const handleRegisterUser = null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleRegisterUser(data);
  };

  return (
    <div>
      <div className="up-icon">
        <img src={movieicon} alt="movieicon" />
      </div>
      <form className="up-card" action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="up-title">Sign Up</h1>
        <div className="up-in">
          <div className="email-div">
            <input
              type="text"
              placeholder="Email address"
              className={errors.email ? "error" : ""}
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type === "required" ? (
              <span className="cant">Can't be empty</span>
            ) : null}
          </div>
          <div className="pword-div">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className={errors.password ? "error" : ""}
              {...register("password", { required: true })}
            />
            {errors.password && errors.password.type === "required" ? (
              <span className="cant">Can't be empty</span>
            ) : null}
          </div>
          <div className="rpword-div">
            <input
              type={passwordRepeatVisible ? "text" : "password"}
              placeholder="Repeat password"
              className={errors.repeatPassword ? "error" : ""}
              {...register("repeatPassword", { required: true })}
            />
            {errors.repeatPassword &&
            errors.repeatPassword.type === "required" ? (
              <span className="cant">Can't be empty</span>
            ) : null}
          </div>
          <button>Create an account</button>
        </div>
        <div className="up-log">
          <p>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
