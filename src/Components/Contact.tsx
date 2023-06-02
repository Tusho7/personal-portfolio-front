import { ContactContainer } from "../styles/Contact-styles/ContactContainer"
import { ContactTitlesContainer } from "../styles/Contact-styles/ContactTitlesContainer"
import MyGlobe from "./MyGlobe"
import CodeLogo from "../assets/code-logo.svg";
import { CodeLogoContainer } from "../styles/Contact-styles/CodeLogoContainer";
import { CodeImg } from "../styles/Home-Styles/CodeImg";
import { MediaTitle } from "../styles/Contact-styles/MediaTitle";
import hoverAudio from "../assets/hover0.mp3";
import { useState } from "react";

function Contact() {
  const [audio] = useState(new Audio(hoverAudio));


  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const handleClick = () => {
    playAudio();
  };
  return (
    <ContactContainer>
        <ContactTitlesContainer>

        <p>What would you do if you had a software expert available at your fingertips?</p>
        <p>Want to start new project? Contact me on <a href='https://www.linkedin.com/in/sandro-tushurashvili/' target='_blank' onClick={handleClick}>Linkedin</a>.</p>
        <MediaTitle>
          <a href="mailto:sandrotushurashvili7@gmail.com" onClick={handleClick}>
          sandrotushurashvili7@gmail.com</a></MediaTitle>
          <p>Call me at <a href="tel:555 05 00 01" onClick={handleClick}> 555 05 00 01</a></p>
        <p>You can also follow me on <a href='https://www.instagram.com/sandrotushurashvili/' target='_blank' onClick={handleClick}>Intagram</a>.</p>
        </ContactTitlesContainer>

        <CodeLogoContainer>
            <CodeImg src={CodeLogo} />
        </CodeLogoContainer>

        <h1><a href="mailto:sandrotushurashvili7@gmail.com" onClick={handleClick}>sandrotushurashvili7@gmail.com</a></h1>
        <MyGlobe/>
    </ContactContainer>
  )
}

export default Contact