import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Imani",
  lastName: "Hairston",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};



const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/i-hairston",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/imani-hairston/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:imani@hairston.dev",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data engineer</>,
  subline: (
    <>
      I'm Imani, a data engineer by trade building robust analytics pipelines
      <br /> and a curious programmer in my free time
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Imani is a data engineer based out of Chicago who specializes in building data pipelines with Python, Prefect, and SQL, while also exploring full-stack frameworks like Next.js utilizing PostgreSQL, MySQL, and Snowflake
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Numerator",
        timeframe: "2025 - Present",
        role: "Data Engineer",
        achievements: [
          <>
          Mitigated infrastructure drift by correcting misconfiguations in Terraform
          </>,
          <>
          Ensured the continued operation of jobs on Airflow, dbt, Airbyte
          </>,
          <>
          Participated in on-call rotations to ensure any job failures were addressed immediately
          </>,
        ],
        images: [],
      },
      {
        company: "Bear Cognition",
        timeframe: "2023 - 2025",
        role: "Data Engineering Team Lead",
        achievements: [
          <>
          Redesigned and optimization of the organization's data warehouse, enabling clear cost transparency and actionable observability metrics for customers' Prefect and Snowflake workflows
          </>,
          <>
          Built logistics application integrating data from invoices for 30+ carriers and 80+ customers to calculate commissions and streamline shipment managment
          </>,
        ],
      },
      {
        company: "Bear Cognition",
        timeframe: "2020 - 2023",
        role: "Data Engineer",
        achievements: [
          <>
          Successfully designed and deployed numerous data ingestion pipelines utilizing Prefect, Python and SQL, Docker, and Kubernetes
          </>,
          <>
          Responsible for provisioning of customer data marts in Snowflake data warehouses for HIPAA and non PII/PHI datasets at TB scale
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "College of Charleston",
        description: (
          
          <>
          <br></br>
            <li>B.S. in Data Science</li>
            <li>Studied statistical analysis, data visualization, and software engineering</li>
            <li>Completed a capstone project solving real-world grocery list tracking needs</li>
          </>
        ),
      },
      {
        name: "Certifications",
        description: (
          <>
          <br></br>
          <li>Earned certifications in AWS, GCP, and Prefect.</li>
            <ul>
              <li>AWS Certified Cloud Practitioner</li>
              <li>Google Cloud Digital Leader</li>
              <li>Prefect Associate Certifcation</li>
            </ul>
          </>
        ),
      },
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <> Building batch data pipelines using Prefect</>,

      },
      {
        title: "React",
        description: <> Building my personal projects with Next.js + Typescript + Tailwind.css.</>,

      },
      {
        title: "SQL",
        description: <> Leveraging technology like MySQL, PostgreSQL, Snowflake to power analytics pipelines</>,
      },
      {
        title: "Cloud Platforms",
        description: <> Experience deploying and managing applications on AWS (Lambda, S3, EC2) and GCP (BigQuery, Cloud Functions).</>,
      },      
      {
        title: "Docker",
        description: <> Using Docker for containerizing applications and managing multi-container setups with Docker Compose.</>,
      },
      {
        title: "Terraform",
        description: <> Using Terraform to manage infrastructure more efficiently</>,
      }
    ],
  },
};


const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, home, about, work };
