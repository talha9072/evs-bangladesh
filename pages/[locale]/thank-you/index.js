import Head from "next/head";
import LaunchThanks from "@/components/launch/LaunchThanks";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export default function ThankYouRoute({ locale }) {
  return (
    <>
      <Head>
        <title>ধন্যবাদ — ইভিএস বাংলাদেশ</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="ধন্যবাদ — আপনি তালিকায় আছেন। ইভিএস ঢাকা কেন্দ্র খোলার দিন একবার ইমেইল করব।" />
        <link rel="canonical" href="https://evsbgd.com/bn/thank-you" />
      </Head>
      <LaunchThanks locale={locale} />
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
  return { props: { locale: params.locale } };
}
