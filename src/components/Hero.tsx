import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary">Platform Teknologi & Pembelajaran Digital</span>
          </div>
          <h1 className="mb-6">
            Kuasai Teknologi Masa Depan Bersama 3ITC DigitalXperience
          </h1>
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan ribuan profesional IT yang telah meningkatkan skill mereka 
            melalui kursus teknologi terkini, insight mendalam, berita industri, dan akses ke peralatan tech terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Mulai Belajar
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Jelajahi Kursus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
