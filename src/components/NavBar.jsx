import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex justify-between overflow-hidden items-center">
      <Logo />
      <NavLink isHamOpen={open} />
      <HamMenu onHandleClick={handleClick} isHamOpen={open} />
    </div>
  );
}

function Logo() {
  return (
    <a href="#">
      <img src="logo1.png " alt="logo" className="w-25 brightness-60" />
    </a>
  );
}
function NavLink({ isHamOpen }) {
  return (
    <nav>
      <ul
        className={`flex md:gap-5 gap-15 md:translate-x-0 md:opacity-100 md:visible md:pointer-events-auto md:flex-row md:static md:bg-transparent w-full h-full flex-col z-10 absolute top-0 left-0 justify-center items-center delay-500 transition-all bg-green-500 ${
          isHamOpen ? "translate-x-0" : "-translate-x-[100%] "
        }`}
      >
        <li>
          <a href="#" className="nav-list-anchor">
            Home
          </a>
        </li>
        <li>
          <a href="#about-us" className="nav-list-anchor text-w">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="nav-list-anchor">
            Services
          </a>
        </li>
        <li>
          <a href="#galley" className="nav-list-anchor">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact-us" className="nav-list-anchor">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

function HamMenu({ onHandleClick, isHamOpen }) {
  const color = isHamOpen ? "#fff" : "#00c950";
  return (
    <>
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onHandleClick}
        className="md:hidden relative z-10"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0" />

        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 18L20 18"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </>
  );
}
