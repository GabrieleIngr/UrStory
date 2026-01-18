import Pen from "/src/assets/pen.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-maintext">
        <h2 className="hero-title">
          <Typewriter
            words={["Create your own story..."]}
            loop={1}
            typeSpeed={80}
            delaySpeed={1000}
          />
        </h2>
        <img src={Pen} class="hero-img" alt="Pen" />
      </div>
      <p>
        Select two books and craft a story that draws inspiration from them{" "}
      </p>
    </div>
  );
}

export default Hero;
