/**
 * profile.js — everything on the Home page comes from this file.
 * Edit the text here; no other code needs to change.
 */
export const profile = {
  name: "Rajesh Rai",
  title: "Tech Enthusiast",
  status: "Open to Cloud & Systems Engineer roles",
  location: "Sydney, Australia",
  email: "Rajeshbantawarai90@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajesh-rai90",

  // Hero "facts" row
  facts: [
    { label: "Experience", value: "3+ years" },
    { label: "Based", value: "Sydney, AU" },
    { label: "Focus", value: "Cloud & Infrastructure" },
  ],

  intro:
    "IT support specialist working across Microsoft 365, Azure, Intune and networking in enterprise environments — building towards cloud and systems engineering.",

  about: {
    lead: "Hands-on, solutions-focused, and always learning the next layer of the stack.",
    body: "IT Support Specialist with 3+ years of experience in enterprise IT environments, providing L2 support across Microsoft 365, Azure, Intune, endpoints and network infrastructure. Skilled in troubleshooting, on-site support, network operations and technical documentation. Developing expertise in cloud and networking to progress into a Systems/Network or Cloud Engineer role.",
  },

  experience: [
    {
      role: "IT Support Specialist",
      company: "Chubb",
      place: "Sydney, NSW",
      period: "Sept 2023 – Present",
      achievements: [
        "Handled complex L2 issues across end-user, Microsoft 365, cloud and network environments, resolving on time and escalating where required.",
        "Contributed to infrastructure changes, technology rollouts and user migrations alongside senior infrastructure teams.",
        "Supported secure access and endpoint standards through MFA, Conditional Access, device compliance and security monitoring.",
        "Provided reliable on-site assistance with clear communication, detailed records and a high standard of customer service.",
      ],
      duties: [
        "Investigate and resolve escalated desktop, server, application, identity and connectivity incidents within agreed service levels.",
        "Support Microsoft 365 and Entra ID: account administration, access management, licensing, authentication and user support.",
        "Manage Intune-enrolled devices: configuration, compliance checks, application deployment and endpoint troubleshooting.",
        "Investigate network issues involving TCP/IP, DNS, DHCP, VPNs, switches, firewalls and wireless infrastructure.",
        "Assist with monitoring and maintenance of server, backup, recovery and cloud infrastructure.",
        "Investigate endpoint protection alerts, review logs and escalate potential security incidents.",
        "Assist senior engineers with deployments, upgrades, onboarding activities and migrations.",
        "Maintain service desk records, technical documentation, asset information and troubleshooting procedures.",
      ],
    },
    {
      role: "Service Desk Engineer",
      company: "Sonic HR",
      place: "Sydney, NSW",
      period: "May 2023 – Aug 2023",
      achievements: [
        "Delivered responsive L1/L2 support to 350+ users across desktop, application and Microsoft environments.",
        "Built strong relationships with end users, including dedicated support for executives, with a customer-first approach.",
        "Owned incidents through investigation, resolution and escalation, following established IT processes.",
      ],
      duties: [
        "Provided onsite, telephone and remote assistance for Windows devices, Microsoft 365 apps and business systems.",
        "Diagnosed and resolved hardware, software, OS and application issues across workstations and mobile devices.",
        "Supported account provisioning, user access, onboarding and offboarding across multiple platforms.",
        "Assisted with workstation deployments, software updates, patching and rollouts.",
        "Performed initial troubleshooting of infrastructure and connectivity issues and escalated complex incidents.",
        "Coordinated resolution with internal teams and third-party providers within agreed timeframes.",
        "Maintained asset registers and IT documentation, including hardware allocations and software records.",
      ],
    },
  ],

  skills: [
    { name: "Cloud & Identity", items: "Microsoft Azure (AD, VMs, Backup, RBAC), Entra ID, Office 365 Admin, Exchange Online, Microsoft Intune" },
    { name: "Operating Systems", items: "Windows Server 2016/2019, Windows 10/11, macOS, iOS, Android" },
    { name: "Networking", items: "TCP/IP, DHCP, DNS, SD-WAN, VLANs, VNet, NSG, Routing & Switching, Firewall" },
    { name: "Virtualisation", items: "VMware ESXi 6.5, Hyper-V, Azure VMs, AVD" },
    { name: "Servers & Services", items: "Active Directory, Entra ID, DNS Server, File & Print Server, Exchange Server, IIS, Application Server" },
    { name: "Scripting", items: "PowerShell (automation, AD, M365), Bash basics" },
    { name: "ITSM & Tools", items: "ServiceNow, Jira, TeamViewer, Microsoft Teams, CxOne VoIP" },
    { name: "Security & Backup", items: "Windows Defender, Huntress, Microsoft Sentinel, Azure Backup, Veeam, NAS/SAN, MFA, Conditional Access, RBAC" },
    { name: "AI & Productivity", items: "Claude AI (agent & workflow automation, repetitive task scripting), ChatGPT, AI-assisted troubleshooting & documentation, Prompt Engineering" },
    { name: "Soft Skills", items: "Active Listening, Customer Service, Critical Thinking, Time Management, Team Collaboration" },
  ],

  education: [
    { title: "Bachelor of Information Technology", sub: "King’s Own Institute, Sydney, NSW — March 2023" },
  ],

  certifications: [
    { title: "Microsoft Azure Fundamentals (AZ-900)", sub: "Microsoft" },
    { title: "Azure Administrator Associate (AZ-104)", sub: "In progress" },
    { title: "Microsoft 365 Administration", sub: "Microsoft" },
  ],
};
