import { cn } from "@/lib/utils";

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
}

export function Avatar({
  name,
  src,
  size = 40,
  className,
}) {
  return (
    <div
      className={cn(
        `
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-full

          bg-gradient-to-br
          from-[#172554]
          via-[#312E81]
          to-[#4F46E5]

          text-violet-100
          font-semibold

          ring-2
          ring-[var(--surface)]

          shadow-[0_6px_18px_rgba(79,70,229,0.20)]

          transition-all
          duration-200
        `,
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <>
          {/* subtle highlight */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.30),transparent_48%)]
            "
          />

          <span className="relative z-10">
            {initials(name) || "?"}
          </span>
        </>
      )}
    </div>
  );
}