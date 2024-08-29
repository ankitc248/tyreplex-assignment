import { useEffect, useState } from "react";

const MobileNavbarLinks = ({ links, showNavbar, setShowNavbar }) => {
  const [openedDropDownIndex, setOpenedDropDownIndex] = useState(-1);

  if (!showNavbar) return null;

  const closeOtherDropDowns = (index) => {
    setOpenedDropDownIndex(index);
  };

  return (
    <div className="navbar-container fixed w-full sm:w-96 h-full z-50 bg-slate-100 top-0 right-0 overflow-y-auto pb-10 animate-swipe-in-navbar">
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
  );
};

const NavbarHeader = ({ setShowNavbar }) => (
  <div className="flex justify-between p-4 items-start">
    <img src="/assets/images/TP-logo.png" alt="logo" />
    <button
      type="button"
      onClick={() => setShowNavbar(false)}
    >
      <img
        src="/assets/svg-icons/close.svg"
        alt="close"
        width={25}
        height={25}
      />
    </button>
  </div>
);

const NavbarList = ({ links, openedDropDownIndex, closeOtherDropDowns }) => (
  <ul className="">
    {links.map((details, index) => (
      <li
        className="text-sm self-end text-nowrap hover:bg-slate-100 rounded-t relative w-full border-b first:border-t"
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
    className="hover:cursor-pointer font-medium bg-white flex p-4 justify-between"
    target="_blank"
    rel="noopener noreferrer"
  >
    {details.title}
    <img
      src="/assets/svg-icons/chevron-up.svg"
      alt="link"
      width={13}
      height={13}
      className="rotate-90"
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
        className="font-medium bg-white flex p-4 justify-between cursor-pointer"
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
    src={
      showDropDown
        ? "/assets/svg-icons/minus.svg"
        : "/assets/svg-icons/plus.svg"
    }
    alt={showDropDown ? "close" : "open"}
    width={15}
    height={15}
  />
);

const DropDown = ({ details }) => (
  <ul className="flex flex-col animate-swipe-up">
    {details.dropdown.items.map((item, index) => (
      <li
        className="text self-end text-neutral-500 text-nowrap hover:bg-slate-100 rounded-t relative w-full border-b first:border-t last:border-0"
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
    className="hover:cursor-pointer font-medium p-4 py-3 bg-white flex justify-between"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="flex gap-2 text-sm">
      {item.name}
      {item.sticker && (
        <span className="text-xs text-white p-1 bg-accent rounded-sm">
          {item.sticker}
        </span>
      )}
    </span>
    <img
      src="/assets/svg-icons/chevron-up.svg"
      alt="link"
      width={10}
      height={10}
      className="rotate-90 contrast-0"
    />
  </a>
);

const LoginSignUpButtons = () => {
  return (
    <div className="flex p-2 gap-2">
      <button
        type="button"
        className="border-2 flex-1 border-accent bg-accent text-white rounded p-2 text-sm font-medium"
      >
        Login
      </button>
      <button
        type="button"
        className="border-2 flex-1 border-accent text-accent rounded bg-white p-2 text-sm font-medium"
      >
        Signup
      </button>
    </div>
  );
};

export default MobileNavbarLinks;
