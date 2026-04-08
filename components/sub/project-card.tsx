import Image from "next/image";
import Link from "next/link";

type Metric = {
  value: string;
  label: string;
};

type ProjectCardProps = {
  src: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  metrics?: Metric[];
  tech?: string[];
  link: string;
  demoLink?: string;
};

export const ProjectCard = ({
  src,
  title,
  subtitle = "",
  description,
  bullets = [],
  metrics = [],
  tech = [],
  link,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-green-900/60 bg-gray-900/60 backdrop-blur-sm flex flex-col group transition-all duration-300 hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.12)]"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full object-cover h-52 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        {demoLink && (
          <span className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            🟢 Live
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title & subtitle */}
        <div>
          <h2 className="text-xl font-bold text-white leading-tight">{title}</h2>
          <p className="text-green-400 text-sm font-medium mt-0.5">{subtitle}</p>
        </div>

        {/* Metrics row */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center bg-green-900/20 border border-green-700/40 rounded-lg px-3 py-2 min-w-[80px]"
              >
                <span className="text-green-400 font-bold text-sm leading-none">{m.value}</span>
                <span className="text-gray-400 text-[10px] mt-0.5 text-center leading-tight">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Short description */}
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        {/* Bullet highlights */}
        <ul className="space-y-1.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-green-400 mt-0.5 shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: b }} />
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-gray-800/80 border border-gray-700/60 rounded-full text-gray-300 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 mt-auto pt-2">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm rounded-lg transition-colors"
          >
            GitHub →
          </Link>
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_16px_rgba(74,222,128,0.4)]"
            >
              ⚡ Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
