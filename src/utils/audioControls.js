// React state
import { useRef, useState } from 'react';

export const useAudio = () => {
  const audioRef = useRef(null); // Reference to audio element

  const [isPlaying, setIsPlaying] = useState(false); // State to control play and pause audio

  // Function to play and pause audio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause audio
    } else {
      audioRef.current.play(); // Play audio
    }
    setIsPlaying(!isPlaying); // Ubah state
  };

  return { audioRef, isPlaying, togglePlay };
};
