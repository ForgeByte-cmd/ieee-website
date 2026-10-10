/* =====================================================
   IEEE VVITU Student Branch - script.js

   HOW THIS FILE IS ORGANISED
   1. CONFIG        -> contact details and form connections (edit me!)
   2. DATA          -> members, team, events, announcements, gallery, resources (edit me!)
   3. HELPERS       -> small functions used everywhere
   4. FEATURES      -> navbar, events, members, gallery, forms, login, dashboard
   5. START         -> runs everything when the page loads
   ===================================================== */

"use strict";

/* ===================================================
   1. CONFIG - edit these values
   =================================================== */
const CONFIG = {
  // Paste a form-service URL here to really receive submissions (see README).
  // Leave as "" to stay in demo mode (nothing is sent anywhere).
  registrationEndpoint: "",
  feedbackEndpoint: "",

  // Contact details. Leave "" until you have the real ones.
  contact: {
    email: "",       // example: "ieee@yourcollege.edu"
    location: "Vasireddy Venkatadri International Technological University (VVITU), Namburu, Guntur, Andhra Pradesh (please confirm address)",
    linkedin: "",    // full URL
    instagram: "",   // full URL
    github: ""       // full URL
  }
};

/* ===================================================
   2. DATA - replace the sample entries with real ones
   =================================================== */

/* ---------- Events ----------
   tags decide which filter shows the card:
   upcoming | past | workshop | hackathon | sample
   Set image to a file like "images/events/codesprint.jpg" to use a real picture. */
const events = [
  {
    id: "breaking-code", title: "Breaking Code", category: "Technical Event",
    tags: ["upcoming"], official: true, hue: 150,
    image: "images/breaking-code-poster.png",
    summary: "Think. Debug. Break. Build Again. Our flagship coding event.",
    details: "Date, time, venue and participation mode will be announced soon. Register using the form on this page."
  },
  {
    id: "codesprint", title: "CodeSprint", category: "Hackathon",
    tags: ["upcoming", "hackathon", "sample"], hue: 210, image: "",
    summary: "A fast coding sprint to build a small project in a team.",
    details: "Sample event for demonstration. Date and details are not confirmed."
  },
  {
    id: "coding-workshop", title: "Coding Workshop", category: "Workshop",
    tags: ["upcoming", "workshop", "sample"], hue: 190, image: "",
    summary: "A beginner-friendly workshop on writing and testing code.",
    details: "Sample event for demonstration. Date and details are not confirmed."
  },
  {
    id: "aiml-workshop", title: "AI/ML Workshop", category: "Workshop",
    tags: ["past", "workshop", "sample"], hue: 270, image: "",
    summary: "An introduction to machine learning ideas and tools.",
    details: "Sample past event for demonstration. No real results are shown."
  },
  {
    id: "tech-quiz", title: "Technical Quiz", category: "Quiz",
    tags: ["past", "sample"], hue: 30, image: "",
    summary: "A quiz on electronics, computing and technology.",
    details: "Sample past event for demonstration. No real results are shown."
  },
  {
    id: "hackathon", title: "Hackathon", category: "Hackathon",
    tags: ["past", "hackathon", "sample"], hue: 340, image: "",
    summary: "A longer team event to build and present a working idea.",
    details: "Sample past event for demonstration. No real results are shown."
  }
];

/* ---------- Members directory ----------
   To add a real member: copy one line, change the values, and put the photo
   in images/members/ (example: photo: "images/members/ravi.jpg").
   Leave photo, linkedin or github as "" if you do not have them. */
const members = [
  { name: "Sample Member 01", role: "Student Branch Counselor", department: "ECE", year: "Faculty", bio: "Guides the branch and supports student activities.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 02", role: "Chairperson", department: "CSE", year: "4th year", bio: "Leads the branch and plans the year's activities.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 03", role: "Vice Chairperson", department: "ECE", year: "4th year", bio: "Supports the chairperson and coordinates teams.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 04", role: "Secretary", department: "IT", year: "3rd year", bio: "Keeps records and manages communication.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 05", role: "Treasurer", department: "EEE", year: "3rd year", bio: "Looks after the branch budget and expenses.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 06", role: "Webmaster", department: "CSE", year: "3rd year", bio: "Builds and updates this website.", photo: "", linkedin: "", github: "https://github.com/" },
  { name: "Sample Member 07", role: "Technical Lead", department: "AI & ML", year: "3rd year", bio: "Plans workshops and technical content.", photo: "", linkedin: "https://www.linkedin.com/", github: "" },
  { name: "Sample Member 08", role: "Event Coordinator", department: "IT", year: "2nd year", bio: "Organises events from planning to the final day.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 09", role: "Design and Media Lead", department: "CSE", year: "2nd year", bio: "Creates posters, photos and social media posts.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 10", role: "Student Member", department: "ECE", year: "2nd year", bio: "Loves electronics and joins every workshop.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 11", role: "Student Member", department: "CSE", year: "1st year", bio: "New to coding and excited to learn.", photo: "", linkedin: "", github: "" },
  { name: "Sample Member 12", role: "Student Member", department: "EEE", year: "1st year", bio: "Interested in robotics and IoT projects.", photo: "", linkedin: "", github: "" }
];

/* ---------- Leadership team (separate from the directory) ---------- */
const team = [
  { name: "Sample Faculty Coordinator", role: "Faculty Coordinator", department: "ECE", year: "Faculty", bio: "Placeholder. Replace with the verified faculty coordinator.", photo: "", faculty: true },
  { name: "Sample Chairperson", role: "Chairperson", department: "CSE", year: "4th year", bio: "Placeholder. Replace with the verified chairperson.", photo: "" },
  { name: "Sample Vice Chairperson", role: "Vice Chairperson", department: "ECE", year: "4th year", bio: "Placeholder. Replace with the verified vice chairperson.", photo: "" },
  { name: "Sample Secretary", role: "Secretary", department: "IT", year: "3rd year", bio: "Placeholder. Replace with the verified secretary.", photo: "" },
  { name: "Sample Treasurer", role: "Treasurer", department: "EEE", year: "3rd year", bio: "Placeholder. Replace with the verified treasurer.", photo: "" }
];

/* ---------- Announcements ---------- */
const announcements = [
  { category: "Registration", title: "The Breaking Code registration form is on this page. Deadline to be announced.", sample: true },
  { category: "Recruitment", title: "Student branch recruitment details will be shared here.", sample: true },
  { category: "Workshop", title: "Workshop schedule coming soon. Check the Events section.", sample: true },
  { category: "IEEE Notice", title: "Visit students.ieee.org for the latest IEEE student news.", sample: true }
];

/* ---------- Gallery ----------
   Add real photos to images/gallery/ and set src: "images/gallery/photo1.jpg".
   While src is "", a sample picture is drawn instead. */
const galleryImages = [
  { title: "Coding workshop", src: "", hue: 200 },
  { title: "Hackathon night", src: "", hue: 330 },
  { title: "AI/ML session", src: "", hue: 270 },
  { title: "Technical quiz", src: "", hue: 30 },
  { title: "Team discussion", src: "", hue: 160 },
  { title: "Guest talk", src: "", hue: 220 },
  { title: "Student activity", src: "", hue: 100 },
  { title: "Prize ceremony", src: "", hue: 45 }
];

/* ---------- Resources ---------- */
const resources = [
  { group: "Official IEEE", links: [
    ["IEEE Student Activities", "https://students.ieee.org"],
    ["IEEE Xplore", "https://ieeexplore.ieee.org"],
    ["Student membership benefits", "https://students.ieee.org/membership-benefits/student-membership-benefits/"],
    ["IEEEXtreme", "https://ieeextreme.org"],
    ["IEEE Region 10", "https://ieeer10.org"]
  ]},
  { group: "Practice programming", links: [
    ["LeetCode", "https://leetcode.com"],
    ["HackerRank", "https://www.hackerrank.com"],
    ["CodeChef", "https://www.codechef.com"],
    ["Codeforces", "https://codeforces.com"],
    ["GeeksforGeeks", "https://www.geeksforgeeks.org"]
  ]},
  { group: "Web development", links: [
    ["MDN Web Docs", "https://developer.mozilla.org"],
    ["freeCodeCamp", "https://www.freecodecamp.org"],
    ["web.dev", "https://web.dev"],
    ["The Odin Project", "https://www.theodinproject.com"]
  ]},
  { group: "AI and machine learning", links: [
    ["Google Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course"],
    ["Kaggle Learn", "https://www.kaggle.com/learn"],
    ["fast.ai", "https://www.fast.ai"]
  ]}
];

/* ===================================================
   3. HELPERS
   =================================================== */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// Make text safe before putting it into HTML.
function esc(text) {
  return String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Read and write the browser's storage safely (it can be blocked in some browsers).
function loadData(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveData(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

// Draws a simple coloured picture so the site looks good before real photos are added.
function placeholderImage(label, hue) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${hue},65%,38%)"/><stop offset="1" stop-color="hsl(${hue + 40},70%,18%)"/>
    </linearGradient></defs>
    <rect width="640" height="480" fill="url(#g)"/>
    <text x="320" y="235" font-family="Arial" font-size="38" font-weight="700" fill="#fff" text-anchor="middle">${esc(label)}</text>
    <text x="320" y="282" font-family="Arial" font-size="22" fill="#ffffffaa" text-anchor="middle">Sample image</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// Circle with initials, used when a member has no photo (or the photo fails to load).
function avatarImage(name) {
  const words = name.trim().split(/\s+/);
  const initials = ((words[0]?.[0] || "") + (words[1]?.[0] || "")).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" fill="#00629b"/>
    <text x="60" y="76" font-family="Arial" font-size="44" font-weight="700" fill="#fff" text-anchor="middle">${esc(initials)}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// If any image with data-fallback fails to load, swap in its fallback picture.
document.addEventListener("error", event => {
  const img = event.target;
  if (img.tagName === "IMG" && img.dataset.fallback) {
    const fallback = img.dataset.fallback;
    delete img.dataset.fallback;
    img.src = fallback;
  }
}, true);

// Opens/closes pop-up windows. Closing works with buttons marked data-close and by clicking outside.
$$("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog || event.target.closest("[data-close]")) dialog.close();
  });
});

/* ===================================================
   4. FEATURES
   =================================================== */

/* ---------- Navbar: hamburger, dropdown, scroll highlight ---------- */
function setupNavbar() {
  const menuToggle = $("#menuToggle");
  const navMenu = $("#navMenu");
  const dropdown = $(".dropdown");
  const dropdownToggle = $(".dropdown-toggle");

  function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
  function closeDropdown() {
    dropdown.classList.remove("open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menus after choosing a link, pressing Escape, or clicking elsewhere.
  $$("#navMenu a").forEach(link => link.addEventListener("click", () => { closeMenu(); closeDropdown(); }));
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeMenu(); closeDropdown(); } });
  document.addEventListener("click", event => { if (!dropdown.contains(event.target)) closeDropdown(); });

  // Highlight the link of the section you are looking at.
  const sectionLinks = {};
  $$('#navMenu a[href^="#"]').forEach(link => { sectionLinks[link.getAttribute("href").slice(1)] = link; });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$("#navMenu a.active").forEach(a => a.classList.remove("active"));
        sectionLinks[entry.target.id]?.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  Object.keys(sectionLinks).forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section); });
}

/* ---------- Announcements ---------- */
function renderAnnouncements() {
  $("#announcementList").innerHTML = announcements.map(item => `
    <li>
      <span class="badge">${esc(item.category)}</span>
      ${item.sample ? '<span class="badge sample">Sample</span>' : ""}
      <strong>${esc(item.title)}</strong>
    </li>`).join("");
}

/* ---------- Events: cards, filters, details pop-up ---------- */
let currentEventFilter = "all";

function renderEvents() {
  const visible = events.filter(e => currentEventFilter === "all" || e.tags.includes(currentEventFilter));
  $("#eventGrid").innerHTML = visible.map(e => {
    const fallback = placeholderImage(e.title, e.hue);
    const status = e.tags.includes("past") ? "past" : "upcoming";
    return `
      <article class="card event-card">
        <img src="${esc(e.image || fallback)}" data-fallback="${fallback}" alt="${esc(e.title)} event image" loading="lazy">
        <div class="event-body">
          <div class="badges">
            <span class="badge">${esc(e.category)}</span>
            <span class="badge ${status}">${status === "past" ? "Past" : "Upcoming"}</span>
            ${e.official ? '<span class="badge official">Official event</span>' : '<span class="badge sample">Sample, not confirmed</span>'}
          </div>
          <h3>${esc(e.title)}</h3>
          <p>${esc(e.summary)}</p>
          <button class="btn btn-outline-dark btn-small" data-event="${esc(e.id)}">View details</button>
        </div>
      </article>`;
  }).join("");
  $("#eventEmpty").hidden = visible.length > 0;
  $$("#eventFilters .chip").forEach(chip => chip.classList.toggle("active", chip.dataset.filter === currentEventFilter));
}

function setEventFilter(filter) {
  currentEventFilter = filter;
  renderEvents();
}

function openEventDetails(eventId) {
  const e = events.find(item => item.id === eventId);
  if (!e) return;
  const status = e.tags.includes("past") ? "Past" : "Upcoming";
  $("#eventDialogBody").innerHTML = `
    <h3 id="eventDialogTitle">${esc(e.title)}</h3>
    <p class="small">${esc(e.category)} | ${status} | ${e.official ? "Official event" : "Sample event, not confirmed"}</p>
    <p>${esc(e.summary)}</p>
    <p>${esc(e.details)}</p>
    <p><strong>Date:</strong> TBA &nbsp; <strong>Venue:</strong> TBA</p>`;

  const registerButton = $("#eventRegisterBtn");
  if (e.id === "breaking-code") {
    registerButton.hidden = false;
  } else {
    registerButton.hidden = true;
    $("#eventDialogBody").insertAdjacentHTML("beforeend", '<p class="small">Registration is not open for this sample event.</p>');
  }
  $("#eventDialog").showModal();
}

function setupEvents() {
  renderEvents();
  // Filter buttons
  $("#eventFilters").addEventListener("click", event => {
    const chip = event.target.closest(".chip");
    if (chip) setEventFilter(chip.dataset.filter);
  });
  // Links elsewhere on the page that apply a filter (navbar dropdown, hero button)
  $$("a[data-filter]").forEach(link => link.addEventListener("click", () => setEventFilter(link.dataset.filter)));
  // "View details" buttons
  $("#eventGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-event]");
    if (button) openEventDetails(button.dataset.event);
  });
  // Register button inside the pop-up: close it, then the link scrolls to the form
  $("#eventRegisterBtn").addEventListener("click", () => $("#eventDialog").close());
}

/* ---------- Members directory: search, filter, view all ---------- */
const MEMBERS_SHOWN_AT_FIRST = 8;
let showAllMembers = false;

function personCardHTML(person, options = {}) {
  const fallback = avatarImage(person.name);
  const links = [];
  if (person.linkedin) links.push(`<a href="${esc(person.linkedin)}" target="_blank" rel="noopener" aria-label="${esc(person.name)} on LinkedIn">LinkedIn</a>`);
  if (person.github) links.push(`<a href="${esc(person.github)}" target="_blank" rel="noopener" aria-label="${esc(person.name)} on GitHub">GitHub</a>`);
  return `
    <article class="card member-card ${person.faculty ? "faculty" : ""}">
      <span class="sample-ribbon">Sample profile</span>
      <img src="${esc(person.photo || fallback)}" data-fallback="${fallback}" alt="Photo of ${esc(person.name)}" width="110" height="110" loading="lazy">
      <h3>${esc(person.name)}</h3>
      <p class="role">${esc(person.role)}</p>
      <p class="meta">${esc(person.department)} | ${esc(person.year)}</p>
      <p class="bio">${esc(person.bio)}</p>
      ${links.length ? `<div class="social-links">${links.join("")}</div>` : ""}
    </article>`;
}

function renderMembers() {
  const searchText = $("#memberSearch").value.trim().toLowerCase();
  const role = $("#memberRole").value;
  const matches = members.filter(m =>
    (!role || m.role === role) &&
    (!searchText || (m.name + " " + m.role + " " + m.department).toLowerCase().includes(searchText))
  );
  const shown = showAllMembers || searchText || role ? matches : matches.slice(0, MEMBERS_SHOWN_AT_FIRST);

  $("#memberGrid").innerHTML = shown.map(m => personCardHTML(m)).join("");
  $("#memberEmpty").hidden = matches.length > 0;
  // The button only matters when no search or filter is active and there are more members to show
  const needsButton = !searchText && !role && members.length > MEMBERS_SHOWN_AT_FIRST;
  $("#memberMore").hidden = !needsButton;
  $("#memberMore").textContent = showAllMembers ? "Show fewer members" : "View all members";
}

function setupMembers() {
  // Fill the role dropdown from the data
  [...new Set(members.map(m => m.role))].forEach(role => {
    $("#memberRole").insertAdjacentHTML("beforeend", `<option>${esc(role)}</option>`);
  });
  $("#memberSearch").addEventListener("input", renderMembers);
  $("#memberRole").addEventListener("change", renderMembers);
  $("#memberMore").addEventListener("click", () => { showAllMembers = !showAllMembers; renderMembers(); });
  renderMembers();
}

/* ---------- Leadership team ---------- */
function renderTeam() {
  $("#teamGrid").innerHTML = team.map(p => personCardHTML(p)).join("");
}

/* ---------- Gallery and lightbox ---------- */
let lightboxIndex = 0;

function renderGallery() {
  $("#galleryGrid").innerHTML = galleryImages.map((item, index) => {
    const fallback = placeholderImage(item.title, item.hue);
    return `
      <button type="button" data-index="${index}" aria-label="View picture: ${esc(item.title)}">
        <img src="${esc(item.src || fallback)}" data-fallback="${fallback}" alt="${esc(item.title)}" loading="lazy">
        <span>${esc(item.title)}</span>
      </button>`;
  }).join("");
}

function showLightboxImage(index) {
  lightboxIndex = (index + galleryImages.length) % galleryImages.length; // wraps around
  const item = galleryImages[lightboxIndex];
  const fallback = placeholderImage(item.title, item.hue);
  const image = $("#lbImage");
  image.dataset.fallback = fallback;
  image.src = item.src || fallback;
  image.alt = item.title;
  $("#lbCaption").textContent = `${item.title} (${lightboxIndex + 1} of ${galleryImages.length})`;
}

function setupGallery() {
  renderGallery();
  const lightbox = $("#lightbox");
  $("#galleryGrid").addEventListener("click", event => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    showLightboxImage(Number(button.dataset.index));
    lightbox.showModal();
  });
  $("#lbPrev").addEventListener("click", () => showLightboxImage(lightboxIndex - 1));
  $("#lbNext").addEventListener("click", () => showLightboxImage(lightboxIndex + 1));
  lightbox.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") showLightboxImage(lightboxIndex - 1);
    if (event.key === "ArrowRight") showLightboxImage(lightboxIndex + 1);
  });
}

/* ---------- Resources ---------- */
function renderResources() {
  $("#resourceGrid").innerHTML = resources.map(group => `
    <article class="card resource-card">
      <h3>${esc(group.group)}</h3>
      <ul>${group.links.map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a></li>`).join("")}</ul>
    </article>`).join("");
}

/* ---------- Contact ---------- */
function renderContact() {
  const c = CONFIG.contact;
  const row = (label, value, href) => `
    <li><strong>${label}</strong>
    ${value ? `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(value)}</a>` : '<span class="not-set">Not added yet</span>'}</li>`;
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(c.location);
  $("#contactList").innerHTML =
    row("Email", c.email, "mailto:" + c.email) +
    row("Location", c.location, mapsUrl) +
    row("LinkedIn", c.linkedin, c.linkedin) +
    row("Instagram", c.instagram, c.instagram) +
    row("GitHub", c.github, c.github);
}

/* ---------- Form helpers ---------- */
// Each rule returns an error message, or "" when the value is fine.
const rules = {
  name: v => !v ? "Please enter your full name." : v.length < 3 ? "Name must be at least 3 characters." : !/^[A-Za-z .'-]+$/.test(v) ? "Use letters and spaces only." : "",
  email: v => !v ? "Please enter your email." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Enter a valid email, like name@college.edu." : "",
  roll: v => !v ? "Please enter your roll number." : !/^[A-Za-z0-9]{4,}$/.test(v) ? "Use letters and numbers only (at least 4 characters)." : "",
  branch: v => !v ? "Please select your branch." : "",
  phone: v => !v ? "Please enter your phone number." : !/^[6-9]\d{9}$/.test(v) ? "Enter a 10-digit mobile number starting with 6, 7, 8 or 9." : "",
  required: v => !v ? "This field is required." : ""
};

// Show or clear the error under a field. Returns true when the field is valid.
function checkField(input, rule) {
  const message = rule(input.value.trim());
  const errorBox = document.getElementById(input.id + "-error");
  if (errorBox) errorBox.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (errorBox) input.setAttribute("aria-describedby", errorBox.id);
  return !message;
}

// Check many fields. Moves focus to the first problem. Returns true when all are valid.
function checkAll(list) {
  let firstBad = null;
  list.forEach(([input, rule]) => { if (!checkField(input, rule) && !firstBad) firstBad = input; });
  firstBad?.focus();
  return !firstBad;
}

// Check a field when the user leaves it, so mistakes are shown early.
function liveValidate(list) {
  list.forEach(([input, rule]) => input.addEventListener("blur", () => checkField(input, rule)));
}

function showMessage(element, type, text) {
  element.className = "form-message " + type;
  element.textContent = text;
}

/* Sends data to a form service. Returns "sent" when the server accepted it.
   Returns "demo" when no endpoint is set (nothing was sent). Throws on a failure.
   >>> This is the one place to change if you connect a different service. <<< */
async function sendToEndpoint(endpoint, data) {
  if (!endpoint) return "demo";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error("Server replied with " + response.status);
  return "sent";
}

/* ---------- Registration form ---------- */
function setupRegistration() {
  const form = $("#registerForm");
  const fields = [
    [$("#regName"), rules.name], [$("#regEmail"), rules.email], [$("#regRoll"), rules.roll],
    [$("#regBranch"), rules.branch], [$("#regPhone"), rules.phone]
  ];
  liveValidate(fields);

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const message = $("#registerMessage");
    if (!checkAll(fields)) {
      showMessage(message, "fail", "Please fix the highlighted fields and try again.");
      return;
    }
    const data = {
      name: $("#regName").value.trim(), email: $("#regEmail").value.trim(), roll: $("#regRoll").value.trim(),
      branch: $("#regBranch").value, phone: $("#regPhone").value.trim(), team: $("#regTeam").value.trim(),
      event: "Breaking Code"
    };
    const button = $("button[type=submit]", form);
    button.disabled = true;
    showMessage(message, "", "Sending...");
    try {
      const result = await sendToEndpoint(CONFIG.registrationEndpoint, data);
      // Keep a copy in this browser so the dashboard can list it.
      const list = loadData("ieeeRegistrations", []);
      list.push({ event: "Breaking Code", status: result === "sent" ? "Sent to IEEE VVITU" : "Saved in this browser only", time: new Date().toLocaleString() });
      saveData("ieeeRegistrations", list);

      if (result === "sent") {
        showMessage(message, "success", "Thank you! Your registration was sent successfully.");
      } else {
        showMessage(message, "warning", "Demo mode: your details are valid, but they were NOT saved or sent to IEEE VVITU. Connect a form service to collect real registrations.");
      }
      form.reset();
      prefillFromUser();
      renderDashboard();
    } catch (error) {
      showMessage(message, "fail", "Sorry, we could not send your registration. Please check your internet and try again.");
    } finally {
      button.disabled = false;
    }
  });
}

/* ---------- Feedback form ---------- */
function setupFeedback() {
  const form = $("#feedbackForm");
  const select = $("#fbEvent");
  select.innerHTML = '<option value="">Select an event</option>' +
    events.map(e => `<option>${esc(e.title)}${e.official ? "" : " (sample)"}</option>`).join("") + "<option>Other</option>";

  const fields = [[select, rules.required], [$("#fbComments"), rules.required]];
  liveValidate(fields);

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const message = $("#feedbackMessage");
    const rating = $("input[name=rating]:checked", form);
    const fieldsOk = checkAll(fields);
    $("#fbRating-error").textContent = rating ? "" : "Please choose a rating.";
    if (!fieldsOk || !rating) {
      showMessage(message, "fail", "Please complete the required fields and try again.");
      return;
    }
    const data = {
      event: select.value, rating: Number(rating.value),
      comments: $("#fbComments").value.trim(), suggestion: $("#fbSuggestion").value.trim()
    };
    const button = $("button[type=submit]", form);
    button.disabled = true;
    showMessage(message, "", "Sending...");
    try {
      const result = await sendToEndpoint(CONFIG.feedbackEndpoint, data);
      const list = loadData("ieeeFeedback", []);
      list.push({ ...data, time: new Date().toLocaleString() });
      saveData("ieeeFeedback", list);
      if (result === "sent") {
        showMessage(message, "success", "Thank you for your feedback!");
      } else {
        showMessage(message, "warning", "Demo mode: your feedback was saved only in this browser and was NOT sent to IEEE VVITU.");
      }
      form.reset();
      renderDashboard();
    } catch (error) {
      showMessage(message, "fail", "Sorry, we could not send your feedback. Please try again.");
    } finally {
      button.disabled = false;
    }
  });
}

/* ---------- Demo login and dashboard ---------- */
function getUser() { return loadData("ieeeUser", null); }

// If someone is logged in, fill their name and email into the registration form.
function prefillFromUser() {
  const user = getUser();
  if (user) { $("#regName").value = user.name; $("#regEmail").value = user.email; }
}

function renderDashboard() {
  const user = getUser();
  $("#loginBtn").hidden = !!user;
  $("#dashboardLink").hidden = !user;
  $("#dashboard").hidden = !user;
  if (!user) return;

  $("#dashName").textContent = user.name;
  $("#dashEmail").textContent = user.email;

  const registrations = loadData("ieeeRegistrations", []);
  $("#dashEvents").innerHTML = registrations.length
    ? registrations.map(r => `<li><strong>${esc(r.event)}</strong><br><span class="small">${esc(r.status)} | ${esc(r.time)}</span></li>`).join("")
    : '<li class="small">You have not registered for any event yet. <a href="#register">Register for Breaking Code</a>.</li>';

  const workshops = events.filter(e => e.tags.includes("workshop") && e.tags.includes("upcoming"));
  $("#dashWorkshops").innerHTML = workshops.length
    ? workshops.map(w => `<li>${esc(w.title)} <span class="badge sample">Sample</span></li>`).join("")
    : '<li class="small">No upcoming workshops yet.</li>';

  $("#dashAnnouncements").innerHTML = announcements.slice(0, 3).map(a => `<li><strong>${esc(a.category)}:</strong> ${esc(a.title)}</li>`).join("");
}

function setupLogin() {
  const dialog = $("#loginDialog");
  const fields = [[$("#loginName"), rules.name], [$("#loginEmail"), rules.email]];
  liveValidate(fields);

  $("#loginBtn").addEventListener("click", () => dialog.showModal());
  $("#loginForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!checkAll(fields)) return;
    saveData("ieeeUser", { name: $("#loginName").value.trim(), email: $("#loginEmail").value.trim() });
    dialog.close();
    $("#loginForm").reset();
    prefillFromUser();
    renderDashboard();
    $("#dashboard").scrollIntoView();
  });
  $("#logoutBtn").addEventListener("click", () => {
    try { localStorage.removeItem("ieeeUser"); } catch { /* ignore */ }
    renderDashboard();
    window.scrollTo({ top: 0 });
  });
}

/* ===================================================
   5. START - runs when the page has loaded
   =================================================== */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  setupNavbar();
  renderAnnouncements();
  setupEvents();
  setupMembers();
  renderTeam();
  setupGallery();
  renderResources();
  renderContact();
  setupRegistration();
  setupFeedback();
  setupLogin();
  prefillFromUser();
  renderDashboard();
});
