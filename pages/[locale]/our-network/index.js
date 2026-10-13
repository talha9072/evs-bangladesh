import SeoHead from "@/components/services/SeoHead";
import NetworkGrid from "@/components/launch/NetworkGrid";
import { getBranchContext } from "@/lib/branches";
import { networkJsonLd } from "@/lib/launch-seo";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export default function NetworkRoute({ locale, branch, cities }) {
  return (
    <>
      <SeoHead
        locale={locale}
        branch={branch}
        cities={cities}
        path="our-network"
        title="ইভিএস নেটওয়ার্ক | উপসাগরীয় অঞ্চলে ইভি সার্ভিস সেন্টার"
        description="ইভিএস সংযুক্ত আরব আমিরাত, সৌদি আরব, কাতার ও ওমানে ইলেকট্রিক গাড়ির বিশেষায়িত ওয়ার্কশপ চালায়; বাহরাইন, ইরাক ও বাংলাদেশ শীঘ্রই। প্রতিটি দেশ, প্রতিটি কেন্দ্র।"
        jsonLd={networkJsonLd(locale)}
      />
      <NetworkGrid locale={locale} />
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
  const { branch, cities } = await getBranchContext(params.locale);
  return { props: { locale: params.locale, branch, cities } };
}
