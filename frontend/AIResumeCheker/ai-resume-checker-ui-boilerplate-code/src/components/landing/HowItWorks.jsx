import { motion } from "framer-motion";
import {
  Upload,
  Cpu,
  FileDown,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

/* =========================================================
   STEP 01 — UPLOAD
========================================================= */

function UploadVisual() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl
        border border-white/[0.07]
        bg-[#080D19]/80
        p-4
        shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
      "
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-36 w-36 rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      <div className="relative flex items-center gap-3">
        {/* File icon */}
        <div className="relative shrink-0">
          <div
            className="
              absolute -inset-2
              rounded-2xl
              bg-violet-500/15
              blur-lg
            "
          />

          <div
            className="
              relative flex
              h-12 w-12
              items-center justify-center
              rounded-2xl
              border border-white/[0.08]
              bg-white/[0.035]
            "
          >
            <div
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-violet-500
                via-indigo-500
                to-blue-600
                text-white

                shadow-[0_6px_18px_rgba(124,92,255,0.28)]
              "
            >
              <Upload size={14} strokeWidth={2.4} />
            </div>
          </div>
        </div>

        {/* File details */}
        <div className="min-w-0 flex-1 text-left">
          <div
            className="
              truncate
              text-[12px]
              font-semibold
              text-[#F8FAFC]
            "
          >
            resume_v3.pdf
          </div>

          <div
            className="
              mt-0.5
              text-[10px]
              tabular-nums
              text-[#64748B]
            "
          >
            412 KB · parsing…
          </div>
        </div>

        {/* Live badge */}
        <div
          className="
            inline-flex h-5
            items-center gap-1.5
            rounded-full

            border border-cyan-400/15
            bg-cyan-400/[0.07]

            px-2
            text-[9px]
            font-semibold
            text-cyan-300
          "
        >
          <span
            className="
              h-1.5 w-1.5
              animate-pulse
              rounded-full
              bg-cyan-300
              shadow-[0_0_8px_rgba(34,211,238,0.75)]
            "
          />

          live
        </div>
      </div>

      {/* Progress */}
      <div
        className="
          relative mt-4
          h-1
          w-full
          overflow-hidden
          rounded-full
          bg-white/[0.055]
        "
      >
        <motion.div
          animate={{
            x: ["-110%", "220%"],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            h-full w-[45%]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-violet-400
            to-transparent
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   STEP 02 — ANALYZE
========================================================= */

function AnalyzeVisual() {
  const items = [
    {
      label: "Structure parsed",
      done: true,
    },
    {
      label: "ATS rules checked",
      done: true,
    },
    {
      label: "Generating improvements…",
      done: false,
    },
  ];

  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl
        border border-white/[0.07]
        bg-[#080D19]/80
        p-4
        shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
      "
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-14 -top-20
          h-40 w-40
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative mb-3 flex items-center gap-2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            h-4 w-4
            rounded-full
            border-2
            border-violet-400
            border-r-transparent
          "
        />

        <div
          className="
            text-[11px]
            font-semibold
            text-[#E2E8F0]
          "
        >
          Analyzing resume
        </div>

        <div
          className="
            ml-auto
            inline-flex h-5
            items-center
            rounded-full

            border border-white/[0.06]
            bg-white/[0.04]

            px-2
            text-[9px]
            font-semibold
            tabular-nums
            text-[#64748B]
          "
        >
          8 / 12
        </div>
      </div>

      {/* Analysis tasks */}
      <div className="relative space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              x: -6,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2 + index * 0.1,
            }}
            className="flex items-center gap-2"
          >
            <div
              className={`
                flex h-4 w-4
                shrink-0
                items-center justify-center
                rounded-full

                ${
                  item.done
                    ? `
                      border border-cyan-400/20
                      bg-cyan-400/[0.10]
                      text-cyan-300
                    `
                    : `
                      border border-violet-400/35
                      bg-violet-400/[0.04]
                    `
                }
              `}
            >
              {item.done ? (
                <Check size={9} strokeWidth={3.2} />
              ) : (
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-violet-300
                  "
                />
              )}
            </div>

            <div
              className={`
                text-[11px]

                ${
                  item.done
                    ? "text-[#94A3B8]"
                    : "text-violet-300"
                }
              `}
            >
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Score */}
      <div
        className="
          relative
          mt-3
          flex items-center justify-between
          border-t border-white/[0.06]
          pt-3
        "
      >
        <div className="text-[10px] text-[#64748B]">
          Predicted ATS score
        </div>

        <div
          className="
            inline-flex
            items-center gap-1
            text-[11px]
            font-bold
            tabular-nums
            text-violet-300
          "
        >
          <Sparkles size={10} strokeWidth={2.5} />
          82 / 100
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STEP 03 — DOWNLOAD
========================================================= */

function DownloadVisual() {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl
        border border-white/[0.07]
        bg-[#080D19]/80
        p-4
        shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
      "
    >
      {/* Cyan ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-20 -right-12
          h-36 w-36
          rounded-full
          bg-cyan-400/[0.07]
          blur-3xl
        "
      />

      <div className="relative flex items-center gap-3">
        {/* PDF preview */}
        <div className="relative shrink-0">
          <div
            className="
              flex h-12 w-9
              flex-col gap-[2px]
              rounded-md
              border border-slate-200
              bg-[#F8FAFC]
              p-1.5

              shadow-[0_8px_20px_rgba(0,0,0,0.25)]
            "
          >
            <div className="h-[2px] w-3/4 rounded bg-[#334155]" />

            <div className="h-[2px] w-full rounded bg-[#CBD5E1]" />

            <div className="h-[2px] w-5/6 rounded bg-[#CBD5E1]" />

            <div className="h-[2px] w-2/3 rounded bg-[#CBD5E1]" />

            <div
              className="
                mt-auto
                h-[4px]
                w-full
                rounded-[1px]
                bg-gradient-to-r
                from-violet-500
                to-indigo-500
              "
            />
          </div>

          <div
            className="
              absolute
              -bottom-1.5
              -right-2

              flex h-5
              items-center
              rounded-md

              bg-[#FF7A59]

              px-1.5
              text-[8px]
              font-bold
              text-white

              shadow-[0_4px_12px_rgba(255,122,89,0.25)]
            "
          >
            PDF
          </div>
        </div>

        {/* File details */}
        <div className="min-w-0 flex-1 text-left">
          <div
            className="
              truncate
              text-[12px]
              font-semibold
              text-[#F8FAFC]
            "
          >
            resume_v3_optimized.pdf
          </div>

          <div
            className="
              mt-0.5
              text-[10px]
              text-[#64748B]
            "
          >
            ATS-ready · 1 page
          </div>
        </div>

        {/* Download */}
        <button
          type="button"
          aria-label="Download optimized resume"
          className="
            flex h-9 w-9
            shrink-0
            items-center justify-center
            rounded-full

            border border-violet-400/20

            bg-gradient-to-br
            from-violet-600
            to-indigo-600

            text-white

            shadow-[0_6px_18px_rgba(124,92,255,0.24)]

            transition-all
            duration-200

            hover:-translate-y-0.5
            hover:shadow-[0_8px_24px_rgba(124,92,255,0.35)]

            active:translate-y-0
            active:scale-[0.96]
          "
        >
          <FileDown size={13} />
        </button>
      </div>

      {/* Results */}
      <div
        className="
          relative
          mt-3
          flex items-center
          justify-between
          border-t
          border-white/[0.06]
          pt-3
        "
      >
        <div
          className="
            inline-flex h-5
            items-center gap-1
            rounded-full

            border border-cyan-400/15
            bg-cyan-400/[0.08]

            px-2
            text-[10px]
            font-semibold
            tabular-nums
            text-cyan-300
          "
        >
          <Check size={9} strokeWidth={3} />
          ATS 86
        </div>

        <div className="text-[10px] tabular-nums text-[#64748B]">
          <span className="font-semibold text-cyan-300">
            +24 pts
          </span>{" "}
          from V1
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STEPS
========================================================= */

const STEPS = [
  {
    n: "01",
    icon: Upload,
    title: "Upload your resume",
    desc: "Drop your PDF or DOCX and we'll securely parse the content in seconds.",
    Visual: UploadVisual,
  },
  {
    n: "02",
    icon: Cpu,
    title: "AI analyzes & improves",
    desc: "ResuMate checks ATS compatibility, finds weak spots, and generates targeted improvements.",
    Visual: AnalyzeVisual,
  },
  {
    n: "03",
    icon: FileDown,
    title: "Export & start applying",
    desc: "Apply your improvements, save a stronger version, and download an ATS-ready resume.",
    Visual: DownloadVisual,
  },
];

/* =========================================================
   HOW IT WORKS
========================================================= */

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        relative
        overflow-hidden
        bg-[#070A13]
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Center violet atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[5%]
          h-[500px]
          w-[900px]
          -translate-x-1/2
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,92,255,0.10) 0%, rgba(79,124,255,0.035) 40%, transparent 72%)",
          filter: "blur(35px)",
        }}
      />

      {/* Cyan edge light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.055) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.15]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          max-w-[1240px]
          px-3
          sm:px-6
        "
      >
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              From resume to{" "}
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
                interview-ready
              </span>{" "}
              in 3 steps.
            </>
          }
          sub="Upload once. Let AI find what is holding your resume back. Fix it and start applying with confidence."
        />

        {/* =====================================================
            STEPS GRID
        ===================================================== */}

        <div
          className="
            relative
            mt-16
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-3
          "
        >
          {/* Desktop connection line */}
          <svg
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-[105px]
              z-0
              hidden
              w-full
              lg:block
            "
            height="50"
            viewBox="0 0 1200 50"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="howFlowGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#7C5CFF"
                  stopOpacity="0"
                />

                <stop
                  offset="20%"
                  stopColor="#7C5CFF"
                  stopOpacity="0.5"
                />

                <stop
                  offset="55%"
                  stopColor="#4F7CFF"
                  stopOpacity="0.55"
                />

                <stop
                  offset="85%"
                  stopColor="#22D3EE"
                  stopOpacity="0.45"
                />

                <stop
                  offset="100%"
                  stopColor="#22D3EE"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <motion.path
              d="M 70 25 C 260 -18 420 68 600 25 S 940 -18 1130 25"
              fill="none"
              stroke="url(#howFlowGradient)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </svg>

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const Visual = step.Visual;

            return (
              <motion.div
                key={step.n}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative z-[1]"
              >
                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className="
                    relative
                    min-h-[430px]
                    overflow-hidden
                    rounded-[28px]

                    border
                    border-white/[0.075]

                    bg-gradient-to-b
                    from-[#0E1528]
                    to-[#090E1B]

                    p-7

                    shadow-[0_20px_50px_rgba(0,0,0,0.20)]

                    transition-all
                    duration-300

                    hover:-translate-y-1.5
                    hover:border-violet-400/25
                    hover:shadow-[0_28px_75px_rgba(0,0,0,0.32)]
                  "
                >
                  {/* Top line */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-x-[12%]
                      top-0
                      h-px

                      bg-gradient-to-r
                      from-transparent
                      via-violet-400/50
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
                      -top-28
                      h-[300px]
                      w-[300px]
                      rounded-full

                      opacity-0
                      transition-opacity
                      duration-700

                      group-hover:opacity-100
                    "
                    style={{
                      background:
                        "radial-gradient(circle, rgba(124,92,255,0.16) 0%, transparent 68%)",
                      filter: "blur(25px)",
                    }}
                  />

                  {/* ===============================================
                      GIANT STEP NUMBER
                  =============================================== */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-1
                      -top-5

                      select-none
                      font-display
                      text-[145px]
                      font-bold
                      leading-none
                      tracking-[-0.08em]

                      text-white/[0.025]
                    "
                  >
                    {step.n}
                  </div>

                  {/* Step badge */}
                  <div
                    className="
                      relative
                      inline-flex h-6
                      items-center gap-1.5
                      rounded-full

                      border border-violet-400/15
                      bg-violet-400/[0.07]

                      px-2.5

                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-violet-300
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-violet-400
                        shadow-[0_0_8px_rgba(167,139,250,0.8)]
                      "
                    />

                    Step {step.n}
                  </div>

                  {/* ===============================================
                      ICON
                  =============================================== */}

                  <div className="relative mt-6 inline-block">
                    <div
                      className="
                        absolute
                        -inset-3
                        rounded-3xl
                        bg-violet-500/15
                        blur-xl

                        transition-opacity
                        duration-300

                        group-hover:bg-violet-500/25
                      "
                    />

                    
                  </div>

                  {/* ===============================================
                      COPY
                  =============================================== */}

                  <h3
                    className="
                      relative
                      mt-6
                      font-display
                      text-[22px]
                      font-semibold
                      leading-tight
                      tracking-[-0.025em]
                      text-[#F8FAFC]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-2.5
                      text-[13.5px]
                      leading-relaxed
                      text-[#94A3B8]
                    "
                  >
                    {step.desc}
                  </p>

                  {/* ===============================================
                      MINI PREVIEW
                  =============================================== */}

                  <div className="relative mt-7">
                    <Visual />
                  </div>
                </div>

                {/* =================================================
                    CONNECTING ARROW
                ================================================= */}

                {index < STEPS.length - 1 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.12,
                    }}
                    className="
                      absolute
                      -right-[14px]
                      top-[112px]
                      z-20
                      hidden
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-violet-300/20

                      bg-gradient-to-br
                      from-violet-600
                      to-indigo-600

                      text-white

                      shadow-[0_6px_20px_rgba(124,92,255,0.35)]

                      lg:flex
                    "
                    aria-hidden="true"
                  >
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}