'use client'
import React, { useRef, useState } from 'react';

const Music = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((e) => {
        console.log('Erro ao tentar tocar o áudio:', e);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 md:top-12 md:right-12 md:left-auto md:transform-none z-50 p-2">

      <audio ref={audioRef} src="/assets/sounds/bg-music.mp3" loop />

        <img 
          src={isPlaying ? "/assets/pause-bg.png" : "/assets/play-bg.png"} 
          alt={isPlaying ? "Pause" : "Play"} 
          className="w-[60px] h-[60px] md:w-20 md:h-20 rounded-2xl cursor-pointer"
           onClick={togglePlay}
        />
    </div>
  );
};

export default Music;
