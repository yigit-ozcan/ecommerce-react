import React from "react";

function TeamPage() {
  const teamMembers = [
    {
      name: "Gökhan Özdemir",
      role: "Project Manager",
      img: "/images/teampage/team1.jpg",
    },
    {
      name: "Yiğit Özcan",
      role: "Full Stack Developer",
      img: "/images/teampage/team2.jpg",
    },
    {
      name: "Savannah Nguyen",
      role: "Founder",
      img: "/images/teampage/team3.jpg",
    },
    {
      name: "Jerome Bell",
      role: "Founder",
      img: "/images/teampage/team4.png",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-[50px] max-w-[280px] md:text-[60px] md:max-w-full font-bold text-slate-800">
          Meet Our Team
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-[30px] md:text-base max-w-[450px] md:text-[25px] md:max-w-[750px] leading-relaxed">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Team Cards */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-16 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white w-[260px] md:w-[22%] py-10 px-6 flex flex-col items-center text-center shadow-sm"
            >
              {/* Avatar */}
              <img
                src={member.img}
                alt={member.name}
                className="w-[120px] h-[120px] rounded-full object-cover"
              />

              {/* Role */}
              <span className="text-[#23A6F0] text-lg md:text-sm font-semibold mt-6">
                {member.role}
              </span>

              {/* Name */}
              <h3 className="text-2xl md:text-lg font-bold text-slate-800 mt-2">
                {member.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[20px] mt-2 leading-relaxed">
                the quick fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
