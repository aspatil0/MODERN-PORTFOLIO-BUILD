/* =========================================================
   THE ANTHOLOGY: content + interactions
   Edit the DATA section to update the site. No build step needed.
   ========================================================= */

/* ------------------------- DATA ------------------------- */
// cats: frontend | backend | fullstack | saas | ai | iot
const PROJECTS = [
  { title: "Gemini Clone", note: "© Idea & research paper", desc: "A Gemini-style AI chat built with React and the Gemini API, with saved history and prompt search.", cats: ["ai", "frontend"], stack: ["React", "Gemini API"], url: "https://aditya-geminiai.vercel.app/" },
  { title: "CoupleMate", note: "AI / ML matchmaking", desc: "AI/ML-powered matchmaking with real-time chat between matched users.", cats: ["ai", "fullstack"], stack: ["ML", "Realtime"], url: "" },
  { title: "Novel Scam Scanner", note: "© Patented", desc: "Scans QR codes and transaction IDs, verifies them against an API, and warns before a fraudulent payment goes through.", cats: ["iot", "ai"], stack: ["IoT", "API"], url: "" },
  { title: "Mission Feed India", note: "© Idea & research paper", desc: "A food-redistribution platform that routes surplus meals to people who need them.", cats: ["fullstack", "backend"], stack: ["PHP", "MySQL"], url: "https://github.com/aspatil0/Mission-Feed-India-_Food-Redistribution-Web-Platform" },
  { title: "Flatmate (Myroomies)", note: "© Idea & research paper", desc: "Finds compatible flatmates by budget, lifestyle, location and habits, with secure messaging.", cats: ["fullstack", "saas"], stack: ["MERN"], url: "" },
  { title: "Te Amo", note: "© Idea & research paper", desc: "A private space for couples: shared memories, mood tracking, love notes and reminders.", cats: ["fullstack", "saas"], stack: ["Web App"], url: "" },
  { title: "You & Me", note: "© Idea & research paper", desc: "Random blind dates matched on interests, personality or location, kept safe online.", cats: ["fullstack"], stack: ["Web App"], url: "" },
  { title: "Engi World", note: "SaaS · in development", desc: "A hub for engineering students with resources, projects, internships and networking.", cats: ["saas"], stack: ["Platform"], url: "" },
  { title: "ParseMe", note: "SaaS · in development", desc: "Parses code and documents into structured data, flags syntax errors, and cleans up messy text.", cats: ["saas", "ai"], stack: ["Dev Tool"], url: "" },
  { title: "Node Net", note: "© Idea & research paper", desc: "A decentralised network where companies, acting as nodes, share resources and computing power directly with each other.", cats: ["saas", "backend"], stack: ["Distributed"], url: "" },
  { title: "Hospital Management", note: "Backend system", desc: "Patient records, doctor schedules and day-to-day hospital operations in one system.", cats: ["backend"], stack: ["PHP", "MySQL"], url: "https://github.com/aspatil0/MY-PHP-PROJECTS/tree/main/HOSPITAL%20MANAGEMNET" },
  { title: "CC-Lab Management", note: "Backend system", desc: "Manages computer-lab machines, schedules and usage.", cats: ["backend"], stack: ["PHP", "JS"], url: "https://github.com/aspatil0/MY-PHP-PROJECTS/tree/main/CC-LAB-PROJECT" },
  { title: "DevineTech Website", note: "My startup", desc: "Business site for DevineTech, covering internships and client management.", cats: ["frontend"], stack: ["HTML/CSS", "JS"], url: "https://devine-tech.netlify.app/" },
  { title: "E-Stationary", note: "Frontend", desc: "Lets local shop owners manage their business with no database to buy.", cats: ["frontend"], stack: ["JS", "LocalStorage"], url: "https://tesnary.netlify.app/" },
  { title: "Neon Tic-Tac-Toe", note: "Frontend", desc: "Tic-tac-toe with neon effects and a dynamic winner screen.", cats: ["frontend"], stack: ["JavaScript"], url: "https://aditya-tictactoe.vercel.app/" },
  { title: "To-Do List", note: "Frontend", desc: "My personal task manager, saved in the browser with LocalStorage.", cats: ["frontend"], stack: ["JavaScript"], url: "https://adi-todo.netlify.app/" },
  { title: "Women Safety Device", note: "© Patented · Award winner", desc: "Panic button that sends live GPS over GSM, places an emergency call and sounds an alarm.", cats: ["iot"], stack: ["IoT", "GSM", "GPS"], url: "" },
  { title: "Anti-Sleep Alarm", note: "© Patented", desc: "Steering-wheel sensors detect a drowsy driver and trigger an alarm.", cats: ["iot"], stack: ["Arduino"], url: "" },
  { title: "Smart Bin", note: "© Patented", desc: "Opens its lid hands-free with ultrasonic sensors and monitors how full it is.", cats: ["iot"], stack: ["Sensors"], url: "" },
  { title: "Colour-Sorting Robotic Arm", note: "© Patented", desc: "Servo arm that picks objects by colour using a TCS3200 sensor.", cats: ["iot"], stack: ["Arduino", "Servo"], url: "" },
];

// Covers live in assets/books/. bk = spine tint, h/w = spine size in px.
const BOOKS = [
  { title: "Last Six Days", cover: "last-six-days.jpg", genre: "Crime thriller", type: "Novel", tagline: "Time is running. Death is writing.",
    blurb: "A woman receives a note: only six days remain. A serial threat closes in on the city, and the countdown has already started.", bk: "#2a0c0c", h: 238, w: 58 },
  { title: "The Love I Can't Hold", cover: "the-love-i-cant-hold.jpg", genre: "Romance", type: "Novel", tagline: "Some feelings stay… even when you're not together.",
    blurb: "A story about a love that never quite ends, even after two people stop walking the same road.", bk: "#5a2346", h: 224, w: 54 },
  { title: "I Killed Myself", cover: "i-killed-myself.jpg", genre: "Psychological thriller", type: "Novel", tagline: "One body. Two minds. Countless crimes.",
    blurb: "Who is real, and who is the killer? A dark thriller about one man and the other mind living inside him.", bk: "#1c1416", h: 262, w: 60 },
  { title: "Do You Still Love Me?", cover: "do-you-still-love-me.jpg", genre: "Romance", type: "Novel", tagline: "One question every heart is afraid to ask.",
    blurb: "A quiet love story built around the one question that's hardest to ask out loud.", bk: "#a8742f", h: 212, w: 50 },
  { title: "Solve Better", cover: "solve-better.jpg", genre: "Self-help", type: "Non-fiction", tagline: "Life is complex. Decisions don't have to be.",
    blurb: "16 principles for better decisions and a better life. A practical guide to thinking clearly when it matters.", bk: "#efeae0", ink: "#1a1917", h: 230, w: 56 },
  { title: "The Tunnel Paradox", cover: "the-tunnel-paradox.jpg", genre: "Sci-fi", type: "Time travel adventure", tagline: "A time travel adventure.",
    blurb: "A family steps into a tunnel where time folds back on itself, and getting out means facing the paradox they created.", bk: "#0e2a44", h: 250, w: 62 },
  { title: "The Curse of Yasaka", cover: "the-curse-of-yasaka.jpg", genre: "Dark fantasy", type: "Epic", tagline: "Blood, war and an ancient curse.",
    blurb: "A lone warrior, an army of the damned, and a curse written in blood. A dark samurai epic.", bk: "#3a0d0d", h: 242, w: 58 },
];

const PATENTS = [
  { no: "PAT-01", title: "Women Safety Device", desc: "Wearable panic system with live GPS over GSM, an auto emergency call and an alarm. Won the TCOER Tech Exhibition 2024 and was runner-up at VIT Hackathon 2024.", tags: ["IoT", "Hardware"] },
  { no: "PAT-02", title: "Novel Scanner for Scam Detection", desc: "Checks QR codes and transaction IDs before a payment goes through, to stop digital payment fraud.", tags: ["IoT", "FinSec"] },
  { no: "PAT-03", title: "Anti-Sleep Alarm", desc: "Detects a drowsy driver through steering-wheel sensors and sounds an alarm.", tags: ["IoT", "Safety"] },
  { no: "PAT-04", title: "Smart Bin", desc: "Ultrasonic sensors open the lid hands-free and report how full the bin is.", tags: ["IoT", "Civic"] },
  { no: "PAT-05", title: "Colour-Sorting Robotic Arm", desc: "Servo arm that detects and lifts objects by colour with a TCS3200 sensor.", tags: ["Robotics"] },
];

const PAPERS = [
  { title: "IoT Research Paper", desc: "Published research on IoT systems, drawn from my hardware work.", type: "Research paper" },
  { title: "Mission Feed India", desc: "A model for redistributing surplus food at scale.", type: "Paper · ©" },
  { title: "Node Net", desc: "A decentralised network for sharing resources between companies.", type: "Paper · ©" },
  { title: "Flatmate", desc: "Matching flatmates by preference.", type: "Idea · ©" },
  { title: "ParseMe", desc: "Turning unstructured code and text into structured data.", type: "Idea · ©" },
  { title: "Engi World", desc: "A community platform for engineering students.", type: "Idea · ©" },
  { title: "Te Amo & You and Me", desc: "Two relationship and dating platform concepts.", type: "Idea · ©" },
];

const TOOLKIT = [
  { side: "Side A", name: "Frontend", tracks: [["HTML & CSS", "every project"], ["JavaScript", "daily driver"], ["React", "Gemini Clone"], ["Next.js", "SaaS builds"], ["Responsive UI", "mobile first"]] },
  { side: "Side A", name: "Backend & Data", tracks: [["Node.js & Express", "MERN apps"], ["PHP", "Hospital, CC-Lab"], ["MongoDB", "MERN apps"], ["MySQL", "Mission Feed"], ["REST APIs", "everywhere"]] },
  { side: "Side B", name: "AI & Hardware", tracks: [["LLM APIs (Gemini)", "AI tools"], ["ML matchmaking", "CoupleMate"], ["Arduino", "patented devices"], ["GSM / GPS modules", "safety device"], ["Sensors & servos", "robotics"]] },
  { side: "Side B", name: "Beyond Code", tracks: [["Technical writing", "research papers"], ["Storytelling", "seven books"], ["Teaching", "1500+ students"], ["Leadership", "3+ teams"], ["Public speaking", "20+ sessions"]] },
];

const JOURNEY = [
  { yr: "2025 →", title: "Full Stack Developer", org: "Dexpert System Pvt. Ltd.", desc: "Building production web platforms. Managing 3+ teams and 13+ projects." },
  { yr: "2025", title: "Founder & CEO", org: "DevineTech Solutions", desc: "A startup for web, digital and IoT services, running client projects, internships and training." },
  { yr: "2025", title: "Co-Founder & Partner", org: "Menteronics", desc: "Formed when NodeMedia and DevineTech merged. Training programmes, tech innovation and joint ventures." },
  { yr: "2025", title: "IoT Club Lead", org: "TCOER", desc: "Helping students take hardware projects from idea to working prototype." },
  { yr: "2024–25", title: "GDG Web Dev Lead", org: "Google Developer Group", desc: "Led web projects, workshops and mentorship for the student developer community." },
  { yr: "2024–25", title: "Vice President", org: "Computer Core Committee", desc: "Ran technical events, coding challenges and inter-college competitions." },
  { yr: "2024–25", title: "20+ Dev Sessions", org: "TCOER", desc: "Hands-on web development sessions that trained and mentored 350+ students." },
  { yr: "2024", title: "Hackathon Winner", org: "TCOER · VIT", desc: "Won the TCOER Technical Exhibition and was runner-up at VIT's national hackathon with the Women Safety Device." },
  { yr: "2022–23", title: "Student Council President", org: "Trinity College of Engineering & Research", desc: "Led student initiatives and college-wide programmes for 1500+ students." },
];

const ROLES = ["writes novels.", "files patents.", "ships SaaS.", "trains AI.", "publishes research."];

/* ----------------------- HELPERS ----------------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};

/* ------------------------ THEME ------------------------ */
$("#themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  store.set("theme", root.dataset.theme);
});

/* ------------------------- NAV ------------------------- */
const nav = $(".nav");
const menuBtn = $("#menuBtn");
const toc = $("#toc");
menuBtn.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!open));
  toc.hidden = open;
});
$$("#toc a").forEach((a) => a.addEventListener("click", () => { toc.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }));

/* page counter + nav border */
const chapters = $$("main > section");
const folioNum = $("#folioNum");
const folioBar = $("#folioBar");
function onScroll() {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > 10);
  folioNum.parentElement.classList.toggle("show", y > innerHeight * 0.7);
  const max = document.documentElement.scrollHeight - innerHeight;
  folioBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  let idx = 0;
  chapters.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.45) idx = i; });
  folioNum.textContent = "p. " + pad(idx + 1);
  const id = chapters[idx].id;
  $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ----------------------- ROTATOR ----------------------- */
const rot = $("#rotator");
let ri = 0;
if (!reduceMotion) {
  setInterval(() => {
    rot.classList.add("out");
    setTimeout(() => { ri = (ri + 1) % ROLES.length; rot.textContent = ROLES[ri]; rot.classList.remove("out"); }, 350);
  }, 2600);
}

/* ------------------------ REVEAL ----------------------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach((el) => io.observe(el));

/* counters */
const cio = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.countTo, t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    reduceMotion ? (el.textContent = to) : requestAnimationFrame(tick);
    cio.unobserve(el);
  });
}, { threshold: 0.6 });
$$("[data-count-to]").forEach((el) => cio.observe(el));

/* ------------------------- WORK ------------------------ */
const workList = $("#workList");
workList.innerHTML = PROJECTS.map((p, i) => {
  const tag = p.url ? "a" : "div";
  const attrs = p.url ? `href="${esc(p.url)}" target="_blank" rel="noopener"` : `tabindex="0"`;
  return `<li class="work-item" data-cats="${p.cats.join(" ")}">
    <${tag} class="work-row" ${attrs} data-title="${esc(p.title)}">
      <span class="w-num">${pad(i + 1)}</span>
      <span class="w-title">${esc(p.title)}<small>${esc(p.note)}</small></span>
      <p class="w-desc">${esc(p.desc)}</p>
      <span class="w-cats">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</span>
      <span class="w-arrow" aria-hidden="true">${p.url ? "↗" : "→"}</span>
    </${tag}>
  </li>`;
}).join("");

const counts = { all: PROJECTS.length };
PROJECTS.forEach((p) => p.cats.forEach((c) => (counts[c] = (counts[c] || 0) + 1)));
$$(".chip").forEach((c) => c.insertAdjacentHTML("beforeend", `<sup>${pad(counts[c.dataset.filter] || 0)}</sup>`));
$('[data-count="projects"]').textContent = `[${pad(PROJECTS.length)}]`;
$('[data-count="lab"]').textContent = `[${pad(PATENTS.length + PAPERS.length)}]`;

function applyFilter(f) {
  $$(".chip").forEach((c) => { const on = c.dataset.filter === f; c.classList.toggle("is-active", on); c.setAttribute("aria-selected", on); });
  let n = 0;
  $$(".work-item").forEach((li) => {
    const show = f === "all" || li.dataset.cats.split(" ").includes(f);
    li.classList.toggle("hide", !show);
    if (show) li.querySelector(".w-num").textContent = pad(++n);
  });
  $("#workCount").textContent = `${pad(n)} ${f === "all" ? "projects" : "in " + $(`.chip[data-filter="${f}"]`).firstChild.textContent.trim()}`;
}
$$(".chip").forEach((c) => c.addEventListener("click", () => applyFilter(c.dataset.filter)));
$$("[data-filter-link]").forEach((a) => a.addEventListener("click", () => applyFilter(a.dataset.filterLink)));
applyFilter("all");

/* floating preview that follows the cursor */
const prev = $("#workPreview"), prevTxt = prev.firstElementChild;
let px = 0, py = 0, tx = 0, ty = 0, raf = 0;
const follow = () => { px += (tx - px) * 0.18; py += (ty - py) * 0.18; prev.style.left = px + "px"; prev.style.top = py + "px"; raf = requestAnimationFrame(follow); };
workList.addEventListener("pointerover", (e) => {
  const row = e.target.closest(".work-row");
  if (!row || e.pointerType !== "mouse") return;
  prevTxt.textContent = row.dataset.title;
  prev.classList.add("on");
  if (!raf) { px = tx = e.clientX; py = ty = e.clientY; follow(); }
});
workList.addEventListener("pointermove", (e) => { tx = e.clientX + 150; ty = e.clientY - 20; });
workList.addEventListener("pointerleave", () => { prev.classList.remove("on"); cancelAnimationFrame(raf); raf = 0; });

/* ------------------------ LIBRARY ---------------------- */
const shelf = $("#shelf");
shelf.innerHTML = BOOKS.map((b, i) =>
  `<button class="spine${i === BOOKS.length - 1 ? " lean" : ""}" role="option" aria-selected="false" data-i="${i}"
     style="--bk:${b.bk};--bk-ink:${b.ink || "#fff"};--h:${b.h}px;--w:${b.w}px;--img:url('${new URL(`assets/books/${b.cover}`, location.href).href}')" aria-label="${esc(b.title)}">
     <b>${esc(b.title)}</b><i>${["I","II","III","IV","V","VI","VII"][i]}</i>
   </button>`).join("");

const book3d = $("#book3d"), coverImg = $("#coverImg");
BOOKS.forEach((b) => { const im = new Image(); im.src = `assets/books/${b.cover}`; }); // preload
function showBook(i, animate = true) {
  const b = BOOKS[i];
  $$(".spine").forEach((s) => s.setAttribute("aria-selected", s.dataset.i == i));
  const paint = () => {
    coverImg.src = `assets/books/${b.cover}`;
    coverImg.alt = `Cover of ${b.title} by Adityaraj Patil`;
    $("#bNum").textContent = `Book ${pad(i + 1)} of ${pad(BOOKS.length)}`;
    $("#bTitle").textContent = b.title;
    $("#bBlurb").textContent = b.blurb;
    $("#bGenre").textContent = b.genre;
    $("#bFormat").textContent = b.type;
    $("#bTag").textContent = b.tagline;
  };
  if (animate && !reduceMotion) {
    book3d.classList.remove("swap"); void book3d.offsetWidth; book3d.classList.add("swap");
    setTimeout(paint, 300);
  } else paint();
}
shelf.addEventListener("click", (e) => { const s = e.target.closest(".spine"); if (s) showBook(+s.dataset.i); });
shelf.addEventListener("keydown", (e) => {
  if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
  const cur = +($(".spine[aria-selected='true']")?.dataset.i || 0);
  const next = (cur + (e.key === "ArrowRight" ? 1 : -1) + BOOKS.length) % BOOKS.length;
  showBook(next); $$(".spine")[next].focus();
});
showBook(0, false);

/* -------------------------- LAB ------------------------ */
$("#patents").innerHTML = PATENTS.map((p) => `
  <article class="doc">
    <span class="doc-no">${esc(p.no)}</span>
    <h4>${esc(p.title)}</h4>
    <p>${esc(p.desc)}</p>
    <div class="d-tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <span class="stamp">PATENTED ©</span>
  </article>`).join("");
$("#papers").innerHTML = PAPERS.map((p) => `
  <li><div><h4>${esc(p.title)}</h4><p>${esc(p.desc)}</p></div><span class="ptype">${esc(p.type)}</span></li>`).join("");

/* ------------------------ TOOLKIT ---------------------- */
let tn = 0;
$("#tracklist").innerHTML = TOOLKIT.map((g) => `
  <div class="side">
    <h3>${esc(g.side)}</h3>
    <h4>${esc(g.name)}</h4>
    <ol>${g.tracks.map(([t, c]) => `<li class="track"><span class="n">${pad(++tn)}</span><span class="t">${esc(t)}</span><span class="lead"></span><span class="c">${esc(c)}</span></li>`).join("")}</ol>
  </div>`).join("");

/* ------------------------ JOURNEY ---------------------- */
$("#ledger").innerHTML = JOURNEY.map((j) => `
  <li><span class="yr">${esc(j.yr)}</span><h4>${esc(j.title)}<small>${esc(j.org)}</small></h4><p>${esc(j.desc)}</p></li>`).join("");

/* ------------------------ RECORD PLAYER ---------------- */
// Song file: audio/Alfaaz Song Download.mp3 (change the src on the <audio> tag to swap it).
const song = $("#song"), deck = $(".turntable"), vinyl = $("#vinyl"), pLabel = $("#pLabel");
const setPlaying = (on) => { deck.classList.toggle("on", on); vinyl.classList.toggle("playing", on); $("#playBtn").setAttribute("aria-label", on ? "Pause Alfaz" : "Play Alfaz"); pLabel.textContent = on ? "Now playing" : "My favourite tune"; };
// Used when the mp3 isn't available: swap this for a direct Spotify/YouTube link to the exact track.
const SONG_FALLBACK = "https://www.youtube.com/results?search_query=Alfaz+song";
$("#playBtn").addEventListener("click", () => {
  if (song.paused) song.play().then(() => setPlaying(true)).catch(() => {
    setPlaying(false);
    pLabel.textContent = "Opening on YouTube ↗";
    window.open(SONG_FALLBACK, "_blank", "noopener");
  });
  else { song.pause(); setPlaying(false); }
});
song.addEventListener("ended", () => { setPlaying(false); $("#pFill").style.width = "0"; });
song.addEventListener("timeupdate", () => { if (song.duration) $("#pFill").style.width = (song.currentTime / song.duration) * 100 + "%"; });
$("#pBar").addEventListener("click", (e) => { if (!song.duration) return; const r = e.currentTarget.getBoundingClientRect(); song.currentTime = ((e.clientX - r.left) / r.width) * song.duration; });

/* ------------------------ CONTACT ---------------------- */
const form = $("#contactForm"), status = $("#formStatus");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.success !== false) { status.textContent = "Sent. I'll reply soon ✦"; form.reset(); }
    else throw new Error();
  } catch {
    status.textContent = "That didn't send. Please email me instead.";
  }
});
