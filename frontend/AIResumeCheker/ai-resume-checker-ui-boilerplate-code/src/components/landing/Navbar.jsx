import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import AILogo from "@/components/layout/AILogo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Dashboard", href: "#dashboard-preview" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6"
    >
      <div
        className={cn(
          "relative mx-auto max-w-[1240px] overflow-hidden",
          "rounded-2xl border transition-all duration-300 md:rounded-full",
          scrolled
            ? [
                "border-white/[0.08]",
                "bg-[#080C18]/80",
                "shadow-[0_12px_50px_rgba(0,0,0,0.35)]",
                "backdrop-blur-2xl",
              ]
            : [
                "border-white/[0.06]",
                "bg-[#080C18]/55",
                "backdrop-blur-xl",
              ],
        )}
      >
        {/* Subtle top glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-x-[15%] -top-px h-px
            bg-gradient-to-r
            from-transparent
            via-violet-400/70
            to-transparent
          "
        />

        <div className="relative flex items-center justify-between gap-4 px-3 py-2 sm:px-4">
          {/* Brand */}
          <Link
            to="/"
            aria-label="ResuMate home"
            className="
              group flex items-center gap-2.5 rounded-full pl-1
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-violet-400/70
            "
          >
            <div
              className="
                transition-transform duration-300
                group-hover:scale-[1.04]
              "
            >
              <AILogo />
            </div>

            <span
              className="
                hidden font-display text-[15px] font-semibold
                tracking-[-0.02em] text-white sm:inline
              "
            >
              Resu
              <span
                className="
                  bg-gradient-to-r
                  from-violet-400
                  via-indigo-400
                  to-cyan-400
                  bg-clip-text text-transparent
                "
              >
                Mate
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="
              absolute left-1/2 hidden
              -translate-x-1/2 items-center gap-1 md:flex
            "
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  rounded-full px-3.5 py-1.5
                  text-[13px] font-medium
                  text-slate-400
                  transition-all duration-200

                  hover:bg-white/[0.05]
                  hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-400/60
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              to="/login"
              className="
                hidden h-9 items-center rounded-full
                px-4 text-[13px] font-medium
                text-slate-300
                transition-all duration-200 sm:inline-flex

                hover:bg-white/[0.05]
                hover:text-white

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-violet-400/60
              "
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="
                group relative inline-flex h-9
                items-center gap-1.5 overflow-hidden
                rounded-full px-4
                text-[13px] font-semibold text-white

                bg-gradient-to-r
                from-violet-600
                via-indigo-600
                to-blue-600

                shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_25px_rgba(99,102,241,0.25)]

                transition-all duration-300

                hover:-translate-y-px
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_35px_rgba(99,102,241,0.40)]

                active:translate-y-0
                active:scale-[0.98]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-violet-300
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#080C18]
              "
            >
              {/* CTA shine */}
              <span
                aria-hidden="true"
                className="
                  absolute inset-0
                  -translate-x-full

                  bg-gradient-to-r
                  from-transparent
                  via-white/15
                  to-transparent

                  transition-transform duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">Get started</span>

              <ArrowRight
                size={13}
                className="
                  relative transition-transform duration-200
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full text-slate-300
                transition-colors md:hidden

                hover:bg-white/[0.06]
                hover:text-white

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-violet-400/60
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={17} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="md:hidden"
            >
              <div className="border-t border-white/[0.07] px-3 pb-3 pt-2">
                <nav className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.035,
                      }}
                      className="
                        block rounded-xl px-3 py-2.5
                        text-sm font-medium text-slate-300
                        transition-colors

                        hover:bg-white/[0.05]
                        hover:text-white
                      "
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="
                      block rounded-xl px-3 py-2.5
                      text-sm font-medium text-slate-300
                      transition-colors sm:hidden

                      hover:bg-white/[0.05]
                      hover:text-white
                    "
                  >
                    Sign in
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}