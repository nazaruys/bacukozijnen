import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage }) => {
  const [hideTopBar, setHideTopBar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide top bar when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 170);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items now have a name and a slug.
  const navigationItems = [
    { name: 'Kozijnen', slug: 'kozijnen' },
    { name: 'Buitendeuren', slug: 'buitendeuren' },
    { name: 'Rolluiken', slug: 'rolluiken' },
    { name: 'Over ons', slug: 'over-ons' },
    { name: 'Contact', slug: 'contact' }
  ];
  const navigationItemsLeft = navigationItems.slice(0, 3);
  const navigationItemsRight = navigationItems.slice(-2);

  return (
    <header
      className={`sticky top-0 z-50 shadow-md w-full text-white transition-transform duration-300 ${
        hideTopBar ? '-translate-y-10' : 'translate-y-0'
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-base text-sm h-10 flex justify-between items-center md:px-36 px-3 transition-opacity duration-300 ${
          hideTopBar ? 'pointer-events-none' : 'opacity-100'
        }`}
      >
        <a
            className="flex flex-row items-center"
            href="https://maps.app.goo.gl/j2vAT6gt1CsqoBrA7"
            target='_blank'
        >
            <img
              src="/logos/google.png"
              alt="Google logo"
              className="w-4 md:w-6 h-auto mr-3"
            />
            <span>Beoordeling van 5/5</span>
        </a>
        <div className="flex items-center space-x-24">
            <div className="hidden sm:flex items-center space-x-12">
                <div className="flex flex-row items-center text-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    Klantgerichte aanpak
                </div>
                <div className="flex flex-row items-center text-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    Premium kwaliteit kozijnen
                </div>
                <div className="flex flex-row items-center text-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    Montage en inmeetservice
                </div>
            </div>
            <div className="flex items-center space-x-8">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/bacukozijnen/"
                    className="saturate-0 hover:saturate-100 transition-saturate duration-300"
                >
                    <img
                    src="/logos/instagram.webp"
                    alt="Instagram logo – volg BaCu Kozijnen voor inspiratie en projecten"
                    className="w-4 md:w-6 h-auto"
                    />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.tiktok.com/@bacu337"
                    className="saturate-0 hover:saturate-100 transition-saturate duration-300"
                >
                    <img
                    src="/logos/tiktok.webp"
                    alt="TikTok logo – bekijk korte video's van BaCu Kozijnen projecten"
                    className="w-3 md:w-4 h-auto"
                    />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=61570093915942"
                    className="saturate-0 hover:saturate-100 transition-saturate duration-300"
                >
                    <img
                    src="/logos/facebook.webp"
                    alt="Facebook logo – volg BaCu Kozijnen voor nieuws en klantbeoordelingen"
                    className="w-6 md:w-8 h-auto"
                    />
                </a>
            </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div>
        <div className="bg-background flex justify-between items-center md:px-36 py-4 px-4 h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="/logos/BaCu-transparent.png" 
                alt="BaCu Kozijnen full logo – specialist in kozijnen, rolluiken en buitendeuren in Nederland"
                className="w-36 md:w-40 h-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex w-full justify-between items-center">
                {/* Left side navigation */}
                <ul className="flex text-base gap-12 pl-16">
                    {navigationItemsLeft.map((item) => (
                    <li key={item.slug} className="relative group">
                        <a
                        href={`/${item.slug}`}
                        className="block py-1 transition-all"
                        >
                        {item.name}
                        </a>
                        <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all ${
                            currentPage === item.slug ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        ></span>
                    </li>
                    ))}
                </ul>

                {/* Right side navigation + button */}
                <div className="flex items-center gap-16">
                    <ul className="flex text-[#959595] gap-12">
                    {navigationItemsRight.map((item) => (
                        <li key={item.slug} className="relative group">
                        <a
                            href={`/${item.slug}`}
                            className="block py-1 transition-all"
                        >
                            {item.name}
                        </a>
                        <span
                            className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all ${
                            currentPage === item.slug ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                        ></span>
                        </li>
                    ))}
                    </ul>

                    {/* Button */}
                    <a
                        href="#offerte"
                        className="bg-primary text-sm text-white px-6 py-[10px] rounded-4xl transition-all transform duration-500 hover:bg-primaryDark"
                    >
                    Offerte aanvragen
                    </a>
                </div>
            </nav>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-base"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className="md:hidden bg-secondaryBackground overflow-auto transition-all duration-300 ease-in-out"
          style={{ maxHeight: mobileMenuOpen ? '500px' : '0px' }}
        >
          <ul className="flex flex-col text-center text-sm text-base border-b border-secondary">
            {navigationItems.map((item) => (
              <li key={item.slug} className="border-t border-secondary">
                <a
                  href={`/${item.slug}`}
                  className={`block py-3 transition-colors hover:bg-background ${currentPage === item.slug ? 'bg-gray-600' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
