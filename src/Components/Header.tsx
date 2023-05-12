import { Button } from "../styles/Header-Styles/Button";
import { HeaderContainer } from "../styles/Header-Styles/HeaderContainer";
import { HeaderLogo } from "../styles/Header-Styles/HeaderLogo";
import { HeaderMainContainer } from "../styles/Header-Styles/HeaderMainContainer";
import { HeaderTitle } from "../styles/Header-Styles/HeaderTitle";

function Header() {

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };
  

  return (
    <HeaderMainContainer>
      <HeaderContainer>
        <HeaderLogo
          src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 90 71' width='99' height='99'><path d='M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z' fill='%23ffffff' /></svg>"
          onClick={handleLogoClick}
        />
        <HeaderTitle onClick={handleLogoClick}>DVLPR</HeaderTitle>
      </HeaderContainer>

      <Button onClick={handleContactClick}>Contact</Button>
    </HeaderMainContainer>
  );
}

export default Header;
