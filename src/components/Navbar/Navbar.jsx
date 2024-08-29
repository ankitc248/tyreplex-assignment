import navbarLinks from "./NavbarLinks.json";
import NavbarLinks from "./NavbarLinks";
import { useState } from "react";
import MobileNavbarLinks from "./MobileNavbarLinks";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <nav className="bg-white pt-3 flex w-dvw justify-center content-center shadow shadow-gray-300 sticky top-0 z-50">
        <div className="max-w-screen-xl w-dvw flex justify-between items-center flex-wrap px-4">
          <Logo />
          <NavbarLinks links={navbarLinks} />
          <button
            type="button"
            className="rounded font-medium text-white mb-2 text-sm inline-flex lg:hidden"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <img src="/assets/svg-icons/menu.svg" width={24} height={24} />
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
        className="rounded bg-accent font-medium py-1.5 text-white px-3 mb-2 text-xs hover:bg-black inline-flex gap-2 items-center"
      >
        <img
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
