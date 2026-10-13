import network from "@/data/network.json";
import { localised } from "@/lib/branches";
import { isRtl } from "@/lib/locale";

/**
 * Every country EVS operates in, and the ones it is heading for.
 *
 * TWO JOBS. For a reader it answers "is this a real company?" — a question a
 * pre-launch site invites and cannot otherwise answer. For search it is the
 * only page on evsbgd.com that links out to evsuae.com, evsqtr.com,
 * evsoman.com, evsksa.com and evsworldwide.com, which is how a brand-new
 * domain tells Google it belongs to an established group rather than appearing
 * from nowhere.
 *
 * The list is data, in data/network.json, so a new country is one object — no
 * component edit, no layout change. `status` drives the badge: a country with
 * no site yet simply does not get a link.
 */

const COPY = {
  en: {
    eyebrow: "The EVS network",
    heading: "Where EVS operates.",
    intro:
      "EVS runs specialist electric-vehicle workshops across the Gulf, with Bahrain and Iraq opening soon. Bangladesh is next. Each country has its own site, its own workshops and its own team.",
    open: "Visit site",
    status: { open: "Open", coming_soon: "Opening soon", planned: "Planned" },
    groupHeading: "The group",
  },
  bn: {
    eyebrow: "ইভিএস নেটওয়ার্ক",
    heading: "ইভিএস কোথায় কাজ করে।",
    intro:
      "ইভিএস উপসাগরীয় অঞ্চলজুড়ে ইলেকট্রিক গাড়ির বিশেষায়িত ওয়ার্কশপ চালায়; বাহরাইন ও ইরাক শীঘ্রই খুলছে। এরপর বাংলাদেশ। প্রতিটি দেশের নিজস্ব সাইট, নিজস্ব ওয়ার্কশপ ও নিজস্ব টিম আছে।",
    open: "সাইট দেখুন",
    status: { open: "চালু", coming_soon: "শীঘ্রই", planned: "পরিকল্পনায়" },
    groupHeading: "গ্রুপ",
  },
};

const TONE = {
  open: "border-brand-500/40 bg-brand-500/10 text-brand-500",
  coming_soon: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  planned: "border-line bg-surface-elevated text-content-muted",
};

export default function NetworkGrid({ locale = "en" }) {
  const t = COPY[String(locale).split("-")[0]] ?? COPY.en;
  const rtl = isRtl(locale);
  const { countries, group } = network;

  return (
    <div dir={rtl ? "rtl" : undefined}>
      <section className="evs-shell evs-section">
        <div className="max-w-3xl">
          <span className="evs-eyebrow mb-6 inline-block">{t.eyebrow}</span>
          <h1 className="text-display-2 uppercase">{t.heading}</h1>
          <p className="mt-6 text-lead text-content-secondary">{t.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c) => {
            const name = localised(c.name, locale);
            const card = (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={`/img/flags/${c.code}.png`}
                    alt=""
                    width="28"
                    height="21"
                    loading="lazy"
                    className="rounded-[2px]"
                  />
                  <h2 className="text-subheading text-content">{name}</h2>
                </div>

                <span
                  className={`mt-4 inline-flex w-fit items-center rounded-sm border px-2.5 py-1 text-eyebrow font-semibold tracking-[0.14em] uppercase ${TONE[c.status]}`}
                >
                  {t.status[c.status]}
                </span>

                <p className="mt-4 text-sm text-content-muted">{localised(c.city, locale)}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-content-secondary">
                  {localised(c.blurb, locale)}
                </p>

                {c.url && (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                    {t.open}
                    <span aria-hidden="true" className="rtl:-scale-x-100">→</span>
                  </span>
                )}
              </>
            );

            const className =
              "evs-card flex flex-col p-6" + (c.url ? " evs-card-interactive" : "");

            /* A country with no site yet is a card, not a link — there is
               nowhere honest to send the reader. */
            return c.url ? (
              <a key={c.slug} href={c.url} className={className} rel="noopener">
                {card}
              </a>
            ) : (
              <div key={c.slug} className={className}>
                {card}
              </div>
            );
          })}
        </div>

        <div className="mt-14 border-t border-line-subtle pt-10">
          <h2 className="text-subheading text-content">{t.groupHeading}</h2>
          <a
            href={group.url}
            rel="noopener"
            className="evs-card evs-card-interactive mt-5 flex max-w-2xl flex-col p-6"
          >
            <span className="text-subheading text-content">{localised(group.name, locale)}</span>
            <span className="mt-3 text-sm leading-relaxed text-content-secondary">
              {localised(group.blurb, locale)}
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
              {t.open}
              <span aria-hidden="true" className="rtl:-scale-x-100">→</span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
