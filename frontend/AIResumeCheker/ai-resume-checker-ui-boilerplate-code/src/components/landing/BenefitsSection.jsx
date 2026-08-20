import { motion } from "framer-motion";
import {
  PhoneCall,
  ShieldCheck,
  Zap,
  Search,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

const BENEFITS = [
  {
    icon: PhoneCall,
    title: "3.2× more callbacks",
    desc: "Users hit interview rates that matched their target roles, not their fears.",
    stat: "3.2×",
    label: "callback lift",
  },
  {
    icon: ShieldCheck,
    title: "Built for modern ATS",
    desc: "Cleaner structure and formatting designed for systems like Greenhouse, Lever, and Workday.",
    stat: "ATS",
    label: "friendly output",
  },
  {
    icon: Sparkles,
    title: "Bullets that brag, not bore",
    desc: "Quantified outcomes, stronger verbs, and your voice — never generic AI filler.",
  },
  {
    icon: Zap,
    title: "Apply in minutes, not weeks",
    desc: "Tailor your resume to a job description quickly, then move on to the next opportunity.",
  },
  {
    icon: Search,
    title: "Match the right keywords",
    desc: "Stop guessing what recruiters search for. ResuMate surfaces the terms your resume is missing.",
  },
];

export function BenefitsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#070A13]
        py-24
        sm:py-32
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[560px]
          w-[900px]
          -translate-x-1/2
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,92,255,0.11) 0%, rgba(79,124,255,0.035) 42%, transparent 72%)",
          filter: "blur(42px)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[4%]
          h-[520px]
          w-[520px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-3 sm:px-6">
        <SectionHeader
          eyebrow="Outcomes"
          title={
            <>
              A stronger resume is good.
              <br className="hidden sm:block" />{" "}
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
                More interviews are better.
              </span>
            </>
          }
          sub="ResuMate helps you fix the problems that keep strong candidates from getting through the first screen."
        />

        {/* Benefits grid */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-6
          "
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            const featured = index < 2;

            return (
              <motion.article
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/[0.07]

                  bg-gradient-to-b
                  from-[#0E1528]
                  to-[#090E1B]

                  p-5
                  sm:p-6

                  shadow-[0_18px_50px_rgba(0,0,0,0.20)]

                  transition-colors
                  duration-300

                  hover:border-violet-400/20

                  ${
                    index === 0
                      ? "lg:col-span-3"
                      : index === 1
                        ? "lg:col-span-3"
                        : "lg:col-span-2"
                  }
                `}
              >
                {/* Top highlight */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[14%]
                    top-0
                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-violet-400/40
                    to-transparent
                  "
                />

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-[280px]
                    w-[280px]
                    rounded-full

                    bg-violet-500/[0.12]
                    blur-3xl

                    opacity-0
                    transition-opacity
                    duration-700

                    group-hover:opacity-100
                  "
                />

                {/* Featured card decorative glow */}
                {featured && (
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-28
                      -left-20
                      h-[260px]
                      w-[260px]
                      rounded-full
                      bg-indigo-500/[0.07]
                      blur-3xl
                    "
                  />
                )}

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl

                        border
                        border-violet-400/15

                        bg-gradient-to-br
                        from-violet-500/[0.18]
                        to-indigo-500/[0.08]

                        text-violet-300

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]

                        transition-all
                        duration-300

                        group-hover:scale-[1.06]
                        group-hover:border-violet-400/30
                      "
                    >
                      <Icon size={17} strokeWidth={2.2} />
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        text-white/15
                        transition-all
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-violet-300
                      "
                    />
                  </div>

                  {/* Featured stat */}
                  {benefit.stat && (
                    <div className="mt-7">
                      <div
                        className="
                          font-display
                          text-[42px]
                          font-semibold
                          leading-none
                          tracking-[-0.05em]

                          bg-gradient-to-r
                          from-[#F8FAFC]
                          via-violet-200
                          to-cyan-200
                          bg-clip-text
                          text-transparent
                        "
                      >
                        {benefit.stat}
                      </div>

                      <div
                        className="
                          mt-2
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[#64748B]
                        "
                      >
                        {benefit.label}
                      </div>
                    </div>
                  )}

                  {/* Copy */}
                  <h3
                    className={`
                      font-display
                      font-semibold
                      tracking-[-0.025em]
                      text-[#F8FAFC]

                      ${
                        featured
                          ? "mt-6 text-[20px]"
                          : "mt-6 text-[17px]"
                      }
                    `}
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[13px]
                      leading-[1.7]
                      text-[#94A3B8]
                    "
                  >
                    {benefit.desc}
                  </p>

                  {/* Bottom detail */}
                  <div
                    className="
                      mt-6
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-white/[0.07]
                      via-white/[0.035]
                      to-transparent
                    "
                  />

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-[#64748B]
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_8px_rgba(34,211,238,0.65)]
                      "
                    />

                    Built into ResuMate
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}