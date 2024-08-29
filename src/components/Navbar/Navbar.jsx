import navbarLinks from "./NavbarLinks.json";
import NavbarLinks from "./NavbarLinks";
import { useState, useEffect, useCallback } from "react";
import MobileNavbarLinks from "./MobileNavbarLinks";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

  return (
    <>
      <nav
        className={`bg-white flex w-dvw justify-center content-center shadow shadow-gray-300 sticky top-0 z-50 ${
          isVisible ? "" : "-translate-y-full"
        } transition-all`}
      >
        <div className="max-w-screen-xl w-dvw flex justify-between items-center flex-wrap px-4 py-4 lg:py-0">
          <Logo />
          <NavbarLinks links={navbarLinks} />
          <button
            type="button"
            className="rounded font-medium text-white text-sm inline-flex lg:hidden self-center"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <img
              loading="lazy"
              src="/assets/svg-icons/menu-fries.svg"
              width={36}
              height={36}
            />
          </button>
          <LoginButton />
        </div>
      </nav>
      <MobileNavbarLinks
        links={navbarLinks}
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />
    </>
  );
}

function Logo() {
  return (
    <div className="text-2xl">
      <a href="#" className="inline-block">
        <img
          loading="lazy"
          src="/assets/images/TP-logo.png"
          className="inline-block"
          alt="Tyre plex"
          height={200}
        />
      </a>
    </div>
  );
}

function LoginButton() {
  return (
    <div className="hidden lg:flex">
      <button
        type="button"
        className="rounded bg-accent font-medium py-1.5 text-white px-3 text-xs hover:bg-neutral-700 inline-flex gap-2 items-center shadow"
      >
        <img
          loading="lazy"
          src="/assets/svg-icons/user-circle-white.svg"
          width={16}
          height={16}
          alt="user icon"
        />
        Login
      </button>
    </div>
  );
}
