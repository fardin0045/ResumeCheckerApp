import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const RADIUS = 78;
const ARC = Math.PI * RADIUS;

const SCORE = 86;
const PCT = SCORE / 100;

export function HeroDashboardPreview() {
  return (
    <div
      className="
        relative
        h-[470px]
        w-full
        sm:h-[530px]
        lg:h-[550px]
      "
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-[360px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.14]
          blur-[85px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[2%]
          top-[36%]
          h-[220px]
          w-[220px]
          rounded-full
          bg-cyan-400/[0.06]
          blur-[70px]
        "
      />

      {/* =====================================================
          MAIN ATS SCORE CARD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 26,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.75,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          left-1/2
          top-7
          z-20

          w-[280px]
          -translate-x-1/2

          overflow-hidden
          rounded-[24px]

          border
          border-white/[0.08]

          p-5

          shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75)]

          sm:w-[310px]
        "
        style={{
          background:
            "linear-gradient(155deg, rgba(18,26,48,0.98) 0%, rgba(10,15,29,0.98) 52%, rgba(7,10,19,0.99) 100%)",
          boxShadow:
            "0 28px 70px -18px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Top violet glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-48
            w-48
            rounded-full
            bg-violet-500/[0.18]
            blur-3xl
          "
        />

        {/* Top border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[16%]
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-violet-400/60
            to-transparent
          "
        />

        {/* Header */}
        <div className="relative mb-3 flex items-start justify-between gap-3">
          <div>
            <div
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#64748B]
              "
            >
              ATS Readiness
            </div>

            <div
              className="
                mt-1
                text-[11px]
                font-medium
                text-[#94A3B8]
              "
            >
              Senior_Frontend.pdf
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
              bg-cyan-400/[0.08]

              px-2
              py-1

              text-[9px]
              font-semibold
              text-cyan-300
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_8px_rgba(34,211,238,0.85)]
              "
            />

            Strong
          </div>
        </div>

        {/* =================================================
            GAUGE
        ================================================= */}

        <div className="relative mx-auto w-[205px]">
          <svg
            viewBox="0 0 200 120"
            className="block h-auto w-full"
          >
            <defs>
              <linearGradient
                id="heroArcGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#7C5CFF"
                />

                <stop
                  offset="55%"
                  stopColor="#4F7CFF"
                />

                <stop
                  offset="100%"
                  stopColor="#22D3EE"
                />
              </linearGradient>

              <filter
                id="heroArcGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur
                  stdDeviation="3"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Track */}
            <path
              d={`M 22 105 A ${RADIUS} ${RADIUS} 0 0 1 178 105`}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* Score */}
            <motion.path
              d={`M 22 105 A ${RADIUS} ${RADIUS} 0 0 1 178 105`}
              fill="none"
              stroke="url(#heroArcGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={ARC}
              filter="url(#heroArcGlow)"
              initial={{
                strokeDashoffset: ARC,
              }}
              animate={{
                strokeDashoffset: ARC - ARC * PCT,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </svg>

          {/* Score text */}
          <div
            className="
              absolute
              inset-x-0
              top-[47%]
              flex
              flex-col
              items-center
            "
          >
            <div
              className="
                font-display
                text-[44px]
                font-semibold
                leading-none
                tracking-[-0.045em]
                text-[#F8FAFC]
              "
            >
              {SCORE}
            </div>

            <div
              className="
                mt-1
                text-[10px]
                font-medium
                text-[#64748B]
              "
            >
              out of 100
            </div>
          </div>
        </div>

        {/* Improvement */}
        <div className="relative mt-3 flex items-center justify-center">
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
              tabular-nums
              text-violet-300
            "
          >
            <TrendingUp
              size={10}
              strokeWidth={2.5}
            />

            +18 vs V1
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          ISSUES CARD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -28,
          y: 12,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          bottom-10
          left-0
          z-30

          w-[220px]
          overflow-hidden
          rounded-[19px]

          border
          border-white/[0.075]

          p-4
          backdrop-blur-xl

          sm:-left-2
          sm:w-[235px]
          lg:-left-5
        "
        style={{
          background:
            "linear-gradient(155deg, rgba(15,22,40,0.95) 0%, rgba(8,13,25,0.97) 100%)",
          boxShadow:
            "0 24px 60px -18px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.045)",
        }}
      >
        {/* Coral glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-10
            -top-12
            h-32
            w-32
            rounded-full
            bg-[#FF7A59]/[0.09]
            blur-3xl
          "
        />

        <div className="relative mb-3 flex items-center gap-2">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg

              border
              border-[#FF7A59]/15
              bg-[#FF7A59]/[0.09]

              text-[#FF8A6D]
            "
          >
            <AlertCircle size={12} />
          </div>

          <div
            className="
              text-[11px]
              font-semibold
              text-[#F8FAFC]
            "
          >
            Top issues
          </div>

          <div
            className="
              ml-auto
              rounded-full
              bg-white/[0.04]
              px-2
              py-0.5
              text-[9px]
              font-semibold
              tabular-nums
              text-[#64748B]
            "
          >
            5 found
          </div>
        </div>

        {[
          {
            label: "Weak action verbs",
            color: "#FF7A59",
          },
          {
            label: "Missing keywords: React, AWS",
            color: "#F6B85A",
          },
          {
            label: "Inconsistent dates",
            color: "#7C5CFF",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              x: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.7 + index * 0.1,
              duration: 0.4,
            }}
            className="
              relative
              flex
              items-center
              gap-2
              border-b
              border-white/[0.035]
              py-2
              last:border-0
            "
          >
            <div
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{
                background: item.color,
                boxShadow: `0 0 7px ${item.color}60`,
              }}
            />

            <div
              className="
                truncate
                text-[10.5px]
                font-medium
                text-[#94A3B8]
              "
            >
              {item.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* =====================================================
          AI REWRITE CARD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 28,
          y: 12,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          bottom-3
          right-0
          z-40

          w-[250px]
          overflow-hidden
          rounded-[19px]

          border
          border-white/[0.075]

          p-4
          backdrop-blur-xl

          sm:-right-2
          sm:w-[270px]
          lg:-right-5
        "
        style={{
          background:
            "linear-gradient(155deg, rgba(15,22,40,0.96) 0%, rgba(8,13,25,0.98) 100%)",
          boxShadow:
            "0 26px 65px -18px rgba(0,0,0,0.82), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Violet atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-40
            w-40
            rounded-full
            bg-violet-500/[0.12]
            blur-3xl
          "
        />

        {/* Header */}
        <div className="relative mb-3 flex items-center gap-2">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg

              border
              border-violet-400/15
              bg-violet-400/[0.09]

              text-violet-300
            "
          >
            <Sparkles size={12} />
          </div>

          <div
            className="
              text-[11px]
              font-semibold
              text-[#F8FAFC]
            "
          >
            AI rewrite
          </div>

          <div
            className="
              ml-auto
              inline-flex
              items-center
              gap-1
              rounded-full

              border
              border-cyan-400/15
              bg-cyan-400/[0.07]

              px-1.5
              py-0.5

              text-[8.5px]
              font-semibold
              text-cyan-300
            "
          >
            <CheckCircle2 size={9} />
            improved
          </div>
        </div>

        {/* Before */}
        <div
          className="
            relative
            mb-1.5
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
            relative
            text-[11px]
            leading-snug
            text-[#64748B]
            line-through
            decoration-[#FF7A59]/50
          "
        >
          Worked on dashboards for the team
        </div>

        {/* Transformation */}
        <div
          className="
            relative
            my-2.5
            flex
            items-center
            gap-1.5
          "
        >
          <ArrowRight
            size={11}
            className="text-violet-400"
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-violet-300
            "
          >
            Improved
          </span>
        </div>

        {/* After */}
        <div
          className="
            relative
            rounded-xl

            border
            border-violet-400/15

            bg-gradient-to-br
            from-violet-500/[0.09]
            to-indigo-500/[0.04]

            p-3

            text-[11px]
            leading-[1.55]
            text-[#E2E8F0]
          "
        >
          Shipped 4 React analytics dashboards used by 12k+ users,
          cutting load time 38%.
        </div>
      </motion.div>

      {/* =====================================================
          FLOATING KEYWORD PILLS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          right-0
          top-1
          z-30

          hidden
          flex-col
          items-end
          gap-1.5

          sm:flex
          sm:right-4
        "
      >
        {["React", "TypeScript", "AWS"].map((keyword, index) => (
          <motion.div
            key={keyword}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className="
              rounded-full

              border
              border-white/[0.08]

              bg-[#0D1425]/80

              px-2.5
              py-1

              text-[9.5px]
              font-semibold
              text-[#CBD5E1]

              shadow-[0_8px_22px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
            "
          >
            <span className="mr-0.5 text-cyan-300">+</span>
            {keyword}
          </motion.div>
        ))}
      </motion.div>

      {/* =====================================================
          DECORATIVE FLOATING DOTS
      ===================================================== */}

      <motion.div
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
          left-[13%]
          top-[14%]
          hidden
          h-1.5
          w-1.5
          rounded-full
          bg-violet-300

          shadow-[0_0_12px_rgba(196,181,253,0.8)]

          sm:block
        "
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 7, 0],
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
          right-[12%]
          top-[44%]
          hidden
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300

          shadow-[0_0_12px_rgba(34,211,238,0.75)]

          sm:block
        "
      />
    </div>
  );
}