const teamMembers = [
    {
        name: "PRAKASH SUBRAMANIAN",
        designation: "Managing Director",
        image: "Images/team_prakash_subramanian.jpg",
        linkedin: "Images/linkedin.png",
        description: [
            "Mr. Prakash Subramanian brings a distinguished career to his role as Raj Petro's Managing Director. With over 34 years of experience, he is a proven leader with a passion for excellence.",
            "Mr. Subramanian has over 18 years in finance leadership positions, including serving as CFO/Finance Head for multinational subsidiaries across diverse industries...",
            "His deep knowledge encompasses business integration, due diligence, and financial control/risk management/compliance. This expertise allows him to build a strong foundation for Raj Petro's continued success.",
            "Known for his passion, positivity, and ethical approach, Prakash excels at fostering high-performing teams through effective communication and collaboration.",
        ],
    },
    {
        name: "VIREN NANAVATI",
        designation: "Senior Director- Sales",
        image: "Images/team_VIREN-NANAVATI.jpg",
        linkedin: "Images/linkedin.png",
        description: [
            "Mr. Viren Nanavati heads the Sales Division of Transformer Oils, White Oils, Petroleum Jelly, Process Oils, Waxes and Solvents (SBU 1, 2 & 3). He also took over the additional responsibility of International Business SBU on 3rd January 2022. Besides these core responsibilities, he is also an active member of our JV with Brenntag.",
            "Mr. Nanavati's career spans 25 years across operations, purchase, sales, and business development at Raj Petro. He has a Mechanical Engineering degree from Madra University and a Master’s in Manufacturing Management from Coventry University, England. He has participated in several symposiums and is an active life member of the Society of Tribology and Lubrication Engineers (STLE).",

        ],
    },
    {
        name: "DR. DAYA SHUKLA",
        designation: "Senior Director – R & D / Technology  ",
        image: "Images/team_DAYA-SHUKLA.jpg",
        linkedin: "Images/linkedin.png",
        description: [
            "Dr Daya S. Shukla joined Raj Petro in 2010, bringing with him rich experience of almost now 42 years in the petroleum industry. After completing his Master’s & Doctorate in Chemistry in 1980 from Agra University, he joined Indian Institute of Petroleum, Dehradun (CSIR Laboratory) as a Scientist and worked there for 17 years on various research projects.",
            "Prior to joining Raj Petro, Dr Daya S Shukla led Castrol India’s Technology Centre, which included an Asia-Pacific role for 13 years. He was also a member of the Global Castrol Expert team. He has been the recipient of the national merit & international fellowship and many awards as well. He has many national and international research papers to his credit.",
            "Dr. Shukla has been leading the Raj Petro Technology team - pioneering his research inputs for critical product developments in various petro specialty areas including supporting the effective lube applications with more focus new developments for high end products to support energy savings, cost economics and environmental considerations."

        ],
    },
    {
        name: "SIRHANS PESHIN",
        designation: "Senior Director – Supply Chain Management",
        image: "Images/team_Sirhans-Sir.png",
        linkedin: "Images/linkedin.png",
        description: [
            "Sirhans Peshin handles the integrated requirements of Planning, Procurement, Manufacturing, Logistics, Warehousing, and HSEQ for the RPSPL business since April 2019. Fortified with a Bachelor’s Degree in Instrumentation and Controls, and an MBA in Operations, he has undergone intensive specialized training in his domain of expertise.",
            "With over 25 years of experience in Lubricants, Specialities, Petrochemicals & Engineering, Sirhans previously held the post of President – Operations at IG Petrochemicals, overseeing Manufacturing, Logistics, Administration, HR, Accounts and HSSEQ functions. Prior to that, he had a long stint with Total Oil India Pvt Limited as Vice President – Operations & Supply Chain.",
            "Having held key leadership positions with global corporations and Indian companies of repute over the past two decades, Sirhans brings with him valuable experience across various domains and business lines."

        ],
    },
    {
        name: "PRASAD VAZE",
        designation: "Senior Director – Lubricants Business",
        image: "Images/team_prasad.jpg",
        linkedin: "Images/linkedin.png",
        description: [
            "A result-oriented business leader with more than 25 years of extensive experience in customer centric roles. Key strengths in Managing P&L, Strategy development, Transforming a start-up into a fledging business, Leading change through large teams. Extensive experience in integrated business planning with execution excellence. Building talent & capability across organizations, encouraging entrepreneurial thinking thru calibrated risk taking.",
            "A performance biased professional with a track record of consistent and sustainable delivery."
        ],
    },
    {
        name: "CHAITANYA ANJARIA",
        designation: "Director Purchase & Board Member",
        image: "Images/team_CHAITANYA-ANJARIA.jpg",
        linkedin: "Images/linkedin.png",
        description: [
            "Chaitanya Anjaria handles Purchase and Base Oil imports. Chaitanya began his career with Raj Petro and, since the past 14 years, has been associated with the Raj Leadership Team, handling various business functions in Supply Chain, Logistics Operations and Manufacturing at the plant.",
            "Chaitanya is a Commerce Graduate from Symbiosis College of Arts & Commerce, Pune, and holds a Diploma in Import-Export Management and Finance Management from Welingkar’s Institute of Management and Research, Mumbai.."
        ],
    },
    {
        name: "SANJAY PAWAR",
        designation: "Deputy Director - Finance",
        image: "Images/team_Sanjay-Pawar.jpg",
        linkedin: "Images/linkedin.png",
        description: [
            "Mr. Sanjay Pawar plays an integral role at Raj Petro by leveraging his extensive expertise to lead the finance function. He joined Raj Petro in 2013 and is a qualified chartered accountant with over 20 years of diverse experience in accounting, finance, taxation, reporting, and controlling. He brings a wealth of knowledge to his contributions that transcend conventional duties. His pivotal role in driving critical initiatives such as SAP implementation, Joint Venture Due Diligence, and the formation of a Robust IFC Structure underscores his proactive approach and ability to navigate complex projects.",
            "He strongly emphasizes effective people management and fosters a culture of collaboration and innovation within the organization. His positive, open-minded approach creates a conducive environment for teamwork by consistently leveraging his robust financial acumen and strategic insights."
        ],
    },

];

const LeadingTeam = () => {
    return (
        <>
            <img className="w-screen" src="Images/L.png" alt="" />
            <div className="border-2 py-24 space-y-20 bg-white">
                <div className="lg:px-32 max-sm:justify-self-center">
                    <h1 className="text-4xl font-medium">Leadership Team</h1>
                    <div className='flex gap-2'>
                        <div className='w-16 rounded-r-3xl rounded-l-3xl bg-blue-500 h-1'></div>
                        <div className='w-6 rounded-r-3xl rounded-l-3xl bg-gray-400 h-1'></div>
                    </div>
                </div>
                {teamMembers.map((member, index) => (
                    <div className="lg:px-32" key={index}>

                        {/* Large and Medium Screens */}
                        <div
                            className={`hidden md:grid grid-cols-12 mt-32 max-lg:gap-8 py-10  border-t items-center ${index % 2 === 0 ? "grid-flow-row-dense" : ""
                                }`}
                        >
                            {/* Conditional image placement based on index */}
                            <div
                                className={`col-span-4 flex justify-center ${index % 2 === 0 ? "order-2" : "order-1"
                                    }`}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full max-w-[350px] rounded-lg"
                                />
                            </div>
                            <div
                                className={`col-span-8 ${index % 2 === 0 ? "order-1" : "order-2"
                                    }`}
                            >
                                <h2 className="text-4xl font-medium">{member.name}</h2>
                                <p className="text-xl text-blue-500">{member.designation}</p>
                                <img src={member.linkedin} alt="LinkedIn" className="w-9 cursor-pointer my-2" />
                                <div className="text-xl text-gray-600 text-justify space-y-6">
                                    {member.description.map((text, i) => (
                                        <p key={i} className="mt-2">
                                            {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Small Screens */}
                        <div className="md:hidden flex flex-col items-center text-center space-y-4 mt-6">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-2/3 max-w-[200px] rounded-lg"
                            />
                            <div>
                                <h2 className="text-xl font-bold">{member.name}</h2>
                                <p className="text-blue-500">{member.designation}</p>
                                <img src={member.linkedin} alt="LinkedIn" className="w-6 my-2 justify-self-center" />
                                <div className="px-4 text-gray-600 space-y-4 text-justify text-sm">
                                    {member.description.map((text, i) => (
                                        <p key={i}>{text}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LeadingTeam;
