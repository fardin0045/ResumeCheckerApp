import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center text-center py-12",
        className
      )}
    >
      {Icon && (
        <div
          className="
            h-14
            w-14
            rounded-2xl

            flex
            items-center
            justify-center
            mb-3

            bg-gradient-to-br
            from-violet-50
            via-indigo-50
            to-blue-50

            text-violet-600

            border
            border-violet-200/60

            shadow-[0_8px_22px_-14px_rgba(124,92,255,0.45)]

            dark:from-violet-500/15
            dark:via-indigo-500/10
            dark:to-blue-500/10
            dark:text-violet-300
            dark:border-violet-400/15
          "
        >
          <Icon size={22} />
        </div>
      )}

      <div className="font-display text-lg font-semibold tracking-tight">
        {title}
      </div>

      {description && (
        <p className="text-sm text-[var(--ink-muted)] mt-1 max-w-sm">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}
    </Card>
  );
}