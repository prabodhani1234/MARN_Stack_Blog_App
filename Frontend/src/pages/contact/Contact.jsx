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
                        <label className="lable2">Email</label>
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