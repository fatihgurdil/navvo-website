/* Navvo Technology — terminal-style site interpreter */

(function () {
  "use strict";

  const outputEl = document.getElementById("term-output");
  const bodyEl = document.getElementById("term-body");
  const inputEl = document.getElementById("term-input");
  const promptLabel = document.getElementById("prompt-label");

  let lang = "tr";
  let history = [];
  let histIndex = -1;
  let magicState = null;
  let aiState = null;

  const THEMES = {
    orange: { accent: "#f97316", accentDim: "rgba(249,115,22,.14)" },
    cyan: { accent: "#22d3ee", accentDim: "rgba(34,211,238,.14)" },
    green: { accent: "#22c55e", accentDim: "rgba(34,197,94,.14)" },
    violet: { accent: "#a78bfa", accentDim: "rgba(167,139,250,.14)" }
  };

  const T = {
    tr: {
      bootTitle: "Navvo Technology [Sürüm 2026.1.0]",
      bootCopyright: "(c) Navvo Technology. Tüm hakları saklıdır.",
      bootTag: "Kurumsal altyapı • bulut • siber güvenlik • yedekleme • BT danışmanlığı",
      bootHelp: "Başlamak için 'help' yazın veya aşağıdaki hızlı komutlardan birine tıklayın.",
      unknown: (c) => `'${c}' komutu tanınmıyor. Komut listesi için 'help' yazın.`,
      aboutBody: [
        "Navvo Technology; kurumsal sunucu ve ağ altyapısından buluta, siber güvenlikten",
        "yedekleme ve iş sürekliliğine kadar uçtan uca teknoloji çözümleri sunan bir",
        "kurumsal teknoloji ortağıdır.",
        "",
        "  10+ yıl deneyim   150+ tamamlanan proje   %99.9 uptime   7/24 izleme",
        "",
        "Detay için: services"
      ],
      servicesHeader: "Çözüm Alanları:",
      servicesFooter: "Detay için: services <numara>  (örn: services 3)",
      subHeader: "Alt Kategoriler:",
      notFoundService: (a) => `Kategori bulunamadı: "${a}". Listelemek için: services`,
      contactBody: [
        "Mobil   : +90 532 489 54 62",
        "E-posta : info@navvo.co",
        "Konum   : İstanbul, Türkiye",
        "İzleme  : 7/24",
        "",
        'Mesaj göndermek için: mail "Adınız" "E-postanız" "Mesajınız"'
      ],
      mailUsage: 'Kullanım: mail "Adınız" "E-postanız" "Mesajınız"',
      mailSent: "E-posta istemciniz açılıyor...",
      resourcesHeader: "Kaynak Merkezi Konu Başlıkları:",
      resourcesFooter: "Tüm içerikler için: kaynaklar.html",
      whoami: [
        "misafir@navvo",
        "Rol       : Ziyaretçi",
        "Oturum    : Tarayıcı tabanlı terminal oturumu",
        "Yetki     : salt-okunur (ama merak ediyor olabilir)"
      ],
      sudo: "İzin reddedildi: yetkiniz yok. (Neyse ki gerçek altyapınızda erişim kontrolünü biz sağlıyoruz.)",
      exit: "Bu pencere kapatılamaz. Ama tarayıcı sekmenizi kapatabilirsiniz. 🙂",
      cleared: null,
      themeUsage: "Kullanım: theme <orange|cyan|green|violet>",
      themeSet: (n) => `Tema '${n}' olarak ayarlandı.`,
      themeUnknown: (n) => `Bilinmeyen tema: '${n}'. Seçenekler: orange, cyan, green, violet`,
      langSet: (l) => `Dil '${l}' olarak ayarlandı.`,
      langUsage: "Kullanım: lang <tr|en>",
      lsRoot: "about.md   services/   contact.txt   resources/   README.md",
      lsServices: null,
      catUsage: "Kullanım: cat about.md",
      helpTitle: "Kullanılabilir komutlar:",
      dateLabel: "Şu an:",
      treeHint: "Bir satıra tıklayarak o bölüme gidebilirsiniz.",

      referencesHeader: "Referanslarımız / Birlikte Çalıştığımız Kurumlar:",
      referencesFooter: "Ve daha fazlası... Detaylı bilgi ve vaka çalışmaları için: contact",
      myipFetching: "IP bilgisi alınıyor...",
      myipError: "IP bilgisi alınamadı. Bağlantınızı kontrol edin.",
      myipLabels: { ip: "WAN IPv4", loc: "Konum", isp: "ISP / Organizasyon", tz: "Saat Dilimi" },
      speedtestRunning: "Bağlantı hızı ölçülüyor (yaklaşık, 2MB test dosyasıyla)...",
      speedtestError: "Hız testi başarısız oldu. Bağlantınızı kontrol edin.",
      speedtestPing: "Gecikme (ping)",
      speedtestDown: "İndirme Hızı",
      dnsQuerying: (d) => `DNS sorgulanıyor: ${d} ...`,
      dnsNoRecords: "Kayıt bulunamadı.",
      dnsError: "DNS sorgusu başarısız oldu.",
      dnsUsage: "Kullanım: nslookup <alan-adı>  (örn: nslookup navvo.co)",
      httpUsage: "Kullanım: http <kod>  (örn: http 418)",
      fortunes: [
        "En güvenli sistem, fişi çekilmiş olandır. (ama o zaman biz de işsiz kalırız)",
        "Bulut aslında sadece başkasının bilgisayarı — ama iyi yönetilirse harika.",
        "Yedeğiniz yoksa, o veri zaten kaybolmuş sayılır.",
        "Parolanız '123456' ise, bu bir güvenlik açığı değil, bir davetiyedir.",
        "İyi bir güvenlik duvarı, sessizce çalışandır.",
        "7/24 izleme: uyumayan tek şey sunucularınız değil, biz de uyumuyoruz."
      ],
      partnersHeader: "İş Ortaklarımız / Teknoloji Çözüm Ortaklarımız:",
      partnersFooter: "Sektörün lider teknoloji üreticileriyle sertifikalı iş ortaklığımız bulunuyor.",
      processHeader: "İşleyiş Modelimiz — Projelerinizi Geleceğe Taşıyan 4 Aşamalı Sürecimiz",
      processSubtitle: "İşletmenizin hedeflerini, verimliliği ve uzun vadeli büyümeyi destekleyen; güvenli, ölçeklenebilir ve sürdürülebilir bir teknoloji stratejisine dönüştüren adım adım işleyiş sürecimiz.",
      whyHeader: "Farklılıklarımız — İşletmeniz İçin Neden Navvo Teknoloji?",
      whySubtitle: "Sadece bir BT tedarikçisi değil, iş süreçlerinizin kesintisiz ilerlemesini sağlayan proaktif ve stratejik teknoloji ortağınızız.",

      magicIntro: "🎩 Sihir zamanı! Aklından 1-100 arasında bir sayı tut. Kimseye söyleme, sadece düşün. Hazır olduğunda Enter'a bas. (İptal etmek için 'iptal' yazıp Enter'a bas.)",
      magicSteps: [
        "Şimdi bu sayıyı 2 ile çarp.",
        "Çıkan sonuca 10 ekle.",
        "Şimdi bu sonucu 2'ye böl.",
        "Son olarak, en başta akılından tuttuğun sayıyı bu sonuçtan çıkar."
      ],
      magicThinking: "🔮 Aklını okuyorum...",
      magicReveal: "✨ Sonucun... 5! Doğru mu?",
      magicSecret: "(İpucu: Hangi sayıyı seçersen seç sonuç hep 5 çıkar — matematik her zaman kazanır. 😉)",
      magicCancelled: "Büyü iptal edildi. Belki başka zaman...",

      aiIntro: "🤖 NavvoAI'ya hoş geldiniz. Genel bir teknik soru sorun (örn. \"youtube açılmıyor\", \"internetim yavaş\") — yanıtlayayım. Çıkmak için 'çıkış' yazıp Enter'a basın.",
      aiThinking: "NavvoAI yazıyor...",
      aiBye: "NavvoAI oturumu sonlandı. Tekrar görüşmek üzere!",
      aiNotConfigured: "NavvoAI şu anda yapılandırılmadı — bu özellik yakında aktif olacak. Acil sorularınız için: contact",
      aiError: "Bir şeyler ters gitti, lütfen tekrar deneyin.",
      aiYouLabel: "Siz",
      aiBotLabel: "NavvoAI"
    },
    en: {
      bootTitle: "Navvo Technology [Version 2026.1.0]",
      bootCopyright: "(c) Navvo Technology. All rights reserved.",
      bootTag: "Enterprise infrastructure • cloud • cybersecurity • backup • IT consulting",
      bootHelp: "Type 'help' to get started, or click one of the quick commands below.",
      unknown: (c) => `'${c}' is not recognized as a command. Type 'help' for a list.`,
      aboutBody: [
        "Navvo Technology is an enterprise technology partner delivering end-to-end",
        "solutions — from server and network infrastructure to cloud, cybersecurity,",
        "backup, and business continuity.",
        "",
        "  10+ yrs experience   150+ projects delivered   99.9% uptime   24/7 monitoring",
        "",
        "For details: services"
      ],
      servicesHeader: "Solution Areas:",
      servicesFooter: "For details: services <number>  (e.g. services 3)",
      subHeader: "Sub-categories:",
      notFoundService: (a) => `Category not found: "${a}". List them with: services`,
      contactBody: [
        "Mobile   : +90 532 489 54 62",
        "Email    : info@navvo.co",
        "Location : Istanbul, Türkiye",
        "Uptime   : 24/7",
        "",
        'To send a message: mail "Your name" "Your email" "Your message"'
      ],
      mailUsage: 'Usage: mail "Your name" "Your email" "Your message"',
      mailSent: "Opening your email client...",
      resourcesHeader: "Resource Center Topics:",
      resourcesFooter: "Full library at: kaynaklar.html",
      whoami: [
        "guest@navvo",
        "Role      : Visitor",
        "Session   : Browser-based terminal session",
        "Access    : read-only (but curious, probably)"
      ],
      sudo: "Permission denied: you are not authorized. (Good news — real access control is exactly what we build for you.)",
      exit: "This window cannot be closed. But you can close the browser tab. 🙂",
      cleared: null,
      themeUsage: "Usage: theme <orange|cyan|green|violet>",
      themeSet: (n) => `Theme set to '${n}'.`,
      themeUnknown: (n) => `Unknown theme: '${n}'. Options: orange, cyan, green, violet`,
      langSet: (l) => `Language set to '${l}'.`,
      langUsage: "Usage: lang <tr|en>",
      lsRoot: "about.md   services/   contact.txt   resources/   README.md",
      lsServices: null,
      catUsage: "Usage: cat about.md",
      helpTitle: "Available commands:",
      dateLabel: "Right now:",
      treeHint: "Click any row to jump to that section.",

      referencesHeader: "Our References / Organizations We've Worked With:",
      referencesFooter: "And more... For details and case studies: contact",
      myipFetching: "Fetching IP info...",
      myipError: "Could not fetch IP info. Check your connection.",
      myipLabels: { ip: "WAN IPv4", loc: "Location", isp: "ISP / Organization", tz: "Timezone" },
      speedtestRunning: "Measuring connection speed (approximate, 2MB test file)...",
      speedtestError: "Speed test failed. Check your connection.",
      speedtestPing: "Latency (ping)",
      speedtestDown: "Download Speed",
      dnsQuerying: (d) => `Querying DNS: ${d} ...`,
      dnsNoRecords: "No records found.",
      dnsError: "DNS query failed.",
      dnsUsage: "Usage: nslookup <domain>  (e.g. nslookup navvo.co)",
      httpUsage: "Usage: http <code>  (e.g. http 418)",
      fortunes: [
        "The most secure system is the one that's unplugged — but then we'd be out of a job.",
        "The cloud is just someone else's computer — a well-managed one, hopefully.",
        "If you don't have a backup, that data is already gone.",
        "If your password is '123456', that's not a vulnerability, it's an invitation.",
        "A good firewall is one you never notice.",
        "24/7 monitoring: your servers aren't the only thing that never sleeps."
      ],
      partnersHeader: "Our Partners / Technology Alliance Partners:",
      partnersFooter: "We hold certified partnerships with the industry's leading technology vendors.",
      processHeader: "Our Process — The 4-Stage Journey That Moves Your Projects Forward",
      processSubtitle: "A step-by-step process that turns your business goals, efficiency, and long-term growth into a secure, scalable, and sustainable technology strategy.",
      whyHeader: "What Sets Us Apart — Why Navvo Technology for Your Business?",
      whySubtitle: "Not just an IT vendor — we are the proactive, strategic technology partner that keeps your business processes running without interruption.",

      magicIntro: "🎩 Time for a magic trick! Think of a number between 1 and 100. Don't tell me — just think of it. Press Enter when ready. (Type 'cancel' and press Enter to stop.)",
      magicSteps: [
        "Now multiply that number by 2.",
        "Add 10 to the result.",
        "Now divide that result by 2.",
        "Finally, subtract the number you first thought of from this result."
      ],
      magicThinking: "🔮 Reading your mind...",
      magicReveal: "✨ Your result is... 5! Am I right?",
      magicSecret: "(Hint: no matter which number you pick, the answer is always 5 — math always wins. 😉)",
      magicCancelled: "Trick cancelled. Maybe another time...",

      aiIntro: "🤖 Welcome to NavvoAI. Ask a general tech question (e.g. \"youtube won't load\", \"my internet is slow\") and I'll help. Type 'exit' and press Enter to leave.",
      aiThinking: "NavvoAI is typing...",
      aiBye: "NavvoAI session ended. See you again!",
      aiNotConfigured: "NavvoAI isn't configured yet — this feature is coming soon. For urgent questions: contact",
      aiError: "Something went wrong, please try again.",
      aiYouLabel: "You",
      aiBotLabel: "NavvoAI"
    }
  };

  function tr() { return T[lang]; }

  function print(html, cls) {
    const div = document.createElement("div");
    div.className = "line" + (cls ? " " + cls : "");
    div.innerHTML = html;
    outputEl.appendChild(div);
  }
  function printLines(lines, cls) {
    lines.forEach((l) => print(l === "" ? "&nbsp;" : escapeHtml(l), cls));
  }
  function spacer() {
    const div = document.createElement("div");
    div.className = "line spacer";
    outputEl.appendChild(div);
  }
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function scrollBottom() {
    bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  function echoCommand(cmd) {
    const row = document.createElement("div");
    row.className = "echo-row";
    row.innerHTML = `<span class="prompt">${promptLabel.textContent}</span><span class="cmd-echo">${escapeHtml(cmd)}</span>`;
    outputEl.appendChild(row);
  }

  /* ---------- Commands ---------- */

  function cmdHelp() {
    print(`<b>${tr().helpTitle}</b>`);

    const siteRows = [
      ["help", lang === "tr" ? "Bu listeyi gösterir" : "Show this list"],
      ["about", lang === "tr" ? "Navvo Technology hakkında" : "About Navvo Technology"],
      ["services [no]", lang === "tr" ? "Çözüm alanlarını listeler / detay gösterir" : "List solution areas / show detail"],
      ["process", lang === "tr" ? "4 aşamalı işleyiş modelimiz" : "Our 4-stage process"],
      ["why", lang === "tr" ? "Neden Navvo Technology" : "Why Navvo Technology"],
      ["partners", lang === "tr" ? "Teknoloji iş ortaklarımız" : "Our technology partners"],
      ["references", lang === "tr" ? "Referanslarımız" : "Our references"],
      ["resources", lang === "tr" ? "Kaynak merkezi konu başlıkları" : "Resource center topics"],
      ["contact", lang === "tr" ? "İletişim bilgileri" : "Contact information"]
    ];
    const toolRows = [
      ["ai", lang === "tr" ? "NavvoAI ile sohbet edin" : "Chat with NavvoAI"],
      ["myip", lang === "tr" ? "IP adresinizi ve konumunuzu gösterir" : "Show your IP address and location"],
      ["speedtest", lang === "tr" ? "Yaklaşık bağlantı hızı testi" : "Approximate connection speed test"],
      ["nslookup <alan-adı>", lang === "tr" ? "DNS A kaydını sorgular" : "Look up a domain's DNS A record"],
      ["http <kod>", lang === "tr" ? "HTTP durum kodunu açıklar" : "Explain an HTTP status code"],
      ["theme <renk>", lang === "tr" ? "orange / cyan / green / violet" : "orange / cyan / green / violet"],
      ["whoami", lang === "tr" ? "Ziyaretçi bilgisi" : "Visitor info"],
      ["date", lang === "tr" ? "Tarih ve saat" : "Date and time"],
      ["clear", lang === "tr" ? "Ekranı temizler" : "Clear the screen"]
    ];

    function renderGroup(rows) {
      const grid = document.createElement("div");
      grid.className = "help-table";
      rows.forEach(([k, v]) => {
        grid.innerHTML += `<div class="k">${k}</div><div class="v">${v}</div>`;
      });
      outputEl.appendChild(grid);
    }

    renderGroup(siteRows);
    spacer();
    print(lang === "tr" ? "Araçlar:" : "Tools:", "dim");
    renderGroup(toolRows);
    spacer();
  }

  function cmdAbout() {
    printLines(tr().aboutBody);
    spacer();
  }

  function cmdServices(args) {
    if (typeof NAVVO_DATA === "undefined") return;
    if (!args.length) {
      print(`<b>${tr().servicesHeader}</b>`);
      const list = document.createElement("div");
      list.className = "svc-list";
      NAVVO_DATA.forEach((g, i) => {
        list.innerHTML += `<div class="svc-block">
          <div class="svc-row clickable" data-cmd="services ${i + 1}">
            <span class="idx">[${i + 1}]</span>
            <span class="name" style="color:${g.color}">${g.name[lang]}</span>
            <span class="hint">services ${i + 1}</span>
          </div>
          <div class="svc-desc">${g.desc[lang]}</div>
        </div>`;
      });
      outputEl.appendChild(list);
      spacer();
      print(tr().servicesFooter, "dim");
      spacer();
      return;
    }
    const q = args.join(" ").toLowerCase();
    let group = null;
    const asNum = parseInt(args[0], 10);
    if (!isNaN(asNum) && NAVVO_DATA[asNum - 1]) group = NAVVO_DATA[asNum - 1];
    if (!group) {
      group = NAVVO_DATA.find(
        (g) => g.slug.includes(q) || g.name.tr.toLowerCase().includes(q) || g.name.en.toLowerCase().includes(q)
      );
    }
    if (!group) {
      print(tr().notFoundService(args.join(" ")), "danger");
      spacer();
      return;
    }
    print(`<b style="color:${group.color}">▸ ${group.name[lang]}</b>`);
    print(group.desc[lang], "dim");
    spacer();
    print(tr().subHeader);
    group.sub.forEach((s) => {
      const div = document.createElement("div");
      div.className = "sub-item";
      div.innerHTML = `<span class="bullet">•</span> <span class="name">${s.name[lang]}</span><span class="desc">${s.desc[lang]}</span>`;
      outputEl.appendChild(div);
    });
    spacer();
  }

  function cmdResources() {
    if (typeof NAVVO_DATA === "undefined") return;
    print(`<b>${tr().resourcesHeader}</b>`);
    NAVVO_DATA.forEach((g, i) => {
      g.sub.forEach((s) => {
        const div = document.createElement("div");
        div.className = "line clickable";
        div.dataset.cmd = `services ${i + 1}`;
        div.innerHTML = `<span style="color:${g.color}">●</span> ${s.name[lang]}`;
        outputEl.appendChild(div);
      });
    });
    spacer();
    if (document.body.dataset.boot !== "resources") {
      print(`<span class="link-line"><a href="kaynaklar.html">${tr().resourcesFooter}</a></span>`);
      spacer();
    }
  }

  function cmdTree() {
    if (typeof NAVVO_DATA === "undefined") return;
    print("navvo.co/");
    const wrap = document.createElement("div");
    wrap.className = "tree";

    const nodes = [
      { label: "about.md", cmd: "about" },
      {
        label: "services/",
        cmd: "services",
        children: NAVVO_DATA.map((g, i) => ({
          label: g.slug + "/",
          cmd: `services ${i + 1}`,
          color: g.color,
          children: g.sub.map((s) => ({ label: s.name[lang] }))
        }))
      },
      { label: "resources/", cmd: "resources" },
      { label: "references.md", cmd: "references" },
      { label: "contact.txt", cmd: "contact" }
    ];

    function renderNode(node, prefix, isLast) {
      const connector = isLast ? "└── " : "├── ";
      const row = document.createElement("div");
      row.className = "tree-line" + (node.cmd ? " clickable" : "");
      if (node.cmd) row.dataset.cmd = node.cmd;
      row.innerHTML = `<span class="tree-prefix">${prefix}${connector}</span><span class="tree-node"${node.color ? ` style="color:${node.color}"` : ""}>${node.label}</span>`;
      wrap.appendChild(row);
      if (node.children) {
        const childPrefix = prefix + (isLast ? "    " : "│   ");
        node.children.forEach((child, i) => renderNode(child, childPrefix, i === node.children.length - 1));
      }
    }
    nodes.forEach((n, i) => renderNode(n, "", i === nodes.length - 1));

    outputEl.appendChild(wrap);
    spacer();
    print(tr().treeHint, "dim");
    spacer();
  }

  function cmdContact() {
    printLines(tr().contactBody);
    spacer();
  }

  function cmdReferences() {
    print(`<b>${tr().referencesHeader}</b>`);
    if (typeof NAVVO_CLIENTS !== "undefined") {
      const grid = document.createElement("div");
      grid.className = "client-grid";
      NAVVO_CLIENTS.forEach((name) => {
        grid.innerHTML += `<div class="client-item"><span class="bullet">▪</span>${escapeHtml(name)}</div>`;
      });
      outputEl.appendChild(grid);
    }
    spacer();
    print(tr().referencesFooter, "dim");
    spacer();
  }

  function cmdPartners() {
    print(`<b>${tr().partnersHeader}</b>`);
    if (typeof NAVVO_PARTNERS !== "undefined") {
      const grid = document.createElement("div");
      grid.className = "client-grid";
      NAVVO_PARTNERS.forEach((name) => {
        grid.innerHTML += `<div class="client-item"><span class="bullet">▪</span>${escapeHtml(name)}</div>`;
      });
      outputEl.appendChild(grid);
    }
    spacer();
    print(tr().partnersFooter, "dim");
    spacer();
  }

  function cmdProcess() {
    print(`<b>${tr().processHeader}</b>`);
    print(tr().processSubtitle, "dim");
    spacer();
    if (typeof NAVVO_PROCESS !== "undefined") {
      NAVVO_PROCESS.forEach((step, i) => {
        const div = document.createElement("div");
        div.className = "info-block";
        div.innerHTML = `<span class="title">[${i + 1}] ${step.title[lang]}</span><div class="desc">${step.desc[lang]}</div>`;
        outputEl.appendChild(div);
      });
    }
    spacer();
  }

  function cmdWhy() {
    print(`<b>${tr().whyHeader}</b>`);
    print(tr().whySubtitle, "dim");
    spacer();
    if (typeof NAVVO_WHY !== "undefined") {
      NAVVO_WHY.forEach((item) => {
        const div = document.createElement("div");
        div.className = "info-block";
        div.innerHTML = `<span class="title">▸ ${item.title[lang]}</span><div class="desc">${item.desc[lang]}</div>`;
        outputEl.appendChild(div);
      });
    }
    spacer();
  }

  /* ---------- Network tools ---------- */

  async function cmdMyIp() {
    print(tr().myipFetching, "dim");
    scrollBottom();
    try {
      // api.ipify.org has no AAAA record, so this request is forced over IPv4 —
      // that's the only reliable way to get the WAN IPv4 address even on a
      // dual-stack connection that would otherwise prefer IPv6.
      const ipRes = await fetch("https://api.ipify.org?format=json");
      if (!ipRes.ok) throw new Error("ipify failed");
      const { ip } = await ipRes.json();

      let geo = {};
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoRes.ok) geo = await geoRes.json();
      } catch (e) { /* location lookup is best-effort */ }

      const L = tr().myipLabels;
      print(`${L.ip.padEnd(20)}: ${ip}`, "ok");
      print(`${L.loc.padEnd(20)}: ${[geo.city, geo.region, geo.country_name].filter(Boolean).join(", ") || "-"}`);
      print(`${L.isp.padEnd(20)}: ${geo.org || "-"}`);
      print(`${L.tz.padEnd(20)}: ${geo.timezone || "-"}`);
    } catch (err) {
      print(tr().myipError, "danger");
    }
    spacer();
    scrollBottom();
  }

  async function cmdSpeedTest() {
    print(tr().speedtestRunning, "dim");
    scrollBottom();
    try {
      const pingStart = performance.now();
      await fetch("https://speed.cloudflare.com/__down?bytes=1000", { cache: "no-store" });
      const ping = performance.now() - pingStart;

      const bytes = 2000000;
      const dlStart = performance.now();
      const res = await fetch(`https://speed.cloudflare.com/__down?bytes=${bytes}`, { cache: "no-store" });
      await res.arrayBuffer();
      const seconds = (performance.now() - dlStart) / 1000;
      const mbps = ((bytes * 8) / seconds / 1000000).toFixed(2);

      print(`${tr().speedtestPing.padEnd(20)}: ${ping.toFixed(0)} ms`);
      print(`${tr().speedtestDown.padEnd(20)}: ${mbps} Mbps`, "ok");
    } catch (err) {
      print(tr().speedtestError, "danger");
    }
    spacer();
    scrollBottom();
  }

  async function cmdDns(args) {
    if (!args.length) {
      print(tr().dnsUsage, "danger");
      spacer();
      return;
    }
    const domain = args[0];
    print(tr().dnsQuerying(domain), "dim");
    scrollBottom();
    try {
      const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`);
      const data = await res.json();
      if (!data.Answer || !data.Answer.length) {
        print(tr().dnsNoRecords, "danger");
      } else {
        data.Answer.filter((a) => a.type === 1).forEach((a) => print(`${domain}  →  ${a.data}`, "ok"));
      }
    } catch (err) {
      print(tr().dnsError, "danger");
    }
    spacer();
    scrollBottom();
  }

  /* ---------- Fun / easter eggs ---------- */

  const HTTP_CODES = {
    "200": { title: "OK", tr: "Her şey yolunda, isteğiniz başarıyla işlendi.", en: "Everything is fine, your request was processed successfully." },
    "301": { title: "Moved Permanently", tr: "Kaynak kalıcı olarak taşındı.", en: "The resource has moved permanently." },
    "403": { title: "Forbidden", tr: "Erişim reddedildi. Bu senin suçun değil, güvenlik politikamız böyle.", en: "Access denied. Not your fault — that is our security policy at work." },
    "404": { title: "Not Found", tr: "Aradığın şey burada değil. Belki de hiç var olmadı.", en: "What you are looking for is not here. Maybe it never was." },
    "418": { title: "I'm a Teapot", tr: "Evet, gerçek bir HTTP kodu. RFC 2324 — 1 Nisan şakası olarak doğdu.", en: "Yes, a real HTTP code. RFC 2324 — born as an April Fools' joke." },
    "420": { title: "Enhance Your Calm", tr: "Resmi olmayan bir kod. Sakin ol, rate limit yedin.", en: "An unofficial code. Relax, you just got rate-limited." },
    "429": { title: "Too Many Requests", tr: "Yavaşla biraz, sunucu nefes almak istiyor.", en: "Slow down a bit, the server wants to breathe." },
    "451": { title: "Unavailable For Legal Reasons", tr: "Adı Fahrenheit 451'den gelir. Yasal nedenlerle erişilemiyor.", en: "Named after Fahrenheit 451. Blocked for legal reasons." },
    "500": { title: "Internal Server Error", tr: "Bir şeyler ters gitti ama sunucu ne olduğunu söylemiyor.", en: "Something went wrong, but the server won't say what." },
    "503": { title: "Service Unavailable", tr: "Sunucu şu an meşgul ya da bakımda.", en: "The server is busy or under maintenance." },
    "508": { title: "Loop Detected", tr: "Sonsuz döngüye yakalandık. Yardım edin.", en: "Caught in an infinite loop. Send help." }
  };

  function cmdHttp(args) {
    const code = (args[0] || "").replace(/\D/g, "");
    const entry = HTTP_CODES[code];
    if (!entry) {
      print(tr().httpUsage, "danger");
      spacer();
      return;
    }
    const cls = code[0] === "2" ? "ok" : code[0] === "4" || code[0] === "5" ? "danger" : "info";
    print(`<b>${code} ${entry.title}</b>`, cls);
    print(entry[lang]);
    spacer();
  }

  function cmdFortune() {
    const list = tr().fortunes;
    print(list[Math.floor(Math.random() * list.length)], "accent");
    spacer();
  }

  function cmdMatrix() {
    const chars = "01アイウエオカキクケコNAVVO";
    for (let i = 0; i < 6; i++) {
      let line = "";
      for (let j = 0; j < 46; j++) line += chars[Math.floor(Math.random() * chars.length)];
      print(line, "ok");
    }
    spacer();
  }

  function cmdBuyu() {
    magicState = { step: 0 };
    print(tr().magicIntro, "accent");
    scrollBottom();
  }

  function advanceMagic(rawInput) {
    const val = (rawInput || "").trim().toLowerCase();
    if (val === "iptal" || val === "cancel" || val === "exit" || val === "q") {
      print(tr().magicCancelled, "danger");
      spacer();
      magicState = null;
      scrollBottom();
      return;
    }

    const steps = tr().magicSteps;
    if (magicState.step < steps.length) {
      print(steps[magicState.step]);
      magicState.step++;
      scrollBottom();
      return;
    }

    print(tr().magicThinking, "dim");
    scrollBottom();
    magicState = null;
    setTimeout(() => {
      print(tr().magicReveal, "accent");
      print(tr().magicSecret, "dim");
      spacer();
      scrollBottom();
    }, 900);
  }

  function cmdAi() {
    aiState = { active: true };
    print(tr().aiIntro, "accent");
    scrollBottom();
  }

  async function advanceAi(rawInput) {
    const val = (rawInput || "").trim();
    const lc = val.toLowerCase();
    if (lc === "çıkış" || lc === "cikis" || lc === "exit" || lc === "iptal" || lc === "cancel" || lc === "q") {
      print(tr().aiBye, "dim");
      spacer();
      aiState = null;
      scrollBottom();
      return;
    }
    if (!val) return;

    print(`<span class="ai-you">${tr().aiYouLabel}:</span> ${escapeHtml(val)}`);
    print(tr().aiThinking, "dim");
    scrollBottom();

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: val })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const isUpstreamGlitch = data.error === "upstream_error" || data.error === "upstream_unreachable";
        print(isUpstreamGlitch ? tr().aiError : tr().aiNotConfigured, "danger");
      } else {
        const data = await res.json();
        print(`<span class="ai-bot">${tr().aiBotLabel}:</span> ${escapeHtml(data.reply || "")}`);
      }
    } catch (err) {
      print(tr().aiNotConfigured, "danger");
    }
    spacer();
    scrollBottom();
  }

  function cmdMail(args) {
    const raw = args.join(" ");
    const parts = raw.match(/"([^"]*)"/g);
    if (!parts || parts.length < 3) {
      print(tr().mailUsage, "danger");
      spacer();
      return;
    }
    const [name, email, message] = parts.map((p) => p.replace(/"/g, ""));
    const subject = encodeURIComponent(`${lang === "tr" ? "Web Sitesi Talebi" : "Website Inquiry"} — ${name}`);
    const body = encodeURIComponent(`${name} <${email}>\n\n${message}`);
    print(tr().mailSent, "ok");
    spacer();
    window.location.href = `mailto:info@navvo.co?subject=${subject}&body=${body}`;
  }

  function cmdWhoami() {
    printLines(tr().whoami);
    spacer();
  }

  function cmdDate() {
    print(`${tr().dateLabel} ${new Date().toLocaleString(lang === "tr" ? "tr-TR" : "en-US")}`);
    spacer();
  }

  function cmdSudo() {
    print(tr().sudo, "danger");
    spacer();
  }

  function cmdExit() {
    print(tr().exit, "info");
    spacer();
  }

  function cmdLs(args) {
    if (args[0] === "services" && typeof NAVVO_DATA !== "undefined") {
      print(NAVVO_DATA.map((g) => g.slug).join("   "));
    } else {
      print(tr().lsRoot);
    }
    spacer();
  }

  function cmdCat(args) {
    if (args[0] === "about.md") return cmdAbout();
    if (args[0] === "contact.txt") return cmdContact();
    print(tr().catUsage, "danger");
    spacer();
  }

  function applyTheme(name) {
    const th = THEMES[name];
    if (!th) return false;
    document.documentElement.style.setProperty("--accent", th.accent);
    document.documentElement.style.setProperty("--accent-dim", th.accentDim);
    return true;
  }

  function cmdTheme(args) {
    if (!args.length) {
      print(tr().themeUsage, "danger");
      spacer();
      return;
    }
    const name = args[0].toLowerCase();
    if (applyTheme(name)) {
      print(tr().themeSet(name), "ok");
    } else {
      print(tr().themeUnknown(name), "danger");
    }
    spacer();
  }

  function cmdLang(args) {
    const name = (args[0] || "").toLowerCase();
    if (name !== "tr" && name !== "en") {
      print(tr().langUsage, "danger");
      spacer();
      return;
    }
    lang = name;
    document.documentElement.lang = lang;
    print(tr().langSet(lang), "ok");
    spacer();
  }

  function cmdClear() {
    outputEl.innerHTML = "";
  }

  const ALIASES = {
    cls: "clear",
    dir: "ls",
    map: "tree",
    clients: "references",
    ortaklar: "partners",
    "is-ortaklari": "partners",
    surec: "process",
    "isleyis-modeli": "process",
    neden: "why",
    farkliliklar: "why",
    sihirbaz: "buyu",
    magic: "buyu",
    navvoai: "ai",
    sohbet: "ai",
    chat: "ai",
    whatismyip: "myip",
    ip: "myip",
    hiz: "speedtest",
    speed: "speedtest",
    nslookup: "dns",
    dnschecker: "dns",
    status: "http",
    infra: "__svc_1",
    cloud: "__svc_2",
    security: "__svc_3",
    backup: "__svc_4",
    consulting: "__svc_5"
  };

  function handleCommand(raw) {
    const trimmed = raw.trim();
    echoCommand(trimmed);
    if (!trimmed) {
      spacer();
      return;
    }
    history.push(trimmed);
    histIndex = history.length;

    const parts = trimmed.match(/"[^"]*"|\S+/g) || [];
    let cmd = parts[0].toLowerCase();
    let args = parts.slice(1);

    if (ALIASES[cmd] && ALIASES[cmd].startsWith("__svc_")) {
      args = [ALIASES[cmd].split("_").pop()];
      cmd = "services";
    } else if (ALIASES[cmd]) {
      cmd = ALIASES[cmd];
    }

    switch (cmd) {
      case "help": cmdHelp(); break;
      case "about": cmdAbout(); break;
      case "services": cmdServices(args); break;
      case "resources": cmdResources(); break;
      case "tree": cmdTree(); break;
      case "references": cmdReferences(); break;
      case "partners": cmdPartners(); break;
      case "process": cmdProcess(); break;
      case "why": cmdWhy(); break;
      case "contact": cmdContact(); break;
      case "mail": cmdMail(args); break;
      case "myip": cmdMyIp(); break;
      case "speedtest": cmdSpeedTest(); break;
      case "dns": cmdDns(args); break;
      case "http": cmdHttp(args); break;
      case "fortune": cmdFortune(); break;
      case "matrix": cmdMatrix(); break;
      case "buyu": cmdBuyu(); break;
      case "ai": cmdAi(); break;
      case "whoami": cmdWhoami(); break;
      case "date": cmdDate(); break;
      case "sudo": cmdSudo(); break;
      case "exit": case "quit": cmdExit(); break;
      case "ls": cmdLs(args); break;
      case "cat": cmdCat(args); break;
      case "theme": cmdTheme(args); break;
      case "lang": cmdLang(args); break;
      case "clear": cmdClear(); break;
      default:
        print(tr().unknown(parts[0]), "danger");
        spacer();
    }
    scrollBottom();
  }

  /* ---------- Boot sequence ---------- */

  function bootLine(text, cls, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        print(text, cls);
        scrollBottom();
        resolve();
      }, delay);
    });
  }

  async function boot() {
    const t = tr();
    await bootLine(t.bootTitle, "", 120);
    await bootLine(t.bootCopyright, "dim", 90);
    spacer();
    await bootLine(t.bootTag, "accent", 160);
    spacer();
    await bootLine(t.bootHelp, "dim", 160);
    spacer();

    runBootView();

    scrollBottom();
    revealInput();
  }

  function runBootView() {
    const BOOT_DISPATCH = { help: cmdHelp, resources: cmdResources, tree: cmdTree, about: cmdAbout, services: () => cmdServices([]) };
    const bootCmd = document.body.dataset.boot || "help";
    (BOOT_DISPATCH[bootCmd] || cmdHelp)();
  }

  function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  function focusInputIfNotTouch() {
    if (!isTouchDevice()) inputEl.focus();
  }

  function revealInput() {
    document.querySelector(".input-row").style.visibility = "visible";
    inputEl.disabled = false;
    focusInputIfNotTouch();
  }

  /* ---------- Wiring ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".input-row").style.visibility = "hidden";
    inputEl.disabled = true;

    boot();

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = inputEl.value;
        inputEl.value = "";
        if (magicState) {
          advanceMagic(val);
        } else if (aiState) {
          advanceAi(val);
        } else {
          handleCommand(val);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (histIndex > 0) { histIndex--; inputEl.value = history[histIndex] || ""; }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (histIndex < history.length - 1) { histIndex++; inputEl.value = history[histIndex] || ""; }
        else { histIndex = history.length; inputEl.value = ""; }
      } else if (e.key === "Tab") {
        e.preventDefault();
        const partial = inputEl.value.toLowerCase();
        const all = ["help", "about", "services", "process", "why", "partners", "resources", "tree", "references", "contact", "mail", "myip", "speedtest", "nslookup", "http", "ai", "whoami", "date", "sudo", "ls", "cat", "theme", "lang", "clear", "exit"];
        const match = all.find((c) => c.startsWith(partial));
        if (partial && match) inputEl.value = match + " ";
      }
    });

    bodyEl.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-cmd]");
      if (trigger) {
        magicState = null;
        aiState = null;
        handleCommand(trigger.dataset.cmd);
      }
      focusInputIfNotTouch();
    });

    const menuToggle = document.getElementById("menu-toggle");
    const quickCmds = document.getElementById("quick-cmds");
    const qcBackdrop = document.getElementById("qc-backdrop");

    function openMenu() {
      if (!menuToggle || !quickCmds) return;
      menuToggle.classList.add("open");
      menuToggle.textContent = "✕";
      quickCmds.classList.add("open");
      if (qcBackdrop) qcBackdrop.classList.add("open");
    }
    function closeMenu() {
      if (!menuToggle || !quickCmds) return;
      menuToggle.classList.remove("open");
      menuToggle.textContent = "☰";
      quickCmds.classList.remove("open");
      if (qcBackdrop) qcBackdrop.classList.remove("open");
    }

    if (menuToggle && quickCmds) {
      menuToggle.addEventListener("click", () => {
        if (quickCmds.classList.contains("open")) closeMenu();
        else openMenu();
      });
    }
    if (qcBackdrop) qcBackdrop.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    document.querySelectorAll(".quick-cmds button").forEach((btn) => {
      btn.addEventListener("click", () => {
        magicState = null;
        aiState = null;
        cmdClear();
        handleCommand(btn.dataset.cmd);
        focusInputIfNotTouch();
        closeMenu();
      });
    });

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.textContent = lang === "tr" ? "EN" : "TR";
      langToggle.addEventListener("click", () => {
        const target = lang === "tr" ? "en" : "tr";
        cmdClear();
        handleCommand("lang " + target);
        runBootView();
        langToggle.textContent = lang === "tr" ? "EN" : "TR";
        scrollBottom();
      });
    }

    document.querySelector(".tl-dots .close").addEventListener("click", () => {
      handleCommand("exit");
    });
  });
})();
