/* =========================================================
   THE ANTHOLOGY: content + interactions
   Edit the DATA section to update the site. No build step needed.
   ========================================================= */

/* ------------------------- DATA ------------------------- */
// PROJECTS lives in js/projects.js (shared with work.html).

// Covers live in assets/books/. bk = spine tint, h/w = spine size in px.
const BOOKS = [
  { title: "Last Six Days", cover: "last-six-days.jpg", genre: "Crime thriller", type: "Novel", tagline: "Time is running. Death is writing.",
    blurb: "A woman receives a note: only six days remain. A serial threat closes in on the city, and the countdown has already started.", bk: "#2a0c0c", h: 238, w: 58 },
  { title: "The Love I Can't Hold", cover: "the-love-i-cant-hold.jpg", genre: "Romance", type: "Novel", tagline: "Some feelings stay… even when you're not together.",
    blurb: "A story about a love that never quite ends, even after two people stop walking the same road.", bk: "#5a2346", h: 224, w: 54, url: "https://www.amazon.in/Love-Cant-Hold-Heartbreaking-Regret-ebook/dp/B0FLJ2QGN7" },
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

// The two works on record. creds = what exists for each one.
const PATENTS = [
  { no: "REC-01", title: "Women Safety Device", stamp: "PATENTED ©", creds: ["Patented", "Research paper"],
    desc: "Wearable panic system with live GPS over GSM, an auto emergency call and an alarm. Won the TCOER Tech Exhibition 2024 and was runner-up at VIT Hackathon 2024.", tags: ["IoT", "GSM", "GPS"] },
  { no: "REC-02", title: "Novel Scanner for Scam Detection", stamp: "RESEARCH PAPER", creds: ["Research paper"],
    desc: "Checks QR codes and transaction IDs against an API before a payment goes through, to stop digital payment fraud.", tags: ["IoT", "FinSec"] },
];

// Concepts I'm researching on my own. No patents or papers filed for these.
const PAPERS = [
  { title: "AI Orchestration", desc: "How several AI models and agents can be coordinated to plan, split and finish one task together.", type: "Researching" },
  { title: "Node Net", desc: "A decentralised network where companies, acting as nodes, share resources and computing power.", type: "Concept" },
  { title: "ParseMe", desc: "Turning unstructured code and text into clean, structured data.", type: "Concept" },
  { title: "CoupleMate", desc: "AI/ML matchmaking with real-time chat between matched users.", type: "Concept" },
  { title: "Te Amo & You and Me", desc: "Two relationship and dating platform ideas: a private space for couples, and safe blind dates.", type: "Concept" },
];

const TOOLKIT = [
  { side: "Side A", name: "Frontend", tracks: [["HTML & CSS", "every project"], ["JavaScript", "daily driver"], ["React", "Gemini Clone"], ["Next.js", "SaaS builds"], ["Responsive UI", "mobile first"]] },
  { side: "Side A", name: "Backend & Data", tracks: [["Node.js & Express", "MERN apps"], ["PHP", "Hospital, CC-Lab"], ["MongoDB", "MERN apps"], ["MySQL", "Mission Feed"], ["REST APIs", "everywhere"]] },
  { side: "Side B", name: "AI & Hardware", tracks: [["LLM APIs (Gemini)", "AI tools"], ["ML matchmaking", "CoupleMate"], ["Arduino", "IoT builds"], ["GSM / GPS modules", "safety device"], ["Sensors & servos", "robotics"]] },
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
  const isDark = root.dataset.theme !== "light";
  root.dataset.theme = isDark ? "light" : "dark";
  store.set("theme", root.dataset.theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = isDark ? "#efebe3" : "#12110f";
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
// Flagship projects as cards; the full list lives on work.html.
const FEATURED = PROJECTS.filter((p) => p.featured);
const GH_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>';
$("#featured").innerHTML = FEATURED.map((p, i) => `
  <a class="fcard${i === 0 ? " fcard-lead" : ""}" href="${esc(p.github || p.live)}" target="_blank" rel="noopener" style="--d:${i * 80}ms">
    <span class="f-top"><span class="f-num">${pad(i + 1)}</span><span class="f-status"><i></i>${esc(p.status)}</span></span>
    <span class="f-mark" aria-hidden="true">${esc(p.title.replace(/\s.*$/, "").slice(0, 2))}</span>
    <span class="f-body">
      <small class="f-note">${esc(p.note)}</small>
      <h3 class="f-title">${esc(p.title)}</h3>
      <em class="f-tag">${esc(p.tagline)}</em>
      <p class="f-desc">${esc(p.desc)}</p>
    </span>
    <span class="f-foot">
      <span class="f-stack">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</span>
      <span class="f-go">${p.github ? GH_ICON + " GitHub" : "Live"} <b aria-hidden="true">↗</b></span>
    </span>
  </a>`).join("");
$("#allCount").textContent = pad(PROJECTS.length);
$('[data-count="projects"]').textContent = `[${pad(PROJECTS.length)}]`;
$('[data-count="lab"]').textContent = `[${pad(PATENTS.length + PAPERS.length)}]`;

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
    $("#bookAmazonLink").href = b.url || "https://amazon.com/author/adityarajpatil";
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
    <div class="d-creds">${p.creds.map((c) => `<span>✓ ${esc(c)}</span>`).join("")}</div>
    <p>${esc(p.desc)}</p>
    <div class="d-tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <span class="stamp">${esc(p.stamp)}</span>
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
