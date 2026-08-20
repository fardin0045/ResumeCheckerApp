import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap " +
    "transition-all duration-200 " +
    "focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-violet-500/40 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] " +
    "disabled:opacity-50 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        /* unchanged */
        primary:
          "bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 active:scale-[0.98]",

        /* NEW RESUMate ACCENT */
        accent:
          "text-white " +
          "bg-gradient-to-r from-[#5B4FE8] via-[#6366F1] to-[#4F7CFF] " +
          "shadow-[0_8px_22px_-10px_rgba(79,124,255,0.55)] " +
          "hover:from-[#5145D8] hover:via-[#585BE7] hover:to-[#456FE8] " +
          "hover:shadow-[0_11px_28px_-10px_rgba(79,124,255,0.7)] " +
          "active:scale-[0.98]",

        /* unchanged */
        outline:
          "bg-[var(--surface)] border border-[var(--border)] text-[var(--ink)] hover:bg-[var(--surface-2)]",

        /* unchanged */
        ghost:
          "bg-transparent text-[var(--ink)] hover:bg-[var(--surface-2)]",

        /* OLD GREEN SOFT → VIOLET/INDIGO SOFT */
        soft:
          "border border-violet-200/60 " +
          "bg-violet-50 text-violet-700 " +
          "hover:bg-violet-100 " +
          "dark:border-violet-400/15 " +
          "dark:bg-violet-500/10 dark:text-violet-300 " +
          "dark:hover:bg-violet-500/15",
      },

      size: {
        sm: "h-8 px-3 text-xs rounded-full",
        md: "h-10 px-4 text-sm rounded-full",
        lg: "h-12 px-6 text-sm rounded-full",
        icon: "h-10 w-10 rounded-full",
        iconSm: "h-8 w-8 rounded-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const Button = forwardRef(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { buttonVariants };