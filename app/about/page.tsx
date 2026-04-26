export default function AboutPage() {
  const members = [
    {
      name: "Prasadh",
      email: "prashathhari2002@gmail.com",
      role: "Software Engineer",
      skills: "Python, Data Modeling, Node js, Next js, Spring Boot,TypeScript",
      achievements: "Built prototype career prediction model, Aws, Cloud, AI/ML",
      image: "/prasadh.jpg"
    },
    {
      name: "Diven",
      email: "divendraparamendran226@gmail.com",
      role: "Software Engineer",
      skills: "JavaScript, TypeScript, Java, C, C++, Kotlin, Python",
      achievements: "Built AI-based Virtual Try-On system using OpenCV,Hands-on experience with ROS 2",
      image: "/diven.jpeg"
    },
    {
      name: "Shangave",
      email: "shangavemaharajah29@gmail.com",
      role: "Associate Software Enginee",
      skills: "Node.js, Express.js,Next.js, JavaScript, TypeScript, Java",
      achievements: "Delivered responsive research portal",
      image: "/shan.jpeg"
    },
    {
      name: "Thah ATRS",
      email: "rahufath.shajeeh52@gmail.com",
      role: "Internship ",
      skills: "HTML, CSS, JavaScript, Java, C languages, PHP, MySQL, C++, Python",
      achievements: "AWS Cloud Computing Courses, Azure Cloud Computing Courses",
      image: "/Thaha.png"
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6 relative">
      <div className="page-ambient" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Meet the <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto">
            Our multi-disciplinary team brings together expertise in Machine Learning, Data Engineering, and Modern Web Development.
          </p>
        </div>
        {/* show member details here show like mapping */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {members.map((member) => (
            <article
              key={member.email}
              className="group rounded-[3rem] border border-[var(--border)] bg-[var(--panel)] p-8 shadow-xl hover:shadow-2xl hover:shadow-[var(--accent)]/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="shrink-0">
                  <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-black uppercase tracking-widest mb-4">
                    {member.role}
                  </div>

                  <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {member.name}
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)] mb-1">Email</span>
                      <span className="text-[var(--ink)] font-medium text-sm">{member.email}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)] mb-1">Key Expertise</span>
                      <span className="text-[var(--ink)] font-medium text-sm">{member.skills}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--muted)] mb-1">Core Achievement</span>
                      <span className="text-[var(--ink)] font-medium text-sm">{member.achievements}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[var(--accent)]/5 to-transparent blur-3xl rounded-full" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
