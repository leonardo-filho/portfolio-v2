import type { Locale } from "@/lib/i18n";
import Hero from "./Hero";
import Services from "./Services";
import RecentUpdates from "./RecentUpdates";
import Projects from "./Projects";
import Experience from "./Experience";
import Credentials from "./Credentials";
import About from "./About";
import Contact from "./Contact";

export default function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <main id="main-content">
      <Hero locale={locale} />
      <Services locale={locale} />
      <RecentUpdates locale={locale} />
      <Projects locale={locale} />
      <Experience locale={locale} />
      <Credentials locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
