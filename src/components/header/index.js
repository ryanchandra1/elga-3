import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // menggunakan 768px sebagai breakpoint mobile

  return (
    <>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <HeaderDesktop />
      )}
    </>
  );
};

export default Header;