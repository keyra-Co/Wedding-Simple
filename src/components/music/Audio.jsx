/* eslint-disable react/prop-types */
import './Audio.css';

// Audio image icon
import disc from '../../assets/ornamens/disc.png';

// Audio component for play and pause the music audio
export default function Audio({ onPlay, isPlaying, audioRef }) {
  return (
    <div onClick={onPlay} className="audio-container">
      <img className={`audio-icon ${isPlaying ? 'rotate' : ''}`} src={disc} alt="disc-audio" />
      <audio ref={audioRef} loop>
        <source src="audios/Jaz-Bersamamu_(Official_Lyric_Video)_[TubeRipper.com].opus" type="audio/ogg" />
        <source src="audios/Jaz-Bersamamu_(Official_Lyric_Video).mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
