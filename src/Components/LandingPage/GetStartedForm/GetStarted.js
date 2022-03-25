import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <div class="fom-container-gs">
            <form id="form-gs" action="" method="get">
                <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </h3>
                <div class="form-input">
                    <input type="email" name="email-gs" id="email-gs" placeholder='Email address' />
                    <button id="submit-btn-gs" type="submit">Get Started</button>
                </div>

            </form>
        </div>
    )
}

export default GetStarted