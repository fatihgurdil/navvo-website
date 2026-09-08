// Cloudflare Pages Function — POST /api/ai
//
// Proxies chat messages from the NavvoAI terminal command to Google Gemini,
// keeping the API key on the server. Never call the Gemini API directly from
// the browser — that would expose the key to anyone who views the page source.
//
// Setup:
//   1. Get a free API key at https://ai.google.dev (Google account, no card needed).
//   2. In the Cloudflare Pages project: Settings -> Environment variables
//      -> add GEMINI_API_KEY (mark it as "Secret") for Production (and Preview).
//   3. Redeploy. Local `npx serve` does NOT run this function — it only works
//      once deployed to Cloudflare Pages.

const MODEL = "gemini-2.0-flash";

const SYSTEM_PROMPT = `Sen NavvoAI'sın, Navvo Technology adlı kurumsal BT şirketinin web sitesinde çalışan bir yapay zeka asistanısın.
Navvo Technology; sunucu/ağ altyapısı, bulut teknolojileri, siber güvenlik, yedekleme/iş sürekliliği ve stratejik BT danışmanlığı alanlarında hizmet verir.
Ziyaretçilere genel teknik/BT sorularında (örn. "youtube açılmıyor", "internetim yavaş", "vpn bağlanmıyor" gibi) kısa, anlaşılır ve pratik yardım sun.
Satış, fiyat veya hesaba özel konularda kesin bilgi verme; bunun yerine kullanıcıyı 'contact' komutuyla veya info@navvo.co ile iletişime geçmeye yönlendir.
Kullanıcı hangi dilde yazarsa (Türkçe veya İngilizce) o dilde cevap ver. Cevapların kısa ve öz olsun (en fazla birkaç cümle).`;

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.GEMINI_API_KEY) {
    return json({ error: "not_configured" }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  const message = (body.message || "").toString().trim().slice(0, 1000);
  if (!message) {
    return json({ error: "empty_message" }, 400);
  }

  let upstream;
  try {
    upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { maxOutputTokens: 300, temperature: 0.6 }
        })
      }
    );
  } catch {
    return json({ error: "upstream_unreachable" }, 502);
  }

  if (!upstream.ok) {
    return json({ error: "upstream_error" }, 502);
  }

  const data = await upstream.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

  return json({ reply });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" }
  });
}
