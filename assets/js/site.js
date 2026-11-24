/* Navvo Technology — site behaviour: i18n, dynamic sections, motion, product demo, tools, NavvoAI */

(function () {
  "use strict";

  const STR = {
    tr: {
      "top.alert": "Siber saldırı mı yaşıyorsunuz? Hemen yardım alın",
      "top.login": "Müşteri Girişi",

      "nav.solutions": "Çözümlerimiz",
      "sol.cta": "Uzmanla Görüşün",
      "sol.scopeLink": "Hizmet kapsamını inceleyin",
      "sol.nav.challenges": "Zorluklar",
      "sol.nav.overview": "Genel Bakış",
      "sol.nav.scope": "Hizmet Kapsamı",
      "sol.nav.process": "Süreç",
      "sol.nav.tech": "Teknolojiler",
      "sol.challengeEyebrow": "Karşılaştığınız Zorluklar",
      "sol.overviewTitle": "Navvo ile neler kazanırsınız?",
      "sol.scopeTitle": "Neler sunuyoruz?",
      "sol.techTitle": "Birlikte çalıştığımız teknoloji üreticileri",
      "sol.techTitleAll": "Üretici bağımsız, tarafsız danışmanlık",
      "sol.techText": "Sektörün lider üreticileriyle sertifikalı iş ortaklığımız sayesinde ihtiyacınıza en uygun teknolojiyi seçer, kurar ve yönetiriz.",
      "sol.othersTitle": "Diğer çözümlerimiz",
      "sol.explore": "Çözümü inceleyin",
      "nav.portal": "Kurumsal Portal",
      "nav.portalDesc": "Şirketin dijital ofisi",
      "nav.product": "Müşteri Paneli",
      "nav.productDesc": "BT altyapısı ve destek",
      "nav.about": "Hakkımızda",
            "mega.cardTag": "Yeni · Yazılımlarımız",
      "nav.contact": "İletişim",

      "hero.eyebrow": "Kurumsal Teknoloji Ortağınız",
      "hero.title1": "Uptime %99.9.",
      "hero.title2": "Kalan %0.1'de de buradayız.",
      "hero.subtitle": "Altyapıdan buluta, siber güvenlikten iş sürekliliğine — işletmenizin dijital omurgasını uçtan uca tasarlıyor, koruyor ve yönetiyoruz.",
      "hero.cta1": "Hizmetlerimizi Keşfedin",
      "hero.cta2": "Ücretsiz Danışmanlık Alın",

      "spot.1.tag": "Yeni · Yazılımlarımız",
      "spot.1.title": "Şirketiniz tek portalda",
      "spot.1.desc": "Duyuru, izin, kalite, sipariş takibi ve BT desteği; Kurumsal Portal ve Müşteri Paneli ile tek ekranda.",
      "spot.2.tag": "Siber Güvenlik",
      "spot.2.title": "Tehditleri işinizi etkilemeden durdurun",
      "spot.2.desc": "Tehdit tespiti, sızma testleri, veri ve e-posta güvenliği ile uçtan uca koruma.",
      "spot.3.tag": "Yönetilen Hizmetler",
      "spot.3.title": "7/24 proaktif izleme ve destek",
      "spot.3.desc": "Olası arızaları henüz işinizi etkilemeden tespit edip çözüyoruz.",

      "stats.years": "Yıllık Tecrübe",
      "stats.projects": "Tamamlanan Proje",
      "stats.uptime": "Ortalama Çalışma Süresi",
      "stats.support": "Kesintisiz İzleme",

      "about.eyebrow": "Navvo Technology",
      "about.title": "Uçtan uca teknoloji ortağınız",
      "about.body": "Navvo Technology; kurumsal sunucu ve ağ altyapısından buluta, siber güvenlikten yedekleme ve iş sürekliliğine kadar uçtan uca teknoloji çözümleri sunan bir kurumsal teknoloji ortağıdır.",

      "software.eyebrow": "Yazılımlarımız",
      "software.title": "Süreçleriniz dağılmasın, tek ekranda aksın",
      "software.subtitle": "Kendi geliştirdiğimiz iki yazılım: şirketinizin günlük işleyişi için Kurumsal Portal, BT altyapınız için Müşteri Paneli. Birlikte de ayrı ayrı da çalışır.",



      "services.eyebrow": "Neler Yapıyoruz",
      "services.title": "Uçtan Uca Teknoloji Çözümleri",
      "services.subtitle": "Beş ana çözüm alanında, işletmenizin ihtiyacına özel tasarlanmış hizmet grupları.",

      "process.eyebrow": "İşleyiş Modelimiz",
      "process.title": "Projelerinizi Geleceğe Taşıyan 4 Aşamalı Sürecimiz",
      "process.subtitle": "İşletmenizin hedeflerini, verimliliği ve uzun vadeli büyümeyi destekleyen; güvenli, ölçeklenebilir ve sürdürülebilir bir teknoloji stratejisine dönüştüren adım adım işleyiş sürecimiz.",

      "why.eyebrow": "Farklılıklarımız",
      "why.title": "İşletmeniz İçin Neden Navvo Teknoloji?",
      "why.subtitle": "Sadece bir BT tedarikçisi değil, iş süreçlerinizin kesintisiz ilerlemesini sağlayan proaktif ve stratejik teknoloji ortağınızız.",

      "partners.eyebrow": "İş Ortaklarımız",
      "partners.title": "Teknoloji Çözüm Ortaklarımız",
      "partners.subtitle": "Sektörün lider teknoloji üreticileriyle sertifikalı iş ortaklığımız bulunuyor.",

      "tools.eyebrow": "Ücretsiz Araçlar",
      "tools.title": "Bağlantınızı Hızlıca Kontrol Edin",
      "tools.ip": "IP Adresim",
      "tools.speed": "Hız Testi",
      "tools.dns": "DNS Sorgu",
      "tools.run": "Çalıştır",
      "tools.query": "Sorgula",
      "tools.running": "Ölçülüyor...",
      "tools.ipLabels": ["WAN IPv4", "Konum", "ISP / Organizasyon", "Saat Dilimi"],
      "tools.ipError": "IP bilgisi alınamadı. Bağlantınızı kontrol edin.",
      "tools.speedNote": "Yaklaşık, 2MB test dosyasıyla",
      "tools.ping": "Gecikme (ping)",
      "tools.down": "İndirme Hızı",
      "tools.speedError": "Hız testi başarısız oldu. Bağlantınızı kontrol edin.",
      "tools.dnsNone": "Kayıt bulunamadı.",
      "tools.dnsError": "DNS sorgusu başarısız oldu.",

      "cta.title": "Teknoloji Altyapınızı Bir Üst Seviyeye Taşıyalım",
      "cta.subtitle": "Uzman ekibimiz, ihtiyaçlarınıza özel bir yol haritası çıkarmak için hazır.",
      "cta.button": "Hemen İletişime Geçin",

      "contact.eyebrow": "İletişim",
      "contact.title": "Bir Proje mi Konuşalım?",
      "contact.subtitle": "Formu doldurun, ekibimiz en kısa sürede size dönüş yapsın.",
      "contact.name": "Ad Soyad",
      "contact.email": "E-posta",
      "contact.company": "Şirket",
      "contact.message": "Mesajınız",
      "contact.send": "Mesajı Gönder",
      "contact.phone": "Mobil",
      "contact.monitor": "İzleme",
      "contact.info.email": "E-posta",
      "contact.info.location": "Konum",
      "contact.info.locationValue": "İstanbul, Türkiye",
      "contact.toast": "Mesajınız hazırlandı — e-posta uygulamanız açılıyor.",
      "contact.subject": "Web Sitesi Talebi",

      "footer.tagline": "Kurumsal altyapı, bulut, siber güvenlik ve BT danışmanlığında güvenilir teknoloji ortağınız.",
      "footer.categoriesTitle": "Çözüm Alanları",
      "footer.productTitle": "Yazılımlar",
      "footer.contactTitle": "İletişim",
      "footer.rights": "Tüm hakları saklıdır.",


      "ai.sub": "Genel teknik sorularınız için",
      "ai.ph": "Sorunuzu yazın...",
      "ai.intro": "Merhaba! Genel bir teknik soru sorun (örn. \"youtube açılmıyor\", \"internetim yavaş\") — yanıtlayayım.",
      "ai.thinking": "NavvoAI yazıyor...",
      "ai.notConfigured": "NavvoAI şu anda yapılandırılmadı — bu özellik yakında aktif olacak. Acil sorularınız için: info@navvo.co",
      "ai.error": "Bir şeyler ters gitti, lütfen tekrar deneyin."
    },
    en: {
      "top.alert": "Experiencing a cyberattack? Get help now",
      "top.login": "Customer Login",

      "nav.solutions": "Solutions",
      "sol.cta": "Talk to an Expert",
      "sol.scopeLink": "See what's included",
      "sol.nav.challenges": "Challenges",
      "sol.nav.overview": "Overview",
      "sol.nav.scope": "What's Included",
      "sol.nav.process": "Process",
      "sol.nav.tech": "Technologies",
      "sol.challengeEyebrow": "Your Challenges",
      "sol.overviewTitle": "What you gain with Navvo",
      "sol.scopeTitle": "What we deliver",
      "sol.techTitle": "Technology vendors we work with",
      "sol.techTitleAll": "Vendor-neutral, independent consulting",
      "sol.techText": "Thanks to certified partnerships with the industry's leading vendors, we choose, deploy, and manage the technology that fits you best.",
      "sol.othersTitle": "Our other solutions",
      "sol.explore": "Explore solution",
      "nav.portal": "Corporate Portal",
      "nav.portalDesc": "Your company's digital office",
      "nav.product": "Customer Panel",
      "nav.productDesc": "IT infrastructure and support",
      "nav.about": "About",
            "mega.cardTag": "New · Our Software",
      "nav.contact": "Contact",

      "hero.eyebrow": "Your Enterprise Technology Partner",
      "hero.title1": "99.9% uptime.",
      "hero.title2": "We're here for the other 0.1%, too.",
      "hero.subtitle": "From infrastructure to cloud, from cybersecurity to business continuity — we design, protect, and manage your business's digital backbone end to end.",
      "hero.cta1": "Explore Our Services",
      "hero.cta2": "Get Free Consulting",

      "spot.1.tag": "New · Our Software",
      "spot.1.title": "Your company in one portal",
      "spot.1.desc": "Announcements, leave, quality, order tracking, and IT support on one screen with Corporate Portal and Customer Panel.",
      "spot.2.tag": "Cybersecurity",
      "spot.2.title": "Stop threats before they hit your business",
      "spot.2.desc": "End-to-end protection with threat detection, penetration testing, and data and email security.",
      "spot.3.tag": "Managed Services",
      "spot.3.title": "24/7 proactive monitoring and support",
      "spot.3.desc": "We detect and resolve potential failures before they affect your business.",

      "stats.years": "Years of Experience",
      "stats.projects": "Completed Projects",
      "stats.uptime": "Average Uptime",
      "stats.support": "Continuous Monitoring",

      "about.eyebrow": "Navvo Technology",
      "about.title": "Your end-to-end technology partner",
      "about.body": "Navvo Technology is an enterprise technology partner delivering end-to-end solutions — from server and network infrastructure to cloud, cybersecurity, backup, and business continuity.",

      "software.eyebrow": "Our Software",
      "software.title": "Keep your processes together, on one screen",
      "software.subtitle": "Two products we build ourselves: Corporate Portal for your company's daily work, Customer Panel for your IT infrastructure. They work together or on their own.",



      "services.eyebrow": "What We Do",
      "services.title": "End-to-End Technology Solutions",
      "services.subtitle": "Five core solution areas, with service groups tailored to your business needs.",

      "process.eyebrow": "Our Process",
      "process.title": "The 4-Stage Journey That Moves Your Projects Forward",
      "process.subtitle": "A step-by-step process that turns your business goals, efficiency, and long-term growth into a secure, scalable, and sustainable technology strategy.",

      "why.eyebrow": "What Sets Us Apart",
      "why.title": "Why Navvo Technology for Your Business?",
      "why.subtitle": "Not just an IT vendor — we are the proactive, strategic technology partner that keeps your business processes running without interruption.",

      "partners.eyebrow": "Our Partners",
      "partners.title": "Technology Alliance Partners",
      "partners.subtitle": "We hold certified partnerships with the industry's leading technology vendors.",

      "tools.eyebrow": "Free Tools",
      "tools.title": "Quickly Check Your Connection",
      "tools.ip": "My IP Address",
      "tools.speed": "Speed Test",
      "tools.dns": "DNS Lookup",
      "tools.run": "Run",
      "tools.query": "Look up",
      "tools.running": "Measuring...",
      "tools.ipLabels": ["WAN IPv4", "Location", "ISP / Organization", "Timezone"],
      "tools.ipError": "Could not fetch IP info. Check your connection.",
      "tools.speedNote": "Approximate, 2MB test file",
      "tools.ping": "Latency (ping)",
      "tools.down": "Download Speed",
      "tools.speedError": "Speed test failed. Check your connection.",
      "tools.dnsNone": "No records found.",
      "tools.dnsError": "DNS query failed.",

      "cta.title": "Let's Take Your Technology Infrastructure to the Next Level",
      "cta.subtitle": "Our expert team is ready to build a roadmap tailored to your needs.",
      "cta.button": "Get in Touch Now",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's Talk About a Project",
      "contact.subtitle": "Fill in the form and our team will get back to you shortly.",
      "contact.name": "Full Name",
      "contact.email": "Email",
      "contact.company": "Company",
      "contact.message": "Your Message",
      "contact.send": "Send Message",
      "contact.phone": "Mobile",
      "contact.monitor": "Monitoring",
      "contact.info.email": "Email",
      "contact.info.location": "Location",
      "contact.info.locationValue": "Istanbul, Türkiye",
      "contact.toast": "Your message is ready — opening your email app.",
      "contact.subject": "Website Inquiry",

      "footer.tagline": "Your trusted technology partner in enterprise infrastructure, cloud, cybersecurity, and IT consulting.",
      "footer.categoriesTitle": "Solution Areas",
      "footer.productTitle": "Software",
      "footer.contactTitle": "Contact",
      "footer.rights": "All rights reserved.",


      "ai.sub": "For general tech questions",
      "ai.ph": "Type your question...",
      "ai.intro": "Hi! Ask a general tech question (e.g. \"youtube won't load\", \"my internet is slow\") and I'll help.",
      "ai.thinking": "NavvoAI is typing...",
      "ai.notConfigured": "NavvoAI isn't configured yet — this feature is coming soon. For urgent questions: info@navvo.co",
      "ai.error": "Something went wrong, please try again."
    }
  };

  const WHY_ICONS = [
    '<svg viewBox="0 0 24 24" class="ico"><path d="M4 20h16M6 16l4-4 3 3 5-6"/><path d="M14 9h4v4"/></svg>',
    '<svg viewBox="0 0 24 24" class="ico"><path d="M2 12h4l3-7 4 14 3-7h6"/></svg>',
    '<svg viewBox="0 0 24 24" class="ico"><path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.6 7 8.8 4.1-1.2 7-4.4 7-8.8V6Z"/><path d="M9.2 12.2l1.9 1.9 3.7-3.9"/></svg>'
  ];

  let lang = "tr";
  try { lang = localStorage.getItem("navvo-lang") || "tr"; } catch (e) { /* storage unavailable */ }
  if (!STR[lang]) lang = "tr";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const t = (k) => STR[lang][k];
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- i18n ---------- */

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const v = t(el.dataset.i18n);
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    const lbl = $("#lang-label");
    if (lbl) lbl.textContent = lang === "tr" ? "EN" : "TR";
    renderDynamic();
    document.dispatchEvent(new CustomEvent("navvo:lang", { detail: lang }));
  }

  /* ---------- Dynamic sections ---------- */

  let rendered = false;

  function renderDynamic() {
    if (typeof NAVVO_DATA === "undefined") return;
    const rv = rendered ? " in" : "";

    const svc = $("#svc-grid");
    if (svc) {
      svc.innerHTML = NAVVO_DATA.map((g, i) => `
        <a href="${solUrl(g)}" class="svc reveal${rv}" style="--d:${i % 3}">
          <span class="svc-num">0${i + 1}</span>
          <div class="svc-icon">${g.icon}</div>
          <h3>${g.name[lang]}</h3>
          <p>${g.desc[lang]}</p>
          <ul class="svc-tags">${g.sub.map((s) => `<li>${s.name[lang]}</li>`).join("")}</ul>
          <span class="svc-go">${t("sol.explore")} ${ARROW}</span>
        </a>`).join("");
    }

    const tl = $("#timeline");
    if (tl && typeof NAVVO_PROCESS !== "undefined") {
      tl.innerHTML = '<div class="timeline-line"><span></span></div>' + NAVVO_PROCESS.map((s, i) => `
        <div class="step" style="--d:${i}">
          <div class="step-dot">${i + 1}</div>
          <h3>${s.title[lang]}</h3>
          <p>${s.desc[lang]}</p>
        </div>`).join("");
    }

    const why = $("#why-grid");
    if (why && typeof NAVVO_WHY !== "undefined") {
      why.innerHTML = NAVVO_WHY.map((w, i) => `
        <div class="why-card reveal${rv}" style="--d:${i}">
          <div class="why-icon">${WHY_ICONS[i % WHY_ICONS.length]}</div>
          <h3>${w.title[lang]}</h3>
          <p>${w.desc[lang]}</p>
        </div>`).join("");
    }

    const cats = $("#footer-cats");
    if (cats) cats.innerHTML = NAVVO_DATA.map((g) => `<li><a href="${solUrl(g)}">${g.name[lang]}</a></li>`).join("");

    renderMega();
    renderSolution(rv);
    rendered = true;
  }

  const ARROW = '<svg viewBox="0 0 24 24" class="ico"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const CHEV = '<svg viewBox="0 0 24 24" class="ico"><path d="m9 6 6 6-6 6"/></svg>';
  const pageSlug = document.body.dataset.slug || null;
  const solUrl = (g) => `/cozumler/${g.slug}`;
  let megaIdx = Math.max(0, NAVVO_DATA.findIndex((g) => g.slug === pageSlug));

  // Sophos-style mega menu: categories on the left, the hovered one's sub-services in the middle.
  function renderMega() {
    const mm = $("#mega-menu");
    if (!mm) return;
    mm.innerHTML = `
      <div class="container mega-inner">
        <div class="mega-side">${NAVVO_DATA.map((c, i) => `
          <a href="${solUrl(c)}" class="mega-cat${i === megaIdx ? " on" : ""}" data-i="${i}"><span class="mega-ic">${c.icon}</span><span>${c.name[lang]}</span>${CHEV}</a>`).join("")}
        </div>
        <div class="mega-main">${megaMain(NAVVO_DATA[megaIdx])}</div>
        <div class="mega-aside">
          <a href="/#portal" class="mega-card">
            <span class="spot-tag">${t("mega.cardTag")}</span>
            <b>${t("nav.portal")} · ${t("nav.product")}</b>
            <span>${t("spot.1.title")}</span>
            <span class="spot-go">${ARROW}</span>
          </a>
        </div>
      </div>`;
  }

  const SOL_ICONS = [
    '<svg viewBox="0 0 24 24" class="ico"><path d="M12 3 2 20h20Z"/><path d="M12 10v4M12 17h.01"/></svg>',
    '<svg viewBox="0 0 24 24" class="ico"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    '<svg viewBox="0 0 24 24" class="ico"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
  ];
  const BEN_ICONS = [
    '<svg viewBox="0 0 24 24" class="ico"><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>',
    '<svg viewBox="0 0 24 24" class="ico"><path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.6 7 8.8 4.1-1.2 7-4.4 7-8.8V6Z"/><path d="M9.2 12.2l1.9 1.9 3.7-3.9"/></svg>',
    '<svg viewBox="0 0 24 24" class="ico"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>'
  ];

  // Solution landing page (cozumler/<slug>.html), modelled on Sophos product pages.
  function renderSolution(rv) {
    if (!pageSlug || typeof NAVVO_PAGES === "undefined") return;
    const g = NAVVO_DATA.find((x) => x.slug === pageSlug);
    const pg = NAVVO_PAGES[pageSlug];
    if (!g || !pg) return;
    document.title = `${g.name[lang]} — Navvo Technology`;
    $("#sol-name").textContent = g.name[lang];
    $("#subnav-name").textContent = g.name[lang];
    $("#sol-tag").textContent = pg.tagline[lang];
    $("#sol-desc").textContent = g.desc[lang];

    $("#sol-visual").innerHTML = `
      <div class="sv-ring sv-r1"></div><div class="sv-ring sv-r2"></div><div class="sv-ring sv-r3"></div>
      <div class="sv-core">${g.icon}</div>
      ${g.sub.map((x, i) => `<span class="sv-chip sv-c${i}">${x.name[lang]}</span>`).join("")}`;

    $("#sol-challenge").innerHTML = `
      <div class="reveal${rv}">
        <div class="eyebrow">${t("sol.challengeEyebrow")}</div>
        <h2>${pg.challenge.title[lang]}</h2>
        <p class="muted">${pg.challenge.text[lang]}</p>
        <a href="#contact" class="btn btn-primary">${t("sol.cta")}</a>
      </div>
      <div class="ch-list">${pg.challenge.items.map((it, i) => `
        <div class="ch-card reveal${rv}" style="--d:${i}">
          <span class="ch-ic">${SOL_ICONS[i % SOL_ICONS.length]}</span>
          <div><h3>${it.t[lang]}</h3><p>${it.d[lang]}</p></div>
        </div>`).join("")}
      </div>`;

    $("#sol-overview").innerHTML = `
      <div class="section-head center reveal${rv}">
        <div class="eyebrow">${t("sol.nav.overview")}</div>
        <h2>${t("sol.overviewTitle")}</h2>
        <p>${pg.tagline[lang]}</p>
      </div>
      <div class="ov-grid">${pg.benefits.map((b, i) => `
        <div class="ov-card reveal${rv}" style="--d:${i}">
          <span class="ov-ic">${BEN_ICONS[i % BEN_ICONS.length]}</span>
          <h3>${b.t[lang]}</h3>
          <p>${b.d[lang]}</p>
        </div>`).join("")}
      </div>`;

    $("#sol-scope").innerHTML = `
      <div class="section-head reveal${rv}">
        <div class="eyebrow">${t("sol.nav.scope")}</div>
        <h2>${t("sol.scopeTitle")}</h2>
        <p>${g.desc[lang]}</p>
      </div>
      <div class="scope-grid${g.sub.length === 2 ? " two" : ""}">${g.sub.map((x, i) => `
        <div class="scope-card reveal${rv}" style="--d:${i}">
          <span class="scope-num">0${i + 1}</span>
          <h3>${x.name[lang]}</h3>
          <p>${x.desc[lang]}</p>
          <a href="#contact" class="link-arrow">${t("sol.cta")} ${ARROW}</a>
        </div>`).join("")}
      </div>`;

    const vendors = pg.vendors || NAVVO_PARTNERS;
    $("#sol-tech").innerHTML = `
      <div class="section-head center reveal${rv}">
        <div class="eyebrow">${t("sol.nav.tech")}</div>
        <h2>${t(pg.vendors ? "sol.techTitle" : "sol.techTitleAll")}</h2>
        <p>${t("sol.techText")}</p>
      </div>
      <div class="vendor-grid reveal${rv}">${vendors.map((v) => `<span>${esc(v)}</span>`).join("")}</div>`;

    $("#sol-others").innerHTML = NAVVO_DATA.filter((x) => x.slug !== pageSlug).map((x, i) => `
      <a href="${solUrl(x)}" class="other-card reveal${rv}" style="--d:${i}">
        <span class="svc-icon">${x.icon}</span>
        <h3>${x.name[lang]}</h3>
        <span class="svc-go">${t("sol.explore")} ${ARROW}</span>
      </a>`).join("");
  }

  function megaMain(g) {
    return `
          <h3>${g.name[lang]}</h3>
          <p>${g.desc[lang]}</p>
          <ul>${g.sub.map((x) => `<li><a href="${solUrl(g)}#kapsam">${x.name[lang]}</a></li>`).join("")}</ul>
          <a href="${solUrl(g)}" class="link-arrow">${t("sol.explore")} ${ARROW}</a>`;
  }

  function bindMega() {
    const drop = $(".nav-drop.mega"), nav = $("#nav");
    if (!drop) return;
    const desktop = () => window.matchMedia("(min-width: 1061px)").matches;
    let timer;
    drop.addEventListener("mouseenter", () => { if (desktop()) { clearTimeout(timer); nav.classList.add("mega-open"); } });
    drop.addEventListener("mouseleave", () => { timer = setTimeout(() => nav.classList.remove("mega-open"), 120); });
    drop.addEventListener("mouseover", (e) => {
      const c = e.target.closest(".mega-cat");
      if (!c || !desktop() || +c.dataset.i === megaIdx) return;
      megaIdx = +c.dataset.i;
      $$(".mega-cat", drop).forEach((x) => x.classList.toggle("on", x === c));
      const main = $(".mega-main", drop);
      main.innerHTML = megaMain(NAVVO_DATA[megaIdx]);
      main.style.animation = "none"; void main.offsetWidth; main.style.animation = "";
    });
    $(".nav-drop-btn", drop).addEventListener("click", (e) => {
      if (desktop()) return;
      e.preventDefault();
      drop.classList.toggle("expanded");
    });
    drop.addEventListener("click", (e) => {
      if (!e.target.closest("a:not(.nav-drop-btn)")) return;
      nav.classList.remove("mega-open", "open");
      drop.classList.remove("expanded");
    });
  }

  function renderStatic() {
    const mq = $("#partners-marquee");
    if (mq && typeof NAVVO_PARTNERS !== "undefined") {
      const half = Math.ceil(NAVVO_PARTNERS.length / 2);
      const rows = [NAVVO_PARTNERS.slice(0, half), NAVVO_PARTNERS.slice(half)];
      mq.innerHTML = rows.map((row) => {
        const chips = row.map((p) => `<span class="chip">${esc(p)}</span>`).join("");
        return `<div class="marquee-track">${chips}${chips}</div>`;
      }).join("");
    }

    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Interactions ---------- */

  function bindUI() {
    const nav = $("#nav");
    const hero = $(".hero");
    const onScroll = () => {
      if (!hero) return;
      nav.classList.toggle("fixed", window.scrollY > 140);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    $("#nav-toggle")?.addEventListener("click", () => nav.classList.toggle("open"));
    $$("#nav-links > a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

    $("#lang-toggle")?.addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      try { localStorage.setItem("navvo-lang", lang); } catch (e) { /* ignore */ }
      applyLang();
    });

    document.addEventListener("click", (e) => {
    });

    const links = $$("#nav-links > a[href^='#'], #nav-links .nav-drop-btn[href^='#']");
    if (links.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      links.forEach((l) => { const s = $(l.getAttribute("href")); if (s) io.observe(s); });
    }

    $("#contact-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(e.target);
      const name = d.get("name"), company = d.get("company");
      const subject = encodeURIComponent(`${t("contact.subject")} — ${name}${company ? " (" + company + ")" : ""}`);
      const body = encodeURIComponent(`${name} <${d.get("email")}>${company ? "\n" + company : ""}\n\n${d.get("message")}`);
      toast(t("contact.toast"));
      setTimeout(() => { window.location.href = `mailto:info@navvo.co?subject=${subject}&body=${body}`; }, 400);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") document.body.classList.remove("ai-open");
    });
  }

  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 3200);
  }

  /* ---------- Motion ---------- */

  function bindReveal() {
    if (!("IntersectionObserver" in window) || reduced) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      $("#timeline")?.classList.add("in");
      $$("[data-count]").forEach((el) => { el.textContent = el.dataset.count; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal:not(.in)").forEach((el) => io.observe(el));

    const tl = $("#timeline");
    if (tl) {
      const tio = new IntersectionObserver(([en]) => { if (en.isIntersecting) { tl.classList.add("in"); tio.disconnect(); } }, { threshold: 0.3 });
      tio.observe(tl);
    }

    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        countUp(en.target);
        cio.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    $$("[data-count]").forEach((el) => cio.observe(el));
  }

  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec || "0", 10);
    const dur = 1600, start = performance.now();
    (function tick(now) {
      const p = Math.min(1, (now - start) / dur);
      el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  // Slow-moving orange "smoke": large additive glows drawn on a tiny canvas and
  // upscaled by the browser, which gives the soft blur for free.
  function smoke(cv, opts) {
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const SCALE = 10;
    const blobs = [
      { c: "234,88,12", x: .5, y: .85, r: .5, ax: .2, ay: .06, s: .00011, p: 0, a: .55 },
      { c: "160,45,5", x: .18, y: .3, r: .5, ax: .12, ay: .14, s: .00009, p: 2, a: .5 },
      { c: "255,140,50", x: .58, y: .62, r: .22, ax: .22, ay: .1, s: .00016, p: 4, a: .28 },
      { c: "150,40,5", x: .86, y: .35, r: .45, ax: .1, ay: .16, s: .0001, p: 1, a: .5 },
      { c: "234,88,12", x: .3, y: .95, r: .3, ax: .25, ay: .05, s: .00013, p: 3, a: .3 },
      { c: "90,20,0", x: .7, y: .1, r: .55, ax: .1, ay: .1, s: .00007, p: 5, a: .6 }
    ];
    let w, h, raf, visible = true;
    function resize() {
      w = Math.max(32, Math.ceil(cv.clientWidth / SCALE));
      h = Math.max(32, Math.ceil(cv.clientHeight / SCALE));
      cv.width = w; cv.height = h;
    }
    function frame(time) {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = opts.base;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const m = Math.max(w, h);
      blobs.forEach((b) => {
        const k = time * b.s * opts.speed;
        const x = (b.x + Math.sin(k + b.p) * b.ax) * w;
        const y = (b.y + Math.cos(k * 1.3 + b.p) * b.ay) * h;
        const r = b.r * m * (0.9 + Math.sin(k * 2 + b.p) * 0.1);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${b.c},${b.a * opts.glow})`);
        g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
      // Diagonal light streak, drifting slowly — the Sophos-style ribbon.
      ctx.save();
      ctx.translate(w * (0.5 + Math.sin(time * 0.00006) * 0.15), h * 0.55);
      ctx.rotate(-0.35);
      const sg = ctx.createLinearGradient(0, -h * 0.12, 0, h * 0.12);
      sg.addColorStop(0, "rgba(255,150,60,0)");
      sg.addColorStop(0.5, `rgba(255,150,60,${0.12 * opts.glow})`);
      sg.addColorStop(1, "rgba(255,150,60,0)");
      ctx.fillStyle = sg;
      ctx.fillRect(-w, -h * 0.12, w * 2, h * 0.24);
      ctx.restore();
      ctx.globalCompositeOperation = "source-over";
      const v = ctx.createRadialGradient(w / 2, h * 0.6, m * 0.2, w / 2, h * 0.5, m * 0.8);
      v.addColorStop(0, "rgba(20,8,3,0)");
      v.addColorStop(1, "rgba(16,6,2,.85)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
      if (visible && !reduced) raf = requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener("resize", resize);
    if (reduced) { frame(0); return; }
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(frame);
    }).observe(cv);
  }

  /* ---------- Network tools ---------- */

  function bindTools() {
    $$("[data-tool]").forEach((btn) => btn.addEventListener("click", async () => {
      btn.disabled = true;
      try { await (btn.dataset.tool === "ip" ? toolIp() : toolSpeed()); } finally { btn.disabled = false; }
    }));
    $("#dns-form")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const domain = $("#dns-input").value.trim();
      if (domain) await toolDns(domain);
    });
  }

  async function toolIp() {
    const out = $("#out-ip");
    out.textContent = t("tools.running");
    try {
      // api.ipify.org has no AAAA record, so this is forced over IPv4 — the only
      // reliable way to get the WAN IPv4 address on a dual-stack connection.
      const ipRes = await fetch("https://api.ipify.org?format=json");
      if (!ipRes.ok) throw new Error("ipify failed");
      const { ip } = await ipRes.json();
      let geo = {};
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoRes.ok) geo = await geoRes.json();
      } catch (e) { /* location lookup is best-effort */ }
      const L = t("tools.ipLabels");
      const loc = [geo.city, geo.region, geo.country_name].filter(Boolean).join(", ") || "-";
      out.innerHTML = `${L[0]}: <b>${esc(ip)}</b><br>${L[1]}: ${esc(loc)}<br>${L[2]}: ${esc(geo.org || "-")}<br>${L[3]}: ${esc(geo.timezone || "-")}`;
    } catch (err) {
      out.innerHTML = `<span class="err">${t("tools.ipError")}</span>`;
    }
  }

  async function toolSpeed() {
    const out = $("#out-speed");
    out.textContent = t("tools.running");
    try {
      const pingStart = performance.now();
      await fetch("https://speed.cloudflare.com/__down?bytes=1000", { cache: "no-store" });
      const ping = performance.now() - pingStart;
      const bytes = 2000000;
      const dlStart = performance.now();
      const res = await fetch(`https://speed.cloudflare.com/__down?bytes=${bytes}`, { cache: "no-store" });
      await res.arrayBuffer();
      const mbps = ((bytes * 8) / ((performance.now() - dlStart) / 1000) / 1e6).toFixed(2);
      out.innerHTML = `${t("tools.ping")}: <b>${ping.toFixed(0)} ms</b><br>${t("tools.down")}: <b>${mbps} Mbps</b><br><small class="muted">${t("tools.speedNote")}</small>`;
    } catch (err) {
      out.innerHTML = `<span class="err">${t("tools.speedError")}</span>`;
    }
  }

  async function toolDns(domain) {
    const out = $("#out-dns");
    out.textContent = t("tools.running");
    try {
      const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`);
      const data = await res.json();
      const recs = (data.Answer || []).filter((a) => a.type === 1);
      out.innerHTML = recs.length
        ? recs.map((a) => `${esc(domain)} → <b>${esc(a.data)}</b>`).join("<br>")
        : `<span class="err">${t("tools.dnsNone")}</span>`;
    } catch (err) {
      out.innerHTML = `<span class="err">${t("tools.dnsError")}</span>`;
    }
  }

  /* ---------- NavvoAI ---------- */

  function bindAi() {
    const fab = $("#ai-fab"), body = $("#ai-body"), form = $("#ai-form"), input = $("#ai-input");
    if (!fab) return;
    const add = (text, cls) => {
      const m = document.createElement("div");
      m.className = "msg " + cls;
      m.textContent = text;
      body.appendChild(m);
      body.scrollTop = body.scrollHeight;
      return m;
    };
    fab.addEventListener("click", () => {
      document.body.classList.add("ai-open");
      if (!body.children.length) add(t("ai.intro"), "bot");
      setTimeout(() => input.focus(), 200);
    });
    $("#ai-close").addEventListener("click", () => document.body.classList.remove("ai-open"));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      input.value = "";
      add(val, "me");
      const typing = add(t("ai.thinking"), "bot typing");
      try {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ message: val })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          const glitch = data.error === "upstream_error" || data.error === "upstream_unreachable";
          typing.textContent = t(glitch ? "ai.error" : "ai.notConfigured");
        } else {
          typing.textContent = data.reply || "";
        }
      } catch (err) {
        typing.textContent = t("ai.notConfigured");
      }
      typing.classList.remove("typing");
      body.scrollTop = body.scrollHeight;
    });
  }

  /* ---------- Boot ---------- */

  renderStatic();
  applyLang();
  bindUI();
  bindMega();
  bindReveal();
  smoke($("#hero-canvas"), { base: "#160803", glow: 1, speed: 1 });
  smoke($("#cta-canvas"), { base: "#160803", glow: 0.75, speed: 0.8 });
  bindTools();
  bindAi();
})();
