import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Lenis from "lenis";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/ajazz-ak820-pro", label: "AK820 Pro", end: false },
  { to: "/lineup", label: "Lineup", end: false },
];

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-svh bg-ink">
      <motion.div
        key={pathname}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] bg-volt"
        style={{ originY: 0 }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Link to="/" className="font-display text-lg font-extrabold tracking-tight text-white">
            Keyfilm
          </Link>
          <ul className="flex gap-5 text-sm text-white md:gap-9">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    "pb-1 transition-opacity " + (isActive ? "border-b border-white" : "opacity-70 hover:opacity-100")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <motion.main
        key={pathname + "-main"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <Outlet />
      </motion.main>
      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 text-sm text-mute md:grid-cols-[1.4fr_1fr] md:px-10">
          <p className="max-w-md leading-relaxed">
            Keyfilm is an independent showcase for mechanical keyboards. Product photos and specifications come from
            Epomaker. Ajazz and Epomaker are trademarks of their owners.
          </p>
          <ul className="flex gap-6 md:justify-end">
            <li>
              <Link className="hover:text-paper" to="/ajazz-ak820-pro">
                AK820 Pro
              </Link>
            </li>
            <li>
              <Link className="hover:text-paper" to="/lineup">
                Lineup
              </Link>
            </li>
            <li>
              <a className="hover:text-paper" href="https://epomaker.com" target="_blank" rel="noreferrer">
                Epomaker
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
