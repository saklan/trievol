import {
  BriefcaseBusiness,
  Code2,
  Globe2,
  SearchCheck,
  ServerCog,
  Workflow
} from "lucide-react";

type ArtworkKind = "business" | "development" | "seo" | "hosting" | "process" | "portfolio";

interface AbstractArtworkProps {
  kind: ArtworkKind;
  label: string;
  className?: string;
}

const artworkIcons = {
  business: BriefcaseBusiness,
  development: Code2,
  seo: SearchCheck,
  hosting: ServerCog,
  process: Workflow,
  portfolio: Globe2
} as const;

export default function AbstractArtwork({ kind, label, className = "" }: AbstractArtworkProps) {
  const Icon = artworkIcons[kind];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-blue-50 to-white ${className}`}
      aria-label={label}
    >
      <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/30 blur-2xl" />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-emerald-200/25 blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="relative flex h-full min-h-[12rem] items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/80 bg-white/75 text-blue-700 shadow-xl shadow-slate-300/30 backdrop-blur">
          <div className="absolute inset-3 rounded-2xl border border-blue-100" />
          <Icon className="relative h-9 w-9" strokeWidth={1.6} />
        </div>
        <span className="absolute bottom-4 left-4 rounded-lg border border-white/80 bg-white/80 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500 backdrop-blur">
          {label}
        </span>
      </div>
    </div>
  );
}
