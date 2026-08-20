import { motion } from "framer-motion";
import {
  Gauge,
  Sparkles,
  KeyRound,
  Layers,
  GitCompare,
  LineChart,
  FileDown,
} from "lucide-react";

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    icon: Gauge,
    title: "ATS Score Analysis",
    desc: "Section-level scoring against the same parsers Greenhouse and Lever run.",
    preview: <ScoreBarsPreview />,
    span: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "AI Resume Rewrite",
    desc: "Bullets rewritten in your voice, with quantified outcomes — not generic fluff.",
    preview: <RewritePreview />,
  },
  {
    icon: KeyRound,
    title: "Keyword Optimization",
    desc: "Auto-matches your resume against any job description and surfaces what's missing.",
    preview: <KeywordsPreview />,
  },
  {
    icon: Layers,
    title: "Version History",
    desc: "Every iteration scored, dated, and one click away.",
    preview: <VersionsPreview />,
  },
  {
    icon: GitCompare,
    title: "Diff Comparison",
    desc: "See exactly what changed between V1 and V3 — line by line.",
    preview: <DiffPreview />,
  },
  {
    icon: LineChart,
    title: "Analytics Dashboard",
    desc: "Track score evolution, keywords matched, and issues resolved over time.",
    preview: <ChartPreview />,
    span: "lg:col-span-2",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    desc: "Rebuilt with a clean ATS-friendly template — never trust your old layout again.",
    preview: <PdfPreview />,
  },
];

/* =========================================================
   FEATURES SECTION
========================================================= */

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="
        relative
        mt-2
        overflow-hidden
        border-y border-white/[0.055]
        bg-[#070A13]
        py-24
        sm:mt-2
        sm:py-2
        rounded-t-[32px]
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
          top-[-220px]
          h-[620px]
          w-[900px]
          -translate-x-1/2
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,92,255,0.16) 0%, rgba(79,124,255,0.07) 38%, transparent 72%)",
          filter: "blur(30px)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[28%]
          h-[520px]
          w-[520px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[5%]
          h-[520px]
          w-[520px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(79,124,255,0.09) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1240px] px-3 sm:px-6">
        <SectionHeader
          eyebrow="Features"
          title={
            <>
              Everything your resume
              <br className="hidden sm:block" /> needs to{" "}
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
                actually land.
              </span>
            </>
          }
          sub="Seven focused tools working together to analyze, improve, compare, and ship a stronger resume."
        />

        {/* =====================================================
            FEATURE GRID
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
          "
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
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
              className={`
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/[0.075]

                bg-gradient-to-b
                from-[#0E1528]
                to-[#0A0F1D]

                shadow-[0_18px_50px_rgba(0,0,0,0.18)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-violet-400/25
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]

                ${feature.span || ""}
              `}
            >
              {/* Top edge */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[10%]
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
                  h-[280px]
                  w-[280px]
                  rounded-full

                  opacity-0
                  transition-opacity
                  duration-700

                  group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(79,124,255,0.06) 42%, transparent 68%)",
                  filter: "blur(20px)",
                }}
              />

              <div className="relative p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-start gap-3.5">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl

                      border
                      border-violet-400/15

                      bg-gradient-to-br
                      from-violet-500/20
                      to-indigo-500/10

                      text-violet-300

                      shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]

                      transition-all
                      duration-300

                      group-hover:scale-[1.06]
                      group-hover:border-violet-400/30
                      group-hover:text-violet-200
                    "
                  >
                    <feature.icon size={17} strokeWidth={2.1} />
                  </div>

                  <div>
                    <h3
                      className="
                        font-display
                        text-[17px]
                        font-semibold
                        tracking-tight
                        text-[#F8FAFC]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        leading-relaxed
                        text-[#94A3B8]
                      "
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {/* Preview */}
                <div className="mt-5">{feature.preview}</div>
              </div>

              {/* Bottom hover highlight */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[15%]
                  bottom-0
                  h-px

                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/60
                  to-transparent

                  opacity-0
                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

export function SectionHeader({
  eyebrow,
  title,
  sub,
  center = true,
}) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {eyebrow && (
        <div
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

            text-[10px]
            font-semibold
            uppercase
            tracking-[0.16em]
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

          {eyebrow}
        </div>
      )}

      <h2
        className="
          mt-5
          font-display
          text-[34px]
          font-semibold
          leading-[1.05]
          tracking-[-0.035em]
          text-[#F8FAFC]

          sm:text-[44px]
          lg:text-[52px]
        "
      >
        {title}
      </h2>

      {sub && (
        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-[15px]
            leading-relaxed
            text-[#94A3B8]

            sm:text-base
          "
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   SHARED PREVIEW STYLE
========================================================= */

const previewShell =
  "rounded-2xl border border-white/[0.07] bg-[#080D19]/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]";

/* =========================================================
   ATS SCORE PREVIEW
========================================================= */

function ScoreBarsPreview() {
  const bars = [
    { label: "Keywords", value: 88 },
    { label: "Format", value: 74 },
    { label: "Impact", value: 91 },
    { label: "Readability", value: 82 },
  ];

  return (
    <div className={previewShell}>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <div
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-[#64748B]
            "
          >
            Score breakdown
          </div>

          <div
            className="
              mt-1
              font-display
              text-[27px]
              font-semibold
              tracking-tight
              text-[#F8FAFC]
            "
          >
            86
            <span className="ml-0.5 text-xs font-medium text-[#64748B]">
              /100
            </span>
          </div>
        </div>

        <div
          className="
            rounded-full
            border
            border-cyan-400/15
            bg-cyan-400/[0.08]
            px-2
            py-1

            text-[10px]
            font-semibold
            text-cyan-300
          "
        >
          +18 pts
        </div>
      </div>

      <div className="space-y-2.5">
        {bars.map((bar, index) => (
          <div key={bar.label}>
            <div
              className="
                mb-1.5
                flex
                justify-between
                text-[11px]
                text-[#7C8AA0]
              "
            >
              <span>{bar.label}</span>

              <span className="font-semibold text-[#CBD5E1]">
                {bar.value}
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.value}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.1 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  via-indigo-500
                  to-cyan-400
                "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   AI REWRITE PREVIEW
========================================================= */

function RewritePreview() {
  return (
    <div className={`${previewShell} space-y-2`}>
      {/* Before */}
      <div
        className="
          rounded-xl
          border
          border-white/[0.06]
          bg-white/[0.025]
          p-3
        "
      >
        <div
          className="
            mb-1
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-[#64748B]
          "
        >
          Before
        </div>

        <div
          className="
            text-[12px]
            leading-snug
            text-[#64748B]
            line-through
            decoration-[#FF7A59]/60
          "
        >
          Worked on backend stuff
        </div>
      </div>

      {/* After */}
      <div
        className="
          rounded-xl
          border
          border-violet-400/15
          bg-gradient-to-br
          from-violet-500/[0.12]
          to-indigo-500/[0.07]
          p-3
        "
      >
        <div
          className="
            mb-1
            flex
            items-center
            gap-1
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.13em]
            text-violet-300
          "
        >
          <Sparkles size={9} />
          AI improved
        </div>

        <div className="text-[12px] leading-snug text-[#E2E8F0]">
          Built 6 Node services handling 4.2M req/day at p99 &lt;120ms.
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   KEYWORDS PREVIEW
========================================================= */

function KeywordsPreview() {
  const matched = ["React", "TypeScript", "Node.js"];
  const missing = ["GraphQL", "Docker"];

  return (
    <div className={previewShell}>
      <div
        className="
          mb-3
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.11em]
          text-[#64748B]
        "
      >
        Senior Frontend @ Stripe
      </div>

      <div className="mb-2">
        <div className="mb-1.5 text-[9px] font-medium text-[#64748B]">
          Matched
        </div>

        <div className="flex flex-wrap gap-1.5">
          {matched.map((keyword) => (
            <span
              key={keyword}
              className="
                rounded-full
                border
                border-cyan-400/15
                bg-cyan-400/[0.08]
                px-2
                py-0.5

                text-[10px]
                font-semibold
                text-cyan-300
              "
            >
              ✓ {keyword}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-1.5 text-[9px] font-medium text-[#64748B]">
          Missing
        </div>

        <div className="flex flex-wrap gap-1.5">
          {missing.map((keyword) => (
            <span
              key={keyword}
              className="
                rounded-full
                border
                border-[#FF7A59]/15
                bg-[#FF7A59]/[0.08]
                px-2
                py-0.5

                text-[10px]
                font-semibold
                text-[#FF9A80]
              "
            >
              + {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   VERSIONS PREVIEW
========================================================= */

function VersionsPreview() {
  const versions = [
    { label: "V1", score: 62 },
    { label: "V2", score: 78 },
    { label: "V3", score: 86 },
  ];

  return (
    <div className={`${previewShell} flex items-center gap-2`}>
      {versions.map((version, index) => {
        const active = index === versions.length - 1;

        return (
          <div
            key={version.label}
            className={`
              relative
              flex-1
              overflow-hidden
              rounded-xl
              border
              p-2.5
              transition-colors

              ${
                active
                  ? "border-violet-400/25 bg-violet-500/[0.10]"
                  : "border-white/[0.06] bg-white/[0.025]"
              }
            `}
          >
            {active && (
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-violet-400/70
                  to-transparent
                "
              />
            )}

            <div
              className={`
                text-[9px]
                font-semibold
                uppercase
                tracking-wide

                ${
                  active
                    ? "text-violet-300"
                    : "text-[#64748B]"
                }
              `}
            >
              {version.label}
            </div>

            <div
              className="
                mt-0.5
                font-display
                text-[20px]
                font-semibold
                tracking-tight
                text-[#F8FAFC]
              "
            >
              {version.score}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   DIFF PREVIEW
========================================================= */

function DiffPreview() {
  return (
    <div
      className={`
        ${previewShell}
        space-y-1.5
        font-mono
        text-[11px]
      `}
    >
      {/* Removed */}
      <div
        className="
          flex
          gap-2
          rounded-lg
          border
          border-[#FF7A59]/10
          bg-[#FF7A59]/[0.06]
          px-2
          py-1.5
        "
      >
        <span className="w-3 font-bold text-[#FF7A59]">−</span>

        <span
          className="
            text-[#7C8AA0]
            line-through
            decoration-[#FF7A59]/60
          "
        >
          helped team
        </span>
      </div>

      {/* Added */}
      <div
        className="
          flex
          gap-2
          rounded-lg
          border
          border-cyan-400/10
          bg-cyan-400/[0.055]
          px-2
          py-1.5
        "
      >
        <span className="w-3 font-bold text-cyan-300">+</span>

        <span className="text-[#CBD5E1]">
          led 4-person frontend pod
        </span>
      </div>

      {/* Added */}
      <div
        className="
          flex
          gap-2
          rounded-lg
          border
          border-cyan-400/10
          bg-cyan-400/[0.055]
          px-2
          py-1.5
        "
      >
        <span className="w-3 font-bold text-cyan-300">+</span>

        <span className="text-[#CBD5E1]">
          shipped 12 features in Q3
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   ANALYTICS CHART PREVIEW
========================================================= */

function ChartPreview() {
  const points = [42, 58, 51, 67, 74, 81, 86];

  const max = 100;
  const width = 320;
  const height = 90;

  const stepX = width / (points.length - 1);

  const path = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${index * stepX} ${
          height - (point / max) * height
        }`,
    )
    .join(" ");

  const area = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <div className={previewShell}>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-[#64748B]
            "
          >
            Score over 7 iterations
          </div>

          <div
            className="
              mt-1
              font-display
              text-[27px]
              font-semibold
              tracking-tight
              text-[#F8FAFC]
            "
          >
            86
          </div>
        </div>

        <div
          className="
            rounded-full
            border
            border-violet-400/15
            bg-violet-400/[0.08]
            px-2
            py-1

            text-[10px]
            font-semibold
            text-violet-300
          "
        >
          +44 since V1
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-[90px] w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id="featureAreaGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#7C5CFF"
              stopOpacity="0.32"
            />

            <stop
              offset="100%"
              stopColor="#7C5CFF"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="featureLineGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#7C5CFF" />
            <stop offset="55%" stopColor="#4F7CFF" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>

        {/* Horizontal guidelines */}
        {[25, 50, 75].map((value) => (
          <line
            key={value}
            x1="0"
            x2={width}
            y1={height - (value / max) * height}
            y2={height - (value / max) * height}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}

        <path
          d={area}
          fill="url(#featureAreaGradient)"
        />

        <motion.path
          d={path}
          fill="none"
          stroke="url(#featureLineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Last point */}
        <circle
          cx={width}
          cy={height - (points[points.length - 1] / max) * height}
          r="4"
          fill="#22D3EE"
          stroke="#0A0F1D"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   PDF PREVIEW
========================================================= */

function PdfPreview() {
  return (
    <div
      className={`
        ${previewShell}
        flex
        min-h-[170px]
        items-center
        justify-center
      `}
    >
      <motion.div
        whileHover={{
          rotate: 0,
          y: -3,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          h-[145px]
          w-[120px]
          rotate-[-3deg]
          rounded-lg
          border
          border-white/20
          bg-[#F8FAFC]
          p-3

          shadow-[0_14px_35px_rgba(0,0,0,0.28)]
        "
      >
        {/* Fold */}
        <div
          className="
            absolute
            right-0
            top-0
            h-5
            w-5
            rounded-bl-md
            bg-[#E5E7EB]
          "
        />

        {/* Name */}
        <div className="h-1.5 w-12 rounded-full bg-[#111827]" />

        <div className="mt-1.5 h-1 w-16 rounded-full bg-[#CBD5E1]" />

        {/* Section */}
        <div className="mt-3 h-1 w-10 rounded-full bg-[#7C5CFF]" />

        <div className="mt-2 space-y-1.5">
          {[15, 12, 16, 10].map((itemWidth, index) => (
            <div
              key={index}
              className="h-[2px] rounded-full bg-[#CBD5E1]"
              style={{
                width: `${itemWidth * 5}px`,
              }}
            />
          ))}
        </div>

        {/* Another section */}
        <div className="mt-3 h-1 w-9 rounded-full bg-[#4F7CFF]" />

        <div className="mt-2 space-y-1.5">
          {[14, 10, 13].map((itemWidth, index) => (
            <div
              key={index}
              className="h-[2px] rounded-full bg-[#CBD5E1]"
              style={{
                width: `${itemWidth * 5}px`,
              }}
            />
          ))}
        </div>

        {/* PDF badge */}
        <div
          className="
            absolute
            -bottom-2
            -right-3
            rounded-full
            border
            border-[#FF7A59]/20
            bg-[#FF7A59]
            px-2
            py-0.5
            text-[8px]
            font-bold
            text-white

            shadow-[0_5px_16px_rgba(255,122,89,0.25)]
          "
        >
          PDF
        </div>
      </motion.div>
    </div>
  );
}