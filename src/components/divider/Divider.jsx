// Style Component
import './Divider.css';

export default function Divider() {
  return (
    <div className="divider" aria-label="divider">
      <h2 className="divider__title">The Wedding Of Lilianna & Mikail</h2>
      <div className="divider__scroll-container scrollDown">
        <div className="divider__scroll-title">Scroll Kebawah</div>
        <DividerArrow />
      </div>
    </div>
  );
}

function DividerArrow() {
  return (
    <div className="divider__arrow-container">
      <i className="bi bi-caret-down"></i>
      <i className="bi bi-caret-down-fill"></i>
      <i className="bi bi-caret-down"></i>
    </div>
  );
}
