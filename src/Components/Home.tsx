import Logo from "../assets/header-logo.svg";
import SecondLogo from "../assets/side-dots.png";
import AboutLogo from "../assets/about.svg";
import CodeLogo from "../assets/code-logo.svg";
import PurpleRombTwo from "../assets/purple_romb2.png";
import { HomeAboutMe } from "../styles/Home-Styles/HomeAboutMe";
import { HomeDescription } from "../styles/Home-Styles/HomeDescription";
import { HomeMainContainer } from "../styles/Home-Styles/HomeMainContainer";
import { HomeTitle } from "../styles/Home-Styles/HomeTitle";
import { HomeTitlesContainer } from "../styles/Home-Styles/HomeTitlesContainer";
import { LogoImg } from "../styles/Home-Styles/LogoImg";
import { SecondLogoContainer } from "../styles/Home-Styles/SecondLogoContainer";
import { SecondLogoImg } from "../styles/Home-Styles/SecondLogoImg";
import { AboutContainer } from "../styles/Home-Styles/AboutContainer";
import { AboutImg } from "../styles/Home-Styles/AboutImg";
import { useState } from "react";
import { CodeImg } from "../styles/Home-Styles/CodeImg";
import { CodeImgContainer } from "../styles/Home-Styles/CodeImgContainer";
import { PurpleRomb } from "../styles/Home-Styles/PurpleRomb";

function Home() {
  const [isAboutImgRotated, setIsImgRotated] = useState(false);

  const handleAboutImgClick = () => {
    setIsImgRotated((prevState) => !prevState);
    console.log(isAboutImgRotated);
  };

  return (
    <>
    
    <HomeMainContainer>
      <div>
        <LogoImg src={Logo} />
      </div>
      <SecondLogoContainer>
        <SecondLogoImg src={SecondLogo} />
      </SecondLogoContainer>

      <HomeTitlesContainer>
        <HomeTitle>
          <span>F</span>
          <span>u</span>
          <span>l</span>
          <span>l</span>
          <span>-</span>
          <span>S</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span> </span>
          <span>S</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>w</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
          <span> </span>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </HomeTitle>
        <HomeDescription>
          Resolving design problems, building smart user interfaces and useful
          interactions, developing rich web applications and seamless web
          experiences.
        </HomeDescription>
        <AboutContainer>
          <HomeAboutMe>About me</HomeAboutMe>
          <AboutImg
            src={AboutLogo}
            onClick={handleAboutImgClick}
            style={{
              transform: isAboutImgRotated ? "rotate(1deg)" : "rotate(-90deg)",
            }}
          />
        </AboutContainer>
      </HomeTitlesContainer>
    </HomeMainContainer>

    <CodeImgContainer>
        <CodeImg src={CodeLogo}/>
        <PurpleRomb src={PurpleRombTwo} />
        </CodeImgContainer>
    </>
  );
}

export default Home;
