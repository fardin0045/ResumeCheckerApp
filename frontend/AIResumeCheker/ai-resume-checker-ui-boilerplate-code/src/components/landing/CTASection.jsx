import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DarkPanel } from "./DarkPanel";

export function CTASection() {
  return (
    <section
      className="
        relative
        bg-[#070A13]
        px-3
        pb-24
        pt-16
        sm:px-6
        sm:pb-32
        sm:pt-20
      "
    >
      <div className="mx-auto max-w-[1240px]">
        <DarkPanel
          className="
            relative
            border
            border-white/[0.075]

            px-6
            py-16
            text-center

            shadow-[0_35px_100px_rgba(0,0,0,0.35)]

            sm:px-12
            sm:py-24
            lg:px-20
          "
          radius="rounded-[30px] sm:rounded-[40px]"
        >
          {/* =====================================================
              EXTRA CTA ATMOSPHERE
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-180px]

              h-[500px]
              w-[700px]

              -translate-x-1/2

              rounded-full
              bg-violet-500/[0.13]
              blur-[100px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-[200px]
              right-[5%]

              h-[400px]
              w-[400px]

              rounded-full
              bg-cyan-400/[0.07]
              blur-[90px]
            "
          />

          {/* Decorative top line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0

              h-px
              w-[60%]

              -translate-x-1/2

              bg-gradient-to-r
              from-transparent
              via-violet-400/70
              to-transparent
            "
          />

          <div className="relative z-10">
            {/* ===================================================
                BADGE
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-violet-400/20

                bg-violet-400/[0.08]

                px-3
                py-1.5

                backdrop-blur-md
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center

                  rounded-full

                  bg-violet-400/[0.12]

                  text-violet-300
                "
              >
                <Sparkles size={10} />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]

                  text-violet-200/90

                  sm:text-[11px]
                "
              >
                Your first 3 analyses are free
              </span>
            </motion.div>

            {/* ===================================================
                HEADLINE
            =================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mx-auto
                mt-7
                max-w-4xl

                font-display

                text-[38px]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]

                text-[#F8FAFC]

                sm:text-[54px]
                lg:text-[68px]
              "
            >
              Stop guessing what
              <br />

              recruiters{" "}

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
                actually see.
              </span>
            </motion.h2>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mx-auto
                mt-6
                max-w-xl

                text-[15px]
                leading-[1.75]

                text-[#94A3B8]

                sm:text-lg
              "
            >
              Upload your resume and get a clear ATS score,
              actionable issues, missing keywords, and AI-powered
              improvements before you send another application.
            </motion.p>

            {/* ===================================================
                BUTTONS
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3

                sm:flex-row
              "
            >
              {/* Primary */}
              <Link
                to="/register"
                className="
                  group
                  relative

                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2

                  overflow-hidden
                  rounded-full

                  bg-gradient-to-r
                  from-violet-600
                  via-indigo-600
                  to-blue-600

                  px-6

                  text-[14px]
                  font-semibold
                  text-white

                  shadow-[0_12px_36px_-8px_rgba(124,92,255,0.55)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_18px_46px_-10px_rgba(124,92,255,0.75)]

                  active:translate-y-0
                  active:scale-[0.98]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-300
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080B14]
                "
              >
                {/* Top highlight */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-5
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-white/70
                    to-transparent
                  "
                />

                {/* Shine */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    -translate-x-[130%]

                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.16]
                    to-transparent

                    transition-transform
                    duration-700

                    group-hover:translate-x-[130%]
                  "
                />

                <span className="relative">
                  Analyze my resume
                </span>

                <ArrowRight
                  size={15}
                  className="
                    relative
                    transition-transform
                    duration-200

                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary */}
              <Link
                to="/login"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-white/[0.09]

                  bg-white/[0.04]

                  px-5

                  text-[14px]
                  font-medium
                  text-[#CBD5E1]

                  backdrop-blur-xl

                  transition-all
                  duration-200

                  hover:border-white/[0.14]
                  hover:bg-white/[0.07]
                  hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-400/60
                "
              >
                I already have an account
              </Link>
            </motion.div>

            {/* ===================================================
                TRUST MESSAGE
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="
                mt-7
                inline-flex
                flex-wrap
                items-center
                justify-center
                gap-x-2
                gap-y-1

                text-[11px]
                text-[#64748B]

                sm:text-[12px]
              "
            >
              <ShieldCheck
                size={13}
                className="text-cyan-300"
              />

              <span>No credit card required</span>

              <span className="text-white/15">•</span>

              <span>Start analyzing in seconds</span>
            </motion.div>
          </div>

          {/* =====================================================
              DECORATIVE FLOATING DOTS
          ===================================================== */}

          <motion.span
            aria-hidden="true"
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-[12%]
              top-[28%]

              hidden
              h-1.5
              w-1.5

              rounded-full
              bg-violet-300

              shadow-[0_0_14px_rgba(196,181,253,0.9)]

              md:block
            "
          />

          <motion.span
            aria-hidden="true"
            animate={{
              y: [0, 8, 0],
              opacity: [0.35, 0.9, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              right-[13%]
              top-[34%]

              hidden
              h-1.5
              w-1.5

              rounded-full
              bg-cyan-300

              shadow-[0_0_14px_rgba(34,211,238,0.8)]

              md:block
            "
          />
        </DarkPanel>
      </div>
    </section>
  );
}