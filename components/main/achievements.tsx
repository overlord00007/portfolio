export const Achievements = () => {
  const achievements = [
    {
      title: "Finalist | IIT Madras E-Contest · Shaastra",
      year: "2026",
      description: "Selected as Finalist at IIT Madras Shaastra E-Contest, competing among top engineering and business talent nationwide."
    },
    {
      title: "Semi-Finalist (Top 25 Teams) | NEST 2.0 · Novartis",
      year: "2026",
      description: "Advanced to Semi-Finals in NEST 2.0 by Novartis — a prestigious healthcare innovation challenge, ranking in the Top 25 teams across India."
    },
    {
      title: "Winner | GO-BRICS Energy-O-Thon · India–Russia Pilot Phase",
      year: "2026",
      description: "Winner at the GO-BRICS Energy-O-Thon India–Russia Pilot Phase, an international energy innovation competition."
    },
    {
      title: "Grand Finalist | Smart India Hackathon 2025",
      year: "2025",
      description: "Grand Finalist at Smart India Hackathon 2025 — one of the world's largest open innovation model competitions."
    },
    {
      title: "99.15 Percentile | Naukri Campus Young Turks",
      year: "2025",
      description: "Achieved 99.15 percentile in Naukri Campus Young Turks national assessment among thousands of engineering students."
    },
    {
      title: "Top 250 Finalist Nationwide | Odoo Hackathon 2025",
      year: "2025",
      description: "Finalist in the prestigious Odoo Hackathon 2025, competing among top developers nationwide. Two projects (RentalPro and SkillSwap Hub) both selected."
    },
    {
      title: "Winner | CodeClash Hackathon · Let's Code Community",
      year: "2025",
      description: "Winner of CodeClash Hackathon organized by Let's Code Community, demonstrating problem-solving and rapid development skills."
    },
    {
      title: "Rank 1 | DSA Quiz & Coding Competition · Technocrat Institute, Bhopal",
      year: "2025",
      description: "Secured Rank 1 in DSA Quiz and Coding Competition at Technocrat Institute of Technology Bhopal."
    },
    {
      title: "Contributor @GirlScript Summer of Code 2025",
      year: "2025",
      description: "Active open-source contributor in GirlScript Summer of Code 2025, mentoring and contributing to projects."
    },
    {
      title: "Finalist | IIT Bombay Techfest · Meshmerize",
      year: "2024",
      description: "Finalist at IIT Bombay Techfest in the Meshmerize competition, competing among top engineering students from premier institutions."
    },
    {
      title: "JEE Mains 97.3 percentile · JEE Advanced Top 2% · CUET 99.98 percentile (Maths)",
      year: "2022–23",
      description: "Qualified JEE Mains (97.3 percentile) and JEE Advanced (Top 2%), with an exceptional 99.98 percentile in Mathematics in CUET."
    },
    {
      title: "NTSE UP 2023 Scholar | Multiple National Olympiad Wins",
      year: "2018–21",
      description: "NTSE UP 2023 Scholar with multiple Olympiad achievements across Science and Mathematics during 2018–2021."
    }
  ];

  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Achievements & Recognition
      </h1>
      <div className="h-full w-full flex flex-col gap-8 px-10 max-w-4xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                {achievement.title}
              </h3>
              <span className="text-purple-400 font-medium text-sm">
                {achievement.year}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

