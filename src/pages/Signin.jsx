import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { useAuth } from "../contexts/Authcontext";
export function Signin() {
  const { setIsuserloggedin, setToken } = useAuth();
  const Loginschema = Yup.object().shape({
    companymail: Yup.string()
      .email("Invalid email address")
      .required("Required"),
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";
  return (
    <>
      <div>
        <section className="siginpage">
          <div className="sigin__side"></div>
          <div className="sigin__container">
            <div className="sigin__head">
              <h1 className="sigin__header">Login</h1>
              <p className="sigin__message">
                Dont have an account?&nbsp;
                <Link className="link" to="/signup">
                  Signup
                </Link>
              </p>
            </div>
            <Formik
              validationSchema={Loginschema}
              initialValues={{
                companymail: "",
              }}
              onSubmit={async (values) => {
                // await new Promise((r) => setTimeout(r, 500));
                // console.log(values);
                // values.companymail
                try {
                  setLoader(true);
                  const response = await axios.post(
                    "https://productdemo.yogeshpendse.repl.co/getaccess",
                    {
                      email: values.companymail,
                    }
                  );
                  if (response.status === 200) {
                    localStorage.setItem(
                      "login",
                      JSON.stringify({
                        clienttoken: values.companymail,
                        loginstatus: true,
                      })
                    );
                    setToken(values.companymail);
                    setIsuserloggedin(true);
                    navigate(from);
                  }
                } catch (error) {
                  toast.error("Some error occured", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                } finally {
                  setLoader(false);
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className="sigin__form">
                  <div className="sigin__formonsite">
                    <div>
                      <Field
                        id="email"
                        name="companymail"
                        required={true}
                        className="sigin__input sigin__inputdemo"
                        placeholder="email"
                        type="email"
                      />
                      <span className="color-red">
                        <ErrorMessage name="companymail" />
                      </span>
                    </div>
                    <button type="submit" className="sigin__button">
                      Login
                      {loader && (
                        <span className="spin__loader-new spin__rotate"></span>
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </>
  );
}
