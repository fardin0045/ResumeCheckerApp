import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

const TESTIMONIALS = [
  {
    quote:
      "I'd been ghosted by 40+ companies. Ran my resume through ResuMate, fixed 6 issues, and landed 3 onsites in two weeks.",
    name: "Fardin Onik",
    role: "Senior Frontend Engineer",
    company: "Stripe",
    initials: "PR",
  },
  {
    quote:
      "The rewrites actually sound like me. No 'leveraged' or 'spearheaded' garbage. My ATS score jumped from 58 to 89.",
    name: "Johyra AJmayen",
    role: "Backend Engineer",
    company: "Vercel",
    initials: "MC",
  },
  {
    quote:
      "As a new grad, I had no idea recruiters were filtering me out before a human saw the resume. Brutal — but fixable in one afternoon.",
    name: "Shreyas Ramesh",
    role: "CS Senior, UIUC",
    company: "intern @ Linear",
    initials: "SR",
  },
  {
    quote:
      "I wish this existed when I switched from full-stack to ML. Keyword optimization alone was worth the signup.",
    name: "Daniel Park",
    role: "ML Engineer",
    company: "Anthropic",
    initials: "DP",
  },
  {
    quote:
      "The diff view is what sold me. I could see exactly what changed and why — not some black-box rewrite.",
    name: "Aisha Hassan",
    role: "Product Designer",
    company: "Figma",
    initials: "AH",
  },
  {
    quote:
      "Used it the night before applying to FAANG. Got my first response in 36 hours. Sample size of one, but I'll take it.",
    name: "Jordan Blake",
    role: "Full-Stack Developer",
    company: "Freelance",
    initials: "JB",
  },
];

export function TestimonialsSection() {
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
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

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
          filter: "blur(40px)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.045) 0%, transparent 70%)",
          filter: "blur(50px)",
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
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1240px] px-3 sm:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Built for people who are
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
                serious about getting hired.
              </span>
            </>
          }
          sub="From first applications to senior-level career moves, ResuMate helps candidates understand what their resume is really saying."
        />

        {/* =====================================================
            TESTIMONIAL GRID
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
          "
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 20,
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
                delay: (index % 3) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden

                rounded-[24px]

                border
                border-white/[0.07]

                bg-gradient-to-b
                from-[#0E1528]
                to-[#090E1B]

                p-5
                sm:p-6

                shadow-[0_18px_50px_rgba(0,0,0,0.18)]

                transition-colors
                duration-300

                hover:border-violet-400/20
              "
            >
              {/* Top highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[15%]
                  top-0
                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-violet-400/35
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
                  h-[250px]
                  w-[250px]
                  rounded-full

                  bg-violet-500/[0.11]
                  blur-3xl

                  opacity-0
                  transition-opacity
                  duration-700

                  group-hover:opacity-100
                "
              />

              {/* Large decorative quote */}
              <Quote
                aria-hidden="true"
                size={70}
                strokeWidth={1}
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-4
                  rotate-180
                  text-white/[0.025]
                "
              />

              {/* Stars */}
              <div
                className="
                  relative
                  mb-5
                  flex
                  items-center
                  gap-1
                "
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.12 + starIndex * 0.035,
                    }}
                  >
                    <Star
                      size={13}
                      fill="currentColor"
                      strokeWidth={0}
                      className="text-cyan-300"
                    />
                  </motion.div>
                ))}

                <span
                  className="
                    ml-1.5
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#64748B]
                  "
                >
                  5.0
                </span>
              </div>

              {/* Quote */}
              <p
                className="
                  relative
                  flex-1
                  text-[14px]
                  leading-[1.75]
                  text-[#CBD5E1]
                "
              >
                “{testimonial.quote}”
              </p>

              {/* Person */}
              <div
                className="
                  relative
                  mt-6
                  flex
                  items-center
                  gap-3
                  border-t
                  border-white/[0.055]
                  pt-4
                "
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div
                    className="
                      absolute
                      -inset-1.5
                      rounded-full
                      bg-violet-500/15
                      blur-md

                      transition-opacity
                      duration-300

                      group-hover:bg-violet-500/25
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-violet-400/20

                      bg-gradient-to-br
                      from-violet-600
                      via-indigo-600
                      to-blue-600

                      font-display
                      text-[11px]
                      font-bold
                      tracking-wide
                      text-white

                      shadow-[0_6px_18px_rgba(124,92,255,0.20)]
                    "
                  >
                    {testimonial.initials}
                  </div>
                </div>

                {/* Identity */}
                <div className="min-w-0 flex-1">
                  <div
                    className="
                      truncate
                      text-[13px]
                      font-semibold
                      text-[#F8FAFC]
                    "
                  >
                    {testimonial.name}
                  </div>

                  <div
                    className="
                      mt-0.5
                      truncate
                      text-[10.5px]
                      text-[#64748B]
                    "
                  >
                    {testimonial.role}
                    <span className="mx-1.5 text-white/15">•</span>
                    <span className="text-[#7C8AA0]">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                {/* Verified-style indicator */}
                <div
                  className="
                    hidden
                    shrink-0
                    items-center
                    gap-1
                    rounded-full

                    border
                    border-cyan-400/10
                    bg-cyan-400/[0.055]

                    px-2
                    py-1

                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.09em]
                    text-cyan-300

                    sm:inline-flex
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-cyan-300
                    "
                  />
                  User
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM SOCIAL PROOF
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            flex
            max-w-max
            flex-wrap
            items-center
            justify-center
            gap-x-4
            gap-y-2

            rounded-full

            border
            border-white/[0.06]

            bg-white/[0.025]

            px-4
            py-2.5

            text-[10px]
            font-medium
            text-[#64748B]
          "
        >
          <div className="flex items-center gap-1">
            <Star
              size={11}
              fill="currentColor"
              strokeWidth={0}
              className="text-cyan-300"
            />

            <span className="font-semibold text-[#CBD5E1]">
              4.9/5
            </span>
          </div>

          <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

          <span>
            Built for engineers, graduates & career switchers
          </span>
        </motion.div>
      </div>
    </section>
  );
}