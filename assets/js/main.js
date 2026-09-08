/* Navvo Technology — site behavior: i18n switching, rendering, animations */

(function () {
  "use strict";

  const STORAGE_KEY = "navvo_lang";
  let lang = localStorage.getItem(STORAGE_KEY) || "tr";

  function t(key) {
    return (NAVVO_I18N[lang] && NAVVO_I18N[lang][key]) || NAVVO_I18N.tr[key] || key;
  }

  /* ---------- i18n text application ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    renderDynamicContent();
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    applyI18n();
  }

  /* ---------- Dynamic rendering from NAVVO_DATA ---------- */
  function renderServiceAccordion() {
    const root = document.querySelector("[data-service-accordion]");
    if (!root || typeof NAVVO_DATA === "undefined") return;

    root.innerHTML = NAVVO_DATA.map((group, i) => `
      <div class="service-card reveal" style="--card-color:${group.color}; --i:${i}" data-slug="${group.slug}">
        <button class="service-head" data-toggle-service aria-expanded="false">
          <span class="service-icon">${group.icon}</span>
          <span class="service-head-text">
            <h3>${group.name[lang]}</h3>
            <p>${group.desc[lang]}</p>
          </span>
          <span class="service-toggle" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </span>
        </button>
        <div class="service-body">
          <div class="service-body-inner">
            <div class="sub-grid">
              ${group.sub.map((s) => `
                <div class="sub-card">
                  <h4>${s.name[lang]}</h4>
                  <p>${s.desc[lang]}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `).join("");

    root.querySelectorAll("[data-toggle-service]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".service-card");
        const wasOpen = card.classList.contains("open");
        root.querySelectorAll(".service-card.open").forEach((c) => {
          c.classList.remove("open");
          c.querySelector("[data-toggle-service]").setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          card.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });

    observeReveal(root.querySelectorAll(".reveal"));
  }

  function renderFooterCategories() {
    const root = document.querySelector("[data-footer-categories]");
    if (!root || typeof NAVVO_DATA === "undefined") return;
    root.innerHTML = NAVVO_DATA.map((g) => `<li><a href="kaynaklar.html#${g.slug}">${g.name[lang]}</a></li>`).join("");
  }

  function renderResourceFilters() {
    const bar = document.querySelector("[data-filter-bar]");
    if (!bar || typeof NAVVO_DATA === "undefined") return;

    bar.innerHTML = `<button class="filter-chip active" data-filter="all">${t("resources.all")}</button>` +
      NAVVO_DATA.map((g) => `
        <button class="filter-chip" data-filter="${g.slug}" style="--chip-color:${g.color}">
          <span class="dot"></span>${g.name[lang]}
        </button>
      `).join("");

    bar.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        bar.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderResourceGrid(chip.dataset.filter);
      });
    });
  }

  function renderResourceGrid(filter) {
    const grid = document.querySelector("[data-resource-grid]");
    if (!grid || typeof NAVVO_DATA === "undefined") return;
    filter = filter || (location.hash ? location.hash.slice(1) : "all");

    const cards = [];
    NAVVO_DATA.forEach((group) => {
      if (filter !== "all" && filter !== group.slug) return;
      group.sub.forEach((s) => {
        cards.push(`
          <div class="resource-card reveal" style="--card-color:${group.color}">
            <span class="resource-badge">${group.name[lang]}</span>
            <h3>${s.name[lang]}</h3>
            <p>${s.desc[lang]}</p>
            <div class="resource-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
              ${t("resources.soon")}
            </div>
          </div>
        `);
      });
    });
    grid.innerHTML = cards.join("");
    observeReveal(grid.querySelectorAll(".reveal"));

    if (typeof NAVVO_DATA !== "undefined") {
      const activeChip = document.querySelector(`.filter-chip[data-filter="${filter}"]`);
      if (activeChip) {
        document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        activeChip.classList.add("active");
      }
    }
  }

  function renderDynamicContent() {
    renderServiceAccordion();
    renderFooterCategories();
    if (document.querySelector("[data-filter-bar]")) {
      renderResourceFilters();
      renderResourceGrid();
    }
  }

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeReveal(nodeList) {
    nodeList.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Counters ---------- */
  function animateCounters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const decimals = el.dataset.count.includes(".") ? el.dataset.count.split(".")[1].length : 0;
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          counterObserver.unobserve(el);
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.4 });
      counterObserver.observe(el);
    });
  }

  /* ---------- Navbar scroll state + mobile menu ---------- */
  function initNavbar() {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      }));
    }
  }

  /* ---------- Contact form (mailto handoff) ---------- */
  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const company = form.querySelector("#company").value.trim();
      const message = form.querySelector("#message").value.trim();

      const subject = encodeURIComponent(`${lang === "tr" ? "Web Sitesi Talebi" : "Website Inquiry"} — ${name}`);
      const bodyLines = [
        `${t("contact.name")}: ${name}`,
        `${t("contact.email")}: ${email}`,
        `${t("contact.company")}: ${company}`,
        "",
        message
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = `mailto:info@navvo.co?subject=${subject}&body=${body}`;
      showToast(t("contact.toast"));
      form.reset();
    });
  }

  function showToast(msg) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    initNavbar();
    initContactForm();
    applyI18n();
    animateCounters();
    observeReveal(document.querySelectorAll(".reveal:not([data-dynamic])"));

    if (location.hash && document.querySelector("[data-resource-grid]")) {
      const target = document.querySelector(location.hash);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    }
  });
})();
