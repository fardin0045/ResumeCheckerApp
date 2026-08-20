import { motion } from "framer-motion";

const AILogo = ({
  size = 48,
  animated = true,
  className = "",
}) => {
  const innerSize = size * 0.78;

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
      aria-label="ResuMate AI"
      role="img"
    >
      {/* =====================================================
          SOFT AMBIENT GLOW
      ===================================================== */}
      <motion.div
        className="absolute rounded-[30%] pointer-events-none"
        style={{
          inset: "-10%",
          background:
            "radial-gradient(circle, rgba(124,92,255,0.38) 0%, rgba(79,124,255,0.16) 40%, transparent 72%)",
          filter: "blur(10px)",
        }}
        animate={
          animated
            ? {
                opacity: [0.45, 0.8, 0.45],
                scale: [0.92, 1.08, 0.92],
              }
            : undefined
        }
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          ROTATING GRADIENT BORDER
      ===================================================== */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: size * 0.28,
        }}
      >
        <motion.div
          className="absolute"
          style={{
            inset: "-55%",
            background:
              "conic-gradient(from 0deg, #7C5CFF, #4F7CFF, #22D3EE, #7C5CFF, #4F7CFF)",
          }}
          animate={
            animated
              ? {
                  rotate: 360,
                }
              : undefined
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* =====================================================
          INNER DARK TILE
      ===================================================== */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          width: innerSize,
          height: innerSize,
          borderRadius: size * 0.22,
          background:
            "linear-gradient(145deg, #11182B 0%, #0A0F1D 55%, #070A13 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.10), 0 8px 24px rgba(7,10,19,0.22)",
        }}
      >
        {/* Internal violet atmosphere */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "90%",
            height: "90%",
            top: "-35%",
            right: "-28%",
            background:
              "radial-gradient(circle, rgba(124,92,255,0.35) 0%, transparent 70%)",
            filter: "blur(7px)",
          }}
          animate={
            animated
              ? {
                  opacity: [0.45, 0.85, 0.45],
                  x: [0, -2, 0],
                  y: [0, 2, 0],
                }
              : undefined
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ===================================================
            RESUMate MARK
        =================================================== */}
        <svg
          viewBox="0 0 40 40"
          width="68%"
          height="68%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <linearGradient
              id="resuMateLogoGradient"
              x1="8"
              y1="6"
              x2="32"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="45%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>

            <linearGradient
              id="resuMateLineGradient"
              x1="10"
              y1="20"
              x2="28"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7C5CFF" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>

          {/* Document shape */}
          <motion.path
            d="
              M12 7.5
              H23.5
              L29 13
              V30
              C29 31.7 27.7 33 26 33
              H12
              C10.3 33 9 31.7 9 30
              V10.5
              C9 8.8 10.3 7.5 12 7.5Z
            "
            stroke="url(#resuMateLogoGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={
              animated
                ? {
                    opacity: [0.85, 1, 0.85],
                  }
                : undefined
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Fold */}
          <path
            d="M23 8V13.5H28.5"
            stroke="#A5B4FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Resume lines */}
          <motion.path
            d="M13 19H24"
            stroke="url(#resuMateLineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={
              animated
                ? {
                    pathLength: [0.35, 1, 0.35],
                    opacity: [0.55, 1, 0.55],
                  }
                : undefined
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <path
            d="M13 23.5H21"
            stroke="#64748B"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M13 27.5H19"
            stroke="#475569"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* AI sparkle */}
          <motion.g
            style={{
              transformOrigin: "28px 25px",
            }}
            animate={
              animated
                ? {
                    scale: [0.9, 1.15, 0.9],
                    rotate: [0, 12, 0],
                  }
                : undefined
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="
                M28 20.5
                C28.4 23.2 29.8 24.6 32.5 25
                C29.8 25.4 28.4 26.8 28 29.5
                C27.6 26.8 26.2 25.4 23.5 25
                C26.2 24.6 27.6 23.2 28 20.5Z
              "
              fill="#22D3EE"
            />

            <circle
              cx="28"
              cy="25"
              r="1.5"
              fill="#E0F2FE"
            />
          </motion.g>
        </svg>

        {/* ===================================================
            MOVING SCAN LINE
        =================================================== */}
        <motion.div
          className="absolute left-[17%] right-[17%] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.9), transparent)",
            boxShadow: "0 0 8px rgba(34,211,238,0.7)",
          }}
          animate={
            animated
              ? {
                  top: ["24%", "73%", "24%"],
                  opacity: [0, 0.9, 0],
                }
              : undefined
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tiny highlight */}
        <div
          className="absolute left-[18%] top-[15%] h-[2px] w-[26%] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.25), transparent)",
          }}
        />
      </div>

      {/* =====================================================
          ONLINE DOT
      ===================================================== */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          right: -size * 0.01,
          bottom: size * 0.03,
          width: size * 0.18,
          height: size * 0.18,
          background: "#080D19",
          border: `${Math.max(1, size * 0.025)}px solid rgba(255,255,255,0.12)`,
        }}
      >
        <motion.span
          className="block rounded-full"
          style={{
            width: "45%",
            height: "45%",
            background: "#22D3EE",
            boxShadow: "0 0 7px rgba(34,211,238,0.95)",
          }}
          animate={
            animated
              ? {
                  opacity: [0.55, 1, 0.55],
                }
              : undefined
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default AILogo;