import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import AILogo from "@/components/layout/AILogo";

/**
 * Infinite horizontal marquee of product preview cards.
 * The list is rendered twice and moved by 50% so the
 * second copy seamlessly replaces the first.
 */
export function BrandCardMarquee() {
  const CARDS = [
    AtsScoreCard,
    ScoreEvolutionCard,
    TopIssuesCard,
    RewriteCard,
    KeywordsCard,
    StrengthsCard,
  ];

  const tilts = [-2, 1.5, -1, 2, -1.5, 1];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex w-max gap-5 py-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...CARDS, ...CARDS].map((Card, i) => (
          <div
            key={i}
            className="shrink-0"
            style={{
              transform: `rotate(${tilts[i % tilts.length]}deg)`,
            }}
          >
            <Card />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   REUSABLE CARD
   White cards stay white intentionally
========================================================= */

function PreviewCard({ children, width = 300 }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/70
        bg-white
        p-5

        shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]
      "
      style={{ width }}
    >
      {children}
    </div>
  );
}

function Label({ children }) {
  return (
    <div
      className="
        text-[10px]
        font-semibold
        uppercase
        tracking-wider
        text-slate-400
      "
    >
      {children}
    </div>
  );
}

function Footer({ subtitle, version }) {
  return (
    <div
      className="
        mt-4
        flex
        items-center
        justify-between
        border-t
        border-slate-100
        pt-3
      "
    >
      <div className="flex items-center gap-2">
        <AILogo size={24} animated={false} />

        <span className="text-[11px] font-medium text-slate-700">
          {subtitle || "ResuMate"}
        </span>
      </div>

      {version && (
        <span className="text-[10px] tabular-nums text-slate-400">
          {version}
        </span>
      )}
    </div>
  );
}

/* =========================================================
   CARD 1 — ATS READINESS
========================================================= */

function AtsScoreCard() {
  return (
    <PreviewCard width={300}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <Label>ATS Readiness</Label>

          <div className="mt-1.5 flex items-baseline gap-1">
            <span
              className="
                text-[42px]
                font-semibold
                leading-none
                text-slate-950
              "
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.02em",
              }}
            >
              82
            </span>

            <span className="text-sm font-medium text-slate-400">
              / 100
            </span>
          </div>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-1
            rounded-full

            border
            border-violet-200

            bg-violet-50

            px-2
            py-1

            text-[10px]
            font-semibold
            text-violet-700
          "
        >
          <TrendingUp size={10} strokeWidth={2.5} />
          +12 pts
        </div>
      </div>

      <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: "82%",
            background:
              "linear-gradient(90deg, #7C5CFF 0%, #4F7CFF 55%, #22D3EE 100%)",
          }}
        />
      </div>

      <Footer subtitle="ResuMate" version="V3 of 3" />
    </PreviewCard>
  );
}

/* =========================================================
   CARD 2 — SCORE EVOLUTION
========================================================= */

function ScoreEvolutionCard() {
  const points = "0,48 60,36 120,24 180,12 240,4";
  const area = "0,60 0,48 60,36 120,24 180,12 240,4 240,60";

  return (
    <PreviewCard width={300}>
      <div className="mb-3 flex items-start justify-between">
        <div>
          <Label>Score Evolution</Label>

          <div className="mt-1.5 flex items-baseline gap-1">
            <span
              className="
                text-[28px]
                font-semibold
                leading-none
                text-slate-950
              "
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.02em",
              }}
            >
              +24
            </span>

            <span className="text-xs text-slate-400">
              pts overall
            </span>
          </div>
        </div>

        <div
          className="
            inline-flex
            items-center
            gap-1
            rounded-full

            border
            border-indigo-200

            bg-indigo-50

            px-2
            py-1

            text-[10px]
            font-semibold
            text-indigo-700
          "
        >
          V1 → V3
        </div>
      </div>

      <svg
        viewBox="0 0 240 60"
        className="h-[60px] w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="auth-score-area"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#7C5CFF"
              stopOpacity="0.28"
            />

            <stop
              offset="100%"
              stopColor="#7C5CFF"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="auth-score-line"
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

        <polygon
          points={area}
          fill="url(#auth-score-area)"
        />

        <polyline
          points={points}
          stroke="url(#auth-score-line)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {[
          [0, 48],
          [60, 36],
          [120, 24],
          [180, 12],
          [240, 4],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.5"
            fill="white"
            stroke={i === 4 ? "#22D3EE" : "#7C5CFF"}
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <div
        className="
          mt-1
          flex
          items-center
          justify-between
          text-[10px]
          tabular-nums
          text-slate-400
        "
      >
        <span>58</span>
        <span>66</span>
        <span>72</span>
        <span>78</span>

        <span className="font-semibold text-slate-900">
          82
        </span>
      </div>

      <Footer subtitle="Trend across versions" />
    </PreviewCard>
  );
}

/* =========================================================
   CARD 3 — TOP ISSUES
========================================================= */

function TopIssuesCard() {
  const issues = [
    {
      title: "Missing quantified impact",
      sev: "high",
    },
    {
      title: "Generic action verbs",
      sev: "medium",
    },
    {
      title: "No keyword density",
      sev: "high",
    },
  ];

  const TONE = {
    high: "bg-[#FFF0EC] text-[#D95F44] border border-[#FFD9CF]",
    medium: "bg-[#FFF7E8] text-[#C4872F] border border-[#FFE8B9]",
    low: "bg-slate-100 text-slate-500 border border-slate-200",
  };

  return (
    <PreviewCard width={320}>
      <div className="mb-4 flex items-start justify-between">
        <Label>Critical Issues</Label>

        <div
          className="
            inline-flex
            items-center
            gap-1
            rounded-full

            border
            border-[#FFD9CF]

            bg-[#FFF0EC]

            px-2
            py-1

            text-[10px]
            font-semibold
            text-[#D95F44]
          "
        >
          5 found
        </div>
      </div>

      <div className="space-y-2.5">
        {issues.map((issue, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl

                bg-slate-50
                text-slate-400
              "
            >
              <AlertCircle size={13} />
            </div>

            <div className="min-w-0 flex-1">
              <div
                className="
                  truncate
                  text-[13px]
                  font-medium
                  text-slate-900
                "
              >
                {issue.title}
              </div>
            </div>

            <span
              className={`
                rounded-full
                px-1.5
                py-0.5
                text-[9px]
                font-semibold
                uppercase
                tracking-wide

                ${TONE[issue.sev]}
              `}
            >
              {issue.sev}
            </span>
          </div>
        ))}
      </div>

      <Footer subtitle="Apply fixes" />
    </PreviewCard>
  );
}

/* =========================================================
   CARD 4 — AI REWRITE
========================================================= */

function RewriteCard() {
  return (
    <PreviewCard width={340}>
      <div className="mb-3 flex items-start justify-between">
        <Label>AI Rewrite</Label>

        <div
          className="
            inline-flex
            items-center
            gap-1
            rounded-full

            border
            border-violet-200

            bg-violet-50

            px-2
            py-1

            text-[10px]
            font-semibold
            text-violet-700
          "
        >
          <Sparkles size={10} strokeWidth={2.5} />
          Suggested
        </div>
      </div>

      <div className="space-y-2">
        {/* Original */}
        <div
          className="
            rounded-2xl
            border
            border-slate-100
            bg-slate-50
            p-3
          "
        >
          <div
            className="
              mb-1
              text-[9px]
              font-semibold
              uppercase
              tracking-wide
              text-slate-400
            "
          >
            Original
          </div>

          <div
            className="
              text-[12.5px]
              leading-snug
              text-slate-500
              line-through
              decoration-[#FF7A59]/50
            "
          >
            Worked with the team to deliver projects.
          </div>
        </div>

        <div className="flex justify-center text-violet-300">
          <ArrowRight size={14} />
        </div>

        {/* Rewritten */}
        <div
          className="
            rounded-2xl
            border
            border-violet-100

            bg-gradient-to-br
            from-violet-50
            via-indigo-50
            to-cyan-50

            p-3
          "
        >
          <div
            className="
              mb-1
              text-[9px]
              font-semibold
              uppercase
              tracking-wide
              text-violet-700
            "
          >
            Rewritten
          </div>

          <div className="text-[12.5px] leading-snug text-slate-900">
            Led 5 engineers to ship 3 features, driving a 30% lift in
            monthly retention.
          </div>
        </div>
      </div>

      <Footer subtitle="Bullet improved" />
    </PreviewCard>
  );
}

/* =========================================================
   CARD 5 — KEYWORDS
========================================================= */

function KeywordsCard() {
  const present = [
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "AWS",
  ];

  const missing = ["Kubernetes", "gRPC"];

  return (
    <PreviewCard width={320}>
      <div className="mb-3 flex items-start justify-between">
        <div>
          <Label>Keyword Match</Label>

          <div className="mt-1.5 flex items-baseline gap-1">
            <span
              className="
                text-[28px]
                font-semibold
                leading-none
                text-slate-950
              "
              style={{
                fontFamily: '"Geist", "Inter", sans-serif',
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.02em",
              }}
            >
              24
            </span>

            <span className="text-sm text-slate-400">
              / 30 matched
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {/* Present */}
        <div className="flex flex-wrap gap-1.5">
          {present.map((keyword) => (
            <span
              key={keyword}
              className="
                inline-flex
                items-center
                gap-1
                rounded-full

                border
                border-cyan-100

                bg-cyan-50

                px-2
                py-0.5

                text-[11px]
                font-medium
                text-cyan-700
              "
            >
              <Check size={9} strokeWidth={3} />
              {keyword}
            </span>
          ))}
        </div>

        {/* Missing */}
        <div className="flex flex-wrap gap-1.5">
          {missing.map((keyword) => (
            <span
              key={keyword}
              className="
                inline-flex
                items-center
                gap-1
                rounded-full

                border
                border-[#FFD9CF]

                bg-[#FFF0EC]

                px-2
                py-0.5

                text-[11px]
                font-medium
                text-[#D95F44]
              "
            >
              <X size={9} strokeWidth={3} />
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <Footer subtitle="ATS scan" />
    </PreviewCard>
  );
}

/* =========================================================
   CARD 6 — STRENGTHS
========================================================= */

function StrengthsCard() {
  const strengths = [
    {
      title: "Quantified leadership impact",
    },
    {
      title: "Strong technical depth signals",
    },
    {
      title: "Clean, scannable structure",
    },
  ];

  return (
    <PreviewCard width={310}>
      <div className="mb-4 flex items-start justify-between">
        <Label>Standout Strengths</Label>

        <div
          className="
            inline-flex
            items-center
            gap-1
            rounded-full

            border
            border-cyan-100

            bg-cyan-50

            px-2
            py-1

            text-[10px]
            font-semibold
            text-cyan-700
          "
        >
          5 total
        </div>
      </div>

      <div className="space-y-2.5">
        {strengths.map((strength, i) => (
          <div
            key={i}
            className="flex items-start gap-3"
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl

                border
                border-violet-100

                bg-gradient-to-br
                from-violet-50
                to-indigo-50

                text-violet-600
              "
            >
              <Sparkles size={13} />
            </div>

            <div className="min-w-0 flex-1">
              <div
                className="
                  text-[13px]
                  font-medium
                  text-slate-900
                "
              >
                {strength.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer subtitle="What's working" />
    </PreviewCard>
  );
}