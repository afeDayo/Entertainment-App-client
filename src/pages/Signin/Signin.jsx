import React, { useState } from "react";
import "./Signin.css";
import movieicon from "../../assets/Movie.png";
import { useForm } from "react-hook-form";

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="up-icon">
        <img src={movieicon} alt="movieicon" />
      </div>
      <form className="up-card" action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="up-title">Login</h1>
        <div className="up-in">
          <div className="email-div">
            <input
              type="email"
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
          <button>Login to your account</button>
        </div>
        <div className="up-log">
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
