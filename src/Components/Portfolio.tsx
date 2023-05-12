import { useEffect, useState } from "react";
import AboutLogo from "../assets/about.svg";
import VisitLogo from "../assets/visit-logo.svg"
import JavascriptLogo from "../assets/javascript-logo.jpg";
import { SeeProjectContainer } from "../styles/Portfolio/SeeProjectContainer";
import { Slide } from "../styles/Portfolio/Slide";
import { PortfolioMainContainer } from "../styles/Portfolio/PortfolioMainContainer";
import { Circles } from "../styles/Portfolio/Circles";
import { CirclesContainer } from "../styles/Portfolio/CirclesContainer";
import axios from "axios";
import { DataTypes } from "../types/data-type";
import { GithubLink } from "../styles/Portfolio/GithubLink";
import { Title } from "../styles/Portfolio/Title";
import { Description } from "../styles/Portfolio/Description";
import { Category } from "../styles/Portfolio/Category";
import { Built } from "../styles/Portfolio/Built";
import { CompletedContainer } from "../styles/Portfolio/CompletedContainer";
import { SlideContainer } from "../styles/Portfolio/SlideContainer";
import { MainTitle } from "../styles/Portfolio/MainTitle";
import { ContactMe } from "../styles/Portfolio/ContactMe";
import { SeeProjectsTitle } from "../styles/Portfolio/SeeProjectsTitle";
import { SpheroContainer } from "../styles/Portfolio/SpheroContainer";
import { ProjectImage } from "../styles/Portfolio/ProjectImage";
import { VisitContainer } from "../styles/Portfolio/VisitContainer";
import { VisitContainerLink } from "../styles/Portfolio/VisitContainerLink";
import { IfYouWantSee } from "../styles/Portfolio/IfYouWantSee";
import { JsLogo } from "../styles/Portfolio/JsLogo";


function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [project, setProject] = useState<DataTypes[]>([]);

  const handleSeeProjectsClick = () => {
    setCurrentSlide(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://nice-lime-shark-garb.cyclic.app/api/projects"
      );
      setProject(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <PortfolioMainContainer>
        {currentSlide === 0 && (
          <SpheroContainer>
            <Slide visible={true}>
              <MainTitle>Portfolio & Previous Projects</MainTitle>
              <Description>
                I have built various different projects to fit different aspects
                of the client's business. If you want to see more examples of my
                work than the ones showcased on this site, please{" "}
                <ContactMe
                  href="https://www.linkedin.com/in/sandro-tushurashvili/"
                  target="_blank"
                >
                  {" "}
                  Contact me!
                </ContactMe>
              </Description>
              <SeeProjectContainer>
                <SeeProjectsTitle onClick={handleSeeProjectsClick}>
                  See projects
                </SeeProjectsTitle>
                <img
                  src={AboutLogo}
                  alt="About"
                  onClick={handleSeeProjectsClick}
                  style={{ transform: "rotate(270deg)" }}
                />
              </SeeProjectContainer>
            </Slide>
          </SpheroContainer>
        )}

        {currentSlide === 1 && (
          <Slide visible={true}>
            <SlideContainer>
              <ProjectImage
                src={`https://nice-lime-shark-garb.cyclic.app/images/${
                  project[currentSlide - 1].picture
                }`}
              />
              <Title>{project[currentSlide - 1]?.title}</Title>
              <Description>
                {project[currentSlide - 1]?.description}
              </Description>
              <Category>{project[currentSlide - 1]?.category}</Category>
              <Built>
                <span>Built With:</span> {project[currentSlide - 1]?.built}
              </Built>
              <CompletedContainer>
                <p>{project[currentSlide - 1]?.status}</p>
                <img
                  src={`https://nice-lime-shark-garb.cyclic.app/images/${
                    project[currentSlide - 1].statusImg
                  }`}
                />
              </CompletedContainer>

              <div>
                <VisitContainer>
                  <p>
                    <VisitContainerLink href="https://github.com/Tusho7/audiophile-ecommerce-website-front" target="_blank">
                      View the Code
                    </VisitContainerLink>
                  </p>
                  <img src={VisitLogo} style={{ transform: "rotate(270deg)" }} />
                </VisitContainer>

                <VisitContainer>
                  <p>
                    <VisitContainerLink href="https://audiophile-ecommerce-7e976.firebaseapp.com/" target="_blank" >Visit the App</VisitContainerLink>
                  </p>
                  <img src={VisitLogo} style={{ transform: "rotate(270deg)" }} />
                </VisitContainer>
              </div>
            </SlideContainer>

          </Slide>
        )}

        {currentSlide === 2 && (
          <Slide visible={true}>
            <SlideContainer>
              <ProjectImage
                src={`https://nice-lime-shark-garb.cyclic.app/images/${
                  project[currentSlide - 1].picture
                }`}
              />
              <Title>{project[currentSlide - 1]?.title}</Title>
              <Description>
                {project[currentSlide - 1]?.description}
              </Description>
              <Category>{project[currentSlide - 1]?.category}</Category>
              <Built>
                <span>Built With:</span> {project[currentSlide - 1]?.built}
              </Built>
              <CompletedContainer>
                <p>{project[currentSlide - 1]?.status}</p>
                <img
                  src={`https://nice-lime-shark-garb.cyclic.app/images/${
                    project[currentSlide - 1].statusImg
                  }`}
                />
              </CompletedContainer>

              <div>
                <VisitContainer>
                  <p>
                    <VisitContainerLink href="https://github.com/Tusho7/entertainment-web-app-front" target="_blank">
                      View the Code
                    </VisitContainerLink>
                  </p>
                  <img src={VisitLogo} style={{ transform: "rotate(270deg)" }} />
                </VisitContainer>

                <VisitContainer>
                  <p>
                    <VisitContainerLink href="https://entertainment-web-app-ade77.web.app/" target="_blank" >Visit the App</VisitContainerLink>
                  </p>
                  <img src={VisitLogo} style={{ transform: "rotate(270deg)" }} />
                </VisitContainer>
              </div>
            </SlideContainer>
          </Slide>
        )}

        {currentSlide === 3 && (
          <Slide visible={true}>
            <SlideContainer>
              <ProjectImage
                src={`https://nice-lime-shark-garb.cyclic.app/images/${
                  project[currentSlide - 1].picture
                }`}
              />
              <Title>{project[currentSlide - 1]?.title}</Title>
              <Description>
                {project[currentSlide - 1]?.description}
              </Description>
              <Category>{project[currentSlide - 1]?.category}</Category>
              <Built>
                <span>Built With:</span> {project[currentSlide - 1]?.built}
              </Built>
              <CompletedContainer>
                <p>{project[currentSlide - 1]?.status}</p>
                <img
                  src={`https://nice-lime-shark-garb.cyclic.app/images/${
                    project[currentSlide - 1].statusImg
                  }`}
                />
              </CompletedContainer>

              <div>
                <VisitContainer>
                  <p>
                    <VisitContainerLink href="https://github.com/Tusho7/job-listing-sandro-front" target="_blank">
                      View the Code
                    </VisitContainerLink>
                  </p>
                  <img src={VisitLogo} style={{ transform: "rotate(270deg)" }} />
                </VisitContainer>

                <VisitContainer>
                  <p>
                    <VisitContainerLink href="https://job-listing-601d2.firebaseapp.com/" target="_blank" >Visit the App</VisitContainerLink>
                  </p>
                  <img src={VisitLogo} style={{ transform: "rotate(270deg)" }} />
                </VisitContainer>
              </div>
            </SlideContainer>
          </Slide>
        )}

        {currentSlide === 4 && (
          <Slide visible={true}>
            <IfYouWantSee>
              <div>
                <JsLogo src={JavascriptLogo} />
              </div>
              <p>
                If you want to see more projects visit my{" "}
                <GithubLink href="https://github.com/Tusho7" target="_blank">Github</GithubLink>
              </p>
            </IfYouWantSee>
          </Slide>
        )}
      </PortfolioMainContainer>

      <CirclesContainer>
        <Circles
          active={currentSlide === 0}
          onClick={() => setCurrentSlide(0)}
        ></Circles>
        <Circles
          active={currentSlide === 1}
          onClick={() => setCurrentSlide(1)}
        ></Circles>
        <Circles
          active={currentSlide === 2}
          onClick={() => setCurrentSlide(2)}
        ></Circles>
        <Circles
          active={currentSlide === 3}
          onClick={() => setCurrentSlide(3)}
        ></Circles>
        <Circles
          active={currentSlide === 4}
          onClick={() => setCurrentSlide(4)}
        ></Circles>
      </CirclesContainer>

    </>
  );
}

export default Portfolio;