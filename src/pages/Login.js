import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";
import SocialLink from "../components/SocialLink";
import ekirsImage from '../images/ekirs.webp';
import Input from "../components/Input";



export default function Login() {
  const navigate = useNavigate();
  const handleNavigateToSignUp = () => {
     navigate('/signup');
  };

  return (
    <section>
      <div className="container">
        <div className="row login--row py-5">
          <div className="login--col1 col-sm-12 col-md-6 col-lg-7 d-flex flex-column justify-content-center align-items-center">
            <div>
              <img src={ekirsImage} className="ekirs--image"/>
            </div>
            <h1>Login to Your Account</h1>
            <p>Login using social networks</p>
            <div className="social-link d-flex flex-row mb-3">
               <SocialLink icon="fa fa-facebook" />
               <SocialLink icon="fa fa-instagram" />
               <SocialLink icon="fa fa-linkedin" />
            </div>
            <div className="w-75 mb-3">
              <form>
                <div className="mb-3"> 
                  <Input
                    type="email"
                    class="form-control rounded-pill py-3"
                    id="email"
                    arial="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="password"
                    class="form-control rounded-pill py-3"
                    id="password"
                    arial="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mb-3 text-center">
                  <Button name="Login" className="bg-primary text-white"  />
                </div>
              </form>
            </div>
          </div>
          <div className="login--col2 d-none d-md-flex flex-column pt-4 text-center col-md-6 col-lg-5 justify-content-center align-items-center ">
            <h2 className="text-white">New Here?</h2>
            <p className="text-white">Sign up and discover a great amount of new opportunities</p>
            <div className="mb-3 text-center w-100">
             <Button name="SignUp" className="bg-white text-dark" onClick={handleNavigateToSignUp} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
