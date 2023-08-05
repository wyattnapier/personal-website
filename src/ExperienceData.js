export const workExperience = [{
    company: "Woodstock Athletic Club",
    town: "Woodstock",
    state: "VT",
    jobTitle: "Fitness Attendant",
    type: "Full-Time", // seasonal, full-time, part-time
    startDate: "May, 2023",
    endDate: "August, 2023",
    description: [
        "Ensured smooth operations within the club.",
        "Maintained tennis courts and overall cleanliness of the building and grounds.",
        "Addresssed assorted customers requests."
    ],
    showReference: true,
    referenceName: "Skylar McNally",
    referenceContact: "slm@woodstockinn.com",
  },
  { company: "Boston University",
    town: "Boston",
    state: "MA",
    jobTitle: "Library Assistant",
    type: "Part-Time", // seasonal, full-time, part-time
    startDate: "September, 2022",
    endDate: "Present",
    description: [
        "Collected data on both the contents of the library and its patrons.",
        "Assisted patrons in accessing library resources."
    ],
    showReference: true,
    referenceName: "Nasim Parveen",
    referenceContact: "nparveen@bu.edu"
  },
  {    
    company: "Saskadena Six Ski Resort",
    town: "Pomfret",
    state: "VT",
    jobTitle: "Ski Patrol and Ski Instructing",
    type: "Seasonal", // seasonal, full-time, part-time
    startDate: "November, 2018",
    endDate: "Present",
    description: [
        "Earned Outdoor Emergency Care certification for ski patrolling.",
        "Opened, closed, and marked trails.",
        "Treated and transported injured patients",
        "Instructed one-on-one, thereby improving my interpersonal skills."
    ],
    showReference: true, // true, false
    referenceName: "Timothy McGreevy",
    referenceContact: "tmcgreevy32@gmail.com"
  },
  {    
    company: "Dartmouth Hitchcock Medical Center",
    town: "Lebanon",
    state: "NH",
    jobTitle: "Summer Intern",
    type: "Full-Time", // seasonal, full-time, part-time
    startDate: "June, 2022",
    endDate: "August, 2022",
    description: [
        "Explored various careers in Biomedical engineering and the Patient Safety Training Center",
        "Learned about biomedical devices (i.e., ultrasounds & pumps), and how to fix them.",
        "Assisted in setting up medical simulations used to train medical professions in a state-of-the-art facility that utilizes real hospital equipment."
    ],
    showReference: false, // true, false
    referenceName: "Hollyann Cramer",
    referenceContact: "Hollyann.B.Cramer@hitchcock.org"}
]

export const education = [
    {
        school: "Boston University",
        town: "Boston",
        state: "MA",
        startDate: "September, 2022",
        endDate: "May 2026",
        GPA: "3.86",
        otherInfo: [
            "Kilachand Honors College",
            "B.A. in Computer Science",
            "Dean's List: Fall 2022, Spring 2023"
        ] // awards included here
    },
    {
        school: "Woodstock Union High School",
        town: "Woodstock",
        state: "Vermont",
        startDate: "August, 2018",
        endDate: "June, 2022",
        GPA: "4.00",
        otherInfo: [
            "Valedictorian",
            "12 AP classes taken",
            "Summa Cum Laude: 2018-2022"
        ] // awards included here
    }
]

export const extracurriculars = [
    {
        organization: "BostonHacks",
        town: "Boston",
        state: "MA",
        role: "Logistics Organizer",
        startDate: "January, 2023",
        endDate: "Present",
        description: [
            "Organize small technology related workshops.",
            "Design and develop merchandise for attendees.",
            "Collaborate with other team members to plan a large-tier international annual hackathon."
        ]
    },
    {
        organization: "Boston University Barbell",
        town: "Boston",
        state: "MA",
        role: "Club Member",
        startDate: "December, 2022",
        endDate: "Present",
        description: [
            "Help cultivate a supportive, inclusive, and informed gym community."
        ]
    },
    {
        organization: "Change the World Kids",
        town: "Woodstock",
        state: "VT",
        role: "Volunteer",
        startDate: "August, 2020",
        endDate: "July, 2022",
        description: [
            "Supported the local community by completing odd jobs such as wood stacking, shoveling, and maintaining a food justice garden",
            "Combatted climate change by planting trees in Costa Rica and promoting sustainability"
        ]
    }
]




/*
// work experience data structure outline
{    company: ,
    town: ,
    state: ,
    jobTitle: ,
    type: , // seasonal, full-time, part-time
    startDate: ,
    endDate: ,
    description: [],
    showReference: , // true, false
    referenceName: ,
    referenceContact: 
}

// Education experience data outline:
{
    school: ,
    town: ,
    state: ,
    startDate: ,
    endDate: ,
    GPA: ,
    otherInfo: [] // awards included here
}

// extracurricular experience data outline
{    organization: ,
    town: ,
    state: ,
    role: ,
    startDate: ,
    endDate: ,
    description: []
}
*/