import React, {useState} from 'react';
import axios from 'axios';

function Signin({loadUser, onRouteChange}) {

const [ emailsignin, setEmailsignin ] = useState('');
const [ passwordsignin, setPasswordsignin ] = useState('');


const onSubmitSignin = () => {
    axios.post('https://evening-reaches-94247.herokuapp.com/signin', {
      email: emailsignin,
      password: passwordsignin
    })
    .then(user => {
      if(user.data.id){
        console.log(user)
        onRouteChange('home');
        loadUser(user.data);
      }
      }
    )
    .catch(function (error) {
      console.log(error);
    });  
}

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={(e) => setEmailsignin(e.target.value)}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPasswordsignin(e.target.value)}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onSubmitSignin}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={()=>onSubmitSignin('register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }


export default Signin;