import { motion } from "framer-motion";

const NOISE_DATA_URI =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' seed='5'/></filter><rect width='180' height='180' filter='url(%23noise)' opacity='0.9'/></svg>\")";

export function DarkPanel({
  className = "",
  children,
  glow = true,
  radius = "rounded-[32px]",
}) {
  return (
    <div
      className={`relative isolate overflow-hidden ${radius} ${className}`}
    >
      {/* Main background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              #070A13 0%,
              #0B1020 38%,
              #10162A 68%,
              #0A0E1B 100%
            )
          `,
        }}
      />

      {/* Subtle blue/violet radial depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 72% 22%,
              rgba(124,92,255,0.12) 0%,
              transparent 34%
            ),
            radial-gradient(
              circle at 24% 72%,
              rgba(79,124,255,0.08) 0%,
              transparent 30%
            )
          `,
        }}
      />

      {glow && (
        <>
          {/* Violet ambient light */}
          <motion.div
            className="
              pointer-events-none
              absolute
              -right-[180px]
              -top-[170px]
              h-[620px]
              w-[620px]
              rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, rgba(124,92,255,0.30) 0%, rgba(124,92,255,0.10) 38%, transparent 70%)",
              filter: "blur(35px)",
            }}
            animate={{
              x: [0, 24, 0],
              y: [0, 18, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Blue glow */}
          <motion.div
            className="
              pointer-events-none
              absolute
              -bottom-[230px]
              -left-[180px]
              h-[600px]
              w-[600px]
              rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, rgba(79,124,255,0.22) 0%, rgba(79,124,255,0.07) 40%, transparent 72%)",
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cyan highlight */}
          <motion.div
            className="
              pointer-events-none
              absolute
              left-[43%]
              top-[34%]
              h-[300px]
              w-[300px]
              rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
              filter: "blur(35px)",
            }}
            animate={{
              x: [0, 15, -10, 0],
              y: [0, -12, 10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 45%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 45%, transparent 95%)",
        }}
      />

      {/* Top light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(124,92,255,0.10) 0%, transparent 68%)",
        }}
      />

      {/* Animated light sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(125deg, transparent 32%, rgba(255,255,255,0.035) 50%, transparent 68%)",
          backgroundSize: "220% 220%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small violet accent */}
      <motion.div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[23%]
          hidden
          h-2
          w-2
          rounded-full
          bg-violet-400
          shadow-[0_0_16px_rgba(167,139,250,0.9)]
          lg:block
        "
        animate={{
          y: [0, -7, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small cyan accent */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[60%]
          hidden
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300
          shadow-[0_0_14px_rgba(34,211,238,0.8)]
          lg:block
        "
        animate={{
          y: [0, 8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-overlay
        "
        style={{
          backgroundImage: NOISE_DATA_URI,
        }}
      />

      {/* Soft inner shadow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 140px 10px rgba(0,0,0,0.28)",
        }}
      />

      {/* Top border glow */}
      <div
        className="
          pointer-events-none
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

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}