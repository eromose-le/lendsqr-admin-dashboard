import "./login.scss";
import { assets } from "@/assets/constants";
import { routeEnum } from "@/constants/RouteConstants";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="login">
      <div className="logoContainer">
        <img src={assets.logo} alt="logo" />
      </div>

      <div className="left">
        <div className="loginBgImgContainer">
          <img src={assets.signin_image} alt="sigin_image" />
        </div>
      </div>

      <div className="right">
        <form className="formContainer">
          <div className="header">
            <h1 className="title">Welcome!</h1>
            <p className="subTitle">Enter details to login.</p>
          </div>

          <div className="inputWrapper">
            <div className="inputContainer">
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="inputContainer">
              <input
                className="input"
                type={isShow ? "text" : "password"}
                placeholder="Password"
                required
              />
              <span
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                {isShow ? "hide" : "show"}
              </span>
            </div>

            <h3 className="forgotPassword">forgot password?</h3>
          </div>

          <button
            className="button"
            onClick={() => navigate(routeEnum.DASHBOARD)}
          >
            log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
