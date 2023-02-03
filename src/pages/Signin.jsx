import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import img from '../assets/ESG 1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { useAuth } from '../contexts/Authcontext';
export function Signin() {
  const { setIsuserloggedin, setToken } = useAuth();
  const Loginschema = Yup.object().shape({
    companymail: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, setEMail] = useState();
  const [pass, setPass] = useState();
  const from = state?.from?.pathname || '/';
  return (
    <>
      <div>
        <section className='siginpage'>
          <div className='sigin__side'>
            <img src={img} alt='' />
          </div>
          <div className='sigin__container'>
            <div className='sigin__head'>
              <h1 className='sigin__header'>Login</h1>
              {/* <p className='sigin__message'>
                Dont have an account?&nbsp;
                <Link className='link' to='/signup'>
                  Signup
                </Link>
              </p> */}
              <br />
              <br />
            </div>
            <form>
              <input
                type='email'
                value={email}
                onChange={(e) => setEMail(e.target.value)}
                className='input-login'
                placeholder='Email'
              />
              <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className='input-login'
                placeholder='Passsword'
              />
              <button type='submit' className='btn-submit'>
                Log In
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
