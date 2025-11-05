import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CoursesSection } from "./components/CoursesSection";
import { InsightSection } from "./components/InsightSection";
import { NewsSection } from "./components/NewsSection";
import { ShoppingSection } from "./components/ShoppingSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <InsightSection />
        <NewsSection />
        <ShoppingSection />
      </main>
      <Footer />
    </div>
  );
}
