// Style Component
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__main">
        <CurvedText />
        <h1 className="hero__title">Lilianna & Mikail</h1>
      </div>
      <p className="hero__date">15 Februari 2025</p>
    </section>
  );
}

function CurvedText() {
  return (
    <svg className="hero__svg-curved" xmlns="http://www.w3.org/2000/svg">
      <path id="curve" d="M 50 50 A 250 250 0 0 1 250 50" fill="transparent" />
      <text className="hero__greet">
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          Our Wedding
        </textPath>
      </text>
    </svg>
  );
}
