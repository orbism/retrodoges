"use client"; // this is a client component
import "./player.scss";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

export const PlayerRD = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [scrubbing, setScrubbing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [newTime, setNewTime] = useState<number | null>(null); // Add this new state


  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    audio.onended = () => {
      audio.currentTime = 0;
      audio.play();
    };
    
    // Update duration when audio metadata is loaded
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };

    // Update current time every time it changes
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };
  }, [isPlaying, currentTime]); // <-- Add currentTime here

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleScrub = (event: React.MouseEvent<HTMLDivElement>) => {
    scrub(event);
  };

  const handleScrubMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (scrubbing) {
      scrub(event);
    }
  };

  const handleScrubStart = () => {
    setScrubbing(true);
  };

  const handleScrubEnd = () => {
    setScrubbing(false);
  };

  const scrub = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) {
      return;
    }
  
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // get the x position of the click inside element
    const clickedValue = x * audioRef.current.duration / rect.width;
    setNewTime(clickedValue); // Set the newTime state instead of directly changing audio.currentTime
  };

  useEffect(() => {
    if (newTime !== null && audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, [newTime]);
  

  return (
    <div className="music-player">
      <div className={`controls ${isPlaying ? "playing" : ""}`}>
        <div className="play-pause" onClick={handlePlayPause}>
          {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </div>
      </div>
      <div className="text-container">
        <h1 className="label">Feisty Beats!</h1>
        <span className="artist"><a href="https://twitter.com/Maroye" target="_blank">music by Maroye</a></span>
        <div className="scrubber" 
          onMouseDown={handleScrubStart} 
          onMouseMove={handleScrubMove} 
          onMouseUp={handleScrubEnd} 
          onMouseLeave={handleScrubEnd} 
          onClick={handleScrub}>
          <div className="fill" style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}></div>
            <div className="thumb" style={{ left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}></div>

        </div>
      </div>
      <audio src="/maroye.mp3" ref={audioRef} />
    </div>
  );
};
