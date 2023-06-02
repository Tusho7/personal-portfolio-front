import { CodeImg } from "../styles/Home-Styles/CodeImg";
import { CodeImgContainer } from "../styles/Home-Styles/CodeImgContainer";
import { AboutSkills } from "../styles/Skills/AboutSkills";
import { LogoAndTitleContainer } from "../styles/Skills/LogoAndTitleContainer";
import { LogosContainer } from "../styles/Skills/LogosContainer";
import { SkillsAndExperience } from "../styles/Skills/SkillsAndExperience";
import { SkillsAndExperienceContainer } from "../styles/Skills/SkillsAndExperienceContainer";
import { StyledComponentsTitleContainer } from "../styles/Skills/StyledComponentsTitleContainer";
import { Svg } from "../styles/Skills/Svg";
import { VisitLinkedin } from "../styles/Skills/VisitLinkedin";
import { SpheroSmall } from "../styles/Skills/SpheroSmall";
import CodeLogo from "../assets/code-logo.svg";
import SpheroSm from "../assets/sphere_sm.png"


function Skills() {
  return (
    <>
    
    
    <div>
        <SkillsAndExperienceContainer>

      <SkillsAndExperience>
        <span>S</span>
        <span>k</span>
        <span>i</span>
        <span>l</span>
        <span>l</span>
        <span>s</span>
        <span> </span>
        <span>&</span>
        <span> </span>
        <span>E</span>
        <span>x</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>e</span>
        <span>n</span>
        <span>c</span>
        <span>e</span>
</SkillsAndExperience>
      <AboutSkills>
        HTML, CSS, JS, SASS, REACT, TYPESCRIPT, STYLED-COMPONENTS, NODEJS, GIT,
        VISUAL STUDIO, FIGMA,{" "}
      </AboutSkills>
      <VisitLinkedin>Visit my <a href="https://www.linkedin.com/in/sandro-tushurashvili/" target="_blank"><span>LinkedIn</span></a> for more details.</VisitLinkedin>
        </SkillsAndExperienceContainer>

      <LogosContainer>
        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="html">
            <path
              fill="aliceblue"
              d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
            ></path>
          </Svg>
          <p>HTML</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="css">
            <path
              fill="aliceblue"
              d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
            ></path>
          </Svg>
          <p>CSS</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="js">
            <path
              fill="aliceblue"
              d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
            ></path>
          </Svg>
          <p>JAVASCRIPT</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="sass">
            <path
              fill="aliceblue"
              d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
            ></path>
          </Svg>
          <p>SASS</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="react">
            <path
              fill="aliceblue"
              d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
            ></path>
          </Svg>
          <p>REACT</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="typescript"
          >
            <path
              fill="aliceblue"
              d="M23.25,24H0.75C0.336,24,0,23.664,0,23.25V0.75C0,0.336,0.336,0,0.75,0h22.5C23.664,0,24,0.336,24,0.75v22.5C24,23.664,23.664,24,23.25,24z M1.5,22.5h21v-21h-21V22.5z"
            ></path>
            <path
              fill="aliceblue"
              d="M13.232,12.5h-7.5c-0.414,0-0.75-0.336-0.75-0.75S5.318,11,5.732,11h7.5c0.414,0,0.75,0.336,0.75,0.75S13.646,12.5,13.232,12.5z"
            ></path>
            <path
              fill="aliceblue"
              d="M9.482 22c-.414 0-.75-.336-.75-.75v-9.436c0-.414.336-.75.75-.75s.75.336.75.75v9.436C10.232 21.664 9.896 22 9.482 22zM18.25 22c-1.289 0-2.469-.602-3.08-1.569-.221-.351-.116-.813.234-1.035.349-.22.813-.116 1.034.234.333.528 1.044.87 1.811.87 1.084 0 2-.687 2-1.5 0-.736-.746-1.336-2.218-1.782C15.916 16.575 14.75 15.433 14.75 14c0-1.654 1.57-3 3.5-3 .677 0 1.334.165 1.9.478.363.199.495.656.294 1.019-.199.363-.656.495-1.019.294-.344-.189-.751-.29-1.175-.29-1.084 0-2 .687-2 1.5 0 .965 1.39 1.531 2.218 1.782 2.713.823 3.282 2.204 3.282 3.218C21.75 20.654 20.18 22 18.25 22z"
            ></path>
          </Svg>
          <p>TYPESCRIPT</p>
        </LogoAndTitleContainer>
        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="nodejs">
            <path
              fill="aliceblue"
              d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
            ></path>
          </Svg>
          <p>NODE</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg
            width="335"
            height="335"
            enableBackground="0 0 24 24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/Svg"
            id="styled-components"
          >
            <path
              d="M16.214 6.76196L16.139 7.15296C16.023 7.89396 16.065 8.10596 16.383 8.38096L16.69 8.63496L16.372 10.053C16.182 10.899 15.949 11.608 15.801 11.841C15.674 12.042 15.526 12.338 15.494 12.497C15.441 12.687 15.261 12.878 14.986 13.047C14.743 13.185 14.266 13.555 13.928 13.852C13.658 14.095 13.472 14.244 13.371 14.308L13.041 14.569C12.935 14.739 12.875 14.876 12.852 14.98C12.829 15.087 12.842 15.158 12.876 15.21C12.909 15.26 12.966 15.295 13.044 15.317C13.1363 15.3386 13.2314 15.3464 13.326 15.34C13.5401 15.3253 13.7519 15.2878 13.958 15.228C14.028 15.209 14.083 15.191 14.131 15.175C14.205 15.084 14.376 14.912 14.679 14.613C15.483 13.82 15.79 13.386 15.473 13.503C15.356 13.545 15.409 13.439 15.61 13.227C16.034 12.814 16.277 12.19 16.785 10.233C17.187 8.68796 17.187 8.66596 17.483 8.66596C17.622 8.66596 18.015 8.68996 18.015 8.68996V6.76196H17.113H16.214ZM20.053 9.92696C19.989 9.92696 19.883 10.023 19.82 10.129C19.704 10.319 19.841 10.435 21.587 11.525C22.624 12.182 23.46 12.742 23.439 12.785C23.418 12.816 22.571 13.367 21.556 14.002C19.714 15.144 19.704 15.155 19.873 15.388C20.085 15.663 19.873 15.758 22.264 14.266L24 13.155V12.319L22.063 11.123C21.016 10.467 20.106 9.93796 20.053 9.92696ZM3.968 10.044C3.915 10.044 3.005 10.584 1.958 11.229L0 12.425V13.261L1.947 14.478C3.027 15.144 3.937 15.695 3.979 15.695C4.021 15.695 4.106 15.599 4.191 15.483C4.318 15.282 4.211 15.197 2.423 14.065C0.72 12.996 0.54 12.848 0.71 12.732C0.816 12.658 1.62 12.16 2.488 11.621C4.467 10.404 4.361 10.488 4.202 10.234C4.139 10.129 4.032 10.034 3.969 10.044H3.968ZM12.652 10.067C12.36 10.065 11.732 10.51 9.852 12.045C9.771 12.238 9.764 12.371 9.801 12.457C9.825 12.516 9.869 12.557 9.93 12.587C9.99 12.617 10.068 12.635 10.154 12.642C10.325 12.657 10.527 12.63 10.69 12.598L10.8 12.573C10.8377 12.5225 10.8871 12.482 10.944 12.455C11.06 12.391 11.547 11.947 12.034 11.471C12.891 10.603 13.092 10.211 12.743 10.084C12.7144 10.0726 12.6838 10.0668 12.653 10.067H12.652ZM14.848 10.67C14.591 10.677 14.128 10.975 13.335 11.608C12.937 11.931 12.685 12.105 12.55 12.141L12.026 12.555C11.829 12.915 11.8 13.138 11.852 13.261C11.865 13.2913 11.8839 13.3188 11.9076 13.3418C11.9313 13.3648 11.9593 13.3828 11.99 13.395C12.0664 13.4251 12.1479 13.4404 12.23 13.44C12.4263 13.4379 12.6214 13.4093 12.81 13.355C12.9083 13.3286 13.0054 13.2979 13.101 13.263L13.13 13.251L13.183 13.223C13.283 13.094 13.513 12.851 13.801 12.571C14.711 11.693 15.176 11.069 15.081 10.836C15.038 10.723 14.964 10.666 14.848 10.67V10.67ZM12.424 11.75C12.35 11.758 12.184 11.886 11.885 12.148C11.453 12.53 10.982 12.75 10.819 12.652C10.7811 12.6605 10.7431 12.6685 10.705 12.676C10.539 12.709 10.332 12.736 10.147 12.721C10.0598 12.7157 9.9744 12.6943 9.895 12.658C9.82011 12.6237 9.76035 12.5633 9.727 12.488C9.69 12.398 9.69 12.286 9.732 12.143L9.082 12.677L7.611 13.894V15.867L12.431 12.07C12.4301 12.0284 12.4355 11.9869 12.447 11.947C12.484 11.813 12.482 11.745 12.424 11.751V11.75ZM14.498 12.389C14.425 12.389 14.303 12.492 14.108 12.699C13.843 12.982 13.426 13.256 13.205 13.312L13.171 13.33C13.1347 13.3449 13.098 13.359 13.061 13.372C13.001 13.392 12.923 13.416 12.833 13.44C12.653 13.489 12.429 13.534 12.229 13.529C12.1347 13.5288 12.0413 13.5105 11.954 13.475C11.8717 13.441 11.8057 13.3765 11.77 13.295C11.712 13.156 11.735 12.961 11.862 12.684L7.61 16.033V17.238H9.478L13.44 14.126C13.543 14.012 13.698 13.856 13.907 13.661C14.467 13.142 14.594 12.963 14.594 12.698C14.594 12.492 14.571 12.388 14.498 12.388V12.389ZM15.441 14.339L15.102 14.677C14.912 14.857 14.573 15.079 14.341 15.174L14.295 15.194L14.292 15.199L14.282 15.209C14.273 15.216 14.269 15.217 14.262 15.22C14.1694 15.255 14.0753 15.286 13.98 15.313C13.7681 15.3746 13.5502 15.4132 13.33 15.428C13.2259 15.4346 13.1214 15.4255 13.02 15.401C12.932 15.3816 12.8543 15.3303 12.802 15.257C12.754 15.183 12.74 15.084 12.767 14.962C12.7885 14.8751 12.8204 14.7912 12.862 14.712L9.665 17.238H13.917L14.425 16.656C15.123 15.842 15.441 15.26 15.441 14.762V14.339Z"
              fill="aliceblue"
            />
          </Svg>
          <StyledComponentsTitleContainer>
          <p>STYLED</p>
            <p>COMPONENTS</p>
          </StyledComponentsTitleContainer>
        </LogoAndTitleContainer>

      

        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="git">
            <path
              fill="aliceblue"
              d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"
            ></path>
          </Svg>
          <p>GIT</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg viewBox="0 0 128 128" id="visualstudio">
            <path
              fill="aliceblue"
              d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"
            ></path>
          </Svg>
          <p>VISUAL STUDIO</p>
        </LogoAndTitleContainer>

        <LogoAndTitleContainer>
          <Svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="figma"
            role="img"
            xmlns="http://www.w3.org/2000/Svg"
            viewBox="0 0 384 512"
            id="figma"
          >
            <path
              fill="aliceblue"
              d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z"
            ></path>
          </Svg>
          <p>FIGMA</p>
        </LogoAndTitleContainer>
      </LogosContainer>
    </div>


    <CodeImgContainer>
        <CodeImg src={CodeLogo} />
        <SpheroSmall src={SpheroSm} />
      </CodeImgContainer>
    </>
  );
}

export default Skills;
