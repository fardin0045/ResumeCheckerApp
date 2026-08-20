import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-tight tabular",
  {
    variants: {
      tone: {
        neutral:
          "bg-[var(--surface-2)] text-[var(--ink-muted)] border border-[var(--border)]",

        /* ResuMate brand accent */
        accent:
          "border border-violet-200/70 bg-gradient-to-r from-violet-50 to-indigo-50 text-violet-700 " +
          "dark:border-violet-400/15 dark:from-violet-500/15 dark:to-indigo-500/10 dark:text-violet-300",

        /* Positive / success state */
        success:
          "border border-cyan-200/70 bg-cyan-50 text-cyan-700 " +
          "dark:border-cyan-400/15 dark:bg-cyan-400/10 dark:text-cyan-300",

        warning:
          "bg-[#FBF1E2] text-[var(--warning)]",

        danger:
          "bg-[#F8E3E0] text-[var(--danger)]",

        ink:
          "bg-[var(--ink)] text-[var(--bg)]",
      },
    },

    defaultVariants: {
      tone: "neutral",
    },
  },
);

export function Badge({
  className,
  tone,
  ...props
}) {
  return (
    <span
      className={cn(
        badgeVariants({ tone }),
        className,
      )}
      {...props}
    />
  );
}

export { badgeVariants };