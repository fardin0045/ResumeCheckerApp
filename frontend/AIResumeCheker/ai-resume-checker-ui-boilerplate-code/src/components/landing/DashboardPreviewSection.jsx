import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  Gauge,
  GitCompare,
} from "lucide-react";
import { DarkPanel } from "./DarkPanel";
import { SectionHeader } from "./FeaturesSection";

const SERIES = [42, 51, 58, 67, 74, 81, 86];

export function DashboardPreviewSection() {
  return (
    <section
      id="dashboard-preview"
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
          top-0
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

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[15%]
          h-[520px]
          w-[520px]
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.055) 0%, transparent 70%)",
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
          opacity-[0.14]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 85%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-3 sm:px-6">
        <SectionHeader
          eyebrow="Inside ResuMate"
          title={
            <>
              Your resume performance.
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
                Clear at a glance.
              </span>
            </>
          }
          sub="Scores, keyword coverage, AI rewrites, issues and improvements — all in one focused workspace."
        />

        {/* Main dashboard shell */}
        <DarkPanel
          className="
            mt-12
            border
            border-white/[0.075]
            p-3
            shadow-[0_35px_100px_rgba(0,0,0,0.35)]
            sm:p-6
            lg:p-8
          "
          radius="rounded-[28px] sm:rounded-[34px]"
        >
          {/* Fake application chrome */}
          <div
            className="
              mb-5
              flex
              items-center
              justify-between
              border-b
              border-white/[0.06]
              pb-4
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A59]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
            </div>

            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.06]
                bg-white/[0.03]
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-[#64748B]
                sm:flex
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_8px_rgba(34,211,238,0.7)]
                "
              />
              resume_v4.pdf
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            {/* KPI ROW */}

            <KpiCard
              className="lg:col-span-3"
              icon={Gauge}
              label="ATS Score"
              value="86"
              suffix="/100"
              delta="+18 pts"
            />

            <KpiCard
              className="lg:col-span-3"
              icon={GitCompare}
              label="Versions"
              value="4"
              delta="+2"
            />

            <KpiCard
              className="lg:col-span-3"
              icon={AlertCircle}
              label="Issues Fixed"
              value="11"
              delta="+7"
            />

            <KpiCard
              className="lg:col-span-3"
              icon={KeyRound}
              label="Keywords Matched"
              value="24"
              suffix="/26"
              delta="+9"
              accent
            />

            {/* SCORE EVOLUTION */}

            <DarkCard className="lg:col-span-7">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#64748B]
                    "
                  >
                    Score evolution
                  </div>

                  <div
                    className="
                      mt-1
                      font-display
                      text-base
                      font-semibold
                      text-[#F8FAFC]
                    "
                  >
                    Resume performance
                  </div>
                </div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full

                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.07]

                    px-2.5
                    py-1

                    text-[10px]
                    font-semibold
                    tabular-nums
                    text-cyan-300
                  "
                >
                  <TrendingUp size={10} strokeWidth={2.5} />
                  +44 pts
                </div>
              </div>

              <div className="mb-4 flex items-end gap-2">
                <div
                  className="
                    font-display
                    text-[46px]
                    font-semibold
                    leading-none
                    tracking-[-0.045em]
                    text-[#F8FAFC]
                  "
                >
                  86
                </div>

                <div className="pb-1 text-[12px] text-[#64748B]">
                  / 100
                </div>

                <div
                  className="
                    ml-2
                    mb-1
                    rounded-full
                    border
                    border-violet-400/15
                    bg-violet-400/[0.07]
                    px-2
                    py-0.5
                    text-[9px]
                    font-semibold
                    text-violet-300
                  "
                >
                  Excellent
                </div>
              </div>

              <AreaChart />
            </DarkCard>

            {/* SCORE BREAKDOWN */}

            <DarkCard className="lg:col-span-5">
              <div
                className="
                  text-[10px]
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
                  mb-5
                  mt-1
                  font-display
                  text-base
                  font-semibold
                  text-[#F8FAFC]
                "
              >
                Where you're winning
              </div>

              {[
                { label: "Keywords", value: 88 },
                { label: "Format & ATS parsing", value: 74 },
                { label: "Impact statements", value: 91 },
                { label: "Readability", value: 82 },
                { label: "Action verbs", value: 79 },
              ].map((item, index) => (
                <div key={item.label} className="mb-3.5 last:mb-0">
                  <div
                    className="
                      mb-1.5
                      flex
                      justify-between
                      text-[11px]
                      text-[#7C8AA0]
                    "
                  >
                    <span>{item.label}</span>

                    <span className="font-semibold tabular-nums text-[#CBD5E1]">
                      {item.value}
                    </span>
                  </div>

                  <div
                    className="
                      h-1.5
                      overflow-hidden
                      rounded-full
                      bg-white/[0.055]
                    "
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${item.value}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.1 + index * 0.05,
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
            </DarkCard>

            {/* AI BULLET REWRITE */}

            <DarkCard className="lg:col-span-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#64748B]
                    "
                  >
                    Bullet rewrite
                  </div>

                  <div
                    className="
                      mt-1
                      font-display
                      text-base
                      font-semibold
                      text-[#F8FAFC]
                    "
                  >
                    Make every bullet count
                  </div>
                </div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full

                    border
                    border-violet-400/15
                    bg-violet-400/[0.08]

                    px-2.5
                    py-1

                    text-[10px]
                    font-semibold
                    text-violet-300
                  "
                >
                  <Sparkles size={10} />
                  AI rewrite
                </div>
              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  items-center
                  gap-3
                  md:grid-cols-[1fr_32px_1fr]
                "
              >
                {/* Original */}
                <div
                  className="
                    rounded-xl
                    border
                    border-[#FF7A59]/10
                    bg-[#FF7A59]/[0.035]
                    p-4
                  "
                >
                  <div
                    className="
                      mb-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#FF9A80]
                    "
                  >
                    Original
                  </div>

                  <div
                    className="
                      text-[12.5px]
                      leading-relaxed
                      text-[#94A3B8]
                    "
                  >
                    Built dashboards for the analytics team
                  </div>
                </div>

                <div className="flex justify-center text-violet-400/60">
                  <ArrowRight size={17} />
                </div>

                {/* Rewrite */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-violet-400/20

                    bg-gradient-to-br
                    from-violet-500/[0.12]
                    to-indigo-500/[0.06]

                    p-4
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -right-8
                      -top-8
                      h-20
                      w-20
                      rounded-full
                      bg-violet-400/10
                      blur-2xl
                    "
                  />

                  <div
                    className="
                      relative
                      mb-1.5
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
                    Improved
                  </div>

                  <div
                    className="
                      relative
                      text-[12.5px]
                      leading-relaxed
                      text-[#F1F5F9]
                    "
                  >
                    Shipped 4 React dashboards adopted by 12k users — cut
                    load time 38%.
                  </div>
                </div>
              </div>
            </DarkCard>

            {/* ISSUES / STRENGTHS */}

            <DarkCard className="lg:col-span-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Issues */}
                <div>
                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      gap-1.5
                      text-[#FF8A6D]
                    "
                  >
                    <AlertCircle size={12} />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                      "
                    >
                      Issues
                    </span>

                    <span
                      className="
                        ml-auto
                        rounded-full
                        bg-[#FF7A59]/10
                        px-1.5
                        py-0.5
                        text-[9px]
                        font-bold
                      "
                    >
                      3
                    </span>
                  </div>

                  {[
                    "Weak verbs",
                    "Missing keywords",
                    "Inconsistent dates",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        border-b
                        border-white/[0.045]
                        py-2
                        text-[11.5px]
                        text-[#94A3B8]
                        last:border-0
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Strengths */}
                <div>
                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      gap-1.5
                      text-cyan-300
                    "
                  >
                    <CheckCircle2 size={12} />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                      "
                    >
                      Strengths
                    </span>

                    <span
                      className="
                        ml-auto
                        rounded-full
                        bg-cyan-400/[0.08]
                        px-1.5
                        py-0.5
                        text-[9px]
                        font-bold
                      "
                    >
                      3
                    </span>
                  </div>

                  {[
                    "Quantified outcomes",
                    "Clean structure",
                    "Strong action verbs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        border-b
                        border-white/[0.045]
                        py-2
                        text-[11.5px]
                        text-[#94A3B8]
                        last:border-0
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </DarkCard>
          </div>
        </DarkPanel>
      </div>
    </section>
  );
}

/* =========================================================
   DASHBOARD CARD
========================================================= */

function DarkCard({ className = "", children }) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        relative
        overflow-hidden
        rounded-2xl

        border
        border-white/[0.07]

        bg-[#090F1E]/80

        p-5

        shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]

        transition-colors
        duration-300

        hover:border-white/[0.11]

        ${className}
      `}
    >
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
          via-violet-400/20
          to-transparent
        "
      />

      <div className="relative">{children}</div>
    </motion.div>
  );
}

/* =========================================================
   KPI CARD
========================================================= */

function KpiCard({
  className = "",
  icon: Icon,
  label,
  value,
  suffix,
  delta,
  accent = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        p-5

        ${
          accent
            ? `
              border-violet-400/20
              bg-gradient-to-br
              from-violet-500/[0.16]
              via-indigo-500/[0.10]
              to-[#0B1120]
            `
            : `
              border-white/[0.07]
              bg-[#090F1E]/80
            `
        }

        ${className}
      `}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-28
          w-28
          rounded-full
          bg-violet-500/10
          blur-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative mb-4 flex items-center gap-2">
        <div
          className={`
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            border

            ${
              accent
                ? `
                  border-violet-300/20
                  bg-violet-400/15
                  text-violet-200
                `
                : `
                  border-violet-400/15
                  bg-violet-400/[0.08]
                  text-violet-300
                `
            }
          `}
        >
          <Icon size={13} strokeWidth={2.1} />
        </div>

        <span className="text-[11px] font-medium text-[#7C8AA0]">
          {label}
        </span>
      </div>

      <div className="relative flex items-baseline gap-1">
        <span
          className="
            font-display
            text-[32px]
            font-semibold
            leading-none
            tracking-[-0.035em]
            text-[#F8FAFC]
          "
        >
          {value}
        </span>

        {suffix && (
          <span className="text-[11px] font-medium text-[#64748B]">
            {suffix}
          </span>
        )}
      </div>

      {delta && (
        <div
          className="
            relative
            mt-3
            inline-flex
            items-center
            gap-1
            rounded-full

            border
            border-cyan-400/10
            bg-cyan-400/[0.06]

            px-2
            py-0.5

            text-[9px]
            font-semibold
            tabular-nums
            text-cyan-300
          "
        >
          <TrendingUp size={9} />
          {delta}
        </div>
      )}
    </motion.div>
  );
}

/* =========================================================
   AREA CHART
========================================================= */

function AreaChart() {
  const width = 600;
  const height = 140;

  const stepX = width / (SERIES.length - 1);

  const path = SERIES.map(
    (point, index) =>
      `${index === 0 ? "M" : "L"} ${index * stepX} ${
        height - (point / 100) * height
      }`,
  ).join(" ");

  const area = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-[140px] w-full overflow-visible"
    >
      <defs>
        <linearGradient
          id="dashboardAreaGradient"
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
            offset="55%"
            stopColor="#4F7CFF"
            stopOpacity="0.12"
          />

          <stop
            offset="100%"
            stopColor="#22D3EE"
            stopOpacity="0"
          />
        </linearGradient>

        <linearGradient
          id="dashboardLineGradient"
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

      {/* Grid lines */}
      {[25, 50, 75].map((value) => {
        const y = height - (value / 100) * height;

        return (
          <line
            key={value}
            x1="0"
            x2={width}
            y1={y}
            y2={y}
            stroke="rgba(255,255,255,0.045)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        );
      })}

      {/* Area */}
      <motion.path
        d={area}
        fill="url(#dashboardAreaGradient)"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
        }}
      />

      {/* Line */}
      <motion.path
        d={path}
        fill="none"
        stroke="url(#dashboardLineGradient)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
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
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Points */}
      {SERIES.map((point, index) => {
        const x = index * stepX;
        const y = height - (point / 100) * height;
        const isLast = index === SERIES.length - 1;

        return (
          <g key={index}>
            {isLast && (
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="rgba(34,211,238,0.12)"
              />
            )}

            <circle
              cx={x}
              cy={y}
              r={isLast ? 4 : 3}
              fill="#090F1E"
              stroke={isLast ? "#22D3EE" : "#7C5CFF"}
              strokeWidth="2"
            />
          </g>
        );
      })}
    </svg>
  );
}