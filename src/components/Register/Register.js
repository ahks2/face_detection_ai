import React from "react";

function Register( {onRouteChange} ){
    return(
        <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-6 center">
        <main class="whitepa4 black-80">
        <form class="whitemeasure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="white f2 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
                <label class="white db fw6 lh-copy f6" for="name">Name</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div class="mt3">
                <label class="white db fw6 lh-copy f6" for="email">Email</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="email" name="email"  id="email"/>
            </div>
            <div class="mv3">
                <label class="white db fw6 lh-copy f6" for="password">Password</label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div class="">
            <input class=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={()=> onRouteChange("signin")}/>
            </div>
        </form>
        </main>
        </article>

    )
}

export default Register;