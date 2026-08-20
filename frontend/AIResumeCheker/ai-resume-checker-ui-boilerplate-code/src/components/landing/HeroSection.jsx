import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";
import { DarkPanel } from "./DarkPanel";
import { HeroDashboardPreview } from "./HeroDashboardPreview";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <DarkPanel
        className="relative w-full min-h-[760px] lg:min-h-[820px]"
        radius="rounded-b-[40px] sm:rounded-b-[56px]"
      >
        {/* Ambient background effects */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 overflow-hidden
          "
        >
          {/* Violet glow */}
          <div
            className="
              absolute -left-[12%] top-[8%]
              h-[420px] w-[420px]
              rounded-full
              bg-violet-600/20
              blur-[130px]
            "
          />

          {/* Indigo glow */}
          <div
            className="
              absolute right-[-10%] top-[8%]
              h-[520px] w-[520px]
              rounded-full
              bg-indigo-600/20
              blur-[150px]
            "
          />

          {/* Cyan accent glow */}
          <div
            className="
              absolute bottom-[-18%] left-[40%]
              h-[360px] w-[360px]
              rounded-full
              bg-cyan-500/10
              blur-[130px]
            "
          />

          {/* Subtle grid */}
          <div
            className="
              absolute inset-0 opacity-[0.035]
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
            }}
          />

          {/* Top light beam */}
          <div
            className="
              absolute left-1/2 top-0
              h-px w-[70%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-violet-400/50
              to-transparent
            "
          />
        </div>

        <div
          className="
            relative z-10
            grid grid-cols-1
            items-center
            gap-14
            px-6
            pb-16
            pt-32
            sm:px-10
            sm:pt-36
            lg:grid-cols-[1.02fr_1fr]
            lg:gap-12
            lg:px-16
            lg:pb-24
            lg:pt-40
          "
          style={{
            maxWidth: 1280,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Copy */}
          <div className="relative text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-violet-400/20
                bg-violet-400/[0.07]
                px-3 py-1.5
                backdrop-blur-md
                shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              "
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className="
                    absolute inset-0
                    rounded-full
                    bg-violet-400/15
                  "
                />
                <Sparkles
                  size={11}
                  className="relative text-violet-300"
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-violet-100/90
                  sm:text-[11px]
                "
              >
                Optimized for modern ATS systems
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-7
                max-w-[720px]
                font-display
                text-[46px]
                font-semibold
                leading-[0.96]
                tracking-[-0.045em]
                sm:text-[62px]
                lg:text-[76px]
                xl:text-[80px]
              "
            >
              Beat the ATS.
              <br />

              <span className="text-white/45">
                Land more{" "}
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-violet-300
                  via-indigo-300
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                interviews.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-6
                max-w-[560px]
                text-[16px]
                leading-[1.75]
                text-slate-300/75
                sm:text-[18px]
                lg:text-[19px]
              "
            >
              Upload your resume and instantly uncover ATS issues,
              weak sections, missing keywords, and AI-powered
              improvements designed to help you stand out.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-8
                flex flex-wrap
                items-center
                gap-3
              "
            >
              {/* Primary CTA */}
              <Link
                to="/register"
                className="
                  group
                  relative
                  inline-flex
                  h-12
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  px-5
                  text-[14px]
                  font-semibold
                  text-white

                  bg-gradient-to-r
                  from-violet-600
                  via-indigo-600
                  to-blue-600

                  shadow-[0_10px_35px_-10px_rgba(99,102,241,0.65)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_45px_-12px_rgba(99,102,241,0.8)]

                  active:translate-y-0
                  active:scale-[0.98]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-300
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#070B16]
                "
              >
                {/* Highlight */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-x-0 top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/60
                    to-transparent
                  "
                />

                {/* Shine */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    -translate-x-[130%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
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
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* Secondary CTA */}
              <a
                href="#how-it-works"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  gap-2
                  rounded-full
                  border border-white/[0.09]
                  bg-white/[0.045]
                  px-5
                  text-[14px]
                  font-medium
                  text-slate-200
                  backdrop-blur-xl

                  transition-all
                  duration-200

                  hover:border-white/[0.14]
                  hover:bg-white/[0.075]
                  hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-violet-400/60
                "
              >
                <span
                  className="
                    flex h-6 w-6
                    items-center justify-center
                    rounded-full
                    bg-white/[0.07]
                    transition-colors
                    group-hover:bg-white/[0.1]
                  "
                >
                  <Play
                    size={10}
                    fill="currentColor"
                    className="ml-px"
                  />
                </span>

                See how it works
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.38,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2.5
                text-[12px]
                text-slate-400
              "
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck
                  size={13}
                  className="text-violet-300"
                />
                No credit card required
              </span>

              <span
                className="
                  hidden
                  h-3
                  w-px
                  bg-white/10
                  sm:block
                "
              />

              <span className="inline-flex items-center gap-1.5">
                <Check
                  size={12}
                  className="text-cyan-300"
                />
                Free ATS analysis
              </span>

              <span
                className="
                  hidden
                  h-3
                  w-px
                  bg-white/10
                  sm:block
                "
              />

              <span className="inline-flex items-center gap-1.5">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-indigo-400
                    shadow-[0_0_8px_rgba(129,140,248,0.8)]
                  "
                />

                47,300+ resumes analyzed
              </span>
            </motion.div>
          </div>

          {/* Dashboard visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative lg:pl-3"
          >
            {/* Dashboard ambient glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-[12%]
                rounded-full
                bg-indigo-500/20
                blur-[90px]
              "
            />

            {/* Visual frame */}
            <div className="relative">
              <HeroDashboardPreview />
            </div>
          </motion.div>
        </div>
      </DarkPanel>
    </section>
  );
}