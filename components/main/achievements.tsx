export const Achievements = () => {
  const achievements: {
    title: string;
    badge: string;
    year: string;
    description: string;
    href?: string;
    highlight?: string;
  }[] = [
    {
      title: "Finalist (Team Lead) · Smart India Hackathon 2025",
      badge: "🏆 National Finalist",
      year: "2025",
      highlight: "Ministry of Corporate Affairs",
      description:
        "Led a cross-functional team to design and deliver a working prototype — Saaransh — under a strict timeline for the Ministry of Corporate Affairs. Competed at the national level among thousands of teams.",
      href: undefined,
    },
    {
      title: "Runner Up · Odoo Hackathon 2025",
      badge: "🥈 Runner Up",
      year: "2025",
      highlight: "Built in 24 hours",
      description:
        "Built a fully functional full-stack rental web platform (RentalPro) from scratch in under 24 hours using Odoo framework, earning runner-up position at a competitive national hackathon.",
      href: undefined,
    },
    {
      title: "Specialist · Codeforces (Max Rating: 1489)",
      badge: "⚡ CF Specialist",
      year: "June 2025",
      highlight: "Rating 1489",
      description:
        "Achieved Specialist rank on Codeforces with a peak rating of 1489, demonstrating strong algorithmic problem-solving and competitive programming skills.",
      href: "https://codeforces.com/profile/picsoo",
    },
  ];

  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <div className="text-center mb-12">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 py-4">
          Achievements &amp; Recognition
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Highlights from hackathons, competitive programming, and leadership — a track record of delivering under pressure.
        </p>
      </div>

      <div className="h-full w-full flex flex-col gap-6 max-w-4xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.08)] group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-900/40 border border-green-700/50 rounded-full text-green-300 text-xs font-semibold">
                    {achievement.badge}
                  </span>
                  {achievement.highlight && (
                    <span className="px-3 py-1 bg-emerald-900/30 border border-emerald-700/40 rounded-full text-emerald-300 text-xs">
                      {achievement.highlight}
                    </span>
                  )}
                </div>
                {achievement.href ? (
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xl font-bold text-white hover:text-green-400 transition-colors group-hover:underline underline-offset-2"
                  >
                    {achievement.title} ↗
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                )}
              </div>
              <span className="text-green-400 font-mono text-sm whitespace-nowrap shrink-0 mt-1">
                {achievement.year}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
