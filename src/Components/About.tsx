import { AboutDescription } from "../styles/About-Styles/AboutDescription";
import { AboutMainContainer } from "../styles/About-Styles/AboutMaincContainer";
import { AboutSecondDescription } from "../styles/About-Styles/AboutSecondDescription";
import { AboutTitle } from "../styles/About-Styles/AboutTitle";
import darkCube from "../assets/dark_cube2.png";
import CodeLogo from "../assets/code-logo.svg";
import { DarkCubeLogo } from "../styles/About-Styles/DarkCubeLogo";
import { CodeImgAbout } from "../styles/About-Styles/CodeImgAbout";
import { LogoContainers } from "../styles/About-Styles/LogoContainers";


function About() {
  return (
    <>
    <AboutMainContainer>
      <AboutTitle>Hi, I'm Sandro Tushurashvili Web Developer</AboutTitle>
      <AboutDescription>Full Stack Developer / Javascript Fan</AboutDescription>
      <AboutSecondDescription>
        Problem solver, well-organised person, loyal employee with high
        attention to detail. Fan of coding.
        <br></br>
        <br></br>
        Interested in the entire fullstack
        spectrum and working on ambitios projects.
      </AboutSecondDescription>
    </AboutMainContainer>

    <LogoContainers>
        <DarkCubeLogo src={darkCube}/>
        <CodeImgAbout src={CodeLogo} />
    </LogoContainers>
    
    </>
  );
}

export default About;
