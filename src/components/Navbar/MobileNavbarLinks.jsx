import { useEffect, useState } from "react";

const MobileNavbarLinks = ({ links, showNavbar, setShowNavbar }) => {
  const [openedDropDownIndex, setOpenedDropDownIndex] = useState(-1);

  // if (!showNavbar) return null;

  const closeOtherDropDowns = (index) => {
    setOpenedDropDownIndex(index);
  };

  return (
    <div>
      <div
        className={`${
          !showNavbar ? "hidden" : ""
        } fixed w-full h-full z-40 bg-black bg-opacity-50 top-0 pointer-events-none`}
      ></div>
      <div
        className={`fixed w-80 sm:w-96 h-full z-50 bg-neutral-800 top-0 ${
          showNavbar ? "right-0" : "-right-full"
        } overflow-y-auto pb-10 shadow-left transition-all`}
      >
        <div className="flex flex-col">
          <NavbarHeader setShowNavbar={setShowNavbar} />
          <LoginSignUpButtons />
          <NavbarList
            links={links}
            openedDropDownIndex={openedDropDownIndex}
            closeOtherDropDowns={closeOtherDropDowns}
          />
        </div>
      </div>
    </div>
  );
};

const NavbarHeader = ({ setShowNavbar }) => (
  <div className="flex justify-between p-4 py-0 my-3 items-center">
    <img
      loading="lazy"
      src="/assets/images/TP-logo.png"
      alt="logo"
      width={100}
      className="bg-white p-2 rounded-sm"
    />
    <button type="button" onClick={() => setShowNavbar(false)}>
      <img
        loading="lazy"
        src="/assets/svg-icons/exit.svg"
        alt="close"
        className="invert"
        width={25}
        height={25}
      />
    </button>
  </div>
);

const NavbarList = ({ links, openedDropDownIndex, closeOtherDropDowns }) => (
  <ul className="mt-2">
    {links.map((details, index) => (
      <li
        className="text-sm self-end text-nowrap rounded-t relative w-full border-b first:border-t border-neutral-700"
        key={index}
      >
        {details.link ? (
          <ExternalLink details={details} />
        ) : (
          <LinkWithDropdown
            details={details}
            id={index}
            closeOtherDropDowns={closeOtherDropDowns}
            dropdownFlag={openedDropDownIndex === index}
          />
        )}
      </li>
    ))}
  </ul>
);

const ExternalLink = ({ details }) => (
  <a
    href={details.link}
    className="hover:cursor-pointer font-medium bg-neutral-800 text-white flex p-4 justify-between"
    target="_blank"
    rel="noopener noreferrer"
  >
    {details.title}
    <img
      loading="lazy"
      src="/assets/svg-icons/chevron-up.svg"
      alt="link"
      width={13}
      height={13}
      className="rotate-90 invert"
    />
  </a>
);

const LinkWithDropdown = ({
  details,
  closeOtherDropDowns,
  id,
  dropdownFlag,
}) => {
  const [showDropDown, setShowDropDown] = useState(dropdownFlag);

  useEffect(() => {
    setShowDropDown(dropdownFlag);
  }, [dropdownFlag]);

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
    closeOtherDropDowns(id);
  };

  return (
    <div>
      <span
        className="font-medium bg-neutral-800 text-white flex p-4 justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        {details.title}
        <DropdownIcon showDropDown={showDropDown} />
      </span>
      {details.dropdown && showDropDown && <DropDown details={details} />}
    </div>
  );
};

const DropdownIcon = ({ showDropDown }) => (
  <img
    loading="lazy"
    src={
      showDropDown
        ? "/assets/svg-icons/minus.svg"
        : "/assets/svg-icons/plus.svg"
    }
    className="invert"
    alt={showDropDown ? "close" : "open"}
    width={15}
    height={15}
  />
);

const DropDown = ({ details }) => (
  <ul className="flex flex-col animate-swipe-up">
    {details.dropdown.items.map((item, index) => (
      <li
        className="text self-end text-neutral-100 bg-neutral-700 text-nowraprounded-t relative w-full border-b first:border-t last:border-0 border-neutral-500"
        key={index}
      >
        <DropdownItem item={item} />
      </li>
    ))}
  </ul>
);

const DropdownItem = ({ item }) => (
  <a
    href={item.link}
    className="hover:cursor-pointer font-medium p-4 py-3 bg-neutral-700 flex justify-between"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="flex gap-2 text-sm">
      {item.name}
      {item.sticker && (
        <span className="text-xxs uppercase text-white px-2 bg-accent rounded-sm font-medium">
          {item.sticker}
        </span>
      )}
    </span>
    <img
      loading="lazy"
      src="/assets/svg-icons/chevron-up.svg"
      alt="link"
      width={10}
      height={10}
      className="rotate-90 invert"
    />
  </a>
);

const LoginSignUpButtons = () => {
  return (
    <div className="flex p-2 gap-2">
      <button
        type="button"
        className="border-2 flex-1 border-accent bg-accent text-white rounded p-2 text-sm font-medium shadow shadow-neutral-950"
      >
        Login
      </button>
      <button
        type="button"
        className="border-2 flex-1 border-accent text-accent rounded bg-neutral-200 p-2 text-sm font-medium shadow shadow-neutral-950"
      >
        Signup
      </button>
    </div>
  );
};

export default MobileNavbarLinks;
