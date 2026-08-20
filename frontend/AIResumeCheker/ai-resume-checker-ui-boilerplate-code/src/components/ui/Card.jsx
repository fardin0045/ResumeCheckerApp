import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "bg-[var(--surface)] border border-[var(--border)] shadow-card transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:shadow-hover",

        accent:
          "relative overflow-hidden text-white border border-white/[0.08] " +
          "bg-[image:linear-gradient(145deg,#0B1226_0%,#111B3A_38%,#172554_68%,#0F172A_100%)] " +
          "shadow-[0_18px_45px_-18px_rgba(37,99,235,0.55)] " +
          "before:absolute before:inset-0 before:pointer-events-none " +
          "before:bg-[radial-gradient(circle_at_20%_0%,rgba(124,92,255,0.28),transparent_38%)] " +
          "after:absolute after:inset-0 after:pointer-events-none " +
          "after:bg-[radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.13),transparent_35%)] " +
          "hover:-translate-y-0.5 " +
          "hover:shadow-[0_24px_60px_-20px_rgba(79,124,255,0.7)]",

        flat: "",
      },

      radius: {
        md: "rounded-2xl",
        lg: "rounded-3xl",
      },

      padding: {
        none: "",
        sm: "p-4",
        md: "p-5",
        lg: "p-6",
      },
    },

    defaultVariants: {
      variant: "default",
      radius: "md",
      padding: "md",
    },
  },
);

export const Card = forwardRef(
  (
    {
      className,
      variant,
      radius,
      padding,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          radius,
          padding,
        }),
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export const CardHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "relative z-10 flex items-start justify-between gap-3 mb-4",
      className,
    )}
    {...props}
  />
);

export const CardTitle = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      "relative z-10 text-sm font-semibold text-[var(--ink)] tracking-tight",
      className,
    )}
    {...props}
  />
);

export const CardDescription = ({
  className,
  ...props
}) => (
  <p
    className={cn(
      "relative z-10 text-xs text-[var(--ink-muted)]",
      className,
    )}
    {...props}
  />
);

export const CardContent = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "relative z-10",
      className,
    )}
    {...props}
  />
);