/* =====================================================================
   DEVRISTON — ACADEMIC PROGRAMS  (edit THIS file only)
   Feeds the "Academic Programs" tiles on learn.html.
   programs.html is still written by hand: when you change one, change both.
   ids MUST match the card ids on programs.html:
   dit, ptb, olevel, alevel, university
   status:  "live" = notes/MCQs published (add notes: and/or mcq:)
            "soon" = in preparation, "planned" = later semester
   After editing:  git add -A && git commit -m "Update programs" && git push
   ===================================================================== */
window.DV_PROGRAMS = [
  {
    id: "dit", icon: "🎓", name: "DIT", full: "Diploma in Information Technology",
    blurb: "Lecture notes and MCQ practice for DIT Part-I subjects.",
    subjects: [
      { name: "ICT",                 status: "live", notes: "ict-notes.html",        mcq: "ict-mcq.html" },
      { name: "MS Office",           status: "live", notes: "ms-office-notes.html",  mcq: "ms-office-mcq.html" },
      { name: "Operating Systems",   status: "live", notes: "os-notes.html",         mcq: "os-mcq.html" },
      { name: "Computer Networking", status: "live", notes: "networking-notes.html", mcq: "networking-mcq.html" }
    ]
  },
  {
    id: "ptb", icon: "📘", name: "PTB Computer Science", full: "Classes 9, 10, 11 and 12",
    blurb: "Punjab Board Computer Science: chapter-wise notes and MCQs for every class.",
    subjects: [
      { name: "Class 9 Computer Science",  status: "live", notes: "9th-class-computer-science-notes.html",  mcq: "9th-class-computer-science-mcqs.html" },
      { name: "Class 10 Computer Science", status: "live", notes: "10th-class-computer-science-notes.html", mcq: "10th-class-computer-science-mcqs.html" },
      { name: "Class 11 Computer Science", status: "live", notes: "11th-class-computer-science-notes.html", mcq: "11th-class-computer-science-mcqs.html" },
      { name: "Class 12 Computer Science", status: "live", notes: "12th-class-computer-science-notes.html", mcq: "12th-class-computer-science-mcqs.html" }
    ]
  },
  {
    id: "olevel", icon: "🌍", name: "O Level", full: "Computer Science 2210",
    blurb: "Concept notes, topic-wise MCQs and a two-paper model assessment.",
    subjects: [
      { name: "Concept notes",  status: "live", notes: "o-level-computer-science-notes.html" },
      { name: "Topic MCQs",     status: "live", mcq: "o-level-computer-science-mcqs.html" },
      { name: "Model paper",    status: "live", notes: "o-level-computer-science-model-paper.html" }
    ]
  },
  {
    id: "alevel", icon: "🏅", name: "A Level", full: "Computer Science 9618",
    blurb: "AS and A Level concept notes, topic MCQs and practice for Papers 1–4.",
    subjects: [
      { name: "Concept notes",  status: "live", notes: "a-level-computer-science-notes.html" },
      { name: "Topic MCQs",     status: "live", mcq: "a-level-computer-science-mcqs.html" },
      { name: "Model papers",   status: "live", notes: "a-level-computer-science-model-paper.html" }
    ]
  },
  {
    id: "university", icon: "🏛️", name: "BSCS / BSIT / ADP", full: "University Computer Science and IT",
    blurb: "Shared core subjects are live now. Other subjects on request.",
    subjects: [
      { name: "Operating Systems",   status: "live", notes: "os-notes.html",         mcq: "os-mcq.html" },
      { name: "Computer Networking", status: "live", notes: "networking-notes.html", mcq: "networking-mcq.html" },
      { name: "Python",              status: "live", notes: "python-notes.html" },
      { name: "C Programming",       status: "live", notes: "c-programming.html" }
    ]
  }
];
