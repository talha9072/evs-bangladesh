import { localePath, isRtl } from "@/lib/locale";

/**
 * The franchise page.
 *
 * IT DOES NOT TAKE THE APPLICATION. evsworldwide.com already runs the whole
 * funnel — qualifying form, NDA, questionnaire, scoring and an admin pipeline —
 * and a second entry point on a country site would either duplicate that or,
 * worse, collect enquiries nobody is watching. So every call to action here
 * hands off to /franchise/apply on the group site.
 *
 * What this page is for is the half of the job the group site cannot do: make
 * the case for BAHRAIN specifically, and rank for someone searching from here.
 */

const APPLY = "https://evsworldwide.com/franchise/apply";
const OPPORTUNITY = "https://evsworldwide.com/franchise/opportunity";
const REPORT = "https://evsworldwide.com/market-intelligence/bangladesh";

const COPY = {
  en: {
    eyebrow: "Franchise",
    heading: "Run an EVS centre in Bangladesh.",
    intro:
      "EVS franchises specialist electric-vehicle workshops. Bangladesh is an open territory, and its timing is the unusual part: the parc is tiny today and the 2026-27 budget is about to multiply it, so a workshop that opens now is ready before the cars arrive rather than after.",
    whyHeading: "Why Bangladesh, specifically",
    why: [
      {
        title: "You arrive before the cars do",
        body: "The BRTA counted 669 registered electric vehicles in May 2026. That is the whole market today — and the 2026-27 budget cuts import tax on electric and plug-in hybrid cars while pushing it up on petrol and diesel. Every other EVS territory opened into demand that already existed; this one opens just ahead of it.",
      },
      {
        title: "Charging is the bottleneck, and that is the opportunity",
        body: "Public charging barely exists — approved stations in the low tens, a handful actually running, almost all in Dhaka. So charging happens at home, on domestic supplies never wired for a car, in a city of flats without dedicated parking. Assessment and installation is recurring work that sits naturally with the workshop and that nobody is doing properly.",
      },
      {
        title: "Water makes the aftercare recurring",
        body: "Dhaka floods every monsoon and stays humid for months afterwards. Corrosion on connectors, the low-voltage harness and the charge port produces intermittent faults a general garage cannot chase. That is annual, diagnostic-led work — the kind that builds a service book rather than a one-off job.",
      },
      {
        title: "Hybrids carry the business until the EVs arrive",
        body: "There are far more hybrids on the road here than electric cars, and each one needs both an engine schedule and a high-voltage schedule. General garages take the engine half and miss the battery; EV-only shops do the reverse. Covering both is what keeps the bays busy while the electric parc grows into them.",
      },
    ],
    getHeading: "What a partner gets",
    get: [
      "A defined territory, with the market intelligence report behind it",
      "Workshop specification — tooling, bays, high-voltage safety and quarantine",
      "Technician training and high-voltage certification",
      "Diagnostic platform access and the brand coverage that comes with it",
      "Brand, site and the marketing system this network runs on",
      "The operating playbook from workshops already running in four countries",
    ],
    ctaHeading: "Applications are handled by EVS Worldwide",
    ctaBody:
      "Territory applications go through the group site, which runs the qualifying, the NDA and the territory review. It takes a few minutes to start.",
    apply: "Apply for the Bangladesh territory",
    opportunity: "Read the franchise opportunity",
    report: "Bangladesh market report",
    note: "Capital and qualifying requirements are set out during the application.",
  },
  bn: {
    eyebrow: "ফ্র্যাঞ্চাইজ",
    heading: "বাংলাদেশে একটি ইভিএস কেন্দ্র চালান।",
    intro:
      "ইভিএস ইলেকট্রিক গাড়ির বিশেষায়িত ওয়ার্কশপের ফ্র্যাঞ্চাইজ দেয়। বাংলাদেশ একটি উন্মুক্ত অঞ্চল, আর অস্বাভাবিক দিকটা হলো সময়: আজ গাড়ির সংখ্যা খুবই কম, আর ২০২৬-২৭ অর্থবছরের বাজেট তা কয়েক গুণ করতে চলেছে। তাই এখন যে ওয়ার্কশপ খুলবে, সে গাড়ি আসার পরে নয় — আগেই প্রস্তুত থাকবে।",
    whyHeading: "কেন বাংলাদেশ, বিশেষ করে",
    why: [
      {
        title: "গাড়ি আসার আগেই আপনি পৌঁছে যাচ্ছেন",
        body: "বিআরটিএ-র হিসাবে ২০২৬ সালের মে পর্যন্ত নিবন্ধিত ইলেকট্রিক গাড়ি ৬৬৯টি। আজকের পুরো বাজার এটুকুই — আর ২০২৬-২৭ বাজেট ইলেকট্রিক ও প্লাগ-ইন হাইব্রিড গাড়ির আমদানি কর কমাচ্ছে, পেট্রোল-ডিজেলের বাড়াচ্ছে। ইভিএস-এর অন্য প্রতিটি অঞ্চল খুলেছে আগে থেকে থাকা চাহিদার ভেতরে; এটি খুলছে ঠিক তার আগে।",
      },
      {
        title: "চার্জিংই বাধা, আর সেটাই সুযোগ",
        body: "পাবলিক চার্জিং প্রায় নেই — অনুমোদিত স্টেশন বিশের ঘরে, সত্যিকারে চালু হাতে গোনা, আর প্রায় সবই ঢাকায়। তাই চার্জিং হয় বাড়িতেই, এমন ঘরোয়া সংযোগে যা কখনো গাড়ির জন্য বানানো হয়নি, আর এমন এক শহরে যেখানে ফ্ল্যাটে আলাদা পার্কিং নেই। সংযোগ যাচাই আর চার্জার বসানো নিয়মিত কাজ, যা ওয়ার্কশপের সঙ্গে স্বাভাবিকভাবেই যায় — আর যা কেউ ঠিকভাবে করছে না।",
      },
      {
        title: "পানি কাজটাকে নিয়মিত করে তোলে",
        body: "ঢাকা প্রতি বর্ষায় ডোবে, আর তারপর মাসের পর মাস আর্দ্র থাকে। কানেক্টর, নিম্ন-ভোল্টেজ তার আর চার্জ পোর্টের ক্ষয় এমন সব সমস্যা তৈরি করে যা সাধারণ গ্যারেজ ধরতে পারে না। এটা বছরে বছরে ফিরে আসা, ডায়াগনস্টিক-নির্ভর কাজ — যা একবারের কাজ নয়, সার্ভিস বই গড়ে তোলে।",
      },
      {
        title: "ইভি বাড়ার আগ পর্যন্ত ব্যবসা টানে হাইব্রিড",
        body: "এখানে রাস্তায় ইলেকট্রিক গাড়ির চেয়ে হাইব্রিড অনেক বেশি, আর প্রতিটিরই ইঞ্জিনের সূচি আর উচ্চ-ভোল্টেজের সূচি — দুটোই দরকার। সাধারণ গ্যারেজ ইঞ্জিনের দিকটা নেয়, ব্যাটারির দিকটা বাদ দেয়; শুধু ইভি-র দোকান করে ঠিক উল্টোটা। দুটোই সামলানোই ইভি বহর বড় হওয়া পর্যন্ত কাজ চালু রাখে।",
      },
    ],
    getHeading: "অংশীদার যা পান",
    get: [
      "একটি নির্দিষ্ট অঞ্চল, আর তার পেছনে বাজার বিশ্লেষণের প্রতিবেদন",
      "ওয়ার্কশপের বিবরণ — যন্ত্রপাতি, বে, উচ্চ-ভোল্টেজ নিরাপত্তা আর কোয়ারেন্টিন",
      "টেকনিশিয়ান প্রশিক্ষণ আর উচ্চ-ভোল্টেজ সনদ",
      "ডায়াগনস্টিক প্ল্যাটফর্মে প্রবেশাধিকার আর তার সঙ্গে আসা ব্র্যান্ড কভারেজ",
      "ব্র্যান্ড, সাইট আর এই নেটওয়ার্ক যে মার্কেটিং ব্যবস্থায় চলে",
      "চার দেশে চালু ওয়ার্কশপ থেকে আসা পরিচালনার নির্দেশিকা",
    ],
    ctaHeading: "আবেদন দেখে ইভিএস ওয়ার্ল্ডওয়াইড",
    ctaBody:
      "অঞ্চলের আবেদন গ্রুপ সাইটের মাধ্যমে যায়, সেখানেই যোগ্যতা যাচাই, গোপনীয়তার চুক্তি আর এলাকা পর্যালোচনা হয়। শুরু করতে কয়েক মিনিটই লাগে।",
    apply: "বাংলাদেশ অঞ্চলের জন্য আবেদন করুন",
    opportunity: "ফ্র্যাঞ্চাইজ সুযোগ সম্পর্কে পড়ুন",
    report: "বাংলাদেশ বাজার প্রতিবেদন",
    note: "মূলধন ও যোগ্যতার শর্ত আবেদনের সময় জানানো হয়।",
  },
};

export default function FranchisePitch({ locale = "en" }) {
  const t = COPY[String(locale).split("-")[0]] ?? COPY.en;

  return (
    <div dir={isRtl(locale) ? "rtl" : undefined}>
      <section className="evs-shell evs-section">
        <div className="max-w-3xl">
          <span className="evs-eyebrow mb-6 inline-block">{t.eyebrow}</span>
          <h1 className="text-display-2 uppercase">{t.heading}</h1>
          <p className="mt-6 text-lead text-content-secondary">{t.intro}</p>
        </div>

        <h2 className="mt-16 text-display-3">{t.whyHeading}</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {t.why.map((item) => (
            <div key={item.title} className="evs-card flex flex-col p-6">
              <h3 className="text-subheading text-content">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-content-secondary">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-display-3">{t.getHeading}</h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          {t.get.map((item) => (
            <li key={item} className="flex items-start gap-3 text-content-secondary">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="evs-card mt-16 p-8 md:p-10">
          <h2 className="text-display-3">{t.ctaHeading}</h2>
          <p className="mt-4 max-w-2xl text-lead text-content-secondary">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={APPLY} rel="noopener" className="evs-btn evs-btn-primary evs-btn-lg">
              {t.apply}
            </a>
            <a href={OPPORTUNITY} rel="noopener" className="evs-btn evs-btn-secondary evs-btn-lg">
              {t.opportunity}
            </a>
            <a href={REPORT} rel="noopener" className="evs-btn evs-btn-secondary evs-btn-lg">
              {t.report}
            </a>
          </div>
          <p className="mt-6 text-sm text-content-muted">{t.note}</p>
        </div>

        <p className="mt-10 text-sm text-content-muted">
          <a href={localePath(locale, "our-network")} className="text-brand-500 underline underline-offset-4">
            {locale.startsWith("ar") ? "شبكة إي في إس" : "Where EVS already operates"}
          </a>
        </p>
      </section>
    </div>
  );
}
