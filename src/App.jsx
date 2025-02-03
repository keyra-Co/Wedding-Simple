// Styles Global
import './styles/css-reset.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import './styles/global.css';
import './styles/index.css';
import './styles/animation.css';

// Components
import Header from './components/header/Header';
import Divider from './components/divider/Divider';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import Audio from './components/music/Audio';

// Utils
import { useEffect } from 'react';
import { useToggle } from './utils/useToggle';
import { useAudio } from './utils/audioControls';
// import { useLocation } from 'react-router-dom';

function App() {
  // Toggle for open the header
  const { toggle, handleToggle } = useToggle();

  // State to toggle music audio
  const { audioRef, isPlaying, togglePlay } = useAudio();

  // Make slider efect when toggle in header is open
  useEffect(() => {
    toggle && document.body.classList.remove('no-scroll');
    window.scrollTo(0, 0);
  }, [toggle]); // the effect only execute when toggle change

  // const location = useLocation();
  let name = 'wedding guest'; // Default value

  // try {
  //   const params = new URLSearchParams(location.search);
  //   name = params.get('name') || name;
  // } catch (error) {
  //   console.error('Error parsing query parameters:', error);
  // }

  return (
    <>
      <Header isOpen={toggle} onOpen={handleToggle} onPlay={togglePlay} name={name} />
      <Divider />
      <Main />
      <Footer />
      <Modal />
      <Audio onPlay={togglePlay} audioRef={audioRef} isPlaying={isPlaying} />
    </>
  );
}

export default App;
