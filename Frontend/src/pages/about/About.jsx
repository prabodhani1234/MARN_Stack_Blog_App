import "./about.css";
export default function About() {
    return(
        <div>
            <h1 className="topic_about">About Us</h1>
            <div className="about_container">
                <div className="all_about_container">
                    <div className="about_left">
                    </div>
                </div> 
                <div className="about_right">
                    <h1 className="about-main_text">Who We Are</h1> 
                    <div>
                        <p className="text1">We are a travel association that seeks out the most unique places in the world.
                        A large group of tourists have joined us now. Our aim is to provide knowledge about the world's most
                         dangerous places to the people who cannot contact us</p>
                    </div> 
                    <button type="submit" className="about_btn">
							Learn More
					</button>   
                </div>
            </div>
            </div>
    )
}