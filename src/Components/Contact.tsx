import { ContactContainer } from "../styles/Contact-styles/ContactContainer"
import { ContactTitlesContainer } from "../styles/Contact-styles/ContactTitlesContainer"
import MyGlobe from "./MyGlobe"
import CodeLogo from "../assets/code-logo.svg";
import { CodeLogoContainer } from "../styles/Contact-styles/CodeLogoContainer";
import { CodeImg } from "../styles/Home-Styles/CodeImg";

function Contact() {
  return (
    <ContactContainer>
        <ContactTitlesContainer>

        <p>What would you do if you had a software expert available at your fingertips?</p>
        <p>Want to start new project? Contact me on <a href='https://www.linkedin.com/in/sandro-tushurashvili/' target='_blank'>Linkedin</a>.</p>
        <p>You can also follow me on <a href='https://www.instagram.com/sandrotushurashvili/' target='_blank'>Intagram</a>.</p>
        </ContactTitlesContainer>

        <CodeLogoContainer>
            <CodeImg src={CodeLogo} />
        </CodeLogoContainer>

        <h1>sandrotushurashvili7@gmail.com</h1>
        <MyGlobe/>
    </ContactContainer>
  )
}

export default Contact