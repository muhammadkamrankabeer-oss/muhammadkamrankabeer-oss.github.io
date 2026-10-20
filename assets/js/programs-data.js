/* =====================================================================
   DEVRISTON — ACADEMIC PROGRAMS  (edit THIS file only)
   ---------------------------------------------------------------------
   The Programs page (programs.html) and the "Academic Programs" section
   on the hub (learn.html) are both built from this list.

   ADD A SUBJECT   copy one line inside "subjects" and edit it
   DROP A SUBJECT  delete its line
   ADD A PROGRAM   copy a whole { ... } block and edit it (keep the commas)

   status:  "live"     notes / MCQs are published   (add notes: and/or mcq:)
            "soon"     in preparation
            "planned"  planned for a later semester
   note:    optional small text shown beside the subject
   notes:   page of the lecture notes, e.g. "os-notes.html"
   mcq:     page of the MCQ practice, e.g. "os-mcq.html"

   After editing:   git add -A && git commit -m "Update programs" && git push
   ===================================================================== */
window.DV_PROGRAMS = [
  {
    id: "dit", icon: "🎓", name: "DIT", full: "Diploma in Information Technology",
    blurb: "Lecture notes and MCQ practice for the DIT subjects.",
    subjects: [
      { name: "ICT",                status: "soon" },
      { name: "MS Office",          status: "soon" },
      { name: "Operating Systems",  status: "live", notes: "os-notes.html",         mcq: "os-mcq.html" },
      { name: "Computer Networking",status: "live", notes: "networking-notes.html", mcq: "networking-mcq.html" },
      { name: "DBMS",               status: "soon" }
    ]
  },
  {
    id: "ptb", icon: "📘", name: "PTB Computer Science", full: "1st Year · 2nd Year · 9th · 10th",
    blurb: "Computer Science for the PTB classes: notes and MCQ practice.",
    subjects: [
      { name: "1st Year Computer Science",  status: "soon" },
      { name: "2nd Year Computer Science",  status: "soon" },
      { name: "9th Computer Science",       status: "planned" },
      { name: "10th Computer Science",      status: "planned" }
    ]
  },
  {
    id: "bscs", icon: "💻", name: "BSCS / ADP CS", full: "Bachelor and Associate Degree, Computer Science",
    blurb: "University-level subjects for BSCS and ADP CS students.",
    subjects: [
      { name: "ICT",                   status: "soon" },
      { name: "DBMS",                  status: "soon" },
      { name: "Digital Logic Design",  status: "planned", note: "taught previously" },
      { name: "Embedded Systems",      status: "planned", note: "taught previously" }
    ]
  },
  {
    id: "bsit", icon: "🖧", name: "BSIT / ADP IT", full: "Bachelor and Associate Degree, Information Technology",
    blurb: "University-level subjects for BSIT and ADP IT students.",
    subjects: [
      { name: "ICT",                   status: "soon" },
      { name: "DBMS",                  status: "soon" },
      { name: "Digital Logic Design",  status: "planned", note: "taught previously" },
      { name: "Embedded Systems",      status: "planned", note: "taught previously" }
    ]
  },
  {
    id: "olevel", icon: "🌍", name: "O Level", full: "",
    blurb: "Subjects for O Level students will be added here.",
    subjects: []
  },
  {
    id: "alevel", icon: "🏅", name: "A Level", full: "",
    blurb: "Subjects for A Level students will be added here.",
    subjects: []
  }
];
