import "./forgotpassword.css";

export default function ForgotPassword() {
    return(
        <div className="forgot_container">
            <div className="all_forgot_container">
                <div className="forgot_left">
                    <div className="forgot_right_text">
                        <p className="forgot_main_right_text">THE WORLD IS A BOOK AND THOSE WHO DON'T TRAVLE READ ONLY ONE PAGE</p>
                        <p className="forgot_right_sub_text">Travel is a brutality. It forces you to trust strangers and to 
                        lose sight of all that familiar comforts of home and friends. Nothing is yours except the essential 
                        things. Air, sleep, dream the sea, the sky-all things tending towards the eternal or what we imagine of it.</p>
                        <p className="forgot_right_auoth_text">-Cesare Pavese-</p>
                    </div>
                </div>
                <div className="forgot_right">
                    <h1 className="forgot-main_text">Forgot Password</h1> 
                    <div>
                        <p className="text1">Did someone forget this password</p>
                        <p className="text2">That's Ok...</p>
                        <p className="text3">Just enter the email address you've used to 
                            <br/>register with use and we'll send you a rest link
                        </p>
                    </div>
                    <form className="forgot_form_container">
						<input
							type="text"
                            className="forgot_input"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="forgot_btn">
							Reovery Password
					    </button>  
					</form>
                </div>    
            </div>
        </div>
    )
}