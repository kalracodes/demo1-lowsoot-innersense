import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import img from '../assets/ESG 1.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Authprov, useAuth } from '../contexts/Authcontext';
export function Signin() {
  const { setIsuserloggedin, setToken } = useAuth();
  const Loginschema = Yup.object().shape({
    companymail: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  });
  const [loader, setLoader] = useState(false);

  const { state } = useLocation();
  const [email, setEMail] = useState();
  const [pass, setPass] = useState();
  const [log, setLog] = useState(true);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  const check = async (e) => {
    e.preventDefault();
    console.log('hi');
    const {
      data: { token },
    } = await axios.post(
      'https://emissions-calculator-mc2k.onrender.com/login',
      {
        email: email,
        password: pass,
      }
    );
    console.log(token);
    if (token) {
      setToken(token);
      setIsuserloggedin(true);
      routeChange();
    }
  };
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
              <button type='submit' className='btn-submit' onClick={check}>
                Log In
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
