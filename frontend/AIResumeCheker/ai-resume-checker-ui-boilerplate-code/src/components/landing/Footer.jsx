import { Link } from "react-router-dom";
import AILogo from "@/components/layout/AILogo";

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      {...props}
    >
      <path d="M17.53 3H20.7l-6.94 7.94L21.8 21h-6.34l-4.97-6.51L4.8 21H1.62l7.42-8.5L1.5 3h6.5l4.5 5.95L17.53 3zm-1.12 16.13h1.75L6.66 4.78H4.78L16.41 19.13z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.62 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Dashboard", href: "#dashboard-preview" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resume templates", href: "#" },
      { label: "ATS guide", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "#",
    Icon: GithubIcon,
  },
  {
    label: "X / Twitter",
    href: "#",
    Icon: TwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#070A13]
        px-3
        pb-8
        pt-10
        sm:px-6
        sm:pb-12
      "
    >
      {/* Top background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.07]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]

            border
            border-white/[0.07]

            bg-gradient-to-b
            from-[#0D1425]
            to-[#080D19]

            p-7
            sm:p-10
            lg:p-12

            shadow-[0_24px_70px_rgba(0,0,0,0.25)]
          "
        >
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-[55%]
              -translate-x-1/2

              bg-gradient-to-r
              from-transparent
              via-violet-400/45
              to-transparent
            "
          />

          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-40
              h-[360px]
              w-[360px]
              rounded-full
              bg-violet-500/[0.08]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              grid
              grid-cols-2
              gap-8
              sm:grid-cols-3
              sm:gap-10
              lg:grid-cols-6
            "
          >
            {/* =================================================
                BRAND
            ================================================= */}

            <div className="col-span-2">
              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-400/60
                "
              >
                <AILogo />

                <span
                  className="
                    font-display
                    text-[16px]
                    font-semibold
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  Resu
                  <span
                    className="
                      bg-gradient-to-r
                      from-violet-300
                      via-indigo-400
                      to-cyan-300
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Mate
                  </span>
                </span>
              </Link>

              <p
                className="
                  mt-4
                  max-w-xs
                  text-[13px]
                  leading-[1.7]
                  text-[#7C8AA0]
                "
              >
                AI-powered resume analysis, ATS scoring, keyword
                optimization, and rewrites — built to help you apply
                with confidence.
              </p>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-white/[0.07]

                      bg-white/[0.035]

                      text-[#64748B]

                      transition-all
                      duration-200

                      hover:-translate-y-0.5
                      hover:border-violet-400/20
                      hover:bg-violet-400/[0.08]
                      hover:text-violet-300

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-violet-400/60
                    "
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* =================================================
                LINKS
            ================================================= */}

            {COLUMNS.map((column) => (
              <div key={column.title}>
                <div
                  className="
                    mb-4
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#CBD5E1]
                  "
                >
                  {column.title}
                </div>

                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="
                          inline-block
                          text-[13px]
                          text-[#64748B]

                          transition-all
                          duration-200

                          hover:translate-x-0.5
                          hover:text-[#E2E8F0]

                          focus-visible:outline-none
                          focus-visible:text-violet-300
                        "
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
            className="
              relative
              mt-10
              flex
              flex-col
              items-center
              justify-between
              gap-4

              border-t
              border-white/[0.055]

              pt-6

              text-[11px]
              text-[#64748B]

              sm:flex-row
              sm:text-[12px]
            "
          >
            <div>
              © 2026{" "}
              <span className="font-medium text-[#94A3B8]">
                ResuMate
              </span>
              . All rights reserved.
            </div>

            {/* Status */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full

                border
                border-cyan-400/10
                bg-cyan-400/[0.045]

                px-3
                py-1.5
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-cyan-300
                    opacity-30
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-cyan-300
                  "
                />
              </span>

              <span className="text-[#7C8AA0]">
                All systems operational
              </span>
            </div>
          </div>
        </div>

        {/* Tiny brand line */}
        <div
          className="
            mx-auto
            mt-5
            h-px
            w-[45%]
            bg-gradient-to-r
            from-transparent
            via-white/[0.05]
            to-transparent
          "
        />
      </div>
    </footer>
  );
}