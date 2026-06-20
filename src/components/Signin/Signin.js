import React from "react";

function Singin( {onRouteChange,isSignedIn} ){
    return(
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center">
        <main className="whitepa4 black-80">
        <form className="whitemeasure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="white f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="white db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="white db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="">
            <input className=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick={()=> {onRouteChange("home");isSignedIn();}}/>
            </div>
            <div className="lh-copy mt3">
            <p href="#0" className="white f6 link dim black db pointer" onClick={()=> onRouteChange("register")}>Register</p>
            </div>
        </form>
        </main>
        </article>

    )
}

export default Singin;