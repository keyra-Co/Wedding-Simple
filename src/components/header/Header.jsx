/* eslint-disable react/prop-types */
// Style Component
import './Header.css';

// Background Component
import Background from '../background/Background';

// Header Component
export default function Header({ isOpen, onOpen, onPlay, name }) {
  // Function to open the header and play the audio
  function onClick() {
    onOpen();
    onPlay();
  }

  return (
    <header className={`header ${isOpen ? 'hide' : ''}`}>
      <Background background={'images/opening.jpg'} init={'bg-header'} />
      <HeaderContent text={'Dear,'}>
        <h3 className="header__guest">{name}</h3>
        <span className="header__greet">You are invited!</span>
      </HeaderContent>
      <HeaderContent text={'to Celebrate the Love Of'}>
        <h1 className="header__title shrink">Lilianna & Mikail</h1>
        <button onClick={onClick} className="btn header__btn-invite">
          <i className="bi bi-envelope-heart"></i>
          Open Invitation
        </button>
      </HeaderContent>
    </header>
  );
}

function HeaderContent({ children, text }) {
  return (
    <div className="header__content shrink normal delay-fast">
      <span className="header__greet">{text}</span>
      {children}
    </div>
  );
}
