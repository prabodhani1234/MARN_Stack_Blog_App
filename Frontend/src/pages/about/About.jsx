import "./about.css";
export default function About() {
    return(
        <div className="about_container">
            <div className="all_about_container">
                <div className="about_left">
                </div>
                <div className="about_right">
                    <h1 className="about-main_text">Forgot Password</h1> 
                    <div>
                        <p className="text1">Did someone forget this password</p>
                        <p className="text2">That's Ok...</p>
                        <p className="text3">Just enter the email address you've used to 
                            <br/>register with use and we'll send you a rest link
                        </p>
                    </div>
                </div>    
            </div>
        </div>
    )
}