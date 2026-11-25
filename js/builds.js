/* =========================================================
   builds.html: the build log, newest first.
   To add a build, put a new object at the TOP of BUILDS.
   `date` is an ISO timestamp with your timezone (IST = +05:30).
   ========================================================= */
const BUILDS = [
  {
    title: "The Last Hire",
    date: "2026-11-24T15:00:00+05:30",
    kind: "Game",
    tags: ["Horror", "Story mode", "Godot"],
    desc: "A story-driven horror game I developed in Godot, with Claude as my co-dev. Check it out and play it in your browser.",
    link: "https://thelasthire.netlify.app/",
    linkLabel: "Play the game",
    collab: "I have lots of stories to build. If you're a game developer, let's work together.",
  },
];

(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");

  /* theme */
  $("#themeBtn").addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  const ago = (d) => {
    const s = Math.round((Date.now() - d) / 1000);
    if (s < 60) return "just now";
    const units = [["year", 31536000], ["month", 2592000], ["week", 604800], ["day", 86400], ["hour", 3600], ["minute", 60]];
    const [u, n] = units.find(([, n]) => s >= n);
    const v = Math.floor(s / n);
    return `${v} ${u}${v > 1 ? "s" : ""} ago`;
  };

  const list = BUILDS.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  $("#buildCount").textContent = `${pad(list.length)} ${list.length === 1 ? "build" : "builds"} logged`;

  $("#blog").innerHTML = list.map((b, i) => {
    const d = new Date(b.date);
    const month = d.toLocaleString("en-GB", { month: "short" });
    const time = d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    return `
    <li class="blog-item${i === 0 ? " is-latest" : ""}" style="--d:${i * 90}ms">
      <time class="bstamp" datetime="${esc(b.date)}">
        <span class="bstamp-day">${pad(d.getDate())}</span>
        <span class="bstamp-my mono">${month} ${d.getFullYear()}</span>
        <span class="bstamp-time mono">${time}</span>
        <span class="bstamp-ago" data-ago="${esc(b.date)}">${ago(d)}</span>
      </time>
      <article class="bcard">
        <div class="bcard-top mono">
          <span>${pad(list.length - i)} · ${esc(b.kind)}</span>
          ${i === 0 ? '<span class="latest"><i aria-hidden="true"></i>Latest build</span>' : ""}
        </div>
        <h2>${esc(b.title)}</h2>
        <p>${esc(b.desc)}</p>
        <div class="p-stack">${b.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="bcard-acts">
          <a class="btn btn-accent" href="${esc(b.link)}" target="_blank" rel="noopener">${esc(b.linkLabel || "Open")} <span class="arr">↗</span></a>
          <span class="bcard-url mono">${esc(b.link.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</span>
        </div>
        ${b.collab ? `<a class="bcard-collab" href="index.html#contact">${esc(b.collab)} →</a>` : ""}
      </article>
    </li>`;
  }).join("");

  /* keep the "x ago" labels fresh */
  setInterval(() => {
    document.querySelectorAll("[data-ago]").forEach((el) => (el.textContent = ago(new Date(el.dataset.ago))));
  }, 60000);
})();
