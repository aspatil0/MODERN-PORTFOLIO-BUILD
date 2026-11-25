/* =========================================================
   PROJECTS: shared by index.html (featured cards) and work.html (all projects)
   - featured: true  -> shown on the home page, in the order listed
   - github          -> card shows a "GitHub" button
   - live            -> card shows a "Live site" button
   - neither         -> card shows a "Get enquiry" button (opens the enquiry form)
   cats: frontend | backend | fullstack | saas | ai | iot | mobile
   ========================================================= */
const PROJECTS = [
  /* ---------- flagship (home page) ---------- */
  { featured: true, title: "Hostel OS", note: "Multi-tenant SaaS", status: "Not deployed yet",
    tagline: "Run every hostel and PG from one screen.",
    desc: "A secure, multi-tenant SaaS for hostel and PG businesses: properties, rooms, students, staff, billing, payments, leave, complaints and reports. Each business runs its own space in a single app.",
    cats: ["saas", "fullstack"], stack: ["TypeScript", "Multi-tenant", "Payments"],
    github: "https://github.com/aspatil0/Hostel_SAAS" },
  { featured: true, title: "MONETA", note: "Personal finance app", status: "Coming soon on Play Store",
    tagline: "Take control of your money.",
    desc: "Tracks income and expenses, monitors budgets and turns your spending into clear insights, all in one mobile app built to form better money habits.",
    cats: ["mobile", "fullstack"], stack: ["TypeScript", "Kotlin", "Android"],
    github: "https://github.com/aspatil0/MONETA" },
  { featured: true, title: "TrackX OS", note: "Timesheets & meetings", status: "Not deployed yet",
    tagline: "Replace the Excel timesheet.",
    desc: "Daily timesheets with automatic hours, projects with GitHub links, client meetings and a manager dashboard. JWT auth, role-based access and strict data isolation.",
    cats: ["saas", "fullstack"], stack: ["JWT", "RBAC", "Dark mode"],
    github: "https://github.com/aspatil0/TrackX" },
  { featured: true, title: "Flatmate", note: "Room-partner platform", status: "Not deployed yet",
    tagline: "Find your perfect room partner.",
    desc: "Post and search flats by area, budget and preferences, chat in-app without sharing numbers, and close the deal with a two-sided Deal Lock that marks the listing Booked.",
    cats: ["fullstack", "saas"], stack: ["MERN", "In-app chat"],
    github: "https://github.com/aspatil0/Flatmate" },
  { featured: true, title: "EngiWorld", note: "Student platform", status: "In development",
    tagline: "From admission to placement.",
    desc: "Colleges, branches, cutoffs and career roadmaps after 12th, plus syllabi, notes, PYQs, internships and placement resources. Starting with SPPU, Pune, then across India.",
    cats: ["saas", "frontend"], stack: ["JavaScript", "EdTech"],
    github: "https://github.com/aspatil0/EngiWorld" },

  /* ---------- everything else ---------- */
  { title: "Gemini Clone", note: "AI build", desc: "A Gemini-style AI chat built with React and the Gemini API, with saved history and prompt search.", cats: ["ai", "frontend"], stack: ["React", "Gemini API"], live: "https://aditya-geminiai.vercel.app/" },
  { title: "CoupleMate", note: "Concept · AI / ML", desc: "AI/ML-powered matchmaking with real-time chat between matched users.", cats: ["ai", "fullstack"], stack: ["ML", "Realtime"] },
  { title: "Novel Scam Scanner", note: "Research paper", desc: "Scans QR codes and transaction IDs, verifies them against an API, and warns before a fraudulent payment goes through.", cats: ["iot", "ai"], stack: ["IoT", "API"] },
  { title: "Mission Feed India", note: "Full-stack build", desc: "A food-redistribution platform that routes surplus meals to people who need them.", cats: ["fullstack", "backend"], stack: ["PHP", "MySQL"], github: "https://github.com/aspatil0/Mission-Feed-India-_Food-Redistribution-Web-Platform" },
  { title: "Te Amo", note: "Concept", desc: "A private space for couples: shared memories, mood tracking, love notes and reminders.", cats: ["fullstack", "saas"], stack: ["Web App"] },
  { title: "You & Me", note: "Concept", desc: "Random blind dates matched on interests, personality or location, kept safe online.", cats: ["fullstack"], stack: ["Web App"] },
  { title: "ParseMe", note: "Concept · SaaS", desc: "Parses code and documents into structured data, flags syntax errors, and cleans up messy text.", cats: ["saas", "ai"], stack: ["Dev Tool"] },
  { title: "Node Net", note: "Concept", desc: "A decentralised network where companies, acting as nodes, share resources and computing power directly with each other.", cats: ["saas", "backend"], stack: ["Distributed"] },
  { title: "Hospital Management", note: "Backend system", desc: "Patient records, doctor schedules and day-to-day hospital operations in one system.", cats: ["backend"], stack: ["PHP", "MySQL"], github: "https://github.com/aspatil0/MY-PHP-PROJECTS/tree/main/HOSPITAL%20MANAGEMNET" },
  { title: "CC-Lab Management", note: "Backend system", desc: "Manages computer-lab machines, schedules and usage.", cats: ["backend"], stack: ["PHP", "JS"], github: "https://github.com/aspatil0/MY-PHP-PROJECTS/tree/main/CC-LAB-PROJECT" },
  { title: "DevineTech Website", note: "My startup", desc: "Business site for DevineTech, covering internships and client management.", cats: ["frontend"], stack: ["HTML/CSS", "JS"], live: "https://devine-tech.netlify.app/" },
  { title: "E-Stationary", note: "Frontend", desc: "Lets local shop owners manage their business with no database to buy.", cats: ["frontend"], stack: ["JS", "LocalStorage"], live: "https://tesnary.netlify.app/" },
  { title: "Neon Tic-Tac-Toe", note: "Frontend", desc: "Tic-tac-toe with neon effects and a dynamic winner screen.", cats: ["frontend"], stack: ["JavaScript"], live: "https://aditya-tictactoe.vercel.app/" },
  { title: "To-Do List", note: "Frontend", desc: "My personal task manager, saved in the browser with LocalStorage.", cats: ["frontend"], stack: ["JavaScript"], live: "https://adi-todo.netlify.app/" },
  { title: "Women Safety Device", note: "Patented · Research paper · Award winner", desc: "Panic button that sends live GPS over GSM, places an emergency call and sounds an alarm.", cats: ["iot"], stack: ["IoT", "GSM", "GPS"] },
  { title: "Anti-Sleep Alarm", note: "IoT build", desc: "Steering-wheel sensors detect a drowsy driver and trigger an alarm.", cats: ["iot"], stack: ["Arduino"] },
  { title: "Smart Bin", note: "IoT build", desc: "Opens its lid hands-free with ultrasonic sensors and monitors how full it is.", cats: ["iot"], stack: ["Sensors"] },
  { title: "Colour-Sorting Robotic Arm", note: "IoT build", desc: "Servo arm that picks objects by colour using a TCS3200 sensor.", cats: ["iot"], stack: ["Arduino", "Servo"] },
];
