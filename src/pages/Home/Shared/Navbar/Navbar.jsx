import { useState, useEffect } from "react";
import { Link } from "react-router";
import logo from "../../../../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-5 md:py-7">
      <div className="max-w-342.5 mx-auto px-3.75 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center h-10 md:h-13 transition-opacity hover:opacity-90"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="RemoteRecruit Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/signin"
            className="text-sm font-semibold text-white hover:text-gray-200 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="hover:bg-accent bg-accent-hover text-white hover:text-text px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden relative z-[60] flex h-10 w-10 flex-col items-center justify-center rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`mt-1.5 block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "mt-0 -translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-20 right-0 z-50 flex h-[calc(100vh-5rem)] w-[300px] max-w-[85vw] flex-col rounded-bl-2xl border-l border-white/10 bg-[linear-gradient(180deg,#12335f_0%,#0b2a4a_100%)] shadow-[-8px_0_32px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
     

        <nav className="flex flex-1 flex-col gap-2 p-5">
          <Link
            to="/signin"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-[var(--color-accent)] px-4 py-3.5 text-center text-base font-bold text-[var(--color-btn)] shadow-sm transition-all hover:brightness-105 active:scale-[0.98]"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
