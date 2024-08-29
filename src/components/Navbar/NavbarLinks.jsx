import { useState } from "react";
export default function NavbarLinks({ links }) {
  return (
    <ul className="gap-2 flex-wrap hidden lg:flex">
      {links.map((details, index) => (
        <NavbarLink details={details} key={index} index={index} />
      ))}
    </ul>
  );
}

function NavbarLink({ details, index }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownDirection = index > 3 ? "right-0" : "left-0";

  const handleMouseEnter = () => setShowDropDown(true);
  const handleMouseLeave = () => setShowDropDown(false);

  return (
    <li
      className="text-sm text-nowrap border-b-2 border-transparent hover:bg-slate-100 hover:border-accent rounded-t relative w-auto h-14"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-haspopup={!!details.dropdown}
    >
      {details.link ? (
        <a
          href={details.link}
          className="hover:cursor-pointer font-medium flex h-full p-2 items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          {details.title}
        </a>
      ) : (
        <span className="font-medium flex h-full p-2 items-center">{details.title}</span>
      )}

      {details.dropdown && showDropDown && (
        <DropDownMenu
          details={details.dropdown}
          direction={dropDownDirection}
        />
      )}
    </li>
  );
}

function DropDownMenu({ details, direction }) {
  return (
    <div
      className={`absolute top-[56px] z-10 ${direction} bg-white rounded-b text-sm shadow shadow-gray-300 p-2 w-max animate-swipe-up opacity-0 z-50`}
    >
      {details.dropDownTitle && (
        <span className="inline-block p-3 uppercase w-auto text-xs">
          {details.dropDownTitle}
        </span>
      )}
      <ul
        className={`grid ${
          details.items.length === 1 ? "grid-cols-1" : "grid-cols-2"
        } gap-2`}
      >
        {details.items.map((item, index) => (
          <DropDownItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

function DropDownItem({ item }) {
  return (
    <li className="rounded">
      <a
        href={item.link}
        className="text-inherit p-3 flex justify-between items-center hover:bg-slate-100 rounded hover:cursor-pointer gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.name}
        {item.sticker && (
          <span className="text-xxs uppercase text-white px-1 bg-accent rounded-sm">
            {item.sticker}
          </span>
        )}
      </a>
    </li>
  );
}
