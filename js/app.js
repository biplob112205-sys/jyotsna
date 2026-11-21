/**
 * SORA LENSWORKS - Interactive Engine & Secure CMS
 * Founder: Jyotsna Bhattacharyya
 * Brand: SORA LENSWORKS (JB GFX)
 * Phone / WhatsApp: +91 6291152548
 * Email: jyotsna.gfx.2004@gmail.com
 */

// ========================================================
// 1. DEFAULT DATA REGISTRY (FACTORY DEFAULTS)
// ========================================================
const DEFAULT_CMS_DATA = {
  brand: {
    name: "SORA LENSWORKS",
    monogram: "JB GFX",
    founder: "Jyotsna Bhattacharyya",
    tagline: "Graphic Design • Video Editing",
    phone: "+91 6291152548",
    email: "jyotsna.gfx.2004@gmail.com",
    whatsappNumber: "916291152548",
    instagram: "@soralensworks",
    instagramUrl: "https://instagram.com/soralensworks",
    behance: "behance.net/soralensworks",
    behanceUrl: "https://behance.net/soralensworks",
    yearBadge: "2026 Portfolio →"
  },
  security: {
    adminId: "admin",
    password: "Sora@2026"
  },
  theme: {
    navyDark: "#0A2540",
    navyDeep: "#0D2847",
    royalBlue: "#1B56A8",
    skyBlue: "#5B95E5",
    iceBgStart: "#D4E7FF",
    iceBgEnd: "#EDF4FF",
    goldAccent: "#D4A338"
  },
  hero: {
    eyebrow: "SORA LENSWORKS • JYOTSNA BHATTACHARYYA",
    headline: "Graphic Design &amp; Cinematic Video Editing.",
    subheadline: "Directed by Jyotsna Bhattacharyya (JB GFX). Bespoke advertising posters, commercial brand visuals &amp; 4K cinematic video post-production.",
    ctaPrimary: "View Our Work ↓",
    ctaSecondary: "Chat on WhatsApp",
    stats: [
      { number: "150+", label: "Commercial Deliveries" },
      { number: "4.9 ★", label: "Client Rating" },
      { number: "48h", label: "Rapid Turnaround" },
      { number: "100%", label: "Precision Craft" }
    ]
  },
  // Exact 12 Hardcoded Real Disciplines
  services: [
    // 6 Graphic Design Services
    {
      id: "srv-poster",
      title: "Poster Design",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      desc: "High-contrast theatrical, event, and promotional posters engineered with bespoke typography and striking lighting composition.",
      deliverables: "A1/A2 Print Files (CMYK 300 DPI), High-Res Digital Formats",
      tools: "Adobe Photoshop, Illustrator, Camera Raw",
      turnaround: "48 - 72 Hours"
    },
    {
      id: "srv-banner",
      title: "Banner Design",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      desc: "Google Display Network, website hero graphics, billboard banners, and multi-format commercial display suites.",
      deliverables: "14 Standard Display Sizes, Vector Billboards",
      tools: "Adobe Illustrator, Photoshop, Figma",
      turnaround: "24 - 48 Hours"
    },
    {
      id: "srv-social",
      title: "Social Media Marketing Poster",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      desc: "High-engagement carousel decks, Instagram & Facebook promo posts designed specifically to drive click-throughs.",
      deliverables: "10-Slide Carousels, Feed & Story High-CTR Formats",
      tools: "Photoshop, Illustrator, Lightroom",
      turnaround: "24 - 48 Hours"
    },
    {
      id: "srv-album",
      title: "Album Design",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      desc: "Physical vinyl gatefold artwork, Spotify/Apple Music master covers, digital single packaging, and canvas animations.",
      deliverables: "Vinyl Sleeves, Spotify 3000px Master, 9:16 Canvas Loop",
      tools: "Adobe Photoshop, InDesign, After Effects",
      turnaround: "3 - 5 Days"
    },
    {
      id: "srv-wedding",
      title: "Wedding Photo Editing",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      desc: "Velvety natural skin frequency separation, high-end color grading, bridal portrait retouching, and book spreads.",
      deliverables: "Master Retouched Photos, Tone Profiles, Album Book",
      tools: "Lightroom Classic, Photoshop, Capture One",
      turnaround: "3 - 5 Days"
    },
    {
      id: "srv-ads",
      title: "Ads Poster Design",
      category: "graphic-design",
      categoryLabel: "Graphic Design",
      desc: "Psychologically backed direct-response ad creatives for e-commerce, software, and local service lead acquisition.",
      deliverables: "Meta Ads Set (1:1, 4:5, 9:16), Split-Test Variants",
      tools: "Photoshop, Illustrator, 3D Elements",
      turnaround: "24 - 48 Hours"
    },
    // 6 Video Editing Services
    {
      id: "srv-podcast",
      title: "Podcast Editing",
      category: "video-editing",
      categoryLabel: "Video Editing",
      desc: "Multi-camera rhythmic cutting, studio sound repair, filler word removal, animated captions, and viral short cuts.",
      deliverables: "4K Episode Master, 5 Vertical Shorts with Subtitles",
      tools: "Premiere Pro, DaVinci Resolve, iZotope RX",
      turnaround: "48 Hours"
    },
    {
      id: "srv-aiads",
      title: "AI Ads Video",
      category: "video-editing",
      categoryLabel: "Video Editing",
      desc: "Generative photorealistic b-roll, high-fidelity neural voiceovers, automated translations, and rapid product promos.",
      deliverables: "30s Master Commercial (16:9 & 9:16), Licensed Voiceover",
      tools: "RunWay Gen-3, Midjourney, ElevenLabs, Premiere Pro",
      turnaround: "48 - 72 Hours"
    },
    {
      id: "srv-adsvideo",
      title: "Ads Video Editing",
      category: "video-editing",
      categoryLabel: "Video Editing",
      desc: "Thumb-stopping 3-second hook edits, dynamic speed-ramping, kinetic zooms, and sound-effect rich commercial reels.",
      deliverables: "15s & 30s High-Retention Cuts, Custom 5.1 Sound Mix",
      tools: "Premiere Pro, DaVinci Resolve Studio, After Effects",
      turnaround: "48 Hours"
    },
    {
      id: "srv-cinematic",
      title: "Cinematic Video Editing",
      category: "video-editing",
      categoryLabel: "Video Editing",
      desc: "10-bit LOG color grading, organic film print emulation, pacing narrative rhythm, and immersive cinema sound design.",
      deliverables: "4K DCI Cinematic Master, Custom Film Look LUT (.cube)",
      tools: "DaVinci Resolve Studio, Premiere Pro, Dehancer Pro",
      turnaround: "4 - 6 Days"
    },
    {
      id: "srv-motion",
      title: "Motion Graphics Video",
      category: "video-editing",
      categoryLabel: "Video Editing",
      desc: "Kinetic typography, animated logo reveals, 2D/3D isometric explainers, and clean UI walkthrough video animations.",
      deliverables: "90s 4K Vector Animated Explainer, Social Teasers",
      tools: "After Effects, Cinema 4D, Illustrator, Audition",
      turnaround: "4 - 5 Days"
    },
    {
      id: "srv-aidoc",
      title: "AI Documentary Video Editing",
      category: "video-editing",
      categoryLabel: "Video Editing",
      desc: "Archival restoration, AI parallax image animations, deep-dive historical pacing, and cinematic narrative scores.",
      deliverables: "15-Minute 4K Mini-Doc, Custom Thumbnail Package",
      tools: "Topaz Video AI, Midjourney, Premiere Pro, DaVinci",
      turnaround: "5 - 7 Days"
    }
  ],
  // Default projects array: empty so only real client work appears
  projects: []
};

// ========================================================
// 2. CMS STATE MANAGER (LOCAL STORAGE PERSISTENCE)
// ========================================================
const CMS_STORAGE_KEY = "soralensworks_cms_v4";

function loadCMSData() {
  try {
    const raw = localStorage.getItem(CMS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        brand: { ...DEFAULT_CMS_DATA.brand, ...(parsed.brand || {}) },
        security: { ...DEFAULT_CMS_DATA.security, ...(parsed.security || {}) },
        theme: { ...DEFAULT_CMS_DATA.theme, ...(parsed.theme || {}) },
        hero: { ...DEFAULT_CMS_DATA.hero, ...(parsed.hero || {}) },
        services: Array.isArray(parsed.services) && parsed.services.length > 0 ? parsed.services : DEFAULT_CMS_DATA.services,
        projects: Array.isArray(parsed.projects) ? parsed.projects : []
      };
    }
  } catch (e) {
    console.error("Error reading CMS data:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
}

function saveCMSData(data) {
  try {
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
    applyTheme(data.theme);
    renderAllViews();
    showToast("Changes saved successfully!");
  } catch (e) {
    console.error("Error saving CMS data:", e);
    showToast("Error saving changes.");
  }
}

function resetCMSData() {
  if (confirm("Reset website configuration to factory defaults? Custom edits will be restored.")) {
    localStorage.removeItem(CMS_STORAGE_KEY);
    window.CMS_DATA = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
    applyTheme(window.CMS_DATA.theme);
    renderAllViews();
    initAdminPanelForms();
    showToast("Website reset to factory defaults!");
  }
}

window.CMS_DATA = loadCMSData();

function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;
  if (theme.navyDark) root.style.setProperty("--navy-dark", theme.navyDark);
  if (theme.navyDeep) root.style.setProperty("--navy-deep", theme.navyDeep);
  if (theme.royalBlue) root.style.setProperty("--royal-blue", theme.royalBlue);
  if (theme.skyBlue) root.style.setProperty("--sky-blue", theme.skyBlue);
  if (theme.iceBgStart) root.style.setProperty("--ice-bg-start", theme.iceBgStart);
  if (theme.iceBgEnd) root.style.setProperty("--ice-bg-end", theme.iceBgEnd);
  if (theme.goldAccent) root.style.setProperty("--gold-accent", theme.goldAccent);
}

// ========================================================
// 3. MULTI-PAGE ROUTER (HOME, WORK, SERVICES, CONTACT, ADMIN)
// ========================================================
let activeView = "home";

function switchView(viewName) {
  if (viewName === "admin" && !isAdminAuthenticated()) {
    openAdminLoginModal();
    return;
  }

  activeView = viewName;

  const views = ["home", "work", "services", "contact", "admin"];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  const tabBtns = document.querySelectorAll(".nav-tab-btn");
  tabBtns.forEach(btn => {
    const target = btn.getAttribute("data-target-view");
    if (target === viewName) {
      btn.classList.add("active-tab");
    } else {
      btn.classList.remove("active-tab");
    }
  });

  const mainWeb = document.getElementById("main-website");
  if (mainWeb && !document.body.classList.contains("cover-active")) {
    mainWeb.scrollIntoView({ behavior: "smooth" });
  }

  const drawer = document.getElementById("mobile-menu-drawer");
  if (drawer) drawer.classList.add("hidden");

  if (viewName === "admin") {
    initAdminPanelForms();
  }
}

// ========================================================
// 4. SECURE AUTHENTICATION GATE
// ========================================================
function isAdminAuthenticated() {
  return sessionStorage.getItem("sora_admin_auth") === "true";
}

function openAdminLoginModal() {
  const modal = document.getElementById("admin-login-modal");
  if (modal) {
    modal.classList.remove("modal-strict-hidden");
    modal.classList.add("modal-strict-visible");
    const userField = document.getElementById("login-username");
    if (userField) {
      userField.value = "";
      userField.focus();
    }
    const passField = document.getElementById("login-password");
    if (passField) passField.value = "";
    const errEl = document.getElementById("login-error-msg");
    if (errEl) errEl.classList.add("hidden");
  }
}

function closeAdminLoginModal() {
  const modal = document.getElementById("admin-login-modal");
  if (modal) {
    modal.classList.add("modal-strict-hidden");
    modal.classList.remove("modal-strict-visible");
  }
}

window.handleAdminLogin = function(e) {
  if (e) e.preventDefault();
  const userInput = document.getElementById("login-username")?.value.trim();
  const passInput = document.getElementById("login-password")?.value;
  const errEl = document.getElementById("login-error-msg");
  const cardEl = document.getElementById("login-card");

  const sec = window.CMS_DATA.security || { adminId: "admin", password: "Sora@2026" };

  if (userInput === sec.adminId && passInput === sec.password) {
    sessionStorage.setItem("sora_admin_auth", "true");
    closeAdminLoginModal();
    switchView("admin");
    showToast("Welcome to SORA LENSWORKS Admin CMS!");
  } else {
    if (errEl) {
      errEl.textContent = "Invalid Admin ID or Password. Access Denied.";
      errEl.classList.remove("hidden");
    }
    if (cardEl) {
      cardEl.classList.remove("shake-animation");
      void cardEl.offsetWidth;
      cardEl.classList.add("shake-animation");
    }
  }
};

window.handleAdminLogout = function() {
  sessionStorage.removeItem("sora_admin_auth");
  switchView("home");
  showToast("Logged out of Admin Panel.");
};

// ========================================================
// 5. PRELOADER & COVER PAGE (STAGES 1 & 2 - UNTOUCHED)
// ========================================================
function triggerCoverPageAnimations() {
  const introCover = document.getElementById("intro-cover");
  if (!introCover) return;
  introCover.classList.remove("cover-animated");
  void introCover.offsetWidth; // force browser reflow
  introCover.classList.add("cover-animated");
}

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const countEl = document.getElementById("preloader-count");
  const progressEl = document.getElementById("preloader-bar");

  if (!preloader) return;

  // Make sure it starts visibly at 0%
  if (countEl) countEl.textContent = "0%";
  if (progressEl) progressEl.style.width = "0%";

  const duration = 1200; // Snappy 1.2s total count duration (no added wait)
  let startTimestamp = null;

  function animateCount(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const elapsed = timestamp - startTimestamp;
    const progressRatio = Math.min(elapsed / duration, 1);

    // Ease-out cubic: fast, kinetic, satisfying count-up
    const eased = 1 - Math.pow(1 - progressRatio, 2.5);
    const currentPercent = Math.min(100, Math.floor(eased * 100));

    if (countEl) countEl.textContent = `${currentPercent}%`;
    if (progressEl) progressEl.style.width = `${currentPercent}%`;

    if (progressRatio < 1) {
      requestAnimationFrame(animateCount);
    } else {
      if (countEl) countEl.textContent = "100%";
      if (progressEl) progressEl.style.width = "100%";
      setTimeout(() => {
        preloader.classList.add("fade-out");
        document.body.classList.add("cover-active");
        setTimeout(triggerCoverPageAnimations, 80);
      }, 200);
    }
  }

  // Brief initial 80ms delay so user clearly sees 0% start counting up
  setTimeout(() => {
    requestAnimationFrame(animateCount);
  }, 80);
}

function initCoverPage() {
  const introCover = document.getElementById("intro-cover");
  const btnViewWork = document.getElementById("btn-view-work");
  const btnTopRightWork = document.getElementById("btn-cover-top-right");
  const btnFooterCover = document.getElementById("btn-footer-cover");

  function revealMainWebsite(targetView = "home") {
    if (introCover) introCover.classList.add("curtain-lifted");
    document.body.classList.remove("cover-active");
    switchView(targetView);
  }

  function returnToCover() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      if (introCover) introCover.classList.remove("curtain-lifted");
      document.body.classList.add("cover-active");
      triggerCoverPageAnimations();
    }, 200);
  }

  if (btnViewWork) btnViewWork.addEventListener("click", () => revealMainWebsite("home"));
  if (btnTopRightWork) btnTopRightWork.addEventListener("click", () => revealMainWebsite("work"));
  if (btnFooterCover) btnFooterCover.addEventListener("click", returnToCover);
}

// ========================================================
// 6. VIEW RENDERERS (REACTIVE CMS RENDERING)
// ========================================================
function renderAllViews() {
  renderBrandElements();
  renderHeroSection();
  renderPortfolioSection();
  renderInteractiveDossier();
  renderBriefServicePills();
}

function renderBrandElements() {
  const b = window.CMS_DATA.brand;
  document.querySelectorAll(".cms-brand-name").forEach(el => el.textContent = b.name);
  document.querySelectorAll(".cms-brand-founder").forEach(el => el.textContent = b.founder);
  document.querySelectorAll(".cms-brand-monogram").forEach(el => el.textContent = b.monogram);
  document.querySelectorAll(".cms-brand-tagline").forEach(el => el.textContent = b.tagline);
  document.querySelectorAll(".cms-brand-phone").forEach(el => {
    el.textContent = b.phone;
    if (el.tagName === "A") el.href = `tel:${b.phone.replace(/[^0-9+]/g, '')}`;
  });
  document.querySelectorAll(".cms-brand-email").forEach(el => el.textContent = b.email);
  document.querySelectorAll(".cms-brand-ig").forEach(el => {
    el.textContent = b.instagram;
    if (el.tagName === "A") el.href = b.instagramUrl;
  });
  document.querySelectorAll(".cms-brand-behance").forEach(el => {
    el.textContent = b.behance;
    if (el.tagName === "A") el.href = b.behanceUrl;
  });

  document.querySelectorAll(".cms-whatsapp-link").forEach(el => {
    if (el.tagName === "A") {
      el.href = `https://wa.me/${b.whatsappNumber}`;
    }
  });
}

function renderHeroSection() {
  const h = window.CMS_DATA.hero;
  const eyebrowEl = document.getElementById("hero-eyebrow");
  const headlineEl = document.getElementById("hero-headline");
  const subheadlineEl = document.getElementById("hero-subheadline");
  const statsContainer = document.getElementById("hero-stats-container");

  if (eyebrowEl) eyebrowEl.textContent = h.eyebrow;
  if (headlineEl) headlineEl.innerHTML = h.headline;
  if (subheadlineEl) subheadlineEl.textContent = h.subheadline;

  if (statsContainer && Array.isArray(h.stats)) {
    statsContainer.innerHTML = h.stats.map(s => `
      <div class="glass-luxury-card rounded-2xl p-4 sm:p-5 text-left space-y-1">
        <div class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">${s.number}</div>
        <div class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">${s.label}</div>
      </div>
    `).join("");
  }
}

// Interactive Hero Specialty Switcher
let activeHeroSpecialty = "all";
window.switchHeroSpecialty = function(type) {
  activeHeroSpecialty = type;
  const btnGd = document.getElementById("hero-toggle-gd");
  const btnVe = document.getElementById("hero-toggle-ve");
  const badge1 = document.getElementById("hero-badge-1");
  const badge2 = document.getElementById("hero-badge-2");

  if (type === "gd") {
    btnGd?.classList.add("bg-blue-600", "text-white");
    btnGd?.classList.remove("text-slate-600");
    btnVe?.classList.remove("bg-blue-600", "text-white");
    btnVe?.classList.add("text-slate-600");

    if (badge1) badge1.innerHTML = `<span class="text-blue-600 font-black">✦ CMYK 300 DPI</span> • Theatrical Posters &amp; Billboards`;
    if (badge2) badge2.innerHTML = `<span class="text-amber-500 font-black">✦ HIGH ROAS</span> • Direct-Response Ad Creatives`;
  } else if (type === "ve") {
    btnVe?.classList.add("bg-indigo-600", "text-white");
    btnVe?.classList.remove("text-slate-600");
    btnGd?.classList.remove("bg-blue-600", "text-white");
    btnGd?.classList.add("text-slate-600");

    if (badge1) badge1.innerHTML = `<span class="text-indigo-600 font-black">✦ 4K PRORES 422</span> • 10-Bit Cinematic Color Grade`;
    if (badge2) badge2.innerHTML = `<span class="text-emerald-500 font-black">✦ RETENTION HOOKS</span> • Podcasts &amp; Viral Shorts`;
  } else {
    btnGd?.classList.remove("bg-blue-600", "text-white");
    btnVe?.classList.remove("bg-indigo-600", "text-white");
    if (badge1) badge1.innerHTML = `<span class="text-blue-600 font-black">✦ GRAPHIC ARCHITECTURE</span> • Posters &amp; Ad Systems`;
    if (badge2) badge2.innerHTML = `<span class="text-indigo-600 font-black">✦ VIDEO DIRECTION</span> • 4K LOG &amp; AI Documentaries`;
  }
};

// ========================================================
// 7. BESPOKE INTERACTIVE SERVICE DOSSIER (NON-GENERIC LEDGER)
// ========================================================
let activeDossierCategory = "graphic-design";
let selectedServiceId = "srv-poster";

function renderInteractiveDossier() {
  const ledgerList = document.getElementById("dossier-ledger-list");
  const previewStage = document.getElementById("dossier-preview-stage");
  if (!ledgerList || !previewStage) return;

  const services = window.CMS_DATA.services;
  const filtered = services.filter(s => s.category === activeDossierCategory);

  // Set default selected service if not present in current category
  if (!filtered.some(s => s.id === selectedServiceId)) {
    selectedServiceId = filtered[0]?.id || "srv-poster";
  }

  // Render Ledger List
  ledgerList.innerHTML = filtered.map((s, idx) => {
    const isSelected = s.id === selectedServiceId;
    const num = (idx + 1).toString().padStart(2, "0");
    return `
      <div 
        class="dossier-item cursor-pointer py-4 px-3 flex items-center justify-between rounded-xl ${isSelected ? 'active-dossier bg-blue-50/80 font-black text-blue-900' : 'text-slate-800'}"
        onclick="selectDossierService('${s.id}')"
      >
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold text-blue-600">${num}</span>
          <span class="text-sm font-extrabold tracking-tight">${s.title}</span>
        </div>
        <svg class="w-4 h-4 text-blue-600 transform transition-transform ${isSelected ? 'translate-x-1' : 'opacity-30'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    `;
  }).join("");

  // Render Active Service Technical Dossier Preview
  const currentService = services.find(s => s.id === selectedServiceId) || services[0];
  if (currentService) {
    const isVe = currentService.category === "video-editing";
    previewStage.innerHTML = `
      <div class="glass-luxury-card rounded-3xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <span class="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${isVe ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">
            ${currentService.categoryLabel}
          </span>
          <span class="text-xs font-mono font-bold text-slate-500 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span> ${currentService.turnaround || '24 - 48 Hours'}
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            ${currentService.title}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed">
            ${currentService.desc}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div class="text-[11px] font-black uppercase tracking-wider text-slate-500">Technical Specifications:</div>
          <div class="text-xs font-semibold text-slate-800 flex items-start gap-2">
            <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
            <span>Deliverables: <strong>${currentService.deliverables || 'Master Production Files'}</strong></span>
          </div>
          <div class="text-xs font-semibold text-slate-800 flex items-start gap-2">
            <svg class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            <span>Software Arsenal: <strong>${currentService.tools || 'Adobe CC / DaVinci Resolve'}</strong></span>
          </div>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button 
            onclick="bookService('${currentService.title.replace(/'/g, "\\'")}')" 
            class="w-full sm:w-auto px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider text-white ${isVe ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'} transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Book This Service on WhatsApp &rarr;</span>
          </button>
          <button 
            onclick="switchView('contact')" 
            class="w-full sm:w-auto px-5 py-3.5 rounded-full font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
          >
            Configure Custom Brief
          </button>
        </div>
      </div>
    `;
  }
}

window.selectDossierService = function(sid) {
  selectedServiceId = sid;
  renderInteractiveDossier();
};

window.switchDossierCategory = function(cat) {
  activeDossierCategory = cat;
  const btnGd = document.getElementById("dossier-tab-gd");
  const btnVe = document.getElementById("dossier-tab-ve");

  if (cat === "graphic-design") {
    btnGd?.classList.add("bg-[#0A2540]", "text-white");
    btnGd?.classList.remove("text-slate-600", "bg-transparent");
    btnVe?.classList.remove("bg-[#0A2540]", "text-white");
    btnVe?.classList.add("text-slate-600", "bg-transparent");
  } else {
    btnVe?.classList.add("bg-[#0A2540]", "text-white");
    btnVe?.classList.remove("text-slate-600", "bg-transparent");
    btnGd?.classList.remove("bg-[#0A2540]", "text-white");
    btnGd?.classList.add("text-slate-600", "bg-transparent");
  }

  renderInteractiveDossier();
};

// ========================================================
// 8. REAL PORTFOLIO (ZERO FAKE DEMOS)
// ========================================================
let currentWorkFilter = "all";

window.filterWorkBy = function(category) {
  currentWorkFilter = category;

  document.querySelectorAll(".work-filter-btn").forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (f === category) {
      btn.classList.add("bg-[#0A2540]", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-[#0A2540]", "text-white", "shadow-sm");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });

  renderPortfolioSection();
};

window.scrollToWork = function() {
  const el = document.getElementById("work-showcase");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    switchView("work");
  }
};

function renderPortfolioSection() {
  const container = document.getElementById("full-work-grid");
  const homeContainer = document.getElementById("featured-work-grid");
  const allProjects = window.CMS_DATA.projects || [];

  let filtered = allProjects;
  if (currentWorkFilter !== "all") {
    if (currentWorkFilter === "ai-ads-video") {
      filtered = allProjects.filter(p => p.category === "ai-ads-video" || p.category === "ai-documentary");
    } else if (currentWorkFilter === "wedding-photo-editing") {
      filtered = allProjects.filter(p => p.category === "wedding-photo-editing" || p.category === "album-design");
    } else {
      filtered = allProjects.filter(p => p.category === currentWorkFilter);
    }
  }

  const cardsHTML = filtered.map(p => createProjectCardHTML(p)).join("");

  const brand = window.CMS_DATA.brand || {};
  const waNumber = (brand.whatsapp || "+916291152548").replace(/[^0-9]/g, "");

  const emptyStateGlobal = `
    <div class="col-span-full max-w-2xl mx-auto p-8 sm:p-12 text-center rounded-3xl bg-white/90 backdrop-blur-xl border border-blue-100 shadow-xl shadow-blue-500/5 my-4">
      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/25">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      </div>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 mb-3">
        Commercial Client Archive
      </span>
      <h3 class="text-xl sm:text-2xl font-black text-slate-900 mb-2">Projects Archive Ready</h3>
      <p class="text-sm text-slate-600 leading-relaxed max-w-lg mx-auto mb-6">
        Client commercial case studies and 4K showreels are private and curated upon request. Contact us directly on WhatsApp to receive our private commercial showreel or add your projects via the Studio Vault.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="https://wa.me/${waNumber}?text=Hello%20Jyotsna,%20I%20would%20like%20to%20view%20your%20commercial%20portfolio%20reel" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all hover:scale-105">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.16 12.05 20.16C10.59 20.16 9.16 19.77 7.91 19.03L7.61 18.85L4.49 19.67L5.32 16.63L5.12 16.31C4.31 15.02 3.8 13.49 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM8.73 7.34C8.54 7.34 8.23 7.41 7.97 7.69C7.72 7.97 6.99 8.65 6.99 10.05C6.99 11.45 8.01 12.8 8.15 12.99C8.3 13.18 10.15 16.03 12.99 17.26C13.66 17.55 14.19 17.73 14.6 17.86C15.28 18.08 15.89 18.05 16.38 17.97C16.93 17.89 18.07 17.28 18.31 16.61C18.55 15.93 18.55 15.35 18.48 15.23C18.41 15.11 18.22 15.04 17.94 14.9C17.65 14.76 16.27 14.08 16.01 13.99C15.76 13.89 15.57 13.85 15.38 14.13C15.2 14.41 14.67 15.04 14.51 15.23C14.34 15.41 14.18 15.44 13.89 15.3C13.61 15.16 12.43 14.77 11.03 13.52C9.93 12.55 9.19 11.34 8.98 10.98C8.77 10.61 8.96 10.42 9.1 10.28C9.23 10.15 9.39 9.94 9.53 9.77C9.67 9.61 9.72 9.49 9.81 9.3C9.9 9.12 9.86 8.96 9.79 8.82C9.72 8.68 9.18 7.37 8.96 6.83C8.74 6.31 8.52 6.38 8.36 6.38C8.2 6.37 8.01 6.37 7.83 6.37L8.73 7.34Z"/></svg>
          Request Private Reel on WhatsApp
        </a>
        <button onclick="openAdminModal()" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all">
          <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Studio Vault Login (Add Real Work)
        </button>
      </div>
    </div>
  `;

  const emptyFilterHTML = `
    <div class="col-span-full p-8 text-center bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 my-4">
      <p class="text-sm font-bold text-slate-600">No projects added under this specific category yet.</p>
      <button onclick="filterWorkBy('all')" class="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all">
        ← View All Work
      </button>
    </div>
  `;

  const contentHTML = cardsHTML || (allProjects.length === 0 ? emptyStateGlobal : emptyFilterHTML);

  if (homeContainer) homeContainer.innerHTML = contentHTML;
  if (container) container.innerHTML = contentHTML;

  document.querySelectorAll(".project-card").forEach(card => {
    const pid = card.getAttribute("data-id");
    card.addEventListener("click", () => {
      const proj = window.CMS_DATA.projects.find(x => x.id === pid);
      if (proj) openProjectModal(proj);
    });
  });
}

function createProjectCardHTML(p) {
  const badgeColor = p.category === "graphic-design" 
    ? "bg-blue-50 text-blue-800 border-blue-200" 
    : "bg-indigo-50 text-indigo-800 border-indigo-200";

  return `
    <div class="project-card group glass-luxury-card rounded-2xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300" data-id="${p.id}">
      <div class="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div class="absolute top-3 left-3">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${badgeColor}">
            ${p.categoryLabel}
          </span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between bg-white/95">
        <div>
          <div class="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">${p.client}</div>
          <h3 class="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight line-clamp-1">
            ${p.title}
          </h3>
          <p class="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            ${p.subtitle}
          </p>
        </div>
        <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>${p.timeline}</span>
          <span class="text-blue-700 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  `;
}

// Brief Generator Chips
function renderBriefServicePills() {
  const container = document.getElementById("brief-services-container");
  if (!container) return;

  const services = window.CMS_DATA.services;
  container.innerHTML = services.map((s, idx) => `
    <button 
      type="button" 
      class="brief-service-pill px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${idx === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'}" 
      data-service="${s.title}"
    >
      ${s.title}
    </button>
  `).join("");

  initBriefGeneratorLogic();
}

// ========================================================
// 9. MODAL & BRIEF CONTROLLER
// ========================================================
let currentOpenProject = null;

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");
  const modalWaBtn = document.getElementById("modal-wa-btn");

  function closeModal() {
    if (modal) {
      modal.classList.add("modal-strict-hidden");
      modal.classList.remove("modal-strict-visible");
      document.body.style.overflow = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("modal-strict-hidden")) {
      closeModal();
    }
  });

  if (modalWaBtn) {
    modalWaBtn.addEventListener("click", () => {
      if (!currentOpenProject) return;
      const b = window.CMS_DATA.brand;
      const text = `Hello ${b.founder}! I am interested in discussing a project similar to "${currentOpenProject.title}" (${currentOpenProject.categoryLabel}). Can we talk about timeline and pricing?`;
      const url = `https://wa.me/${b.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });
  }
}

function openProjectModal(project) {
  currentOpenProject = project;
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-category").textContent = project.categoryLabel;
  document.getElementById("modal-subtitle").textContent = project.subtitle;
  document.getElementById("modal-desc").textContent = project.description || project.desc || "High-converting commercial visual assets tailored for market retention.";
  document.getElementById("modal-client").textContent = project.client;
  document.getElementById("modal-timeline").textContent = project.timeline || "48 Hours Turnaround";
  
  const imgEl = document.getElementById("modal-image");
  if (imgEl) imgEl.src = project.image;

  const delivList = document.getElementById("modal-deliverables");
  if (delivList) {
    const arr = Array.isArray(project.deliverables) ? project.deliverables : [project.deliverables || "Commercial Master Production Pack"];
    delivList.innerHTML = arr.map(d => `
      <li class="text-xs font-semibold text-slate-700 flex items-center gap-2">
        <svg class="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
        <span>${d}</span>
      </li>
    `).join("");
  }

  const toolsList = document.getElementById("modal-tools");
  if (toolsList) {
    const arr = Array.isArray(project.tools) ? project.tools : (project.tools ? project.tools.split(",") : ["Adobe Creative Cloud"]);
    toolsList.innerHTML = arr.map(t => `
      <span class="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white border border-slate-200 text-slate-800 shadow-2xs">
        ${t.trim()}
      </span>
    `).join("");
  }

  modal.classList.remove("modal-strict-hidden");
  modal.classList.add("modal-strict-visible");
  document.body.style.overflow = "hidden";
}

function initBriefGeneratorLogic() {
  const servicePills = document.querySelectorAll(".brief-service-pill");
  const nameInput = document.getElementById("brief-name");
  const timelineSelect = document.getElementById("brief-timeline");
  const noteInput = document.getElementById("brief-notes");
  const previewText = document.getElementById("brief-preview-text");
  const sendBtn = document.getElementById("btn-send-brief");

  let selectedServices = [window.CMS_DATA.services[0]?.title || "Poster Design"];

  function updatePreview() {
    const b = window.CMS_DATA.brand;
    const name = nameInput?.value.trim() || "[Your Name]";
    const timeline = timelineSelect?.value || "Flexible (Within 1-2 weeks)";
    const notes = noteInput?.value.trim() || "No additional notes specified.";

    const formattedMessage = `✨ *NEW PROJECT INQUIRY - ${b.name}*\n\n` +
      `👤 *Client Name:* ${name}\n` +
      `🎯 *Selected Services (${selectedServices.length}):*\n` +
      selectedServices.map(s => `  • ${s}`).join("\n") + `\n\n` +
      `⏱️ *Expected Timeline:* ${timeline}\n` +
      `📝 *Project Overview:* ${notes}\n\n` +
      `_Sent directly via SORA LENSWORKS interactive studio portal._`;

    if (previewText) previewText.textContent = formattedMessage;
    return formattedMessage;
  }

  servicePills.forEach(pill => {
    pill.addEventListener("click", () => {
      const sName = pill.getAttribute("data-service");
      if (selectedServices.includes(sName)) {
        if (selectedServices.length > 1) {
          selectedServices = selectedServices.filter(s => s !== sName);
          pill.classList.remove("bg-blue-600", "text-white", "border-blue-600");
          pill.classList.add("bg-white", "text-slate-700", "border-slate-200");
        }
      } else {
        selectedServices.push(sName);
        pill.classList.add("bg-blue-600", "text-white", "border-blue-600");
        pill.classList.remove("bg-white", "text-slate-700", "border-slate-200");
      }
      updatePreview();
    });
  });

  if (nameInput) nameInput.addEventListener("input", updatePreview);
  if (timelineSelect) timelineSelect.addEventListener("change", updatePreview);
  if (noteInput) noteInput.addEventListener("input", updatePreview);

  updatePreview();

  if (sendBtn) {
    sendBtn.onclick = () => {
      const b = window.CMS_DATA.brand;
      const message = updatePreview();
      const url = `https://wa.me/${b.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    };
  }
}

window.bookService = function(serviceName) {
  const b = window.CMS_DATA.brand;
  const text = `Hello ${b.founder}! I would like to book your service: "${serviceName}" at ${b.name}. Could you please share the pricing, workflow, and next available slot?`;
  const url = `https://wa.me/${b.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

// ========================================================
// 10. ADMIN PANEL CONTROLLER & FORMS
// ========================================================
function initAdminPanelForms() {
  const data = window.CMS_DATA;

  // 1. Brand Tab
  setVal("adm-brand-name", data.brand.name);
  setVal("adm-brand-monogram", data.brand.monogram);
  setVal("adm-brand-founder", data.brand.founder);
  setVal("adm-brand-tagline", data.brand.tagline);
  setVal("adm-brand-phone", data.brand.phone);
  setVal("adm-brand-whatsapp", data.brand.whatsappNumber);
  setVal("adm-brand-email", data.brand.email);
  setVal("adm-brand-ig", data.brand.instagram);
  setVal("adm-brand-igurl", data.brand.instagramUrl);
  setVal("adm-brand-behance", data.brand.behance);
  setVal("adm-brand-behanceurl", data.brand.behanceUrl);

  // 2. Security
  const sec = data.security || { adminId: "admin", password: "Sora@2026" };
  setVal("adm-sec-id", sec.adminId);
  setVal("adm-sec-pass", sec.password);

  // 3. Hero
  setVal("adm-hero-eyebrow", data.hero.eyebrow);
  setVal("adm-hero-headline", data.hero.headline);
  setVal("adm-hero-subheadline", data.hero.subheadline);
  if (data.hero.stats) {
    data.hero.stats.forEach((s, i) => {
      setVal(`adm-stat-num-${i}`, s.number);
      setVal(`adm-stat-lbl-${i}`, s.label);
    });
  }

  // 4. Colors
  setVal("adm-color-navy", data.theme.navyDark);
  setVal("adm-color-royal", data.theme.royalBlue);
  setVal("adm-color-sky", data.theme.skyBlue);
  setVal("adm-color-ice", data.theme.iceBgStart);
  setVal("adm-color-gold", data.theme.goldAccent);

  renderAdminProjectTable();
  renderAdminServicesTable();

  const jsonExportEl = document.getElementById("adm-json-export");
  if (jsonExportEl) {
    jsonExportEl.value = JSON.stringify(data, null, 2);
  }
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || "";
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

window.saveBrandFromAdmin = function() {
  window.CMS_DATA.brand = {
    ...window.CMS_DATA.brand,
    name: getVal("adm-brand-name") || "SORA LENSWORKS",
    monogram: getVal("adm-brand-monogram") || "JB GFX",
    founder: getVal("adm-brand-founder") || "Jyotsna Bhattacharyya",
    tagline: getVal("adm-brand-tagline") || "Graphic Design • Video Editing",
    phone: getVal("adm-brand-phone") || "+91 6291152548",
    whatsappNumber: getVal("adm-brand-whatsapp") || "916291152548",
    email: getVal("adm-brand-email") || "jyotsna.gfx.2004@gmail.com",
    instagram: getVal("adm-brand-ig") || "@soralensworks",
    instagramUrl: getVal("adm-brand-igurl") || "https://instagram.com/soralensworks",
    behance: getVal("adm-brand-behance") || "behance.net/soralensworks",
    behanceUrl: getVal("adm-brand-behanceurl") || "https://behance.net/soralensworks"
  };
  saveCMSData(window.CMS_DATA);
};

window.saveSecurityFromAdmin = function() {
  const newId = getVal("adm-sec-id");
  const newPass = getVal("adm-sec-pass");

  if (!newId || !newPass) {
    alert("Admin ID and Password cannot be empty.");
    return;
  }

  window.CMS_DATA.security = { adminId: newId, password: newPass };
  saveCMSData(window.CMS_DATA);
  showToast("Admin credentials updated securely!");
};

window.saveHeroFromAdmin = function() {
  window.CMS_DATA.hero.eyebrow = getVal("adm-hero-eyebrow");
  window.CMS_DATA.hero.headline = getVal("adm-hero-headline");
  window.CMS_DATA.hero.subheadline = getVal("adm-hero-subheadline");

  window.CMS_DATA.hero.stats = [
    { number: getVal("adm-stat-num-0") || "150+", label: getVal("adm-stat-lbl-0") || "Commercial Deliveries" },
    { number: getVal("adm-stat-num-1") || "4.9 ★", label: getVal("adm-stat-lbl-1") || "Client Rating" },
    { number: getVal("adm-stat-num-2") || "48h", label: getVal("adm-stat-lbl-2") || "Rapid Turnaround" },
    { number: getVal("adm-stat-num-3") || "100%", label: getVal("adm-stat-lbl-3") || "Precision Craft" }
  ];
  saveCMSData(window.CMS_DATA);
};

window.saveThemeFromAdmin = function() {
  window.CMS_DATA.theme = {
    navyDark: getVal("adm-color-navy") || "#0A2540",
    navyDeep: "#0D2847",
    royalBlue: getVal("adm-color-royal") || "#1B56A8",
    skyBlue: getVal("adm-color-sky") || "#5B95E5",
    iceBgStart: getVal("adm-color-ice") || "#D4E7FF",
    iceBgEnd: "#EDF4FF",
    goldAccent: getVal("adm-color-gold") || "#D4A338"
  };
  saveCMSData(window.CMS_DATA);
};

function renderAdminProjectTable() {
  const container = document.getElementById("adm-projects-list");
  if (!container) return;

  const projects = window.CMS_DATA.projects;
  if (projects.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="py-6 text-center text-xs text-slate-500 font-medium">
          No projects added yet. Use the form above to add your real client case studies!
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = projects.map((p, idx) => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/80 text-xs">
      <td class="py-3 px-4 font-bold text-slate-900">${idx + 1}</td>
      <td class="py-3 px-4 font-extrabold text-slate-900">${p.title}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.category === 'graphic-design' ? 'bg-blue-100 text-blue-800' : 'bg-indigo-100 text-indigo-800'}">
          ${p.categoryLabel}
        </span>
      </td>
      <td class="py-3 px-4 text-slate-600 truncate max-w-xs">${p.client}</td>
      <td class="py-3 px-4 text-right space-x-2">
        <button onclick="editProjectInAdmin('${p.id}')" class="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold hover:bg-blue-100">Edit</button>
        <button onclick="deleteProjectInAdmin('${p.id}')" class="px-2.5 py-1 rounded bg-red-50 text-red-700 font-bold hover:bg-red-100">Delete</button>
      </td>
    </tr>
  `).join("");
}

window.deleteProjectInAdmin = function(pid) {
  if (confirm("Delete this project from your live portfolio?")) {
    window.CMS_DATA.projects = window.CMS_DATA.projects.filter(p => p.id !== pid);
    saveCMSData(window.CMS_DATA);
    renderAdminProjectTable();
  }
};

window.editProjectInAdmin = function(pid) {
  const proj = window.CMS_DATA.projects.find(p => p.id === pid);
  if (!proj) return;

  setVal("adm-proj-id", proj.id);
  setVal("adm-proj-title", proj.title);
  setVal("adm-proj-category", proj.category);
  setVal("adm-proj-catlabel", proj.categoryLabel);
  setVal("adm-proj-subtitle", proj.subtitle);
  setVal("adm-proj-desc", proj.description);
  setVal("adm-proj-client", proj.client);
  setVal("adm-proj-timeline", proj.timeline);
  setVal("adm-proj-image", proj.image);
  setVal("adm-proj-deliverables", (proj.deliverables || []).join(", "));
  setVal("adm-proj-tools", (proj.tools || []).join(", "));

  const formModal = document.getElementById("adm-project-form-card");
  if (formModal) {
    formModal.scrollIntoView({ behavior: "smooth" });
  }
};

window.saveProjectFromAdmin = function(e) {
  if (e) e.preventDefault();

  const pid = getVal("adm-proj-id") || `proj-${Date.now()}`;
  const title = getVal("adm-proj-title") || "Untitled Project";
  const category = getVal("adm-proj-category") || "graphic-design";
  const catLabel = getVal("adm-proj-catlabel") || (category === "graphic-design" ? "Graphic Design" : "Video Editing");
  const subtitle = getVal("adm-proj-subtitle") || "Commercial Creative Project";
  const desc = getVal("adm-proj-desc") || "Production assets tailored for commercial growth.";
  const client = getVal("adm-proj-client") || "Global Brand Client";
  const timeline = getVal("adm-proj-timeline") || "3 Days Delivery";
  const image = getVal("adm-proj-image") || "assets/sora-logo-full.jpg";
  const delivRaw = getVal("adm-proj-deliverables") || "Print Masters, Social Formats";
  const toolsRaw = getVal("adm-proj-tools") || "Adobe Photoshop, Illustrator";

  const deliverables = delivRaw.split(",").map(s => s.trim()).filter(Boolean);
  const tools = toolsRaw.split(",").map(s => s.trim()).filter(Boolean);

  const existingIdx = window.CMS_DATA.projects.findIndex(p => p.id === pid);
  const newProjObj = { id: pid, title, category, categoryLabel: catLabel, subtitle, description: desc, deliverables, tools, image, client, timeline };

  if (existingIdx >= 0) {
    window.CMS_DATA.projects[existingIdx] = newProjObj;
  } else {
    window.CMS_DATA.projects.unshift(newProjObj);
  }

  saveCMSData(window.CMS_DATA);
  renderAdminProjectTable();
  clearProjectForm();
};

window.clearProjectForm = function() {
  setVal("adm-proj-id", "");
  setVal("adm-proj-title", "");
  setVal("adm-proj-subtitle", "");
  setVal("adm-proj-desc", "");
  setVal("adm-proj-client", "");
  setVal("adm-proj-timeline", "");
  setVal("adm-proj-image", "");
  setVal("adm-proj-deliverables", "");
  setVal("adm-proj-tools", "");
};

function renderAdminServicesTable() {
  const container = document.getElementById("adm-services-list");
  if (!container) return;

  const services = window.CMS_DATA.services;
  container.innerHTML = services.map((s, idx) => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/80 text-xs">
      <td class="py-3 px-4 font-bold text-slate-900">${idx + 1}</td>
      <td class="py-3 px-4 font-extrabold text-slate-900">${s.title}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${s.category === 'graphic-design' ? 'bg-blue-100 text-blue-800' : 'bg-indigo-100 text-indigo-800'}">
          ${s.categoryLabel || s.category}
        </span>
      </td>
      <td class="py-3 px-4 text-slate-600 truncate max-w-xs">${s.desc}</td>
      <td class="py-3 px-4 text-right space-x-2">
        <button onclick="editServiceInAdmin('${s.id}')" class="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold hover:bg-blue-100">Edit</button>
        <button onclick="deleteServiceInAdmin('${s.id}')" class="px-2.5 py-1 rounded bg-red-50 text-red-700 font-bold hover:bg-red-100">Delete</button>
      </td>
    </tr>
  `).join("");
}

window.deleteServiceInAdmin = function(sid) {
  if (confirm("Delete this service?")) {
    window.CMS_DATA.services = window.CMS_DATA.services.filter(s => s.id !== sid);
    saveCMSData(window.CMS_DATA);
    renderAdminServicesTable();
  }
};

window.editServiceInAdmin = function(sid) {
  const s = window.CMS_DATA.services.find(x => x.id === sid);
  if (!s) return;

  setVal("adm-srv-id", s.id);
  setVal("adm-srv-title", s.title);
  setVal("adm-srv-category", s.category);
  setVal("adm-srv-desc", s.desc);
  setVal("adm-srv-deliverables", s.deliverables || "");

  const formEl = document.getElementById("adm-service-form-card");
  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
};

window.saveServiceFromAdmin = function(e) {
  if (e) e.preventDefault();

  const sid = getVal("adm-srv-id") || `srv-${Date.now()}`;
  const title = getVal("adm-srv-title") || "New Service";
  const category = getVal("adm-srv-category") || "graphic-design";
  const desc = getVal("adm-srv-desc") || "High precision service delivery.";
  const deliverables = getVal("adm-srv-deliverables") || "Production Files";

  const existingIdx = window.CMS_DATA.services.findIndex(s => s.id === sid);
  const newSrvObj = {
    id: sid,
    title,
    category,
    categoryLabel: category === "graphic-design" ? "Graphic Design" : "Video Editing",
    desc,
    deliverables
  };

  if (existingIdx >= 0) {
    window.CMS_DATA.services[existingIdx] = newSrvObj;
  } else {
    window.CMS_DATA.services.push(newSrvObj);
  }

  saveCMSData(window.CMS_DATA);
  renderAdminServicesTable();
  clearServiceForm();
};

window.clearServiceForm = function() {
  setVal("adm-srv-id", "");
  setVal("adm-srv-title", "");
  setVal("adm-srv-desc", "");
  setVal("adm-srv-deliverables", "");
};

window.importJSONToCMS = function() {
  const val = getVal("adm-json-export");
  if (!val) return;
  try {
    const parsed = JSON.parse(val);
    saveCMSData(parsed);
    window.CMS_DATA = parsed;
    initAdminPanelForms();
    showToast("JSON imported & applied successfully!");
  } catch (err) {
    alert("Invalid JSON format. Please verify your syntax.");
  }
};

window.copyCMSJSON = function() {
  const el = document.getElementById("adm-json-export");
  if (el) {
    el.select();
    navigator.clipboard.writeText(el.value).then(() => {
      showToast("CMS Data JSON copied to clipboard!");
    });
  }
};

// ========================================================
// 11. SHORTCUTS & NAVIGATION LIFECYCLE
// ========================================================
function showToast(msg = "Action completed!") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  const msgEl = document.getElementById("toast-msg");
  if (msgEl) msgEl.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function initContactUtils() {
  document.querySelectorAll(".btn-copy-email").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = window.CMS_DATA.brand.email || "jyotsna.gfx.2004@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied: " + email);
      }).catch(() => {
        showToast("Email: " + email);
      });
    });
  });
}

function initNavigationEvents() {
  document.querySelectorAll(".nav-brand-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("home");
    });
  });

  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-target-view");
      if (target) switchView(target);
    });
  });

  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-menu-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => drawer.classList.toggle("hidden"));
  }

  // Stealth Admin Trigger in footer
  const stealthTrigger = document.getElementById("stealth-admin-trigger");
  if (stealthTrigger) {
    stealthTrigger.addEventListener("click", () => {
      if (isAdminAuthenticated()) {
        switchView("admin");
      } else {
        openAdminLoginModal();
      }
    });
  }

  // Keyboard shortcut: Ctrl + Shift + A
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
      e.preventDefault();
      if (isAdminAuthenticated()) {
        switchView("admin");
      } else {
        openAdminLoginModal();
      }
    }
  });

  const catSelect = document.getElementById("adm-proj-category");
  const catLabelInput = document.getElementById("adm-proj-catlabel");
  if (catSelect && catLabelInput) {
    catSelect.addEventListener("change", () => {
      const selectedOption = catSelect.options[catSelect.selectedIndex];
      if (selectedOption) catLabelInput.value = selectedOption.text;
    });
  }

  const cancelLoginBtn = document.getElementById("btn-cancel-login");
  if (cancelLoginBtn) cancelLoginBtn.addEventListener("click", closeAdminLoginModal);
  const backdropLogin = document.getElementById("admin-login-backdrop");
  if (backdropLogin) backdropLogin.addEventListener("click", closeAdminLoginModal);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(window.CMS_DATA.theme);
  initPreloader();
  initCoverPage();
  renderAllViews();
  initProjectModal();
  initContactUtils();
  initNavigationEvents();

  // Initial view is Home
  switchView("home");
});
