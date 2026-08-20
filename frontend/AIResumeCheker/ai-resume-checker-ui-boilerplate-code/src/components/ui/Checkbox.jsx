import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Checkbox({
  checked,
  onChange,
  className,
  label,
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "inline-flex items-center gap-2 select-none focus-visible:outline-none",
        className,
      )}
    >
      <span
        className={cn(
          "h-4 w-4 rounded-md border flex items-center justify-center transition-all duration-200",
          checked
            ? "border-transparent text-white bg-gradient-to-br from-[#7C5CFF] via-[#6366F1] to-[#4F7CFF] shadow-[0_3px_10px_rgba(99,102,241,0.28)]"
            : "bg-[var(--surface)] border-[var(--border)] text-transparent",
        )}
      >
        <Check
          size={11}
          strokeWidth={3}
        />
      </span>

      {label && (
        <span className="text-xs text-[var(--ink-muted)]">
          {label}
        </span>
      )}
    </button>
  );
}