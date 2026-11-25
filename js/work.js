/* =========================================================
   work.html: every project as a card (4 per row).
   GitHub repo -> GitHub button; live site -> Live button; neither -> enquiry form.
   Project data lives in js/projects.js.
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};

/* theme */
$("#themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  store.set("theme", root.dataset.theme);
});

/* cards */
const GH = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>';

const actions = (p, i) => {
  const out = [];
  if (p.github) out.push(`<a class="p-btn" href="${esc(p.github)}" target="_blank" rel="noopener">${GH} GitHub ↗</a>`);
  if (p.live) out.push(`<a class="p-btn" href="${esc(p.live)}" target="_blank" rel="noopener">Live site ↗</a>`);
  if (!out.length) out.push(`<button class="p-btn enq" type="button" data-enq="${i}">Get enquiry →</button>`);
  return out.join("");
};

const grid = $("#pgrid");
grid.innerHTML = PROJECTS.map((p, i) => `
  <li data-cats="${p.cats.join(" ")}">
    <article class="pcard${p.featured ? " is-flag" : ""}">
      <div class="p-top"><span class="p-num">${pad(i + 1)}</span>${p.featured ? '<span class="flag">★ Flagship</span>' : ""}</div>
      <h3>${esc(p.title)}</h3>
      <span class="p-note">${esc(p.status || p.note)}</span>
      <p>${esc(p.desc)}</p>
      <div class="p-stack">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      <div class="p-acts">${actions(p, i)}</div>
    </article>
  </li>`).join("");

/* filters */
const counts = { all: PROJECTS.length };
PROJECTS.forEach((p) => p.cats.forEach((c) => (counts[c] = (counts[c] || 0) + 1)));
$$(".chip").forEach((c) => c.insertAdjacentHTML("beforeend", `<sup>${pad(counts[c.dataset.filter] || 0)}</sup>`));

function applyFilter(f) {
  if (!$(`.chip[data-filter="${f}"]`)) f = "all";
  $$(".chip").forEach((c) => { const on = c.dataset.filter === f; c.classList.toggle("is-active", on); c.setAttribute("aria-selected", on); });
  let n = 0;
  $$("#pgrid > li").forEach((li) => {
    const show = f === "all" || li.dataset.cats.split(" ").includes(f);
    li.classList.toggle("hide", !show);
    if (show) {
      const card = li.firstElementChild;
      card.querySelector(".p-num").textContent = pad(++n);
      // replay the entrance animation, staggered
      card.style.setProperty("--d", `${Math.min(n - 1, 12) * 45}ms`);
      card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
    }
  });
  $("#workCount").textContent = `${pad(n)} ${f === "all" ? "projects" : "in " + $(`.chip[data-filter="${f}"]`).firstChild.textContent.trim()}`;
  const url = new URL(location.href);
  f === "all" ? url.searchParams.delete("f") : url.searchParams.set("f", f);
  history.replaceState(null, "", url);
}
$$(".chip").forEach((c) => c.addEventListener("click", () => applyFilter(c.dataset.filter)));
applyFilter(new URLSearchParams(location.search).get("f") || "all");

/* enquiry dialog */
const dlg = $("#enqDialog"), form = $("#enqForm"), status = $("#enqStatus");
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-enq]");
  if (!btn) return;
  const p = PROJECTS[+btn.dataset.enq];
  $("#enqName").textContent = p.title;
  $("#enqProject").value = p.title;
  $("#enqSubject").value = `Project enquiry: ${p.title}`;
  status.textContent = "";
  dlg.showModal();
  form.querySelector('input[name="name"]').focus();
});
$("#enqClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // click on backdrop

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.success !== false) {
      status.textContent = "Sent. I'll reply soon ✦";
      form.reset();
      setTimeout(() => dlg.open && dlg.close(), 1800);
    } else throw new Error();
  } catch {
    status.textContent = "That didn't send. Please email me instead.";
  }
});
