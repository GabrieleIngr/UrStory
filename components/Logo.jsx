import Booklogo from "/src/assets/icon-book.png";

function Logo() {
  return (
    <div className="logo">
      <img src={Booklogo} class="logo-img" alt="UrStory book logo" />
      <h1>URstory</h1>
    </div>
  );
}

export default Logo;
