import "./contact.css";

export default function Contact() {
    return(
        <div>
            <div className="contact_title">
                <h1 >Contact Us</h1>
                <p style={{marginTop: "5px", fontSize:"17px", color: "rgb(66, 66, 66)"}}>Any question or remarks? Jest write us a message!</p>
            </div>
        <div className="contact_container">  
            <div className="all_contact_container">
                <div className="contact_left">
                    <div className="contact_left_text">
                       <h2>Contact Infromation</h2>
                       <p style={{marginTop:"10px"}}>Fill up to form and our team will get back to you within 24 hours</p>
                    </div>
                    <div className="c_Icons">
                        <i className="c_Icon fas fa-phone"></i>
                        <i className="c_Icon far fa-envelope"></i>
                        <i className="c_Icon fab fa-twitter"></i>
                        <i className="c_Icon fab fa-instagram"></i>
                    </div>
                    <div className="infor_icons">
                        <i className="infor_Icon">+94 77 852 7896</i>
                        <i className="infor_Icon"> wanderer@gmail.com</i>
                        <i className="infor_Icon">http://twitter.com/wanderer</i>
                        <i className="infor_Icon">@wanderer</i>
                    </div>
                </div>
                <div className="contact_right">
                    <form className="contact_form_container">
                        <label className="lable1">Name</label>
						<input
							type="text"
                            className="contact_input"
                            placeholder="Name"
                        />
                        <label className="lable1">Email</label>
                        <input
							type="text"
                            className="contact_input"
                            placeholder="Email"
						/>
                        <label className="lable3">What can we help you with? </label>
						<textarea
							type="text"
                            className="contact_input_message"
                            placeholder="Message"
                        />
                        <button type="submit" className="contact_btn">
							Submit
					    </button>  
					</form>
                </div>    
            </div>
        </div>
        </div>
    )
}