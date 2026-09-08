/* Navvo Technology — content data source
   Single source of truth for service categories, rendered dynamically
   into both index.html (service accordion) and kaynaklar.html (resource grid). */

const NAVVO_ICONS = {
  infra: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="1.4"/><rect x="3" y="14" width="18" height="6" rx="1.4"/><circle cx="7" cy="7" r=".9" fill="currentColor" stroke="none"/><circle cx="7" cy="17" r=".9" fill="currentColor" stroke="none"/><path d="M11 7h7M11 17h7"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h10.5a3.5 3.5 0 0 0 .4-6.98A5.5 5.5 0 0 0 7.3 9.1 4 4 0 0 0 7 18Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 5 6v5.2c0 4.4 2.9 7.6 7 8.8 4.1-1.2 7-4.4 7-8.8V6Z"/><path d="M9.2 12.2l1.9 1.9 3.7-3.9"/></svg>',
  backup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 13.9-5.4M20 12a8 8 0 0 1-13.9 5.4"/><path d="M17.5 3v3.6H14M6.5 21v-3.6H10"/></svg>',
  consult: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V10M10 19V5M16 19v-7M20 19H4"/></svg>',
  dot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M9 12.3l2 2 4-4.3"/></svg>'
};

const NAVVO_DATA = [
  {
    slug: "akilli-altyapi",
    icon: NAVVO_ICONS.infra,
    color: "#22d3ee",
    emoji: "🖥️",
    name: { tr: "Akıllı Altyapı Sistemleri", en: "Intelligent Infrastructure Systems" },
    desc: {
      tr: "Kurumsal sunucu mimarileri, yüksek performanslı veri depolama çözümleri, kesintisiz ağ tasarımları ve BT altyapı denetimi hakkında güncel teknik analizler ve proaktif sistem yönetimi rehberleri.",
      en: "Up-to-date technical analyses and proactive system management guides covering enterprise server architectures, high-performance data storage solutions, resilient network designs, and IT infrastructure audits."
    },
    sub: [
      {
        name: { tr: "Sunucu ve Veri Depolama", en: "Servers & Data Storage" },
        desc: {
          tr: "İşletmenizin dijital verilerini güvenli, hızlı ve ölçeklenebilir bir şekilde barındırabileceğiniz kurumsal sunucu altyapıları, storage mimarileri ve veri depolama çözümleri hakkında uzman incelemeleri.",
          en: "Expert reviews of enterprise server infrastructures, storage architectures, and data storage solutions that host your business's digital data securely, quickly, and at scale."
        }
      },
      {
        name: { tr: "Ağ ve Sistem Yönetimi", en: "Network & Systems Management" },
        desc: {
          tr: "Güvenli, kesintisiz ve yüksek performanslı kurumsal ağ altyapıları, switch ve network konfigürasyonları ile iş süreçlerinizi optimize eden sistem yönetimi stratejileri.",
          en: "System management strategies that optimize your business processes through secure, uninterrupted, high-performance corporate network infrastructures, switch and network configurations."
        }
      },
      {
        name: { tr: "BT Altyapı Denetimi", en: "IT Infrastructure Audit" },
        desc: {
          tr: "Mevcut teknoloji altyapılarınızın performans, verimlilik ve siber güvenlik açıklarına karşı analiz edilmesi, sistem denetimi ve altyapı optimizasyonu yöntemleri.",
          en: "Methods for analyzing your existing technology infrastructure for performance, efficiency, and cybersecurity vulnerabilities, along with system auditing and infrastructure optimization."
        }
      }
    ]
  },
  {
    slug: "akilli-bulut",
    icon: NAVVO_ICONS.cloud,
    color: "#3b82f6",
    emoji: "☁️",
    name: { tr: "Akıllı Bulut Teknolojileri", en: "Intelligent Cloud Technologies" },
    desc: {
      tr: "Esnek bulut altyapı hizmetleri (IaaS), modern platform çözümleri (PaaS), hibrit bulut mimarileri ve KVKK uyumlu kurumsal bulut güvenliği hakkında güncel içerikler ve kılavuzlar.",
      en: "Up-to-date content and guides on flexible cloud infrastructure services (IaaS), modern platform solutions (PaaS), hybrid cloud architectures, and KVKK-compliant enterprise cloud security."
    },
    sub: [
      {
        name: { tr: "Bulut Altyapı Hizmetleri (IaaS)", en: "Cloud Infrastructure Services (IaaS)" },
        desc: {
          tr: "Kurumların esnek, ölçeklenebilir ve güvenli sanal kaynaklar üzerinde büyümesini sağlayan kurumsal bulut altyapı hizmetleri (IaaS) ve sunucu barındırma çözümleri.",
          en: "Enterprise cloud infrastructure services (IaaS) and server hosting solutions that let organizations grow on flexible, scalable, and secure virtual resources."
        }
      },
      {
        name: { tr: "Hibrit ve Çoklu Bulut", en: "Hybrid & Multi-Cloud" },
        desc: {
          tr: "Farklı bulut ortamlarını ve lokal sunucu altyapılarını tek bir merkezden entegre bir şekilde yönetmenizi sağlayan hibrit ve çoklu bulut mimarileri.",
          en: "Hybrid and multi-cloud architectures that let you manage different cloud environments and on-premise server infrastructures in an integrated way from a single center."
        }
      },
      {
        name: { tr: "Bulut Güvenliği", en: "Cloud Security" },
        desc: {
          tr: "Bulut altyapılarında veri güvenliğini sağlama, siber tehditleri önleme, KVKK ve uluslararası bulut standartlarına uyum süreçlerine yönelik rehberler.",
          en: "Guides on ensuring data security in cloud infrastructures, preventing cyber threats, and complying with KVKK and international cloud standards."
        }
      }
    ]
  },
  {
    slug: "siber-guvenlik",
    icon: NAVVO_ICONS.shield,
    color: "#f43f5e",
    emoji: "🛡️",
    name: { tr: "Gelişmiş Siber Güvenlik Çözümleri", en: "Advanced Cybersecurity Solutions" },
    desc: {
      tr: "Yapay zekâ destekli kurumsal siber savunma yöntemleri, zafiyet taramaları, veri şifreleme, kimlik yönetimi ile e-posta ve uç nokta (endpoint) siber güvenlik çözümleri.",
      en: "AI-powered enterprise cyber defense methods, vulnerability scanning, data encryption, identity management, and email and endpoint cybersecurity solutions."
    },
    sub: [
      {
        name: { tr: "Tehdit Tespiti ve Önleme", en: "Threat Detection & Prevention" },
        desc: {
          tr: "Siber tehditleri, zararlı yazılımları ve sıfırıncı gün (Zero-Day) açıklarını gerçek zamanlı olarak tespit edip siber riskleri minimize eden proaktif koruma teknolojileri.",
          en: "Proactive protection technologies that detect cyber threats, malware, and zero-day vulnerabilities in real time to minimize cyber risk."
        }
      },
      {
        name: { tr: "Güvenlik Testleri ve Analiz", en: "Security Testing & Analysis" },
        desc: {
          tr: "Kurumsal sistemlerin siber dayanıklılığını artırmaya yönelik sızma (penetrasyon) testleri, zafiyet taramaları ve güvenlik açığı analiz süreçleri.",
          en: "Penetration testing, vulnerability scanning, and security gap analysis processes aimed at increasing the cyber resilience of enterprise systems."
        }
      },
      {
        name: { tr: "Veri ve E-Posta Güvenliği", en: "Data & Email Security" },
        desc: {
          tr: "Kritik verilerin yetkisiz erişimlere karşı şifrelenmesi, spam, phishing (kimlik avı) ve e-posta tabanlı siber saldırılara karşı kapsamlı koruma yöntemleri.",
          en: "Encrypting critical data against unauthorized access, and comprehensive protection methods against spam, phishing, and email-based cyberattacks."
        }
      }
    ]
  },
  {
    slug: "yedekleme-surdurulebilirlik",
    icon: NAVVO_ICONS.backup,
    color: "#f59e0b",
    emoji: "🔄",
    name: { tr: "Yedekleme ve İş Sürekliliği", en: "Backup & Business Continuity" },
    desc: {
      tr: "Veri kayıplarına ve siber saldırılara karşı kurumsal yedekleme mimarileri, felaket kurtarma (Disaster Recovery) planları ve kaynak optimizasyonu sağlayan sanallaştırma teknolojileri.",
      en: "Enterprise backup architectures against data loss and cyberattacks, disaster recovery plans, and virtualization technologies that optimize resources."
    },
    sub: [
      {
        name: { tr: "Felaket Kurtarma (Disaster Recovery)", en: "Disaster Recovery" },
        desc: {
          tr: "Olası kriz, donanım arızası veya siber saldırı anında veri kaybetmeden, en kısa sürede sistemlerin ayağa kaldırılmasını sağlayan akıllı felaket kurtarma çözümleri.",
          en: "Intelligent disaster recovery solutions that bring systems back online in the shortest possible time without data loss during a crisis, hardware failure, or cyberattack."
        }
      },
      {
        name: { tr: "Sanallaştırma ve Konsolidasyon", en: "Virtualization & Consolidation" },
        desc: {
          tr: "Donanım maliyetlerini azaltan, donanım kaynak kullanımını maksimum verimlilikle optimize eden ve yönetimi kolaylaştıran modern sanallaştırma çözümleri.",
          en: "Modern virtualization solutions that reduce hardware costs, optimize hardware resource utilization with maximum efficiency, and simplify management."
        }
      }
    ]
  },
  {
    slug: "bt-danismanligi",
    icon: NAVVO_ICONS.consult,
    color: "#8b5cf6",
    emoji: "📊",
    name: { tr: "Stratejik BT Danışmanlığı", en: "Strategic IT Consulting" },
    desc: {
      tr: "Kurumların teknoloji yol haritalarını oluşturan dijital dönüşüm danışmanlığı, ISO 27001 ve KVKK uyum süreçleri ile 7/24 yönetilen BT hizmetleri (Managed Services).",
      en: "Digital transformation consulting that builds organizations' technology roadmaps, ISO 27001 and KVKK compliance processes, and 24/7 managed IT services."
    },
    sub: [
      {
        name: { tr: "Dijital Dönüşüm ve Optimizasyon", en: "Digital Transformation & Optimization" },
        desc: {
          tr: "İşletmelerin operasyonel verimliliğini artıran teknoloji yatırımları, süreç analizi ve modernizasyon odaklı BT altyapı optimizasyon danışmanlığı.",
          en: "IT infrastructure optimization consulting focused on technology investments, process analysis, and modernization that increases businesses' operational efficiency."
        }
      },
      {
        name: { tr: "Uyum ve Sertifikasyon (ISO/KVKK)", en: "Compliance & Certification (ISO/GDPR)" },
        desc: {
          tr: "Bilgi güvenliği yönetimi kapsamında ISO 27001 standardı, KVKK ve GDPR yasal mevzuat süreçlerine tam uyum ve kurumsal sertifikasyon danışmanlığı.",
          en: "Full compliance with ISO 27001 standards, KVKK, and GDPR legal regulations within information security management, plus corporate certification consulting."
        }
      },
      {
        name: { tr: "Yönetilen Hizmetler (Managed Services)", en: "Managed Services" },
        desc: {
          tr: "Sistemlerin iş sürekliliğini garanti altına alan 7/24 kesintisiz izleme (monitoring), teknik bakım, uzaktan ve yerinde proaktif destek yönetimi.",
          en: "24/7 uninterrupted monitoring, technical maintenance, and proactive remote and on-site support management that guarantees business continuity for your systems."
        }
      }
    ]
  }
];

const NAVVO_CLIENTS = [
  "Okçular Vakfı",
  "NNG Enerji",
  "Doğan",
  "MTA Endüstri Ürünleri",
  "Sultanbeyli Belediyesi",
  "Kocaeli KOBİ OSB",
  "ESİT",
  "Mariner Ships Equipment",
  "Özler Kalıp ve İskele",
  "GSD Bank",
  "Çayırova Belediyesi",
  "Canada World Logistics",
  "Marbas",
  "Bizsizeyeteriz",
  "Bedeo",
  "Yasa Elektrik",
  "Kazanç Plastik",
  "Atlas Portföy"
];

const NAVVO_PARTNERS = [
  "Palo Alto Networks",
  "Cortex",
  "Sophos",
  "WatchGuard",
  "Trellix",
  "Proofpoint",
  "FireEye",
  "Skyhigh Security",
  "Darktrace",
  "SecHard",
  "ECHO",
  "Wallix",
  "Acronis",
  "Cisco",
  "Aruba (HPE)",
  "H3C",
  "Alcatel-Lucent",
  "Dell",
  "Hewlett Packard Enterprise",
  "Useroam"
];

const NAVVO_PROCESS = [
  {
    title: { tr: "Analiz & Risk Tespiti", en: "Analysis & Risk Assessment" },
    desc: {
      tr: "İlk adımda mevcut altyapınızı, sunucu mimarilerinizi ve siber güvenlik seviyenizi kapsamlı bir denetime tabi tutuyor; performans darboğazlarını, riskleri ve işletmenizin gerçek ihtiyaçlarını belirliyoruz.",
      en: "We start with a comprehensive audit of your existing infrastructure, server architecture, and cybersecurity posture — identifying performance bottlenecks, risks, and your business's real needs."
    }
  },
  {
    title: { tr: "Mimari Tasarım & Planlama", en: "Architecture Design & Planning" },
    desc: {
      tr: "Elde ettiğimiz veriler doğrultusunda, işletmenize en uygun donanım, yazılım veya bulut topolojisini tasarlıyoruz. İş süreçlerinizde sıfır kesinti ve maksimum verimlilik hedefiyle, terzi usulü (tailored) bir entegrasyon planı hazırlıyoruz.",
      en: "Based on the data we gather, we design the hardware, software, or cloud topology best suited to your business — preparing a tailored integration plan aimed at zero downtime and maximum efficiency."
    }
  },
  {
    title: { tr: "Özelleştirilmiş Uygulama & Geçiş", en: "Customized Implementation & Migration" },
    desc: {
      tr: "Hazırlanan teknik yol haritasını, uzman mühendislik kadromuzla devreye alıyoruz. Veri kaybı veya operasyonel aksama riski yaratmadan, tüm sistem geçişlerini ve siber güvenlik sertifikasyonlarını yüksek hassasiyetle tamamlıyoruz.",
      en: "We roll out the technical roadmap with our expert engineering team, completing all system migrations and cybersecurity certifications with high precision — without risking data loss or operational disruption."
    }
  },
  {
    title: { tr: "7/24 Proaktif Destek & Optimizasyon", en: "24/7 Proactive Support & Optimization" },
    desc: {
      tr: "Kurulum sonrasında sistemlerinizi proaktif izleme (monitoring) altyapımızla kesintisiz takip ediyoruz. Olası tehdit ve arızaları henüz işinizi etkilemeden çözüyor, düzenli optimizasyonlarla altyapınızın her zaman zirve performansta kalmasını sağlıyoruz.",
      en: "After deployment, we continuously track your systems through our proactive monitoring infrastructure — resolving potential threats and failures before they affect your business, and keeping your infrastructure performing at its peak through regular optimization."
    }
  }
];

const NAVVO_WHY = [
  {
    title: { tr: "Terzi Usulü (Tailored) Mimari", en: "Tailored Architecture" },
    desc: {
      tr: "Her işletmenin dinamikleri benzersizdir. Sizi hazır ve kalıplaşmış paketlere zorlamak yerine, mevcut altyapınızı analiz ederek tamamen ihtiyaçlarınıza ve bütçenize özel esnek çözümler üretiyoruz.",
      en: "Every business is unique. Instead of forcing you into rigid, pre-packaged solutions, we analyze your existing infrastructure and build flexible solutions tailored entirely to your needs and budget."
    }
  },
  {
    title: { tr: "Proaktif İzleme & Erken Müdahale", en: "Proactive Monitoring & Early Intervention" },
    desc: {
      tr: "Sistemlerinizde bir kriz veya kesinti yaşanmasını beklemiyoruz. 7/24 kesintisiz izleme (monitoring) altyapımız sayesinde potansiyel riskleri ve performans darboğazlarını henüz işinizi etkilemeden tespit edip çözüyoruz.",
      en: "We don't wait for a crisis or outage. Our 24/7 monitoring infrastructure detects and resolves potential risks and performance bottlenecks before they affect your business."
    }
  },
  {
    title: { tr: "Regülasyon Standartlara Tam Uyum", en: "Full Regulatory Compliance" },
    desc: {
      tr: "Altyapınızı modernize ederken yasal sınırları unutmuyoruz. Attığımız her teknik adımda KVKK, GDPR ve ISO 27001 siber güvenlik standartlarına tam uyumluluğu temel prensip olarak kabul ediyoruz.",
      en: "We never lose sight of legal boundaries while modernizing your infrastructure. Full compliance with KVKK, GDPR, and ISO 27001 cybersecurity standards is a core principle in every technical step we take."
    }
  }
];
