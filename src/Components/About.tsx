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
      <div>
      <AboutTitle>
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <span> </span>
        <span>I</span>
        <span>'</span>
        <span>m</span>
        <span> </span>
        <span>S</span>
        <span>a</span>
        <span>n</span>
        <span>d</span>
        <span>r</span>
        <span>o</span>
        <span> </span>
        <span>T</span>
        <span>u</span>
        <span>s</span>
        <span>h</span>
        <span>u</span>
        <span>r</span>
        <span>a</span>
        <span>s</span>
        <span>h</span>
        <span>v</span>
        <span>i</span>
        <span>l</span>
        <span>i</span>
        <span> </span>
        <span>W</span>
        <span>e</span>
        <span>b</span>
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
        </AboutTitle>
      <br></br>
      <AboutDescription>Full Stack Developer / Javascript Fan</AboutDescription>
      </div>
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
