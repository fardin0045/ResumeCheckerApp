import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BrandCardMarquee } from "./BrandCardMarquee";

const NOISE_DATA_URI =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='3'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.9'/></svg>\")";

/* =========================================================
   AUTH SHELL
========================================================= */

export function AuthShell({ children, headline, subhead }) {
  return (
    <div className="min-h-screen flex bg-[var(--bg)] p-3 sm:p-4 gap-0 lg:gap-4">
      {/* Left — form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-10">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>

      {/* Right — brand panel */}
      <BrandPanel headline={headline} subhead={subhead} />
    </div>
  );
}

/* =========================================================
   RIGHT BRAND PANEL
   ONLY THIS SIDE USES THE NEW THEME
========================================================= */

function BrandPanel({ headline, subhead }) {
  return (
    <div className="hidden lg:block flex-1 relative rounded-[28px] overflow-hidden isolate">
      {/* Main dark background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(140deg, #070A13 0%, #0B1020 38%, #10162A 72%, #080C18 100%)",
        }}
      />

      {/* Violet glow */}
      <motion.div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.32) 0%, rgba(124,92,255,0.10) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Indigo / blue glow */}
      <motion.div
        className="absolute -bottom-40 -left-32 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,124,255,0.28) 0%, rgba(79,124,255,0.08) 42%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -30, 0],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small cyan glow */}
      <motion.div
        className="absolute bottom-[12%] right-[12%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
        animate={{
          x: [0, 12, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft purple light in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 60% 32%, rgba(124,92,255,0.10) 0%, transparent 38%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.2,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Animated sheen */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: NOISE_DATA_URI,
        }}
      />

      {/* Inner shadow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 120px 20px rgba(0,0,0,0.35)",
        }}
      />

      {/* Top violet highlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.55), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-10 xl:pt-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="px-10 xl:px-16"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
            style={{
              background: "rgba(124,92,255,0.10)",
              border: "1px solid rgba(167,139,250,0.20)",
            }}
          >
            <Sparkles
              size={12}
              style={{
                color: "#C4B5FD",
              }}
            />

            <span
              className="text-[11px] tracking-wide uppercase font-semibold"
              style={{
                color: "#DDD6FE",
              }}
            >
              AI ResuMate
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-serif text-[44px] xl:text-[60px] leading-[1.02] text-white mt-8 max-w-[540px]"
            style={{
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            {headline}
          </h2>

          {/* Subheading */}
          <p
            className="text-base xl:text-lg mt-6 max-w-md leading-relaxed"
            style={{
              color: "#94A3B8",
            }}
          >
            {subhead}
          </p>
        </motion.div>

        {/* Existing cards / marquee */}
        <div className="pb-8 xl:pb-0">
          <BrandCardMarquee />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   AUTH FIELD
   UNCHANGED
========================================================= */

export function AuthField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  extra,
  autoComplete,
  required = true,
  minLength,
  icon: Icon,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-[var(--ink)]">
          {label}
        </label>

        {extra}
      </div>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          minLength={minLength}
          className={`peer w-full h-12 ${
            Icon ? "pl-11 pr-4" : "px-4"
          } rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[15px] text-[var(--ink)] placeholder:text-[var(--ink-muted)]/60 outline-none transition-all duration-200 focus:border-[var(--accent)]/40 focus:ring-4 focus:ring-[var(--accent)]/10`}
        />

        {Icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]/55 peer-focus:text-[var(--accent-strong)] peer-[:not(:placeholder-shown)]:text-[var(--accent-strong)] transition-colors">
            <Icon size={16} strokeWidth={2} />
          </div>
        )}
      </div>
    </div>
  );
}
export function AuthPrimaryButton({
  children,
  disabled,
  ...props
}) {
  return (
    <motion.button
      whileHover={
        disabled
          ? undefined
          : {
              y: -1,
            }
      }
      whileTap={
        disabled
          ? undefined
          : {
              scale: 0.985,
            }
      }
      disabled={disabled}
      className="
        group
        relative
        w-full
        h-12

        rounded-2xl

        flex
        items-center
        justify-center
        gap-2

        overflow-hidden

        text-white
        text-[15px]
        font-semibold

        shadow-[0_10px_28px_-8px_rgba(124,92,255,0.55)]

        transition-all
        duration-300

        hover:shadow-[0_14px_36px_-8px_rgba(79,124,255,0.7)]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--bg)]

        disabled:cursor-not-allowed
        disabled:opacity-60
      "
      style={{
        background:
          "linear-gradient(135deg, #7C5CFF 0%, #6366F1 45%, #4F7CFF 72%, #3157F6 100%)",
      }}
      {...props}
    >
      {/* Top highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-5
          top-0
          h-px
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
        }}
      />

      {/* Soft inner shine */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 52%)",
        }}
      />

      {/* Hover shine sweep */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          -translate-x-[130%]

          bg-gradient-to-r
          from-transparent
          via-white/[0.16]
          to-transparent

          transition-transform
          duration-700

          group-hover:translate-x-[130%]
        "
      />

      {/* Bottom subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-8
          left-1/2

          h-16
          w-[70%]

          -translate-x-1/2

          rounded-full
          bg-cyan-400/20
          blur-2xl
        "
      />

      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
/* =========================================================
   ERROR BANNER
========================================================= */

export function AuthErrorBanner({ children }) {
  if (!children) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -4,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        text-xs
        text-[var(--danger)]
        bg-[#F8E3E0]
        border
        border-red-200/60
        rounded-2xl
        px-4
        py-2.5
        leading-snug

        dark:bg-red-500/10
        dark:border-red-400/15
        dark:text-red-300
      "
    >
      {children}
    </motion.div>
  );
}