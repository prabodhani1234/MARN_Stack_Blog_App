import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Travel & Tour</span>
        <span className="headerTitleLg">Amazing Places on Earth</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/4992803/pexels-photo-4992803.jpeg?cs=srgb&dl=pexels-rachel-claire-4992803.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
