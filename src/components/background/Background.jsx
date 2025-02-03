// Style Component
import './Background.css';

// eslint-disable-next-line react/prop-types
export default function Background({ background, init = '' }) {
  return <img src={background} aria-hidden loading="lazy" className={`background ${init}`} />;
}
