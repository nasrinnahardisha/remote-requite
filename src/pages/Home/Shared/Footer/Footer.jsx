import { Link } from "react-router";
import logo from "../../../../assets/Logo.svg";
import RRlogo from "../../../../assets/RR.svg";

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/remoterecruit",
    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/remoterecruit",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "X",
    href: "https://x.com/remoterecruit",
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/remoterecruit",
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    name: "Snapchat",
    href: "https://www.snapchat.com/add/remoterecruit",
    d: "M12 2c-3.9 0-6 2.5-6 5.5 0 1 .5 2 1 2.5-.5.5-1 1.5-1 2.5 0 2.5 2.5 3 3.5 3.5-.5 1-1.5 2.5-4 2.5-.5 0-1 .5-1 1s2.5 1.5 6.5 1.5 6.5-1 6.5-1.5-.5-1-1-1c-2.5 0-3.5-1.5-4-2.5 1-.5 3.5-1 3.5-3.5 0-1-.5-2-1-2.5.5-.5 1-1.5 1-2.5C18 4.5 15.9 2 12 2z",
  },
];

const Footer = () => {
  return (
    <footer className="relative h-auto xl:h-[570px]  w-full text-white overflow-hidden bg-[linear-gradient(132deg,_#336DA6_6.87%,_#1E3E85_106.04%)] [clip-path:path('M_0_8_Q_450_-20,_990_123_T_3750_208_L_1920_600_L_0_600_Z')]">
      <div className="absolute top-[-148px] right-[87px] w-[524px] h-[524px] rounded-full bg-white/[0.02] pointer-events-none"></div>

      <div className="absolute bottom-[-445px] left-[237px] w-[500px] h-[500px] rounded-full bg-white/[0.05] pointer-events-none"></div>

      <div className="mt-20 lg:mt-[100px] xl:mt-[133px]">
        <div className="relative z-10 max-w-[1070px] mx-auto px-4 pt-8 md:pt-12 lg:pt-30 xl:pt-52 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link
              to="/"
              className="flex items-center md:h-10 transition-opacity hover:opacity-90"
            >
              <img
                src={logo}
                alt="RemoteRecruit Logo"
                className="w-[184px] h-[74px] object-contain"
              />
            </Link>

            <div className="flex items-center gap-3 mt-0 xl:mt-[-29px] mr-0 xl:mr-[7px]">
              {SOCIAL_LINKS.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`RemoteRecruit on ${icon.name}`}
                  className="w-[32px] h-[32px] rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-all duration-150"
                >
                  <svg
                    className="w-[14px] h-[14px] fill-white opacity-85"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={icon.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[20px] md:mt-[40px] xl:mt-[85px]">
          <div className="w-full h-[1px] bg-white/10 mt-6"></div>

          
            <div className="flex flex-col py-4 items-center justify-center select-none opacity-90 scale-95">
              <Link className="relative w-10 h-10 flex items-center justify-center font-black text-2xl tracking-tighter">
                <img src={RRlogo} alt="RemoteRecruit" />
              </Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
