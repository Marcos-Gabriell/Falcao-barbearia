/* Poste de barbeiro em SVG: aparece de imediato (vem no HTML) e serve de
   fallback quando o 3D não carrega — celular fraco, economia de dados,
   "reduzir movimento". As listras giram só com CSS. */
export default function BarberPoleSVG({ className = "", id = "pole" }: { className?: string; id?: string }) {
  // IDs únicos por instância: com dois SVGs na página, url(#x) pegaria o escondido
  const u = (name: string) => `${id}-${name}`;
  return (
    <svg viewBox="0 0 200 520" className={className} aria-hidden focusable="false">
      <defs>
        <pattern id={u("stripes")} width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
          <rect width="120" height="120" fill="#0b0b0b" />
          <rect y="0" width="120" height="30" fill="#c99a52" />
          <rect y="30" width="120" height="30" fill="#f5f1eb" />
          <rect y="60" width="120" height="30" fill="#c99a52" />
          <animateTransform
            className="pole-anim"
            attributeName="patternTransform"
            type="translate"
            additive="sum"
            from="0 0"
            to="0 120"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </pattern>
        <linearGradient id={u("shade")} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.65" />
          <stop offset="0.28" stopColor="#000" stopOpacity="0" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#000" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={u("gold")} x1="0" x2="1">
          <stop offset="0" stopColor="#6b4a1c" />
          <stop offset="0.35" stopColor="#e9c88f" />
          <stop offset="0.6" stopColor="#c99a52" />
          <stop offset="1" stopColor="#4d3412" />
        </linearGradient>
        <linearGradient id={u("dark")} x1="0" x2="1">
          <stop offset="0" stopColor="#050505" />
          <stop offset="0.5" stopColor="#2a2a2a" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <radialGradient id={u("knob")} cx="0.35" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#f6e2bb" />
          <stop offset="0.5" stopColor="#c99a52" />
          <stop offset="1" stopColor="#5a3e16" />
        </radialGradient>
      </defs>

      {/* topo */}
      <circle cx="100" cy="22" r="16" fill={`url(#${u("knob")})`} />
      <path d="M48 70 Q48 38 100 38 Q152 38 152 70 Z" fill={`url(#${u("gold")})`} />
      <rect x="40" y="68" width="120" height="26" rx="4" fill={`url(#${u("dark")})`} />
      <rect x="38" y="92" width="124" height="8" rx="4" fill={`url(#${u("gold")})`} />

      {/* corpo listrado + vidro */}
      <rect x="52" y="100" width="96" height="320" fill={`url(#${u("stripes")})`} />
      <rect x="52" y="100" width="96" height="320" fill={`url(#${u("shade")})`} />
      <rect x="58" y="100" width="10" height="320" fill="#fff" opacity="0.12" />

      {/* base */}
      <rect x="38" y="420" width="124" height="8" rx="4" fill={`url(#${u("gold")})`} />
      <rect x="40" y="426" width="120" height="26" rx="4" fill={`url(#${u("dark")})`} />
      <path d="M48 450 Q48 482 100 482 Q152 482 152 450 Z" fill={`url(#${u("gold")})`} />
      <circle cx="100" cy="498" r="16" fill={`url(#${u("knob")})`} />
    </svg>
  );
}
