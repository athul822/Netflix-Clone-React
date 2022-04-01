import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <div class="fom-container-gs col-12 col-md-10 text-center">
            <form id="form-gs" action="" method="get">
                <h4>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </h4>
                <div class="form-input">
                    <input className='col-12 col-md-6' type="email" name="email-gs" id="email-gs" placeholder='Email address' />
                    <button className='col-6 p-1 col-md-2 mt-3 mt-md-0' id="submit-btn-gs" type="submit">Get Started</button>
                </div>

            </form>
        </div>
    )
}

export default GetStarted