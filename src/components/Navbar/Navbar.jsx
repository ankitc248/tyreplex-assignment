import navbarLinks from "./NavbarLinks.json";
import NavbarLinks from "./NavbarLinks";
export default function Navbar() {
  return (
    <nav className="bg-white pt-3 flex w-dvw justify-center content-center shadow shadow-gray-300 relative border-b-1">
      <div className="max-w-screen-xl w-dvw flex justify-between items-center flex-wrap">
        <Logo />
        <NavbarLinks links={navbarLinks} />
        <LoginButton />
      </div>
    </nav>
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
    <div>
      <button
        type="button"
        className="rounded bg-accent font-medium py-2 text-white px-4 mb-2 text-sm hover:bg-black inline-flex gap-2"
      >
        <img
          src="/assets/svg-icons/user-circle-white.svg"
          width={20}
          height={20}
          alt="user icon"
        />
        Login
      </button>
    </div>
  );
}
