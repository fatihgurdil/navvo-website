/* Navvo Technology — "Yazılımlarımız" section: product tabs, module cards and the scripted product demos.
   All names and records inside the demos are fictional. */

(function () {
  "use strict";

  const root = document.getElementById("portal");
  if (!root) return;

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = document.documentElement.lang === "en" ? "en" : "tr";
  const L = (tr, en) => (lang === "en" ? en : tr);

  const P = {
    home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
    grid: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>',
    news: '<path d="M4 5h13v14H6a2 2 0 0 1-2-2Z"/><path d="M17 9h3v8a2 2 0 0 1-2 2M7.5 9h6M7.5 12.5h6M7.5 16h4"/>',
    file: '<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    tri: '<path d="M12 4 2.5 20h19Z"/><path d="M12 10v4M12 17h.01"/>',
    shield: '<path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.6 7 8.8 4.1-1.2 7-4.4 7-8.8V6Z"/><path d="m9.2 12.2 1.9 1.9 3.7-3.9"/>',
    building: '<path d="M5 21V4h10v17M15 9h4v12M3 21h18M8 8h4M8 12h4M8 16h4"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    cube: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    mon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    chat: '<path d="M4 5h16v11H9l-5 4Z"/>',
    play: '<path d="m8 5 11 7-11 7Z"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3"/>',
    life: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.6 5.6 3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    radar: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12 18.4 5.6"/>',
    refresh: '<path d="M4 12a8 8 0 0 1 13.9-5.4M20 12a8 8 0 0 1-13.9 5.4"/><path d="M17.5 3v3.6H14M6.5 21v-3.6H10"/>',
    cal: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',
    sign: '<path d="M4 20h16M5 15c3-8 6-10 7-8s-4 8-2 9 4-5 6-5 0 3 3 3"/>',
    tree: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
    bell: '<path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4ZM10 21h4"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    palette: '<path d="M4 20c4 0 6-2 6-5a3 3 0 0 0-6 0c0 2-1 3-2 4 .6.7 1.3 1 2 1Z"/><path d="m9.5 13 9-9a2 2 0 0 1 3 3l-9 9"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="1.4"/><rect x="3" y="14" width="18" height="6" rx="1.4"/><path d="M7 7h.01M7 17h.01"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'
  };
  const ic = (k, cls) => `<svg viewBox="0 0 24 24" class="${cls || "ico"}" aria-hidden="true">${P[k]}</svg>`;
  const ARROW = '<svg viewBox="0 0 24 24" class="ico" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Copy ---------- */

  const PRODUCTS = {
    portal: () => ({
      title: L("Şirketinizin tüm işleyişi tek portalda", "Your whole company in one portal"),
      desc: L(
        "Duyurudan izin onayına, kalite dokümanından sipariş takibine kadar her gün kullanılan işleri e-posta zincirlerinden ve dağınık dosyalardan çıkarıp tek girişle açılan bir portala taşıyoruz. Her çalışan yalnızca yetkili olduğu modülleri görür; bekleyen işler kişiye özel sayılarla öne çıkar.",
        "From announcements and leave approvals to quality documents and order tracking, we move everyday work out of email threads and scattered files into one portal with a single sign-in. Everyone sees only the modules they are allowed to use, and pending work stands out with personal counters."
      ),
      points: [
        L("Sürecinize göre kurulur: modüller, alanlar ve onay adımları sizin işleyişinizden çıkar", "Built around your process: modules, fields, and approval steps come from how you work"),
        L("Onaylar, terminler ve ikinci göz kontrolleri kayıt altında; işin kimde beklediği her an görünür", "Approvals, deadlines, and second-person checks are recorded; you always see who the work is waiting on"),
        L("Geciken ve yaklaşan işler için otomatik e-posta hatırlatmaları ve Excel raporları", "Automatic email reminders for late and upcoming work, plus Excel reports"),
        L("Bilgisayara masaüstü uygulaması olarak kurulur, telefonda tarayıcıdan açılır", "Installs as a desktop app and opens in the browser on mobile")
      ],
      cta2: null,
      mods: [
        ["news", L("Şirket", "Company"), L("Görselli duyurular, okundu bilgisi, yorum ve oylama; dahili rehber, acil numaralar, yemek menüsü, fotoğraf albümleri ve eğitim videoları.", "Announcements with images, read receipts, comments, and ratings; directory, emergency numbers, lunch menu, photo albums, and training videos.")],
        ["users", L("İnsan Kaynakları", "Human Resources"), L("Kıdeme göre izin hakkı, yönetici ve İK onayı, izin takvimi, sağlık raporları ve özlük belgeleri.", "Leave entitlement by seniority, manager and HR approval, leave calendar, medical reports, and personnel files.")],
        ["shield", L("Kalite ve Formlar", "Quality & Forms"), L("ISO doküman listesi ve revizyon takibi; form numarasıyla kayıt açma, antetli Word / PDF çıktısı.", "ISO document register with revision control; numbered form records with Word / PDF output on your template.")],
        ["tri", L("Uygunsuzluklar", "Nonconformities"), L("Minör / majör kayıt, kök neden ve düzeltici faaliyet, fotoğraf ekleri; çözen ile kapatan farklı kişi.", "Minor / major records, root cause and corrective action, photo attachments; the person closing is never the one who solved it.")],
        ["box", L("Sipariş ve Süreç Takibi", "Order & Process Tracking"), L("Talepten faturaya aşama kapıları, teklif ve onaylar, sevkiyat takvimi; “şu an kimde” bilgisi.", "Stage gates from request to invoice, quotes and approvals, shipment calendar; always shows who has it now.")],
        ["cube", L("Teknik Doküman (PLM)", "Technical Documents (PLM)"), L("Parça, revizyon ve onay akışı; DWG çizimleri ve STEP modelleri tarayıcıda, ek program olmadan.", "Part, revision, and approval flow; DWG drawings and STEP models open in the browser with no extra software.")],
        ["building", L("Tesis ve Projeler", "Facility & Projects"), L("Yangın, elektrik ve tadilat projeleri, kurum onayları, geçerlilik uyarıları ve tedarikçi rehberi.", "Fire, electrical, and renovation projects, authority approvals, validity alerts, and supplier directory.")],
        ["chat", L("Sohbet", "Chat"), L("Birebir ve grup yazışma, dosya ve görsel paylaşımı, okundu bilgisi, masaüstü bildirimi.", "One-to-one and group messaging, file and image sharing, read receipts, desktop notifications.")],
        ["mon", L("IT", "IT"), L("Navvo Müşteri Paneli portalın içinde açılır: çalışan portaldan çıkmadan destek talebi açar, IT yöneticisi tüm altyapıyı görür.", "Navvo Customer Panel opens inside the portal: employees raise tickets without leaving it, IT managers see the whole infrastructure.")]
      ]
    }),
    panel: () => ({
      title: L("BT altyapınızın kontrolü artık sizde", "Take control of your IT infrastructure"),
      desc: L(
        "Cihazlarınız, yedekleriniz, lisanslarınız, sözleşmeleriniz ve destek talepleriniz tek güvenli panelde. Anlık durumu canlı izlersiniz, yenilemeleri bütçenizle birlikte önceden görürsünüz, yapılan her işin kaydı sizde kalır.",
        "Your devices, backups, licenses, contracts, and support tickets in one secure panel. Watch live status, see renewals and their budget ahead of time, and keep a record of every job done."
      ),
      points: [
        L("Menü firmanızın altyapısına göre kurulur; kullanmadığınız bölüm görünmez", "The menu is configured for your infrastructure; sections you don't use stay hidden"),
        L("Dashboard'u widget'larla kendinize göre düzenleyin", "Arrange the dashboard with widgets the way you like"),
        L("Çalışanlar şifresiz, e-posta koduyla destek talebi açar; ekran görüntüsünü yapıştırması yeterli", "Employees open tickets with an email code, no password; they just paste a screenshot"),
        L("Zorunlu 2FA, rol bazlı yetki ve her işlemin denetim kaydı", "Mandatory 2FA, role-based permissions, and an audit record of every action")
      ],
      cta2: L("Müşteri Girişi", "Customer Login"),
      mods: [
        ["radar", L("Canlı İzleme", "Live Monitoring"), L("Ağ cihazları, yedekler ve uç nokta güvenliği tek panoda; sorunlu kayıt gerekçesiyle öne çıkar.", "Network devices, backups, and endpoint security on one board; problems surface with their reason.")],
        ["life", L("Destek Talepleri", "Support Tickets"), L("Yetkili ve çalışan talepleri, dosya ekleri, durum takibi; işe giriş ve işten çıkış için hazır formlar.", "Manager and employee tickets, attachments, status tracking; ready-made onboarding and offboarding forms.")],
        ["refresh", L("Lisans ve Yenilemeler", "Licenses & Renewals"), L("Bitiş uyarıları, yıl yıl fiyat karşılaştırması, indirim oranı ve dönem onayı.", "Expiry alerts, year-by-year price comparison, discount rate, and period approval.")],
        ["cal", L("Planlı Çalışmalar", "Planned Work"), L("Projeler ilerleme yüzdesi ve adımlarıyla; bakım kayıtları ve yerinde destek planı.", "Projects with progress and steps; maintenance records and on-site support schedule.")],
        ["mon", L("Envanter ve Zimmet", "Inventory & Assignment"), L("Bilgisayardan IP telefona tüm cihazlar; imzalı zimmet tutanağı kayıtta saklanır.", "Every device from PCs to IP phones; signed assignment forms are kept on record.")],
        ["sign", L("Servis Formu ve Teklifler", "Service Reports & Quotes"), L("Servis formları, teklifler ve satın alma talepleri; onay bekleyenler işaretli.", "Service reports, quotes, and purchase requests; items awaiting approval are flagged.")],
        ["tree", L("Dizin ve Microsoft 365", "Directory & Microsoft 365"), L("Active Directory ve Microsoft Entra kullanıcıları, gruplar, bilgisayarlar ve posta hesapları.", "Active Directory and Microsoft Entra users, groups, computers, and mail accounts.")],
        ["lock", L("Erişim Kasası", "Access Vault"), L("Cihaz yönetim bilgileri AES-256 ile şifreli; görüntülemek için 2FA gerekir, her görüntüleme kaydedilir.", "Device credentials encrypted with AES-256; viewing needs 2FA and every view is logged.")],
        ["chart", L("Raporlar", "Reports"), L("Aylık talep istatistikleri, çözüm süreleri ve altyapı durumu.", "Monthly ticket statistics, resolution times, and infrastructure status.")]
      ]
    })
  };

  const BASE = () => [
    ["palette", L("Kendi markanızla", "Your own brand"), L("Logonuz, renkleriniz ve alan adınız", "Your logo, colors, and domain")],
    ["server", L("İstediğiniz yerde", "Hosted your way"), L("Kendi sunucunuzda ya da Navvo altyapısında", "On your own server or on Navvo infrastructure")],
    ["lock", L("Yetki ve kayıt", "Access & audit"), L("Modül bazında yetki, giriş kayıtları", "Per-module permissions, sign-in logs")],
    ["globe", L("Türkçe / İngilizce", "Turkish / English"), L("Açık ve koyu tema", "Light and dark theme")]
  ];

  /* ---------- Demo: shared pieces ---------- */

  const IMG = "assets/img/";
  const badge = (txt, cls) => `<span class="d-badge ${cls}">${txt}</span>`;
  const av = (t, c) => `<i class="p-av" style="--c:${c || "#ea580c"}">${t}</i>`;
  const brand = (cls) => `<span class="${cls}"><img src="${IMG}icon-mark.png" alt=""><img src="${IMG}${cls === "p-brand light" ? "logo-white" : "logo"}.png" alt=""></span>`;

  /* ---------- Demo 1: corporate portal ---------- */

  function portalHTML() {
    const apps = [
      ["co", "news", L("Şirket", "Company"), "#ea580c", 2],
      ["hr", "users", L("İnsan Kaynakları", "HR"), "#2563eb", 1],
      ["", "file", L("Formlar", "Forms"), "#0e7490"],
      ["nc", "tri", L("Uygunsuzluklar", "Nonconformities"), "#be123c", 3],
      ["", "shield", L("Kalite Yönetimi", "Quality"), "#4338ca"],
      ["erp", "box", L("Sipariş Takibi", "Order Tracking"), "#b45309", 5],
      ["plm", "cube", "PLM", "#0f766e"],
      ["", "building", L("Tesis & Projeler", "Facility"), "#7c3aed"],
      ["", "mon", "IT", "#c2410c"],
      ["", "user", L("Benim Panelim", "My Panel"), "#475569"]
    ];
    const quick = [["user", L("İzinlerim", "My leave")], ["users", L("Dahili rehber", "Directory")], ["cal", L("Sevkiyat takvimi", "Shipments")], ["play", L("Videolar", "Videos")], ["news", L("Yemek menüsü", "Lunch menu")]];
    const frame = (id, icon, name, color, side, body) => `
      <section class="d-screen p-full" data-s="${id}" style="--app:${color}">
        <header class="p-top"><span class="p-home" data-home>${ic("grid")}</span>${brand("p-brand")}<span class="p-mod"><i>${ic(icon)}</i>${name}</span><span class="p-sp"></span><span class="p-search">${L("Ara…", "Search…")}</span><span class="p-bell">${ic("bell")}</span>${av("AY")}</header>
        <div class="p-body"><aside class="p-side">${side.map((s, i) => `<div class="p-nav${i === 0 ? " on" : ""}">${s[0]}${s[1] ? `<em>${s[1]}</em>` : ""}</div>`).join("")}</aside><div class="p-main">${body}</div></div>
      </section>`;
    const card = (c, k) => `<div class="p-job${k.late ? " late" : ""}"><b>${c}</b><span>${k.t}</span><div>${av(k.who, k.col)}<small>${L("Şu an kimde", "With")}: ${k.name}</small></div></div>`;

    return `<div class="p-app">
      <section class="d-screen p-full" data-s="home">
        <div class="p-hero">
          <div class="p-hero-top">${brand("p-brand light")}<span class="p-sp"></span><span class="p-lang">TR <b>EN</b></span><span class="p-who">${av("AY")}<span><b>Ayşe Yılmaz</b><small>${L("Operasyon Müdürü", "Operations Manager")}</small></span></span></div>
          <h5>${L("Hoş geldin Ayşe", "Welcome, Ayşe")}</h5>
          <p>${L("Onayınızı bekleyen 1 izin, size atanmış 3 iş var", "1 leave request awaits your approval, 3 jobs are assigned to you")}</p>
        </div>
        <div class="p-panel p-quick"><b>${L("Hızlı erişim", "Quick access")}</b>${quick.map(([k, l]) => `<span>${ic(k)}${l}</span>`).join("")}</div>
        <div class="p-panel"><div class="p-panel-h"><b>${L("Modüller", "Modules")}</b><small>${L("Hangi modülle çalışacaksınız?", "Which module do you need?")}</small></div>
          <div class="p-grid">${apps.map(([id, k, l, c, n]) => `<div class="p-tile"${id ? ` data-go="${id}"` : ""} style="--app:${c}"><span>${ic(k)}${n ? `<em>${n}</em>` : ""}</span><b>${l}</b></div>`).join("")}</div></div>
      </section>

      ${frame("co", "news", L("Şirket", "Company"), "#ea580c", [[L("Duyurular", "Announcements"), 2], [L("Dahili rehber", "Directory")], [L("Acil numaralar", "Emergency")], [L("Yemek menüsü", "Lunch menu")], [L("Fotoğraflar", "Photos")], [L("Videolar", "Videos")]], `
        <div class="d-head"><div><b>${L("Duyurular", "Announcements")}</b><small>${L("Okunma ve yorumlar kayıt altında", "Reads and comments are recorded")}</small></div><span class="d-btn">+ ${L("Duyuru", "Post")}</span></div>
        <div class="p-two">
          <div>
            <div class="d-card p-post"><div class="p-cover"><img src="${IMG}logo-white.png" alt=""></div><div class="p-post-b">${badge(L("Yeni", "New"), "b-w")}<b>${L("Yeni kurumsal web sitemiz yayında", "Our new corporate website is live")}</b><p>${L("Tüm ekip arkadaşlarımızın puan ve yorumlarını bekliyoruz.", "We'd love ratings and comments from the whole team.")}</p><div class="p-meta"><span data-read>42 / 60 ${L("okudu", "read")}</span><span>★ 9,2</span><span>14 ${L("yorum", "comments")}</span></div><div class="d-bar p-read"><i style="--w:70%"></i></div></div></div>
            <div class="d-card p-line">${ic("shield")}<div><b>${L("Bilgi güvenliği farkındalık eğitimi", "Security awareness training")}</b><small>${L("Cuma 14:00 · Toplantı salonu", "Friday 14:00 · Meeting room")}</small></div>${badge(L("Sabit", "Pinned"), "b-i")}</div>
          </div>
          <div>
            <div class="d-card"><h4>${L("Bugünün menüsü", "Today's menu")}</h4><div class="d-ren"><div><span>${L("Mercimek çorbası", "Lentil soup")}</span></div><div><span>${L("Izgara tavuk", "Grilled chicken")}</span></div><div><span>${L("Pirinç pilavı", "Rice pilaf")}</span></div><div><span>${L("Mevsim salata", "Seasonal salad")}</span></div></div></div>
            <div class="d-card p-gap"><h4>${L("Dahili rehber", "Directory")}</h4><div class="p-dir">${[["MK", "Mehmet Kaya", "101", "#2563eb"], ["ED", "Elif Demir", "114", "#0f766e"], ["CA", "Can Arslan", "127", "#b45309"]].map(([a, n, d, c]) => `<div>${av(a, c)}<span>${n}</span><code>${d}</code></div>`).join("")}</div></div>
          </div>
        </div>`)}

      ${frame("hr", "users", L("İnsan Kaynakları", "HR"), "#2563eb", [[L("Onay bekleyenler", "Approvals"), 1], [L("İzinlerim", "My leave")], [L("İzin takvimi", "Calendar")], [L("Özlük belgeleri", "Documents")], [L("Personel", "Staff")]], `
        <div class="d-head"><div><b>${L("Onay bekleyenler", "Pending approvals")}</b><small>${L("Yönetici onayından sonra İK'ya gider", "Goes to HR after manager approval")}</small></div></div>
        <div class="d-kpis three"><div class="d-card d-kpi"><span>${L("Yıllık izin hakkı", "Annual entitlement")}</span><b>14</b><small>${L("gün", "days")}</small></div><div class="d-card d-kpi"><span>${L("Kullanılan", "Used")}</span><b>6</b><small>${L("gün", "days")}</small></div><div class="d-card d-kpi"><span>${L("Kalan", "Remaining")}</span><b>8</b><small class="g">${L("gün", "days")}</small></div></div>
        <div class="d-card p-req"><div class="p-req-h">${av("ED", "#0f766e")}<div><b>Elif Demir</b><small>${L("Yıllık izin · 3 iş günü · 14–16 Aralık", "Annual leave · 3 working days · Dec 14–16")}</small></div><span data-hrst>${badge(L("Yönetici onayı bekliyor", "Awaiting manager"), "b-w")}</span></div>
          <div class="p-flow"><span class="ok">${L("Talep", "Request")}</span><i></i><span data-f1>${L("Yönetici", "Manager")}</span><i></i><span data-f2>${L("İK", "HR")}</span><i></i><span data-f3>${L("Takvim", "Calendar")}</span></div>
          <div class="p-acts"><span class="d-btn" data-approve>${L("Onayla", "Approve")}</span><span class="d-btn ghost">${L("Geri çevir", "Decline")}</span></div></div>
        <div class="d-card p-cal"><h4>${L("İzin takvimi · Aralık", "Leave calendar · December")}</h4><div class="p-days">${Array.from({ length: 28 }, (_, i) => `<i class="${[2, 3, 8, 9, 10].includes(i) ? "a" : ""}${[13, 14, 15].includes(i) ? "pend" : ""}${(i + 1) % 7 > 4 ? " we" : ""}"${[13, 14, 15].includes(i) ? " data-day" : ""}>${i + 1}</i>`).join("")}</div></div>
        <div class="d-toast"><i>✓</i>${L("Onaylandı · İK'ya iletildi", "Approved · sent to HR")}</div>`)}

      ${frame("nc", "tri", L("Uygunsuzluklar", "Nonconformities"), "#be123c", [[L("Tüm kayıtlar", "All records"), 3], [L("Bana atanan", "Assigned to me")], [L("Raporlar", "Reports")], [L("Doküman listesi", "Documents")]], `
        <div class="d-head"><div><b>${L("Uygunsuzluk kayıtları", "Nonconformity records")}</b><small>${L("Çözen ile kapatan farklı kişi", "Solver and closer are different people")}</small></div><span class="d-btn">+ ${L("Yeni kayıt", "New record")}</span></div>
        <div class="p-two wide"><div class="d-card"><table class="d-table"><tr><th>No</th><th>${L("Konu", "Subject")}</th><th>${L("Tip", "Type")}</th><th>${L("Termin", "Due")}</th><th>${L("Durum", "Status")}</th></tr>
          <tr class="sel"><td>UYG-26-0018</td><td>${L("Etiket eksik sevk kolisi", "Unlabelled shipment box")}</td><td>${L("Minör", "Minor")}</td><td>02.12</td><td data-ncst>${badge(L("Çözüldü", "Solved"), "b-i")}</td></tr>
          <tr><td>UYG-26-0017</td><td>${L("Kalibrasyon süresi geçmiş kumpas", "Caliper past calibration")}</td><td>${L("Majör", "Major")}</td><td>28.11</td><td>${badge(L("Açık", "Open"), "b-w")}</td></tr>
          <tr><td>UYG-26-0016</td><td>${L("Revizyonu eski form kullanımı", "Outdated form revision")}</td><td>${L("Minör", "Minor")}</td><td>26.11</td><td>${badge(L("Açık", "Open"), "b-w")}</td></tr>
          <tr><td>UYG-26-0015</td><td>${L("Sarf malzeme etiketi", "Consumable label")}</td><td>${L("Minör", "Minor")}</td><td>20.11</td><td>${badge(L("Kapandı", "Closed"), "b-ok")}</td></tr></table></div>
          <div class="d-card p-detail"><h4>UYG-26-0018</h4><div class="p-steps"><span class="ok">${L("Açıldı", "Opened")}<small>Mehmet Kaya</small></span><span class="ok">${L("Çözüldü", "Solved")}<small>Can Arslan</small></span><span data-ncstep>${L("Kapanış", "Closing")}<small>${L("İkinci göz bekliyor", "Awaiting second check")}</small></span></div><p>${L("Kök neden: yazıcı şablonu güncel değil. Düzeltici faaliyet: şablon yenilendi, kontrol listesine eklendi.", "Root cause: outdated printer template. Corrective action: template renewed and added to the checklist.")}</p><span class="d-btn" data-close>${L("Kontrol ettim, kapat", "Verified, close")}</span></div></div>
        <div class="d-toast"><i>✓</i>${L("Kayıt kapatıldı · form PDF'i hazır", "Record closed · form PDF ready")}</div>`)}

      ${frame("erp", "box", L("Sipariş Takibi", "Order Tracking"), "#b45309", [[L("İş panosu", "Board"), 5], [L("Sevkiyat takvimi", "Shipments")], [L("Müşteriler", "Customers")], [L("Teklifler", "Quotes")], [L("Raporlar", "Reports")]], `
        <div class="d-head"><div><b>${L("İş panosu", "Job board")}</b><small>${L("Talepten faturaya, koşul tamamlanmadan sonraki aşamaya geçmez", "Request to invoice; no stage opens until its conditions are met")}</small></div><span class="d-btn">+ ${L("Yeni iş", "New job")}</span></div>
        <div class="p-kan">
          <div><h6>${L("Teklif", "Quote")}<em>2</em></h6>${card("26-0142", { t: L("Pompa yedek parça seti", "Pump spare kit"), who: "ED", col: "#0f766e", name: "Elif D." })}${card("26-0141", { t: L("Hidrolik valf", "Hydraulic valve"), who: "MK", col: "#2563eb", name: "Mehmet K." })}</div>
          <div data-col="po"><h6>${L("Sipariş", "Order")}<em>1</em></h6><div data-card>${card("26-0138", { t: L("Kontrol panosu", "Control panel"), who: "ZŞ", col: "#7c3aed", name: "Zeynep Ş." })}</div></div>
          <div data-col="prod"><h6>${L("Üretim", "Production")}<em>1</em></h6>${card("26-0131", { t: L("Şaft kaplin", "Shaft coupling"), who: "CA", col: "#b45309", name: "Can A.", late: 1 })}</div>
          <div><h6>${L("Sevkiyat", "Shipping")}<em>1</em></h6>${card("26-0127", { t: L("Filtre grubu", "Filter group"), who: "AY", name: "Ayşe Y." })}</div>
        </div>
        <div class="d-toast"><i>✓</i>${L("Sipariş onaylandı · üretime aktarıldı, ekibe mail gitti", "Order approved · moved to production, team notified")}</div>`)}

      ${frame("plm", "cube", "PLM", "#0f766e", [[L("Parçalar", "Parts")], [L("Revizyonlar", "Revisions")], [L("Onay bekleyen", "To approve"), 1], [L("Parça listesi", "BOM")]], `
        <div class="d-head"><div><b>01-130 · ${L("Flanş gövdesi", "Flange body")}</b><small>${L("Çizim ve model tarayıcıda açılır", "Drawing and model open in the browser")}</small></div>${badge(L("Rev. C · Yayında", "Rev. C · Released"), "b-ok")}</div>
        <div class="p-two wide"><div class="d-card p-view"><svg viewBox="0 0 320 220" class="p-3d" aria-hidden="true"><g fill="none" stroke="#0f766e" stroke-width="1.4"><ellipse cx="160" cy="80" rx="96" ry="38" fill="#d7efe9"/><path d="M64 80v34c0 21 43 38 96 38s96-17 96-38V80" fill="#bfe3da"/><ellipse cx="160" cy="80" rx="96" ry="38"/><ellipse cx="160" cy="74" rx="46" ry="18" fill="#eaf7f3"/><ellipse cx="160" cy="74" rx="26" ry="10" fill="#0f766e" opacity=".5"/><ellipse cx="90" cy="84" rx="8" ry="4" fill="#fff"/><ellipse cx="230" cy="84" rx="8" ry="4" fill="#fff"/><ellipse cx="130" cy="106" rx="8" ry="4" fill="#fff"/><ellipse cx="190" cy="106" rx="8" ry="4" fill="#fff"/></g><g stroke="#64748b" stroke-width="1" fill="none"><path d="M64 176h192M64 170v12M256 170v12M278 80v34M272 80h12M272 114h12"/></g><g font-size="11" fill="#475569"><text x="146" y="194">Ø 240</text><text x="286" y="101">42</text></g></svg></div>
          <div class="d-card"><h4>${L("Revizyonlar", "Revisions")}</h4><div class="d-ren"><div><span>Rev. C</span><em>${L("Yayında", "Released")}</em></div><div><span>Rev. B</span>${badge(L("Geçersiz", "Obsolete"), "b-mute")}</div><div><span>Rev. A</span>${badge(L("Geçersiz", "Obsolete"), "b-mute")}</div></div><h4 class="p-h4t">${L("Nerede kullanılıyor", "Where used")}</h4><div class="d-ren"><div><span>01-100 · ${L("Ana grup", "Main assembly")}</span></div><div><span>01-120 · ${L("Alt grup", "Subassembly")}</span></div></div></div></div>`)}

      <div class="p-chat" data-chat><header>${av("CA", "#b45309")}<b>Can Arslan</b><small>${L("çevrimiçi", "online")}</small></header><div class="p-msgs"><p>${L("Filtre grubu paketlendi, bugün çıkıyor mu?", "Filter group is packed, does it ship today?")}</p><p class="me"><span data-type></span><small>✓✓</small></p></div></div>
      ${CURSOR}
    </div>`;
  }

  const CURSOR = '<svg class="d-cursor" viewBox="0 0 24 24"><path d="M4 2l16 9-7 2-3 7Z" fill="#fff" stroke="#18181b" stroke-width="1.5" stroke-linejoin="round"/></svg>';

  const portalSteps = () => [
    { s: "home", cap: L("Tek giriş, tüm modüller: bekleyen işler kişiye özel sayılarla", "One sign-in, every module, with personal counters"), run: async (c) => { await c.wait(3200); } },
    { s: "co", cap: L("Duyurular: kim okudu, kim yorum yaptı, hepsi kayıtlı", "Announcements: who read and commented, all on record"), run: async (c) => { await c.wait(3800); } },
    { s: "hr", cap: L("İzin onayı: yönetici onaylar, İK'ya gider, takvime işlenir", "Leave: manager approves, HR follows, calendar updates"), run: async (c) => {
      await c.wait(1400); await c.click("[data-approve]");
      c.q("[data-hrst]").innerHTML = badge(L("İK onayında", "With HR"), "b-i");
      c.q("[data-f1]").classList.add("ok"); c.q(".p-acts").hidden = true;
      c.toast(); await c.wait(1900);
      c.q("[data-hrst]").innerHTML = badge(L("Onaylandı", "Approved"), "b-ok");
      c.q("[data-f2]").classList.add("ok"); c.q("[data-f3]").classList.add("ok");
      c.qa("[data-day]").forEach((d) => d.classList.add("a"));
      await c.wait(2000);
    } },
    { s: "nc", cap: L("Uygunsuzluk: kök nedenden ikinci göz kapanışına", "Nonconformity: from root cause to second-person closing"), run: async (c) => {
      await c.wait(1600); await c.click("[data-close]");
      c.q("[data-ncst]").innerHTML = badge(L("Kapandı", "Closed"), "b-ok");
      c.q("[data-close]").hidden = true;
      const st = c.q("[data-ncstep]"); st.classList.add("ok"); st.querySelector("small").textContent = "Ayşe Yılmaz";
      c.toast(); await c.wait(2600);
    } },
    { s: "erp", cap: L("Sipariş takibi: iş hangi aşamada, şu an kimde", "Order tracking: which stage, who has it now"), run: async (c) => {
      await c.wait(1500); await c.click("[data-card]");
      const card = c.q("[data-card]"), to = c.q('[data-col="prod"]');
      to.appendChild(card); card.classList.add("p-moved");
      c.q('[data-col="po"] em').textContent = "0"; to.querySelector("em").textContent = "2";
      c.toast(); await c.wait(2800);
    } },
    { s: "plm", cap: L("PLM: çizim ve 3D model tarayıcıda, revizyon kontrolünde", "PLM: drawings and 3D models in the browser, under revision control"), run: async (c) => { await c.wait(3600); } },
    { s: "home", cap: L("Sohbet: portaldan çıkmadan yazışma", "Chat: message colleagues without leaving the portal"), run: async (c) => {
      c.q("[data-chat]").classList.add("on"); await c.wait(1200);
      await c.type("[data-type]", L("Evet, 16:00'da araç geliyor. Evraklar hazır.", "Yes, pickup is at 16:00. Papers are ready.")); await c.wait(2600);
    } }
  ];

  /* ---------- Demo 2: customer panel ---------- */

  function panelHTML() {
    const nav = [
      [null, L("Panel", "Panel")], ["home", "Dashboard", "ov"], ["radar", L("Canlı İzleme", "Live Monitoring"), "live", 1],
      [null, L("Destek", "Support")], ["life", L("Destek Talepleri", "Tickets"), "tk", 3], ["cal", L("Planlı Çalışmalar", "Planned Work"), "pl"],
      [null, L("İdari işler", "Administration")], ["sign", L("Servis Formları", "Service Reports"), "sf", 1], ["refresh", L("Yenilemeler", "Renewals"), "rn"],
      [null, L("BT altyapısı", "Infrastructure")], ["mon", L("Envanter", "Inventory")], ["tree", L("Şirket Dizini", "Directory")], ["lock", L("Erişim Bilgileri", "Access Vault"), "vault"]
    ];
    const head = (t, s, btn) => `<div class="d-head"><div><b>${t}</b><small>${s}</small></div>${btn || ""}</div>`;
    const months = lang === "en" ? ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"] : ["Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas"];
    const bars = [[60, 52], [72, 70], [48, 44], [84, 78], [66, 64], [90, 86]];
    const dev = (ok, n, k) => `<div><span class="dot${ok ? "" : " w"}"></span>${n}<small>${k}</small></div>`;
    const days = (bad) => `<span class="p-dots">${Array.from({ length: 14 }, (_, i) => `<i class="${bad.includes(i) ? "w" : ""}"></i>`).join("")}</span>`;

    return `<div class="d-app">
      <aside class="d-side">${brand("p-brand")}
        ${nav.map(([k, l, id, n]) => (k === null ? `<div class="d-sec">${l}</div>` : `<div class="d-nav"${id ? ` data-go="${id}"` : ""}>${ic(k, "")}${l}${n ? `<em>${n}</em>` : ""}</div>`)).join("")}
        <div class="d-user"><i>AY</i><div><b>Ayşe Yılmaz</b><br>${L("Yönetici", "Owner")}</div></div>
      </aside>
      <div class="d-main">
        <section class="d-screen" data-s="ov">${head("Dashboard", L("Widget'ları sürükleyerek düzenleyin", "Drag widgets to arrange"), `<span class="d-btn">+ ${L("Widget ekle", "Add widget")}</span>`)}
          <div class="d-kpis"><div class="d-card d-kpi"><span>${L("İzlenen cihaz", "Monitored")}</span><b>68/69</b><small class="w">${L("1 cihaz dikkat istiyor", "1 needs attention")}</small></div><div class="d-card d-kpi"><span>${L("Yedekler", "Backups")}</span><b>24</b><small class="g">${L("Tümü başarılı", "All successful")}</small></div><div class="d-card d-kpi"><span>${L("Lisanslar", "Licenses")}</span><b>31</b><small class="w">${L("2 tanesi 30 gün içinde", "2 within 30 days")}</small></div><div class="d-card d-kpi"><span>${L("Açık talep", "Open tickets")}</span><b>3</b><small>${L("1 yanıt bekliyor", "1 awaiting reply")}</small></div></div>
          <div class="d-row"><div class="d-card"><h4>${L("Destek talepleri", "Support tickets")}</h4><div class="d-chart sm">${bars.map(([a, b]) => `<div><span style="--h:${a}%"></span><span style="--h:${b}%"></span></div>`).join("")}</div><div class="d-axis">${months.map((m) => `<span>${m}</span>`).join("")}</div><div class="d-legend"><span><i style="background:#2a78d6"></i>${L("Açılan", "Opened")}</span><span><i style="background:#1baf7a"></i>${L("Çözülen", "Resolved")}</span></div></div>
          <div class="d-card"><h4>${L("Bekleyenler", "Waiting on you")}</h4><div class="d-ren"><div><span>${L("Servis formu onayı", "Service report approval")}</span><em class="w">1</em></div><div><span>${L("2027 yenileme dönemi", "2027 renewal period")}</span><em class="w">1</em></div><div><span>${L("Satın alma talebi", "Purchase request")}</span><em>0</em></div><div><span>${L("Devam eden proje", "Active projects")}</span><em>2</em></div></div></div></div></section>

        <section class="d-screen" data-s="live">${head(L("Canlı İzleme", "Live Monitoring"), L("Ağ, yedek ve uç nokta güvenliği", "Network, backup, and endpoint security"), `<span class="p-livetag"><i></i>${L("Canlı", "Live")}</span>`)}
          <div class="d-row"><div class="d-card"><h4>${L("Ağ ve sunucular", "Network & servers")}</h4><div class="d-dev">${dev(1, "Firewall · HQ", "0,8 ms")}${dev(1, "Core Switch", "0,4 ms")}${dev(0, L("AP · Depo", "AP · Warehouse"), L("uyarı", "warning"))}${dev(1, L("Sunucu 01", "Server 01"), "1,1 ms")}${dev(1, L("Sunucu 02", "Server 02"), "1,0 ms")}${dev(1, L("AP · Ofis", "AP · Office"), "2,3 ms")}</div></div>
          <div class="d-card"><h4>${L("Uç nokta güvenliği", "Endpoint security")}</h4><div class="d-ren"><div><span>${L("Korunan", "Protected")}</span><em>118</em></div><div><span>${L("Güncelleme bekleyen", "Updates pending")}</span><em class="w">2</em></div><div><span>${L("Engellenen tehdit (30 gün)", "Threats blocked (30 days)")}</span><em>7</em></div></div></div></div>
          <div class="d-card p-gap"><h4>${L("Yedekler · son 14 gün", "Backups · last 14 days")}</h4><div class="d-ren"><div><span>${L("Dosya sunucusu", "File server")}</span>${days([])}</div><div><span>${L("Muhasebe", "Accounting")}</span>${days([5])}</div><div><span>Microsoft 365</span>${days([])}</div></div></div></section>

        <section class="d-screen" data-s="tk">${head(L("Yeni destek talebi", "New support ticket"), L("Ekran görüntüsünü yapıştırmanız yeterli", "Just paste a screenshot"))}
          <div class="d-row"><div class="d-card d-form"><div class="d-field" data-f="subj"><label>${L("Konu", "Subject")}</label><span></span></div><div class="d-field"><label>${L("Kategori", "Category")}</label>${L("Ağ / İnternet", "Network / Internet")}</div><div class="d-field big" data-f="body"><label>${L("Açıklama", "Description")}</label><span></span></div><span class="d-btn" data-send>${L("Talebi gönder", "Submit ticket")}</span></div>
          <div class="d-card"><h4>${L("Son talepler", "Recent tickets")}</h4><div class="d-ren"><div><span>${L("VPN bağlantı sorunu", "VPN issue")}</span><em class="w">${L("Yanıt bekliyor", "Awaiting reply")}</em></div><div><span>${L("İşe giriş: yeni kullanıcı", "Onboarding: new user")}</span><em>${L("Çözüldü", "Resolved")}</em></div><div><span>${L("Yazıcı kuyruğu", "Printer queue")}</span><em>${L("Çözüldü", "Resolved")}</em></div></div></div></div>
          <div class="d-toast"><i>✓</i>${L("Talebiniz alındı, ekip bilgilendirildi", "Ticket received, team notified")}</div></section>

        <section class="d-screen" data-s="pl">${head(L("Planlı Çalışmalar", "Planned Work"), L("Projeler, bakım ve yerinde destek", "Projects, maintenance, and on-site support"))}
          <div class="d-card p-proj"><div class="p-req-h">${ic("building")}<div><b>${L("Sistem odası yenileme", "Server room renewal")}</b><small>${L("Hedef: 18 Aralık · 5 adımın 3'ü tamam", "Target: Dec 18 · 3 of 5 steps done")}</small></div>${badge("%60", "b-i")}</div><div class="d-bar full"><i style="--w:60%"></i></div><div class="p-flow"><span class="ok">${L("Keşif", "Survey")}</span><i></i><span class="ok">${L("Tasarım", "Design")}</span><i></i><span class="ok">${L("Tedarik", "Supply")}</span><i></i><span>${L("Kurulum", "Install")}</span><i></i><span>${L("Test", "Test")}</span></div></div>
          <div class="d-card p-gap"><table class="d-table"><tr><th>${L("Çalışma", "Work")}</th><th>${L("Tür", "Type")}</th><th>${L("Tarih", "Date")}</th><th>${L("Durum", "Status")}</th></tr><tr><td>${L("Firewall bakım ve güncelleme", "Firewall maintenance")}</td><td>${L("Bakım", "Maintenance")}</td><td>28.11</td><td>${badge(L("Planlandı", "Planned"), "b-i")}</td></tr><tr><td>${L("Rutin yerinde ziyaret", "Routine site visit")}</td><td>${L("Yerinde", "On-site")}</td><td>02.12</td><td>${badge(L("Planlandı", "Planned"), "b-i")}</td></tr><tr><td>${L("Yedekten dönüş testi", "Restore test")}</td><td>${L("Bakım", "Maintenance")}</td><td>19.11</td><td>${badge(L("Tamamlandı", "Done"), "b-ok")}</td></tr></table></div></section>

        <section class="d-screen" data-s="sf">${head(L("Servis Formu", "Service Report"), L("Yerinde kurulum ve konfigürasyon", "On-site installation and configuration"), `<span data-sfst>${badge(L("Onayınızı bekliyor", "Awaiting you"), "b-w")}</span>`)}
          <div class="d-row"><div class="d-card p-formv"><div><small>${L("Yapılan işlem", "Work done")}</small><p>${L("Kablosuz ağ erişim noktaları kuruldu, misafir ağı ayrıldı, kapsama testi yapıldı.", "Wireless access points installed, guest network separated, coverage tested.")}</p></div><div class="p-cols"><div><small>${L("Teknik ekip", "Engineer")}</small><b>Can Arslan</b></div><div><small>${L("Süre", "Duration")}</small><b>${L("3 sa 20 dk", "3 h 20 m")}</b></div><div><small>${L("Tarih", "Date")}</small><b>24.11.2026</b></div></div></div>
          <div class="d-card"><h4>${L("Yetkili onayı", "Approval")}</h4><div class="p-appr"><p>${L("Onayladığınızda adınız, tarih ve saat forma işlenir.", "Your name, date, and time are recorded on the form.")}</p><div data-by>${L("Onaylayan: —", "Approved by: —")}</div><span class="d-btn" data-signbtn>${L("Onayla", "Approve")}</span></div></div></div>
          <div class="d-toast"><i>✓</i>${L("Servis formu onaylandı · PDF hazır", "Service report approved · PDF ready")}</div></section>

        <section class="d-screen" data-s="rn">${head(L("Yenilemeler", "Renewals"), L("Yıl yıl fiyat ve bütçe karşılaştırması", "Year-by-year price and budget comparison"))}
          <div class="d-card"><table class="d-table"><tr><th>${L("Ürün", "Product")}</th><th>${L("Adet", "Seats")}</th><th>${L("Bitiş", "Expires")}</th><th>${L("Kalan", "Left")}</th><th>${L("Fiyat değişimi", "Price change")}</th></tr>${[["Firewall Protection", 1, "12.12", 8, "18", "+%4", 1], ["Microsoft 365", 85, "21.12", 12, "27", "%0", 1], ["Cyber Backup", 40, "26.02", 40, "94", "−%6"], ["Email Security", 85, "14.05", 61, "171", "+%3"], ["Endpoint Protection", 120, "30.06", 74, "218", "−%2"]].map(([a, b, c, w, d, p, warn]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td><div class="p-left"><div class="d-bar"><i class="${warn ? "w" : ""}" style="--w:${w}%"></i></div>${badge(`${d} ${L("gün", "days")}`, warn ? "b-w" : "b-ok")}</div></td><td>${p}</td></tr>`).join("")}</table></div></section>

        <section class="d-screen" data-s="vault">${head(L("Erişim Bilgileri", "Access Vault"), L("AES-256 ile şifreli · her görüntüleme kayıt altında", "AES-256 encrypted · every view is logged"))}
          <div class="d-vault">${[["Firewall", "https://10.0.0.1:4444"], [L("Sunucu yönetimi", "Server management"), "https://10.0.0.20"], [L("Ana switch", "Core switch"), "ssh 10.0.0.2"]].map(([n, u], i) => `<div class="d-card"><b>${n}</b><code>${u}</code><code>admin · ••••••••••</code><span class="d-lock"${i === 0 ? " data-reveal" : ""}>${ic("lock", "")}${L("2FA ile göster", "Reveal with 2FA")}</span></div>`).join("")}</div>
          <div class="p-otp" data-otp><b>${L("Doğrulama kodu", "Verification code")}</b><div>${"••••••".split("").map(() => "<i></i>").join("")}</div></div>
          <div class="d-toast"><i>✓</i>${L("Kilit 5 dakika açık · görüntüleme kaydedildi", "Unlocked for 5 minutes · view logged")}</div></section>
        ${CURSOR}
      </div></div>`;
  }

  const panelSteps = () => [
    { s: "ov", cap: L("Dashboard: bekleyen onaylar ve durum tek bakışta", "Dashboard: approvals and status at a glance"), run: async (c) => { await c.wait(3400); } },
    { s: "live", cap: L("Canlı izleme: ağ, yedek ve uç nokta güvenliği", "Live monitoring: network, backup, endpoints"), run: async (c) => { await c.wait(3800); } },
    { s: "tk", cap: L("Destek talebi: birkaç saniyede açılır, durumu izlenir", "Support ticket: opened in seconds, tracked to the end"), run: async (c) => {
      await c.wait(500); await c.click('[data-f="subj"]');
      await c.type('[data-f="subj"] span', L("Depo kablosuz ağı kopuyor", "Warehouse Wi-Fi keeps dropping"), '[data-f="subj"]');
      await c.click('[data-f="body"]');
      await c.type('[data-f="body"] span', L("Depodaki erişim noktası sabahtan beri aralıklı.", "The warehouse access point has been flapping since morning."), '[data-f="body"]');
      await c.click("[data-send]"); c.toast(); await c.wait(2200);
    } },
    { s: "pl", cap: L("Planlı çalışmalar: proje adımları ve bakım takvimi", "Planned work: project steps and maintenance"), run: async (c) => { await c.wait(3400); } },
    { s: "sf", cap: L("Servis formu: yapılan iş yetkili onayıyla kayda girer", "Service report: work is recorded with your approval"), run: async (c) => {
      await c.wait(1800); await c.click("[data-signbtn]");
      c.q("[data-signbtn]").hidden = true;
      const by = c.q("[data-by]"); by.textContent = L("Onaylayan: Ayşe Yılmaz · 24.11.2026 15:42", "Approved by: Ayşe Yılmaz · 24 Nov 2026 15:42"); by.classList.add("on");
      c.q("[data-sfst]").innerHTML = badge(L("Onaylandı", "Approved"), "b-ok"); c.toast(); await c.wait(2200);
    } },
    { s: "rn", cap: L("Yenilemeler: bitişler ve fiyat değişimi önceden görünür", "Renewals: expiries and price changes ahead of time"), run: async (c) => { await c.wait(3600); } },
    { s: "vault", cap: L("Erişim kasası: parolalar şifreli, görüntüleme 2FA ile", "Access vault: encrypted credentials, viewed with 2FA"), run: async (c) => {
      await c.wait(900); await c.click("[data-reveal]"); c.q("[data-otp]").classList.add("on");
      for (const i of c.qa("[data-otp] i")) { await c.wait(190); i.textContent = "•"; i.classList.add("on"); }
      await c.wait(500); c.q("[data-otp]").classList.remove("on"); c.toast(); await c.wait(2400);
    } }
  ];

  const DEMOS = { portal: { html: portalHTML, steps: portalSteps }, panel: { html: panelHTML, steps: panelSteps } };

  /* ---------- Player ---------- */

  const fit = $("#demo-fit"), demo = $("#demo");
  const STOP = Symbol("stop");
  let current = "portal", run = 0, paused = reduced, visible = true, step = 0, started = false;

  const compactMq = window.matchMedia("(max-width: 640px)");
  const baseW = () => (compactMq.matches ? 760 : 1100);
  function fitDemo() {
    demo.classList.toggle("compact", compactMq.matches);
    demo.style.transform = `scale(${fit.clientWidth / baseW()})`;
  }

  function ctxFor(token) {
    const alive = () => { if (token !== run) throw STOP; };
    const wait = async (ms) => {
      let left = ms;
      while (left > 0) {
        await new Promise((r) => setTimeout(r, 50));
        alive();
        if (!paused && visible) left -= 50;
      }
    };
    const stage = () => $(".d-screen.on", demo) || demo;
    const q = (s) => $(s, stage()) || $(s, demo);
    const cursor = $(".d-cursor", demo);
    const click = async (target) => {
      const el = typeof target === "string" ? q(target) : target;
      if (!el || !el.offsetParent) return;
      const a = cursor.parentElement.getBoundingClientRect(), b = el.getBoundingClientRect();
      const s = demo.getBoundingClientRect().width / baseW();
      const dx = Math.min(b.width * 0.5, 60 * s);
      cursor.style.transform = `translate(${(b.left - a.left + dx) / s}px, ${(b.top - a.top + b.height * 0.55) / s}px)`;
      await wait(1000);
      cursor.classList.remove("click"); void cursor.getBoundingClientRect(); cursor.classList.add("click");
      el.classList.add("press"); await wait(200); el.classList.remove("press");
    };
    const type = async (sel, text, fieldSel) => {
      const span = q(sel), field = fieldSel && q(fieldSel);
      field?.classList.add("focus"); span.classList.add("caret"); span.textContent = "";
      for (const ch of text) { span.textContent += ch; await wait(50); }
      span.classList.remove("caret"); field?.classList.remove("focus");
    };
    return { wait, click, type, q, qa: (s) => $$(s, stage()), toast: () => q(".d-toast")?.classList.add("on") };
  }

  function show(id) {
    $$(".d-screen", demo).forEach((s) => s.classList.toggle("on", s.dataset.s === id));
    $$(".d-nav", demo).forEach((n) => n.classList.toggle("on", !!id && n.dataset.go === id));
  }

  function mount() {
    demo.innerHTML = DEMOS[current].html();
    fitDemo();
  }

  function caption(i) {
    const steps = DEMOS[current].steps();
    $("#demo-cap").innerHTML = `<b>${i + 1}/${steps.length}</b><span>${steps[i].cap}</span>`;
    $$("#demo-chapters button").forEach((b, k) => { b.classList.toggle("on", k === i); b.classList.toggle("past", k < i); });
  }

  function renderBar() {
    const steps = DEMOS[current].steps();
    $("#demo-chapters").innerHTML = steps.map((s, i) => `<button type="button" data-ch="${i}" aria-label="${s.cap}"></button>`).join("");
    renderPlay();
  }
  function renderPlay() {
    const b = $("#demo-play");
    b.innerHTML = ic(paused ? "play" : "pause");
    b.setAttribute("aria-label", paused ? L("Oynat", "Play") : L("Duraklat", "Pause"));
  }

  async function play(from, direct) {
    const token = ++run;
    mount(); renderBar();
    step = from;
    const steps = DEMOS[current].steps();
    show(steps[from].s); caption(from);
    if (reduced && paused) return;
    const c = ctxFor(token);
    try {
      let first = true;
      for (;;) {
        const st = steps[step];
        if (!first) {
          // Walk there the way a user would: home button, then the tile / menu entry.
          const here = $(".d-screen.on", demo)?.dataset.s;
          if (here !== st.s) {
            if (current === "portal") {
              if (here !== "home") { await c.click($(".d-screen.on [data-home]", demo)); show("home"); await c.wait(500); }
              if (st.s !== "home") await c.click($(`.p-tile[data-go="${st.s}"]`, demo));
            } else await c.click($(`.d-nav[data-go="${st.s}"]`, demo));
          }
          show(st.s); caption(step);
        }
        first = false;
        await c.wait(500);
        await st.run(c);
        if (step + 1 >= steps.length) { play(0); return; }
        step += 1;
      }
    } catch (e) { if (e !== STOP) throw e; }
  }

  /* ---------- Section rendering ---------- */

  function renderCopy() {
    const p = PRODUCTS[current]();
    $("#sw-copy").innerHTML = `
      <h3 class="sw-title">${p.title}</h3>
      <p class="lead-sm">${p.desc}</p>
      <ul class="feat-list">${p.points.map((x) => `<li>${ic("check")}<span>${x}</span></li>`).join("")}</ul>
      <div class="portal-actions"><a href="#contact" class="btn btn-primary">${L("Demo ve Teklif Alın", "Get a Demo & Quote")}</a>${p.cta2 ? `<a href="https://customer.navvo.co" class="link-arrow light"><span>${p.cta2}</span> ${ARROW}</a>` : ""}</div>`;
    $("#sw-mods").innerHTML = p.mods.map(([k, t, d], i) => `<article class="sw-mod" style="--d:${i}"><span class="sw-ic">${ic(k)}</span><h4>${t}</h4><p>${d}</p></article>`).join("");
    $("#sw-base").innerHTML = BASE().map(([k, t, d]) => `<div>${ic(k)}<span><b>${t}</b><small>${d}</small></span></div>`).join("");
    $("#demo-note").textContent = L("Ekranlardaki kişi, kayıt ve veriler örnektir.", "People, records, and data on screen are samples.");
    $$("#sw-tabs [role=tab]").forEach((b) => {
      const on = b.dataset.p === current;
      b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1;
    });
  }

  function select(p) {
    current = p;
    renderCopy();
    if (started) play(0); else { mount(); renderBar(); show(DEMOS[p].steps()[0].s); caption(0); }
  }

  $("#sw-tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[role=tab]");
    if (b && b.dataset.p !== current) select(b.dataset.p);
  });
  $("#sw-tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = current === "portal" ? "panel" : "portal";
    select(next);
    $(`#sw-tabs [data-p="${next}"]`).focus();
  });
  $("#demo-chapters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-ch]");
    if (b) { started = true; play(+b.dataset.ch); }
  });
  $("#demo-play").addEventListener("click", () => {
    paused = !paused; renderPlay();
    if (!paused && !started) { started = true; play(step); }
  });

  // Links such as /#musteri-paneli land on the matching tab.
  function fromHash() {
    const p = { "#kurumsal-portal": "portal", "#musteri-paneli": "panel" }[location.hash];
    if (!p) return;
    if (p !== current) select(p);
    root.scrollIntoView({ behavior: "instant" });
  }
  window.addEventListener("hashchange", fromHash);
  document.addEventListener("navvo:lang", (e) => { lang = e.detail; select(current); });
  window.addEventListener("resize", fitDemo);
  compactMq.addEventListener("change", () => select(current));

  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible && !started && !reduced) { started = true; play(0); }
  }, { threshold: 0.15 }).observe(fit);

  select(current);
  fromHash();
})();
