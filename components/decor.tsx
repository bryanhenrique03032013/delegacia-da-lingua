export function CrimeTape({ label = "CENA DO CRIME — ERRO GRAMATICAL", className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`tape-stripes overflow-hidden ${className}`}>
      <div className="flex whitespace-nowrap py-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="px-4 font-mono text-[11px] font-bold tracking-widest text-black"
          >
            {label} ·
          </span>
        ))}
      </div>
    </div>
  )
}

export function Magnifier({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="42" cy="42" r="30" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="42" cy="42" r="30" fill="rgba(255,255,255,0.04)" />
      <line x1="64" y1="64" x2="92" y2="92" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
    </svg>
  )
}

export function Stamp({ text, color = "#e11d2e" }: { text: string; color?: string }) {
  return (
    <div
      className="animate-stamp inline-flex items-center justify-center rounded-md border-4 px-4 py-1 font-mono text-lg font-bold uppercase tracking-widest"
      style={{ color, borderColor: color, boxShadow: `inset 0 0 0 1px ${color}` }}
    >
      {text}
    </div>
  )
}

export function Badge({ name, role, accent }: { name: string; role: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-noir-800 px-3 py-2">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-black"
        style={{ backgroundColor: accent }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div className="leading-tight">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Detetive</p>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[11px] text-white/50">{role}</p>
      </div>
    </div>
  )
}
