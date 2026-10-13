import SeoHead from "@/components/services/SeoHead";
import FranchisePitch from "@/components/launch/FranchisePitch";
import { getBranchContext } from "@/lib/branches";
import { franchiseJsonLd } from "@/lib/launch-seo";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export default function FranchiseRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="franchise"
        title="বাংলাদেশে ইভি ওয়ার্কশপ ফ্র্যাঞ্চাইজ | ইভিএস"
        description="বাংলাদেশে ইলেকট্রিক গাড়ির বিশেষায়িত ওয়ার্কশপ চালান। উন্মুক্ত অঞ্চল: করছাড়ের পর গাড়ির সংখ্যা বাড়তে চলেছে, পাবলিক চার্জিং প্রায় নেই, আর দেশে স্বাধীন উচ্চ-ভোল্টেজ সক্ষমতাও নেই।"
        jsonLd={franchiseJsonLd(locale)}
      />
      <FranchisePitch locale={locale} />
    </>
  );
}

export async function getStaticPaths() {
  return { paths: LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ params: { locale } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const { branch, cities } = await getBranchContext(params.locale);
  return { props: { locale: params.locale, branch, cities } };
}
