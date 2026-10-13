import SeoHead from "@/components/services/SeoHead";
import LaunchContact from "@/components/launch/LaunchContact";
import { getBranchContext } from "@/lib/branches";
import { contactJsonLd } from "@/lib/launch-seo";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export default function ContactRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="contact"
        title="ইভিএস বাংলাদেশ — যোগাযোগ | ঢাকায় ইভি সার্ভিস খুলছে"
        description="ইভিএস ঢাকায় ইলেকট্রিক গাড়ির বিশেষায়িত সার্ভিস সেন্টার খুলছে। এখনো ফোন লাইন নেই — তথ্য রেখে যান, খোলার দিন ইমেইল করব।"
        jsonLd={contactJsonLd(locale)}
      />
      <LaunchContact locale={locale} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ params: { locale } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const locale = params.locale;
  const { branch, cities } = await getBranchContext(locale);
  return { props: { locale, branch, cities } };
}
