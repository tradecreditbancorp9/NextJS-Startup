"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
const pathname = usePathname();
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
 const [openIndex, setOpenIndex] = useState<number | null>(null);
const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

const handleSubmenu = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
  setOpenSubIndex(null); // Close nested submenus on new top-level open
};

const handleNestedSubmenu = (index: number) => {
  setOpenSubIndex(openSubIndex === index ? null : index);
};
  const usePathName = usePathname();
   const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/trade5.jpg"
                  alt="logo"
                  width={150}
                  height={30}
                  className="w-full h-30 dark:hidden"
                />
                <Image
                  src="/images/logo/trade5.jpg"
                  alt="logo"
                  width={150}
                  height={30}
                  className="hidden w-full  h-30 dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  {/* <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul> */}
                  <ul className="block lg:flex lg:space-x-12">
  {menuData.map((menuItem, index) => (
    <li key={index} className="relative">
      {menuItem.submenu ? (
        <>
          <p
            onClick={() => handleSubmenu(index)}
            className="cursor-pointer flex items-center justify-between py-2 text-base text-dark dark:text-white/70 lg:py-6 hover:text-primary dark:hover:text-white"
          >
            {menuItem.title}
            <svg width="20" height="20" className="ml-2">
              <path
                d="M6 8L12 14L18 8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </p>
          <div
            className={`lg:absolute left-0 top-full z-20 mt-2 w-[250px] rounded-md bg-white dark:bg-dark p-4 shadow-lg ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {menuItem.submenu.map((submenuItem, subIndex) => (
              <div key={submenuItem.id} className="relative">
                {submenuItem.submenu ? (
                  <>
                    <p
                      onClick={() => handleNestedSubmenu(subIndex)}
                      className="cursor-pointer flex justify-between items-center py-2.5 text-sm text-dark dark:text-white/70 hover:text-primary dark:hover:text-white"
                    >
                      {submenuItem.title}
                      <svg width="16" height="16">
                        <path
                          d="M6 4L12 8L6 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </p>
                    <div
                      className={`absolute left-full top-0 z-30 w-[250px] rounded-md bg-white dark:bg-dark p-4 shadow-lg ${
                        openSubIndex === subIndex ? "block" : "hidden"
                      }`}
                    >
                      {submenuItem.submenu.map((child) => (
                        <Link
                          key={child.id}
                          href={child.path || "#"}
                          className="block py-2.5 text-sm text-dark dark:text-white/70 hover:text-primary dark:hover:text-white"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={submenuItem.path || "#"}
                    className="block py-2.5 text-sm text-dark dark:text-white/70 hover:text-primary dark:hover:text-white"
                  >
                    {submenuItem.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <Link
          href={menuItem.path}
          className={`block py-2 text-base text-dark dark:text-white/70 lg:py-6 hover:text-primary dark:hover:text-white`}
        >
          {menuItem.title}
        </Link>
      )}
    </li>
  ))}
</ul>

                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
                >
                  <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
      >
        Sign In / Register  +
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black/10">
          <div className="py-1">
            <Link
              href="/client-portal"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              • Client Portal
            </Link>
            <Link
              href="/apply"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              • Apply for a Service
            </Link>
            <Link
              href="/track"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              • Track Application
            </Link>
          </div>
        </div>
      )}
    </div>
                  
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
                {/* <div>
                  <ThemeToggler />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
