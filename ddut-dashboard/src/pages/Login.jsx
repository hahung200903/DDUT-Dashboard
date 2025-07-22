import React from "react";
import dutBackground from "../assets/dut-background.png";
import image from "./image.png";
import inputConfigurator from "./input-configurator.png";
import logo from "./logo.png";
import ngNhP from "./ng-nh-p.svg";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="sign-in-form-desktop-wrapper">
        <div className="sign-in-form-desktop">
          <img
            className="dut-background"
            alt="Dut background"
            src={dutBackground}
          />

          <div className="frame">
            <div className="div">
              <div className="frame-2">
                <div className="UI-unicorn-logo">
                  <img className="logo" alt="Logo" src={logo} />
                </div>

                <div className="text-wrapper">DDUT Dashboard</div>

                <div className="BG-tab-switcher" />
              </div>

              <div className="sign-in-forms">
                <div className="sign-in-form-web">
                  <div className="frame-3">
                    <div className="element">Đăng nhập</div>

                    <div className="frame-4">
                      <div className="frame-5">
                        <div className="input-configurator">
                          <img
                            className="img"
                            alt="Input configurator"
                            src={inputConfigurator}
                          />
                        </div>

                        <div className="input-configurator">
                          <img
                            className="img"
                            alt="Input configurator"
                            src={image}
                          />
                        </div>
                      </div>

                      <div className="frame-6">
                        <div className="switcher-item-left">
                          <div className="switcher">
                            <div className="knob-icon">
                              <div className="knob" />
                            </div>
                          </div>

                          <div className="description">Remember me</div>
                        </div>

                        <div className="description-2">Forgot password?</div>
                      </div>
                    </div>
                  </div>

                  <img className="ng-nhp" alt="Ng nhp" src={ngNhP} />

                  <div className="nav" />
                </div>
              </div>
            </div>

            <div className="frame-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
