import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React Native</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1090977/pexels-photo-1090977.jpeg?cs=srgb&dl=pexels-irina-iriser-1090977.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
