import { useEffect, useRef, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import audioFile from "./assets/default.mp3";

interface AudioPlayerProps {
  src: string;
  isMuted: boolean;
  toggleMute: () => void;
}

function AudioPlayer({ src, isMuted }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return <audio ref={audioRef} src={src} loop />;
}

function App() {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleButtonClick = () => {
    setIsMuted(!isMuted);
    const audioElement = document.getElementsByTagName("audio")[0];
    if (audioElement) {
      if (isMuted) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  };

  return (
    <div>
      <AudioPlayer src={audioFile} isMuted={isMuted} toggleMute={handleToggleMute} />
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <button
        onClick={handleButtonClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          backgroundColor: isMuted ? "black" : "#D440D7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        {isMuted ? "Sound Off" : "Sound On"}
      </button>
    </div>
  );
}

export default App;
